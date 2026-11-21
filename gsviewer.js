/* =========================================
   3D 檢視器（three.js；3DGS 用 Spark、一般模型用 GLB，第一次點開才載入）
   移植自 F:\Hawan\網站\Official website\main.js
   ========================================= */
const $ = s => document.querySelector(s);
const viewer = $('#gs-viewer');
const stage = $('#gs-stage');
const isMobile = matchMedia('(pointer: coarse)').matches;
const pad2 = n => String(n).padStart(2, '0');

let THREE, Spark, OrbitControls, enginePromise, modelPromise, GLTFLoader, MeshoptDecoder, RoomEnvironment, gltfLoader, lit = false;
let renderer, scene, camera, controls, mesh;
let list = [], title = '', curScene = 0, opener = null, loadToken = 0;
let idle = true, idleT = 0, idleTimer = 0, last = 0, fadeIn = 0, lastInput = 0, lastDraw = 0, dirty = true;

export function loadEngine() {
    enginePromise ||= Promise.all([
        import('three'),
        import('@sparkjsdev/spark'),
        import('three/addons/controls/OrbitControls.js'),
    ]).then(([a, b, c]) => { THREE = a; Spark = b; OrbitControls = c.OrbitControls; });
    return enginePromise;
}

function loadModelEngine() {
    modelPromise ||= loadEngine().then(() => Promise.all([
        import('three/addons/loaders/GLTFLoader.js'),
        import('three/addons/libs/meshopt_decoder.module.js'),
        import('three/addons/environments/RoomEnvironment.js'),
    ])).then(([a, b, c]) => {
        GLTFLoader = a.GLTFLoader; MeshoptDecoder = b.MeshoptDecoder; RoomEnvironment = c.RoomEnvironment;
        gltfLoader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
    });
    return modelPromise;
}

// 一般模型需要打光（3DGS 不受燈光影響）
function lightUp() {
    if (lit) return;
    lit = true;
    scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
    scene.add(new THREE.HemisphereLight(0xffffff, 0x3a3a40, 1.1));
    const sun = new THREE.DirectionalLight(0xffffff, 2.2);
    sun.position.set(6, 12, 8);
    scene.add(sun);
}

function disposeMesh() {
    if (!mesh) return;
    scene.remove(mesh);
    if (mesh.isModel) mesh.traverse(o => {
        o.geometry?.dispose();
        [].concat(o.material || []).forEach(m => { Object.values(m).forEach(v => v?.isTexture && v.dispose()); m.dispose(); });
    });
    else mesh.dispose();
    mesh = null;
}

async function openModel(w, token) {
    await loadModelEngine();
    if (token !== loadToken) return;
    lightUp();
    const g = await new Promise((res, rej) => gltfLoader.load(w.model, res,
        e => { if (token === loadToken && e.total) setProgress(e.loaded / e.total); }, rej));
    if (token !== loadToken) return;
    const obj = g.scene;
    obj.isModel = true;
    const box = new THREE.Box3().setFromObject(obj);
    const c = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const r = size.length() / 2;
    const narrow = Math.max(1, 1.5 / camera.aspect);
    camera.fov = 40;
    camera.near = r / 100; camera.far = r * 100;
    camera.position.copy(c).add(new THREE.Vector3(0.55, 0.42, 0.72).normalize().multiplyScalar(r / Math.sin(THREE.MathUtils.degToRad(20)) * 1.05 * Math.pow(narrow, 0.75)));
    camera.lookAt(c);
    camera.updateProjectionMatrix();
    controls.target.copy(c);
    controls.minDistance = r * 0.8;
    controls.maxDistance = r * 5;
    controls.maxPolarAngle = Math.PI * 0.49;
    controls.minAzimuthAngle = -Infinity;
    controls.maxAzimuthAngle = Infinity;
    controls.update();
    scene.add(obj);
    mesh = obj;
    dirty = true;
    renderer.setAnimationLoop(loop);
    setProgress(1);
    idle = true; idleT = 0; fadeIn = 1; lastInput = performance.now();
    viewer.classList.remove('is-loading');
    viewer.classList.add('is-ready');
}

async function boot() {
    if (renderer) return;
    await loadEngine();
    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isMobile ? 1.25 : 1.5));
    renderer.setClearColor(0x000000, 0);
    stage.appendChild(renderer.domElement);
    scene = new THREE.Scene();
    scene.add(new Spark.SparkRenderer({
        renderer,
        maxStdDev: Math.sqrt(isMobile ? 5 : 6),
        minAlpha: 3 / 255,
    }));
    camera = new THREE.PerspectiveCamera(55, 1, 0.02, 3000);
    controls = new OrbitControls(camera, renderer.domElement);
    Object.assign(controls, { enableDamping: true, dampingFactor: 0.08, enablePan: false, rotateSpeed: 0.6, zoomSpeed: 0.7 });
    controls.addEventListener('start', () => { idle = false; clearTimeout(idleTimer); });
    controls.addEventListener('end', () => {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => { idle = true; idleT = 0; }, 6000);
    });
    controls.addEventListener('change', () => { dirty = true; lastInput = performance.now(); });
    addEventListener('resize', resize, { passive: true });
}

function resize() {
    if (!renderer || viewer.hidden) return;
    const r = stage.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height;
    camera.updateProjectionMatrix();
    dirty = true;
}

// 相機取景（與官網 gs_work/cover.html 同一套公式）
function frameCamera(w, aspect) {
    const target = new THREE.Vector3(...w.target);
    const eye = new THREE.Vector3(...w.eye);
    const narrow = Math.max(1, 1.5 / aspect);
    camera.fov = 55;
    camera.aspect = aspect;
    camera.position.copy(target).add(eye.sub(target).multiplyScalar(Math.pow(narrow, w.kind === 'env' ? 0.35 : 0.75)));
    camera.lookAt(target);
    camera.updateProjectionMatrix();
    return target;
}

const setProgress = p => $('#gs-progress').style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3));

export async function openGS(scenes, si, projectTitle, from) {
    list = scenes;
    title = projectTitle;
    si = (si + list.length) % list.length;
    const w = list[si];
    curScene = si;
    if (from) opener = from;
    const token = ++loadToken;

    viewer.hidden = false;
    document.documentElement.classList.add('gs-open');
    viewer.classList.remove('is-ready');
    viewer.classList.add('is-loading');
    $('#gs-cover').src = w.cover;
    $('#gs-case').textContent = title;
    $('#gs-title').textContent = (document.documentElement.lang === 'en' && w.nameEn) || w.name;
    $('#gs-count').textContent = `${pad2(si + 1)} / ${pad2(list.length)}`;
    setProgress(0);

    await boot();
    if (token !== loadToken) return;
    resize();
    disposeMesh();
    if (w.model) { try { await openModel(w, token); } catch (err) { console.error(err); } return; }

    const target = frameCamera(w, camera.aspect);
    controls.target.copy(target);
    const off = camera.position.clone().sub(target);
    controls.minDistance = w.minDist;
    controls.maxDistance = Math.max(w.maxDist, off.length() * 1.05);
    controls.maxPolarAngle = Math.PI * (w.maxPolar ?? (w.kind === 'env' ? 0.5 : 0.62));
    const az = Math.atan2(off.x, off.z);
    controls.minAzimuthAngle = w.azRange ? az - w.azRange : -Infinity;
    controls.maxAzimuthAngle = w.azRange ? az + w.azRange : Infinity;
    controls.update();

    const m = new Spark.SplatMesh({
        url: w.src,
        onProgress: e => { if (token === loadToken && e.total) setProgress(e.loaded / e.total); },
    });
    m.opacity = 0;
    scene.add(m);
    mesh = m;
    dirty = true;
    renderer.setAnimationLoop(loop);

    try { await m.initialized; } catch (err) { console.error(err); return; }
    if (token !== loadToken) return;
    setProgress(1);
    idle = true; idleT = 0; fadeIn = 0; lastInput = performance.now();
    viewer.classList.remove('is-loading');
    viewer.classList.add('is-ready');
    const nx = list[(si + 1) % list.length];
    fetch(nx.src || nx.model, { priority: 'low' }).catch(() => {});
}

const AUTO_SPIN_MS = 25000;
function loop(t) {
    const dt = Math.min(0.05, (t - (last || t)) / 1000);
    last = t;
    const w = list[curScene];
    let moving = false;
    if (mesh && viewer.classList.contains('is-ready')) {
        if (fadeIn < 1 && !mesh.isModel) { fadeIn = Math.min(1, fadeIn + dt * 1.6); mesh.opacity = fadeIn * fadeIn * (3 - 2 * fadeIn); moving = true; }
        if (idle && idleT * 1000 < AUTO_SPIN_MS) {
            idleT += dt;
            const d = w.kind === 'env' ? 0.066 * Math.cos(idleT * 0.22) * dt : 0.22 * dt;
            const off = camera.position.clone().sub(controls.target);
            off.applyAxisAngle(new THREE.Vector3(0, 1, 0), d);
            camera.position.copy(controls.target).add(off);
            moving = true;
        }
    }
    if (controls.update()) moving = true;
    if (moving || dirty || t - lastInput < 600 || t - lastDraw > 200) {
        renderer.render(scene, camera);
        lastDraw = t; dirty = false;
    }
}

const step = d => openGS(list, curScene + d, title);

function closeGS() {
    loadToken++;
    viewer.hidden = true;
    document.documentElement.classList.remove('gs-open');
    if (renderer) renderer.setAnimationLoop(null);
    disposeMesh();
    opener?.focus({ preventScroll: true });
}

$('#gs-close').addEventListener('click', closeGS);
$('#gs-prev').addEventListener('click', () => step(-1));
$('#gs-next').addEventListener('click', () => step(1));
addEventListener('keydown', e => {
    if (viewer.hidden) return;
    if (e.key === 'Escape') closeGS();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
});
document.addEventListener('visibilitychange', () => {
    if (!renderer || viewer.hidden) return;
    renderer.setAnimationLoop(document.hidden ? null : loop);
});
