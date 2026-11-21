/* =========================================
   1. 資料設定區 (在這裡新增/修改內容)
   ========================================= */
const projectData = [
    {
        cat: "遊戲",
        title: "殭屍燒烤屋 Zombie BBQ House",
        desc: "第一人稱合作經營模擬遊戲，1～8 人線上合作，Steam 遊戲。",
        tags: ["PC", "Steam", "多人連線"],
        image: "assets/works/zombie/cover.jpg",
        icon: "assets/works/zombie/icon.png",
        link: { label: "Steam 商店頁", labelEn: "Steam store page", url: "https://store.steampowered.com/app/5365860" },
        details: "殭屍災難過後，城市發現殭屍其實很好吃，於是有人開了一間專賣殭屍的燒烤店。玩家要在門口觀察體型、走路和眼神，揪出偽裝的殭屍，再拆解、燒烤、端給客人；看錯人就會被警察通緝，被抓後可以繳保釋金或等隊友劫獄。晚上 10 點後，對面的殭屍賭場開門營業。\n支援單人與最多 8 人線上合作，10 種語言。",
    titleEn: "Zombie BBQ House",
    descEn: "First-person co-op restaurant sim for 1–8 players online, released on Steam.",
    detailsEn: "After the zombie apocalypse, the city discovered that zombies actually taste great — so someone opened a BBQ joint that serves nothing but zombie. Players watch customers at the door, checking body shape, gait and eyes to spot zombies in disguise, then butcher, grill and serve them. Pick the wrong person and the police put you on the wanted list; once caught, you can pay bail or wait for teammates to break you out. After 10 PM, the zombie casino across the street opens for business.\nSingle-player and online co-op for up to 8 players, in 10 languages.",
        gallery: [
            "assets/works/zombie/cover.jpg",
            "assets/works/zombie/trailer.mp4",
            "assets/works/zombie/ss1.jpg",
            "assets/works/zombie/ss2.jpg",
            "assets/works/zombie/ss3.jpg",
            "assets/works/zombie/ss4.jpg",
            "assets/works/zombie/ss5.jpg",
            "assets/works/zombie/ss6.jpg",
            "assets/works/zombie/ss7.jpg",
            "assets/works/zombie/ss8.jpg"
        ]
    },
{
        cat: "遊戲",
        title: "柑仔店後面 Stock Den",
        desc: "1994 年台北地下號子的股票 × 多人 × 互整遊戲，最多 9 人一桌，Steam 遊戲。",
        tags: ["PC", "Steam", "多人連線"],
        image: "assets/works/stockden/cover.jpg",
        icon: "assets/works/stockden/icon.png",
        link: { label: "Steam 商店頁", labelEn: "Steam store page", url: "https://store.steampowered.com/app/5459660" },
        details: "1994 年台北，柑仔店後面藏著一間地下號子。打電話下單、盯電視牆，跟大家搶同一檔股票；看別人賺錢不爽，就剪他電話線、放假消息、買通名嘴。\n股價由玩家的買賣單逐筆撮合，大單真的推得動價格。另有 11 章劇情模式、三種對局模式、秘密任務與每日挑戰排行榜。單人可以跟電腦常客玩，多人最多 9 人一桌（真人最多 8 位），支援 16 種語言。",
    titleEn: "Stock Den",
    descEn: "Stocks × multiplayer × sabotage in an underground brokerage, Taipei 1994. Up to 9 per table, released on Steam.",
    detailsEn: "Taipei, 1994. Behind a corner grocery store hides an underground brokerage. Phone in your orders, watch the TV wall and fight everyone else for the same stock; if someone else is making money, cut their phone line, spread fake news or bribe a TV pundit.\nPrices are matched order by order from players' buys and sells, so big orders really move the market. Also includes an 11-chapter story mode, three match modes, secret missions and daily challenge leaderboards. Play solo against AI regulars, or up to 9 per table online (up to 8 humans), in 16 languages.",
        gallery: [
            "assets/works/stockden/cover.jpg",
            "assets/works/stockden/trailer.mp4",
            "assets/works/stockden/ss1.jpg",
            "assets/works/stockden/ss2.jpg",
            "assets/works/stockden/ss3.jpg",
            "assets/works/stockden/ss4.jpg",
            "assets/works/stockden/ss5.jpg",
            "assets/works/stockden/ss6.jpg",
            "assets/works/stockden/ss7.jpg",
            "assets/works/stockden/ss8.jpg",
            "assets/works/stockden/ss9.jpg",
            "assets/works/stockden/ss10.jpg",
            "assets/works/stockden/ss11.jpg",
            "assets/works/stockden/ss12.jpg"
        ]
    },
{
        cat: "遊戲",
        title: "偷偷收集中 Sneaky Collector",
        desc: "住在 Windows 桌面上的放置收集遊戲，上班打字就會自動打怪。",
        tags: ["PC", "Steam", "多人連線"],
        image: "assets/works/sneaky/cover.jpg",
        icon: "assets/works/sneaky/icon.png",
        details: "角色住在桌面最下方的透明層，不擋工作；平常打字，角色就會跟著打怪。可以轉蛋收集 101 種職業的像素角色、換裝、填圖鑑，也能和 Steam 好友合作、語音聊天。\n技術上用 Win32 做透明、置頂、可點穿的桌面視窗，以全域 Raw Input 監聽鍵盤；像素角色由自製的程式生成套件產出，並串接 Steamworks 成就與 Steam P2P 連線。",
    titleEn: "Sneaky Collector",
    descEn: "An idle collecting game that lives on your Windows desktop — just type at work and your characters fight monsters.",
    detailsEn: "Characters live in a transparent layer along the bottom of the desktop, never in the way of your work; as you type, they fight monsters for you. Roll gacha to collect pixel characters across 101 classes, dress them up and fill the collection book, or team up and voice chat with Steam friends.\nUnder the hood: a transparent, always-on-top, click-through desktop window built with Win32, global keyboard input via Raw Input, pixel characters produced by an in-house procedural generation toolkit, plus Steamworks achievements and Steam P2P networking.",
        gallery: [
            "assets/works/sneaky/cover.jpg",
            "assets/works/sneaky/ss1.jpg",
            "assets/works/sneaky/ss2.jpg",
            "assets/works/sneaky/ss3.jpg",
            "assets/works/sneaky/ss4.jpg",
            "assets/works/sneaky/ss5.jpg",
            "assets/works/sneaky/ss6.jpg",
            "assets/works/sneaky/ss7.jpg",
            "assets/works/sneaky/ss8.jpg",
            "assets/works/sneaky/ss9.jpg",
            "assets/works/sneaky/ss10.jpg",
            "assets/works/sneaky/ss11.jpg",
            "assets/works/sneaky/ss12.jpg",
            "assets/works/sneaky/ss13.jpg",
            "assets/works/sneaky/ss14.jpg",
            "assets/works/sneaky/ss15.jpg",
            "assets/works/sneaky/ss16.jpg",
            "assets/works/sneaky/ss17.jpg",
            "assets/works/sneaky/ss18.jpg",
            "assets/works/sneaky/ss19.jpg",
            "assets/works/sneaky/ss20.jpg",
            "assets/works/sneaky/ss21.jpg",
            "assets/works/sneaky/ss22.jpg",
            "assets/works/sneaky/ss23.jpg",
            "assets/works/sneaky/ss24.jpg",
            "assets/works/sneaky/ss25.jpg"
        ]
    },
{
    cat: "遊戲",
    title: "Jailbreak Simulator 監獄模擬器",
    desc: "於 Steam 發行的策略逃獄遊戲。",
    tags: ["PC", "Steam"],
    image: "assets/works/jailbreak/6ab2f4f7.webp",
    details: "策略逃獄遊戲，已於 Steam 發行。玩家扮演囚犯，透過結交獄友、躲避警衛巡邏與破解機關，選擇不同路線逃離監獄。\n\n專案資訊\n・時期：大學\n\n開發內容\n・NPC 行為 AI：獄友與警衛以 NavMesh 導航網格實作巡邏與追捕\n・單人關卡與多路線逃脫設計\n・Steam 發行流程\nhttps://www.youtube.com/watch?v=3pp5XmFDjlg",
    titleEn: "Jailbreak Simulator",
    descEn: "A strategy prison-break game released on Steam.",
    detailsEn: "A strategy prison-break game released on Steam. Players are inmates who make friends with other prisoners, dodge guard patrols and crack mechanisms to escape by different routes.\n\nProject\n・When: university\n\nDevelopment\n・NPC behavior AI: inmates and guards patrol and chase using NavMesh navigation\n・Single-player levels with multiple escape routes\n・Steam release process\nhttps://www.youtube.com/watch?v=3pp5XmFDjlg",
    gallery: [
        "assets/works/jailbreak/6ab2f4f7.webp",
        "assets/works/jailbreak/04fac5ce.webp"
    ]
},
{
    cat: "遊戲",
    title: "KRANIA ISLAND 骷髏島",
    desc: "VR 冒險射擊遊戲，大學專題作品。",
    tags: ["PC", "VR"],
    image: "assets/works/krania/4768f1fe.webp",
    details: "VR 冒險射擊遊戲。玩家扮演勇者深入被殭屍佔領的村莊，運用十餘種武器突破機關陷阱，最終擊敗 Boss。\n\n專案資訊\n・時期：大學專題\n\n遊戲內容\n・十餘種武器\n・關卡與機關陷阱設計\n・Boss 戰",
    titleEn: "KRANIA ISLAND",
    descEn: "A VR adventure shooter, university capstone project.",
    detailsEn: "A VR adventure shooter. Players are heroes venturing into a zombie-overrun village, fighting through traps with more than ten weapons to defeat the final boss.\n\nProject\n・When: university capstone\n\nGameplay\n・10+ weapons\n・Level and trap design\n・Boss fight",
    gallery: [
        "assets/works/krania/trailer.mp4",
        "assets/works/krania/4768f1fe.webp",
        "assets/works/krania/69dcc728.webp"
    ]
},
{
    cat: "遊戲",
    title: "魔法夜派對",
    desc: "多人 VR 魔法遊戲，以手勢軌跡辨識施放魔法。",
    tags: ["PC" , "VR" , "多人連線"],
    image: "assets/works/magicparty/88bbd2ef.webp",
    details: "多人連線 VR 魔法動作遊戲。玩家揮動手把在空中畫出軌跡，系統即時辨識手勢並轉換成對應的魔法發射攻擊，與隊友合作對抗 AI 敵人與 Boss，關卡包含飛行與地面戰鬥。\n\n專案資訊\n・人數：最多 4 人連線\n\n開發內容\n・VR 手勢軌跡辨識：辨識手把揮動軌跡，轉換為對應魔法\n・多人連線合作\n・AI 敵人與 Boss 戰\n・飛行與地面戰鬥關卡\nhttps://www.youtube.com/watch?v=iyWmJmWusrI",
    titleEn: "Magic Night Party",
    descEn: "A multiplayer VR magic game — draw gestures in the air to cast spells.",
    detailsEn: "A multiplayer VR magic action game. Players swing their controllers to draw shapes in the air; the system recognizes each gesture in real time and fires the matching spell. Team up against AI enemies and bosses across flying and ground combat stages.\n\nProject\n・Players: up to 4 online\n\nDevelopment\n・VR gesture trail recognition: turns controller motion trails into spells\n・Online co-op\n・AI enemies and boss fights\n・Flying and ground combat stages\nhttps://www.youtube.com/watch?v=iyWmJmWusrI",
    gallery: [
        "assets/works/magicparty/88bbd2ef.webp",
        "assets/works/magicparty/97f74f7e.webp"
    ]
},
{
    cat: "遊戲",
    title: "技能象棋－技能策略對戰",
    desc: "在傳統象棋中加入技能系統，吃子累積條件後發動技能扭轉戰局。",
    tags: ["PC"],
    image: "assets/works/chess/bc06496b.webp",
    details: "在傳統象棋規則上加入技能系統的單機策略遊戲。吃掉對手棋子可以累積技能發動條件，條件達成後發動技能，扭轉戰局。\n\n專案資訊\n・平台：PC\n\n開發內容\n・象棋規則與走法判定，選取棋子時標示可落點\n・技能系統：以吃子數作為發動條件，例如「雷電法術」需吃 4 子，發動後隨機移除對手 4 個棋子\n・技能介面：顯示技能名稱、發動進度與效果說明",
    titleEn: "Skill Chess — Strategy with Special Moves",
    descEn: "Chinese chess with a skill system — capture pieces to charge skills that turn the tide.",
    detailsEn: "A single-player strategy game that adds a skill system to traditional Chinese chess. Capturing the opponent's pieces charges skills; once the condition is met, unleash a skill to turn the tide.\n\nProject\n・Platform: PC\n\nDevelopment\n・Chess rules and move validation, highlighting legal moves when a piece is selected\n・Skill system triggered by capture count — e.g. \"Thunder Spell\" requires 4 captures and removes 4 random enemy pieces\n・Skill UI showing name, charge progress and effect",
    gallery: ["assets/works/chess/bc06496b.webp"]
},
{
    cat: "遊戲",
    title: "雙人派對遊戲合集",
    desc: "收錄 3 款小遊戲的雙人同機對戰派對遊戲。",
    tags: ["PC"],
    image: "assets/works/party/dd596c89.webp",
    details: "雙人同畫面對戰的派對遊戲，收錄 3 款小遊戲，藍紅兩方在限時內比拚分數。\n\n專案資訊\n・平台：PC\n・人數：2 人同機對戰\n\n開發內容\n・3 款小遊戲玩法，例如「搶地板」：踩過的格子變成自己的顏色，時間結束時占領較多格子的一方獲勝\n・計時、計分與勝負判定\n・雙人同畫面操作",
    titleEn: "Two-Player Party Game Collection",
    descEn: "A local two-player party game with 3 mini-games.",
    detailsEn: "A same-screen two-player party game with 3 mini-games, where Blue and Red race for points against the clock.\n\nProject\n・Platform: PC\n・Players: 2, same machine\n\nDevelopment\n・3 mini-games, e.g. \"Floor Grab\": tiles you step on turn your color, and whoever owns more tiles when time runs out wins\n・Timer, scoring and win conditions\n・Two-player same-screen controls",
    gallery: [
        "assets/works/party/dd596c89.webp",
        "assets/works/party/eb4458ed.webp"
    ]
},
{
    cat: "遊戲",
    title: "VR打字母",
    desc: "VR 反應遊戲，擊中字母得分、避開炸彈。",
    tags: ["PC", "VR"],
    image: "assets/works/typing/3517ff60.webp",
    details: "VR 反應遊戲。字母與炸彈混在一起出現，玩家要打中字母得分，同時避開炸彈，考驗反應與判斷。\n\n開發內容\n・字母與炸彈的生成與出現節奏\n・擊中判定：打中字母得分、打到炸彈算失誤\n・計分與即時回饋",
    titleEn: "VR Letter Smash",
    descEn: "A VR reaction game — hit the letters, avoid the bombs.",
    detailsEn: "A VR reaction game. Letters and bombs appear together; players hit the letters to score while avoiding the bombs, testing reflexes and judgment.\n\nDevelopment\n・Spawning and pacing of letters and bombs\n・Hit detection: letters score, bombs count as mistakes\n・Scoring and instant feedback",
    gallery: [
        "assets/works/typing/trailer.mp4","assets/works/typing/3517ff60.webp"]
},
{
    cat: "遊戲",
    title: "農村生活",
    desc: "多人連線 VR 農場遊戲，和好友一起播種、澆水、收成。",
    tags: ["VR", "多人連線"],
    image: "assets/works/farm/ca0a7c90.webp",
    details: "多人連線 VR 農場經營遊戲。玩家在虛擬農場中播種、澆水、照顧作物直到收成，可以和好友連線一起經營農場。\n\n開發內容\n・種植與澆水互動、作物生長流程\n・多人連線（Photon），同步玩家位置與農場狀態",
    titleEn: "Farm Life",
    descEn: "A multiplayer VR farming game — plant, water and harvest with friends.",
    detailsEn: "A multiplayer VR farming game. Players sow seeds, water and tend crops until harvest on a virtual farm, and can run the farm together with friends online.\n\nDevelopment\n・Planting and watering interactions, crop growth cycle\n・Online multiplayer (Photon), syncing player positions and farm state",
    gallery: [
        "assets/works/farm/trailer.mp4","assets/works/farm/ca0a7c90.webp"]
},
{
    cat: "遊戲",
    title: "連線鬼抓人（Photon）",
    desc: "以 Photon 開發的雙人連線鬼抓人，限時對戰、抓到就換人當鬼。",
    tags: ["PC", "多人連線"],
    image: "assets/works/tag/e02bf1ae.webp",
    details: "雙人連線對戰的鬼抓人遊戲。一方當鬼追捕另一方，抓到後雙方交換角色，限時結束時依規則判定勝負。\n\n專案資訊\n・類型：專題研究\n・人數：2 人連線\n\n開發內容\n・以 Photon 實作連線配對與房間建立\n・角色分配與抓到後的鬼／逃跑者角色交換\n・雙方位置即時同步、碰撞判定\n・限時制與勝負判定",
    titleEn: "Online Tag (Photon)",
    descEn: "A two-player online game of tag built with Photon — timed matches, roles swap on every catch.",
    detailsEn: "A two-player online game of tag. One player is \"it\" and chases the other; on a catch the roles swap, and the winner is decided when time runs out.\n\nProject\n・Type: research project\n・Players: 2 online\n\nDevelopment\n・Matchmaking and room creation with Photon\n・Role assignment and chaser / runner swap on catch\n・Real-time position sync and collision detection\n・Time limit and win conditions",
    gallery: ["assets/works/tag/e02bf1ae.webp"]
},
{
    cat: "遊戲",
    title: "VR保齡球",
    desc: "VR 保齡球，以控制器抓球投擲，物理模擬球道與球瓶。",
    tags: ["PC", "VR"],
    image: "assets/works/bowling/25a5c11d.webp",
    details: "VR 保齡球遊戲。玩家用控制器抓起保齡球，揮臂投出，球的軌跡與球瓶碰撞由物理引擎即時模擬。\n\n專案資訊\n・類型：專題研究\n\n開發內容\n・控制器抓取與投擲：放開時依手部速度與方向帶出球速\n・Unity 物理模擬保齡球軌跡與球瓶碰撞\n・標準保齡球規則與計分",
    titleEn: "VR Bowling",
    descEn: "VR bowling — grab the ball with the controller and throw, with physics-simulated lanes and pins.",
    detailsEn: "A VR bowling game. Players pick up the ball with the controller and swing to release it; the ball's path and pin collisions are simulated in real time by the physics engine.\n\nProject\n・Type: research project\n\nDevelopment\n・Controller grab and throw: ball speed comes from hand velocity and direction at release\n・Unity physics for ball trajectory and pin collisions\n・Standard bowling rules and scoring",
    gallery: ["assets/works/bowling/25a5c11d.webp"]
},
{
        cat: "教育訓練與研究",
        title: "VR無人機證照訓練",
        desc: "依無人機考照術科標準設計的 VR 飛行訓練系統，整合實體遙控器，採 Server／Client 架構。",
        tags: ["PC", "VR", "Sensor", "多人連線"],
        details: "因保密合約，本作品畫面不公開。\n\n系統內容\n・訓練題目涵蓋 I 級 7 題、G1 10 題術科，以及任務型訓練題目\n・飛行過程即時判定違規項目，訓練結束依 KPI 項目加權自動評分\n・Server 端可排課、指派 Client 與題目，同時監控多台 Client 的飛行狀態，並即時切換天氣、觸發事件\n\n技術內容\n・遙控器整合：以 USB HID 讀取 T16 無人機遙控器，支援熱插拔偵測，依型號自動設定軸向\n・飛行模擬：姿態模式／定位模式切換，模擬風力、重量飄移、起降擾動、地面效應與障礙物反作用力\n・異常模擬：掉電、低電量處置、輸入延遲\n・飛行資料記錄：逐筆記錄位置、高度、姿態角、垂直／水平速度、飛行模式、電量與任務進度，匯出 CSV\n・即時畫面串流：Client 畫面以 TCP 串流至 Server 端，提供上帝、自由、操控者、無人機四種視角\n・訓練回放（AAR）：自行設計檔案傳輸協定，分塊串流並以 CRC32 校驗，可在 Server 端回放每次訓練過程\n・環境：動態天氣、日照時間與海面模擬",
    titleEn: "VR Drone License Training",
    descEn: "A VR flight training system built to the practical drone license test standard, with a real remote controller and a Server / Client architecture.",
    detailsEn: "Visuals are not shown due to a confidentiality agreement.\n\nSystem\n・Covers 7 Class I and 10 G1 practical test items, plus mission-based training\n・Violations are detected in real time during flight; each session is scored automatically with weighted KPIs\n・The server schedules sessions, assigns clients and test items, monitors multiple clients' flights at once, and switches weather or triggers events on the fly\n\nTechnical\n・Controller integration: reads a T16 drone remote via USB HID, with hot-plug detection and per-model axis mapping\n・Flight simulation: attitude / position mode switching; simulates wind, payload drift, takeoff and landing disturbance, ground effect and obstacle reaction forces\n・Failure simulation: power loss, low-battery handling, input latency\n・Flight logging: continuously records position, altitude, attitude angles, vertical / horizontal speed, flight mode, battery and mission progress, exported to CSV\n・Live streaming: client views are streamed to the server over TCP, with god, free, pilot and drone cameras\n・After-action review (AAR): a custom file transfer protocol with chunked streaming and CRC32 checks lets the server replay every session\n・Environment: dynamic weather, time of day and ocean simulation",
        gallery: []
    },
{
        cat: "教育訓練與研究",
        title: "鬥陣作伙玩－樂齡體感互動訓練系統",
        desc: "給長輩的 AI 姿態辨識體感遊戲，一支網路攝影機、免穿戴就能玩。",
        tags: ["PC", "Webcam", "體感互動", "AI 姿態辨識", "MediaPipe"],
        image: "assets/works/agetech/cover.jpg",
        details: "為社區照顧關懷據點的 55 歲以上長者設計。偏鄉據點缺師資，活動多是帶動唱、內容重複，長者坐著看久了就不來；市售體感設備要手持或穿戴、字小又多是外文，長者不會用；據點交成果也只能報簽到人次，看不出身體有沒有進步。\n只要一台電視、一支網路攝影機和一台迷你電腦，長者走到電視前舉手就能玩，站著、坐著都可以，也能和朋友或孫子兩人比賽。預計在高雄阿蓮社區照顧關懷據點驗證 50 位長者。\n\n四款遊戲，一款練一種能力\n・擦窗戶：窗戶起霧又沾泥巴，雙手當抹布來回擦，擦乾淨就看見窗外；練上肢活動與肩關節，記錄擦淨面數與左右手移動量\n・眼明手快：孫子把東西丟過來，看圈的顏色用左手、右手或雙手接，臭襪子、魚骨頭不能接；練反應與手眼協調，記錄左右手接到、漏接、誤接\n・一二三過牆：牆從路的盡頭推過來，照動作小卡擺出牆洞的姿勢穿過去；練平衡與全身協調，記錄各動作成功率\n・你追我跑：在懷舊國小操場原地抬腿、擺手追孫子；練腿力與耐力，記錄距離、速度與左右腳抬腿次數\n\n技術內容\n・姿態辨識：Unity 搭配 Google MediaPipe，同時追蹤 2 人、各 33 個身體點，手掌就是游標，停留即選取，免按鍵、免打字\n・人像分割：即時去背，把長者本人放進懷舊街道、三合院、國小操場等場景\n・AI 台語配音：以台羅拼音合成台語語音，預存成音檔離線播放，玩完馬上用台語鼓勵\n・難度依表現自動調整，失誤時孫子會安慰「無要緊！」\n・會員系統：第一次來挑一個圖示當身分，之後點自己的圖示就登入，免帳號密碼；社工後台可填性別、出生年與備註\n・成效分析：每局自動記錄動作數據，比較左右側差異，用第一個月對比最近一個月判定進步、持平或退步，一鍵匯出 Excel 月報、季報與前後測\n・全程離線：不需網路、不存影像，資料只留在據點電腦",
    titleEn: "Play Together — Motion Training for Seniors",
    descEn: "AI pose-tracking motion games for older adults — just one webcam, nothing to wear.",
    detailsEn: "Designed for adults 55+ at community care centers. Rural centers lack instructors, so activities are mostly repetitive sing-alongs, and seniors who just sit and watch eventually stop coming. Commercial motion devices need handheld or wearable gear, with small text often in foreign languages. And centers can only report attendance, with no way to tell whether anyone is getting healthier.\nAll it takes is a TV, a webcam and a mini PC: seniors step in front of the TV and raise a hand to play, standing or seated, and can compete in pairs with a friend or grandchild. A pilot with 50 seniors is planned at a community care center in Alian, Kaohsiung.\n\nFour games, each training one ability\n・Window Wiping: wipe fogged, muddy windows clean with both hands to reveal the view; trains upper-limb movement and shoulder mobility, recording panes cleaned and left / right hand travel\n・Quick Hands: the grandchild throws things — catch with the left, right or both hands depending on the ring color, but never the smelly socks or fish bones; trains reaction and hand-eye coordination, recording catches, misses and wrong catches per hand\n・Through the Wall: a wall slides toward you — match the pose card to pass through the hole; trains balance and whole-body coordination, recording success rate per pose\n・Chase Me: march in place and swing your arms to chase your grandchild around a nostalgic school playground; trains leg strength and endurance, recording distance, speed and steps per leg\n\nTechnical\n・Pose tracking: Unity with Google MediaPipe tracks 2 people at 33 body points each; the palm is the cursor and hovering selects — no buttons, no typing\n・Person segmentation: real-time background removal places the seniors themselves into nostalgic streets, traditional courtyard houses and school playgrounds\n・AI Taiwanese voice: Taiwanese Hokkien speech synthesized from Tâi-lô romanization, pre-rendered for offline playback, cheering players on right after each game\n・Difficulty adapts to performance; after a mistake the grandchild says \"Bô-iàu-kín!\" (no worries)\n・Member system: pick an icon on the first visit, then tap it to log in — no accounts or passwords; social workers can add gender, birth year and notes in the back office\n・Outcome analysis: every round logs movement data and compares left and right sides; the first month is compared with the latest to judge improvement, plateau or decline, and one click exports monthly, quarterly and pre/post-test reports to Excel\n・Fully offline: no internet needed, no images stored, data stays on the center's computer",
        gallery: [
            "assets/works/agetech/cover.jpg",
            "assets/works/agetech/ss1.jpg",
            "assets/works/agetech/ss2.jpg"
        ]
    },
{
    cat: "教育訓練與研究",
    title: "AI與LINE結合VR的環保綠能學習互動系統",
    desc: "在 VR 裡閱讀教材、作答測驗，學習成效經 AI 分析後自動推播到 LINE。",
    tags: ["PC", "VR", "Line", "AI"],
    image: "assets/works/vrlearn/trailer.jpg",
    details: "發明目的\n一般數位教材只看得到考試分數，看不出學員讀教材時有沒有專心、哪裡卡住。這套系統讓學員在 VR 裡學習時，自動記錄閱讀與作答時的專注行為，用 AI 分析後給出個人化的學習建議，並即時推播到 LINE，讓學員和老師都能掌握學習狀況。教材和題目都在後台資料庫管理，可以換成不同主題，同一套系統能用在企業訓練、學校課程或環境教育。\n\n獲獎\n・取得中華民國新型專利 M652769「互動式網路導覽裝置」（共同創作人）\n・以「AI 與 LINE 結合 VR 的環保綠能學習互動系統」參加 2025 第十六屆 IIIC 國際創新發明競賽，獲得銀牌，參賽作品即應用此專利技術\n\n系統內容\n在後台資料庫建立教材與題目，學員戴上頭盔後在 VR 裡閱讀 PDF 教材並作答測驗，結束後系統把學習結果整理成報告，自動推播到 LINE。\n\n記錄的學習數據\n・閱讀 PDF 的總時間，以及實際注視 PDF 的時間\n・測驗總時間，以及注視考卷的時間\n・每一題的對錯與作答花費時間\n\n學習分析\n・學習態度：閱讀教材與作答時，視線真正停在內容上的時間比例\n・學習成效：測驗的答對率\n・學習專心度：依平均答題時間評估，作答拖得越久分數越低\n・三項指標換算成 1～5 顆星，再由 LLM 依分數與作答紀錄，產生個人化的學習建議，一起推播到 LINE",
    titleEn: "AI × LINE × VR Green Energy Learning System",
    descEn: "Read course materials and take quizzes in VR; AI analyzes the results and pushes them to LINE.",
    detailsEn: "Purpose\nConventional e-learning only shows test scores — not whether learners were focused while reading, or where they got stuck. This system records learners' attention while they read and answer questions in VR, uses AI to generate personalized learning advice, and pushes it to LINE in real time so both learners and teachers can follow their progress. Materials and questions are managed in a back-end database and can be swapped for any topic, so the same system works for corporate training, school courses or environmental education.\n\nAwards\n・Taiwan Utility Model Patent M652769, \"Interactive Online Guided Tour Device\" (co-creator)\n・Silver Medal, 16th International Innovation and Invention Competition (IIIC) 2025, with this system, which applies the patented technology\n\nSystem\nMaterials and questions are created in a back-end database. Wearing a headset, learners read PDF materials and take quizzes in VR; afterwards the system compiles a report and pushes it to LINE automatically.\n\nLearning data recorded\n・Total PDF reading time, and time actually spent looking at the PDF\n・Total quiz time, and time spent looking at the quiz\n・Correctness and response time for each question\n\nLearning analysis\n・Attitude: the share of time the learner's gaze stayed on the content while reading and answering\n・Performance: quiz accuracy\n・Focus: based on average response time — the longer answers drag on, the lower the score\n・The three metrics are converted to 1–5 stars, and an LLM generates personalized learning advice from the scores and answer records, pushed to LINE together",
    gallery: [
        "assets/works/vrlearn/trailer.mp4"
    ]
},
{
    cat: "教育訓練與研究",
    title: "VR健康監督教學系統",
    desc: "戴上 VR 頭盔，360 度觀看 CPR 與 AED 急救流程的動畫教學。",
    tags: ["PC", "VR"],
    image: "assets/works/vrhealth/90380ba7.webp",
    details: "用 360 度動畫在 VR 裡演出一場完整的急救過程。學員戴上頭盔站在現場，可以轉頭環顧四周，跟著動畫一步步看懂遇到有人倒下時該怎麼做。\n\n動畫依「叫叫 CABD」急救步驟演出\n・叫：拍肩呼叫，確認患者有沒有意識\n・叫：請旁人撥打 119、去拿 AED\n・C：胸部按壓\n・A：暢通呼吸道\n・B：人工呼吸\n・D：AED 電擊，示範貼電擊片、依語音指示操作",
    titleEn: "VR First Aid Training",
    descEn: "Put on a VR headset and watch the CPR and AED first-aid procedure as a 360° animation.",
    detailsEn: "A complete first-aid scenario performed as a 360° animation in VR. Trainees stand right in the scene, look around freely and follow the animation step by step to learn what to do when someone collapses.\n\nThe animation follows the \"Check, Call, CABD\" steps\n・Check: tap the shoulders and shout to see if the person responds\n・Call: ask bystanders to call 119 and fetch an AED\n・C: chest compressions\n・A: open the airway\n・B: rescue breathing\n・D: AED defibrillation, showing pad placement and following the voice prompts",
    gallery: [
        "assets/works/vrhealth/trailer.mp4",
        "assets/works/vrhealth/90380ba7.webp"
    ]
},
{
    cat: "教育訓練與研究",
    title: "VR 自行車騎乘模擬系統",
    desc: "改裝實體腳踏車連動 VR，真實踩踏與轉向控制 VR 騎行，並記錄騎乘數據。",
    tags: ["VR", "Sensor", "3D 列印"],
    image: "assets/works/bike/35bff7d8.webp",
    details: "將實體腳踏車改裝成 VR 騎行裝置。龍頭轉向與踏板轉速由感測器即時偵測，經藍牙傳入 VR 頭盔，玩家真的踩踏、轉龍頭就能在虛擬場景中騎行。\n\n開發內容\n・硬體改裝：3D 列印感測器固定座，將藍牙姿態感測器安裝於龍頭與踏板\n・藍牙連線：VR 頭盔直接接收感測數據，換算轉向角度與踩踏轉速\n・騎行模擬：依轉速與轉向控制車速、方向\n・騎乘數據記錄",
    titleEn: "VR Bike Riding Simulator",
    descEn: "A modified real bicycle linked to VR — actual pedaling and steering drive the ride, with ride data logged.",
    detailsEn: "A real bicycle converted into a VR riding rig. Sensors track handlebar steering and pedal cadence in real time and send them to the VR headset over Bluetooth, so riders actually pedal and steer to ride through the virtual scene.\n\nDevelopment\n・Hardware: 3D-printed sensor mounts fixing Bluetooth motion sensors to the handlebar and pedal\n・Bluetooth: the headset receives sensor data directly and converts it to steering angle and cadence\n・Ride simulation: speed and direction driven by cadence and steering\n・Ride data logging",
    gallery: [
        "assets/works/bike/35bff7d8.webp",
        "assets/works/bike/4b579003.webp"
    ]
},
{
    cat: "教育訓練與研究",
    title: "全家咖啡機清洗 VR 訓練",
    desc: "VR 手勢辨識操作，學習全家咖啡機的清洗步驟。",
    tags: ["Android", "VR", "手部辨識"],
    image: "assets/works/famicafe/5587401e.webp",
    details: "全家便利商店咖啡機清洗作業的 VR 教學。學員在 VR 中跟著操作說明，用雙手直接拆裝、清洗咖啡機各部件，依正確步驟完成整套清洗流程，不必占用門市的實體機台。\n\n開發內容\n・手勢辨識：不用控制器，直接用手抓取、按壓、拆裝部件\n・清洗流程引導：依步驟顯示操作說明，判定每一步是否完成\n・咖啡機各部件的拆裝互動",
    titleEn: "FamilyMart Coffee Machine Cleaning VR Training",
    descEn: "Learn the FamilyMart coffee machine cleaning procedure in VR with hand tracking.",
    detailsEn: "VR training for cleaning the coffee machines at FamilyMart convenience stores. Following on-screen instructions, trainees use their bare hands to take apart and clean each part of the machine, completing the full cleaning routine in the correct order without tying up a real machine in the store.\n\nDevelopment\n・Hand tracking: grab, press and take apart parts directly, no controllers\n・Guided cleaning steps with completion checks for each step\n・Disassembly and assembly of each coffee machine part",
    gallery: [
        "assets/works/famicafe/trailer.mp4","assets/works/famicafe/5587401e.webp"]
},
{
    cat: "教育訓練與研究",
    title: "VR 暈動症眼動追蹤實驗平台",
    desc: "與大學研究團隊合作，VR 眼動追蹤記錄雲霄飛車體驗前後的視覺變化。",
    tags: ["PC", "VR", "眼動"],
    image: "assets/works/sickness/faae0e7a.webp",
    details: "與大學研究團隊合作的 VR 暈動症實驗系統，研究 VR 中的被動運動對視覺的影響。受測者在 VR 中搭乘雲霄飛車，系統全程記錄眼動數據；體驗結束後直接在 VR 內進行 VA（視力）與 CS（對比敏感度）檢測，最後自動產出報表。\n\n專案資訊\n・設備：VR 頭盔內建眼動追蹤\n\n實驗流程\n・VR 雲霄飛車體驗：全程記錄視線與瞳孔變化\n・VR 內視覺檢測：VA 視力、CS 對比敏感度\n・自動產出報表，數據匯出 CSV 供研究分析\n\n開發內容\n・串接頭盔內建眼動追蹤，持續記錄視線方向與瞳孔大小\n・在 VR 中實作 VA、CS 檢測流程與作答判定\n・實驗數據彙整與報表輸出",
    titleEn: "VR Motion Sickness Eye-Tracking Lab",
    descEn: "With a university research team: VR eye tracking records visual changes around a roller coaster ride.",
    detailsEn: "A VR motion sickness experiment system built with a university research team to study how passive motion in VR affects vision. Participants ride a roller coaster in VR while the system records eye-tracking data throughout; afterwards VA (visual acuity) and CS (contrast sensitivity) tests run right inside VR, and a report is generated automatically.\n\nProject\n・Hardware: headset with built-in eye tracking\n\nExperiment flow\n・VR roller coaster ride, recording gaze and pupil changes throughout\n・In-VR vision tests: VA visual acuity, CS contrast sensitivity\n・Automatic report, with data exported to CSV for analysis\n\nDevelopment\n・Integrated the headset's built-in eye tracking to continuously log gaze direction and pupil size\n・VA and CS test procedures and answer checking in VR\n・Data aggregation and report output",
    gallery: ["assets/works/sickness/faae0e7a.webp"]
},
{
    cat: "教育訓練與研究",
    title: "VR 運動遊戲生理監測研究平台",
    desc: "與大學研究團隊合作，三款 VR 運動遊戲搭配生理感測器，研究 VR 運動的效果。",
    tags: ["PC", "VR", "Arduino", "Sensor"],
    image: "assets/works/sport/70022f47.webp",
    details: "與大學研究團隊合作的 VR 運動研究平台。受測者在 VR 中進行投籃、打鼓、穿牆三款運動遊戲，同時配戴生理感測器，數據即時傳到電腦記錄，用來研究 VR 運動的健身效果與生理影響。\n\n三款運動遊戲\n・投籃：限時投籃計分\n・打鼓：雙手持鼓棒擊鼓\n・穿牆：牆面朝玩家推進，擺出與牆洞相同的姿勢穿過\n\n開發內容\n・三款 VR 運動遊戲的玩法與計分\n・串接生理感測器，數據即時傳入電腦並與遊戲過程同步記錄\n・數據匯出供研究分析",
    titleEn: "VR Exercise Games Physiological Research Platform",
    descEn: "With a university research team: three VR exercise games paired with physiological sensors to study VR exercise.",
    detailsEn: "A VR exercise research platform built with a university research team. Participants play three VR exercise games — basketball, drumming and hole-in-the-wall — while wearing a physiological sensor whose data streams to a PC in real time, to study the fitness effects and physiological impact of VR exercise.\n\nThree exercise games\n・Basketball: timed shooting for points\n・Drumming: hit the drums with a stick in each hand\n・Hole in the Wall: a wall moves toward the player, who must match the cut-out pose to pass through\n\nDevelopment\n・Gameplay and scoring for the three VR exercise games\n・Physiological sensor integration, streaming data to the PC in sync with gameplay\n・Data export for research analysis",
    gallery: [
        "assets/works/sport/70022f47.webp",
        "assets/works/sport/e1308c3f.webp",
        "assets/works/sport/1cf93b6d.webp"
    ]
},
{
    cat: "教育訓練與研究",
    title: "VR 電腦硬體組裝實習",
    desc: "在 VR 中拆裝電腦主機、認識內部硬體，並依線序完成網路線水晶頭製作。",
    tags: ["PC", "VR"],
    image: "assets/works/forensic/8a26a969.webp",
    details: "電腦硬體組裝的 VR 實作教材。學員在 VR 中打開電腦主機，認識電源供應器、記憶體等內部元件的用途與安裝位置並實際組裝，再依線序排列網路線、完成 RJ45 水晶頭接頭。\n\n開發內容\n・主機內部元件的拿取、對位與安裝互動\n・元件介紹：電源供應器、記憶體等硬體的用途說明\n・網路線製作：依線序排列芯線、接上 RJ45 水晶頭，並判定線序是否正確",
    titleEn: "VR PC Hardware Assembly Lab",
    descEn: "Open up a PC in VR, learn the components and assemble them, then crimp an RJ45 network cable in the right wire order.",
    detailsEn: "VR hands-on training for PC hardware assembly. Learners open a computer case in VR, learn what components such as the power supply and memory do and where they go, assemble them, then arrange network cable wires in order and finish an RJ45 connector.\n\nDevelopment\n・Picking up, aligning and installing internal components\n・Component explanations for hardware such as the power supply and memory\n・Network cable making: arrange the wires in order, fit the RJ45 connector, and check the wiring order",
    gallery: [
        "assets/works/forensic/trailer.mp4","assets/works/forensic/8a26a969.webp"]
},
{
    cat: "教育訓練與研究",
    title: "高齡者 VR 色彩辨識評估系統",
    desc: "與大學研究團隊合作，在 VR 中以相近色辨認測驗評估高齡者的色彩辨識能力。",
    tags: ["VR"],
    image: "assets/works/colorvr/8933074f.webp",
    details: "與大學研究團隊合作的高齡者色彩辨識評估系統。受測者在 VR 中先選定一個顏色，系統接著列出與它相近的多個顏色，受測者要從中再找出原本的顏色，藉此評估對細微色差的辨識能力。\n\n測驗流程\n・選擇目標顏色\n・系統產生數個相近色，受測者從中找出原本的顏色\n・判定是否正確，記錄反應時間與正確率\n\n開發內容\n・相近色產生：依目標顏色調整色差，產生相近色選項\n・作答判定與數據記錄\n・評估報告輸出",
    titleEn: "VR Color Discrimination Assessment for Seniors",
    descEn: "With a university research team: a similar-color matching test in VR to assess older adults' color discrimination.",
    detailsEn: "A color discrimination assessment for older adults built with a university research team. Participants pick a color in VR, the system then shows several similar colors, and participants must find the original among them — measuring how well they tell subtle color differences apart.\n\nTest flow\n・Pick a target color\n・The system generates several similar colors; find the original among them\n・Check the answer and record response time and accuracy\n\nDevelopment\n・Similar-color generation by adjusting color difference from the target\n・Answer checking and data logging\n・Assessment report output",
    gallery: [
        "assets/works/colorvr/trailer.mp4",
        "assets/works/colorvr/8933074f.webp"
    ]
},
{
    cat: "教育訓練與研究",
    title: "VR工業配線實習",
    desc: "工業配線丙級證照 VR 實作訓練，依配線圖在虛擬配電盤上完成配線。",
    tags: ["PC", "VR"],
    image: "assets/works/wiring/5c1e28a0.webp",
    details: "教育部虛擬實境暨擴增實境教學應用教材開發計畫成果。以工業配線丙級證照術科為範本，學員在 VR 中依照配線圖，拿取電線接到端子與元件，完成整個配線作業，系統會評分並提示錯誤。\n\n開發內容\n・電線抓取與端子連接互動\n・依配線圖比對接線結果，判定正確與錯誤\n・評分與錯誤提示",
    titleEn: "VR Industrial Wiring Lab",
    descEn: "VR practice for the Level C industrial wiring certification — complete the wiring on a virtual panel from the diagram.",
    detailsEn: "Developed under the Ministry of Education's VR/AR teaching materials program. Modeled on the practical exam for the Level C industrial wiring certification, learners follow the wiring diagram in VR, pick up wires and connect them to terminals and components to complete the full wiring job, with scoring and error hints.\n\nDevelopment\n・Wire grabbing and terminal connection interactions\n・Comparing the result against the wiring diagram to mark correct and incorrect connections\n・Scoring and error hints",
    gallery: ["assets/works/wiring/5c1e28a0.webp"]
},
{
    cat: "教育訓練與研究",
    title: "VR 飯店服務情境對話訓練",
    desc: "手機 VR 飯店服務對話訓練，依情境選擇應對方式。",
    tags: ["手機", "VR"],
    image: "assets/works/hotel/6e0bff37.webp",
    details: "手機版 VR 的飯店服務情境訓練。學員以手機陀螺儀轉頭環顧飯店場景，面對虛擬顧客的各種需求，從選項中選出應對方式，系統依標準服務流程判斷是否恰當。\n\n專案資訊\n・平台：手機 VR（陀螺儀控制視角）\n\n開發內容\n・陀螺儀視角控制\n・情境分支對話：依學員的選擇進入不同劇情\n・應對評估：比對標準服務流程判定選擇是否恰當",
    titleEn: "VR Hotel Service Dialogue Training",
    descEn: "Mobile VR hotel service training — choose how to respond in each scenario.",
    detailsEn: "Hotel service scenario training in mobile VR. Trainees look around the hotel using the phone's gyroscope, face various requests from virtual guests and choose a response from the options; the system judges whether it fits the standard service procedure.\n\nProject\n・Platform: mobile VR (gyroscope-controlled view)\n\nDevelopment\n・Gyroscope view control\n・Branching dialogue driven by the trainee's choices\n・Response assessment against the standard service procedure",
    gallery: ["assets/works/hotel/6e0bff37.webp"]
},
{
        cat: "展場互動裝置",
        title: "NBA BOX 互動體驗",
        desc: "VR 頭盔結合 Kinect 全身偵測的多人區網投籃競技，支援會員登入。",
        tags: ["Android", "PC", "Kinect" , "多人連線" , "手部辨識" , "Server" , "Client"],
        image: "assets/works/nbabox/782bb92b.webp",
        details: "多人 VR 投籃競技。玩家戴上 VR 頭盔進入虛擬球場，Kinect 偵測全身骨架與手部動作，做出真實的投籃動作就能出手；多台機台透過區域網路連線，同場較勁。\n\n開發內容\n・Kinect 骨架追蹤與手部辨識，將投籃動作轉換為 VR 中的出手\n・區域網路 Client-Server 架構，同步各玩家的骨架資料與比賽狀態\n・Android 會員登入，串接玩家資料與成績",
    titleEn: "NBA BOX Interactive Experience",
    descEn: "Multiplayer LAN basketball shooting in VR with Kinect full-body tracking and member login.",
    detailsEn: "A multiplayer VR basketball shooting contest. Players put on a VR headset and step onto a virtual court; Kinect tracks their full-body skeleton and hand movements, so a real shooting motion releases the shot. Multiple stations connect over the local network to compete head to head.\n\nDevelopment\n・Kinect skeleton tracking and hand recognition, turning shooting motions into in-VR shots\n・LAN client-server architecture syncing every player's skeleton data and match state\n・Android member login linked to player data and scores",
        gallery: [
            "assets/works/nbabox/782bb92b.webp",
            "assets/works/nbabox/e5f340c3.webp",
            "assets/works/nbabox/0b931ca8.webp",
            "assets/works/nbabox/8c5fe4ff.webp"
        ]
    },
{
    cat: "展場互動裝置",
    title: "星戰海島－六軸體感座椅雙人射擊",
    desc: "大螢幕雙人射擊，六軸體感座椅與風扇、噴水特效隨畫面即時連動。",
    tags: ["PC", "Arduino","體感座椅"],
    image: "assets/works/starwar/ef1c8e28.webp",
    details: "雙人並坐在六軸體感座椅上，看著大螢幕用搖桿瞄準射擊，一場約 5 分鐘。座椅隨遊戲中的動作傾斜、震動，搭配風扇吹風與噴水特效，讓玩家身歷其境。\n\n專案資訊\n・形式：大螢幕＋六軸體感座椅\n・人數：2 人\n・操作：搖桿\n\n開發內容\n・Unity 依遊戲中的動作即時傳送指令，控制六軸座椅的姿態與震動\n・Arduino 控制風扇與噴水裝置，配合遊戲事件觸發\n・雙人射擊玩法與計分",
    titleEn: "Star Island — Two-Player 6-Axis Motion Seat Shooter",
    descEn: "A big-screen two-player shooter with a 6-axis motion seat, wind and water effects synced to the action.",
    detailsEn: "Two players sit side by side on a 6-axis motion seat and aim and shoot with joysticks at a big screen, about 5 minutes per round. The seat tilts and shakes with the action, while fans and water sprays add to the immersion.\n\nProject\n・Format: big screen + 6-axis motion seat\n・Players: 2\n・Controls: joysticks\n\nDevelopment\n・Unity sends real-time commands to control the seat's motion and vibration from in-game action\n・Arduino controls the fans and water sprays, triggered by game events\n・Two-player shooting gameplay and scoring",
    gallery: [
        "assets/works/starwar/trailer.mp4",
        "assets/works/starwar/ef1c8e28.webp",
        "assets/works/starwar/1f045f3e.webp"
    ]
},
{
    cat: "展場互動裝置",
    title: "星戰海島 2－六軸體感座椅射擊（升級版）",
    desc: "星戰海島第二代，換上全新場景與更大的螢幕。",
    tags: ["PC", "Arduino","體感座椅"],
    image: "assets/works/starwar2/243ed52d.webp",
    details: "星戰海島的第二代。沿用六軸體感座椅與雙人搖桿射擊的玩法，換上全新的遊戲場景，並改用更大的螢幕，提升臨場感。\n\n專案資訊\n・形式：大型螢幕＋六軸體感座椅\n・人數：2 人\n・操作：搖桿\n\n開發內容\n・全新遊戲場景與關卡\n・Unity 即時傳送指令，控制六軸座椅隨畫面動作\n・Arduino 控制風扇與噴水特效",
    titleEn: "Star Island 2 — 6-Axis Motion Seat Shooter (Upgrade)",
    descEn: "The second Star Island, with all-new scenes and a bigger screen.",
    detailsEn: "The second generation of Star Island. It keeps the 6-axis motion seat and two-player joystick shooting, adds all-new game scenes and moves to a larger screen for more immersion.\n\nProject\n・Format: large screen + 6-axis motion seat\n・Players: 2\n・Controls: joysticks\n\nDevelopment\n・All-new game scenes and levels\n・Unity sends real-time commands so the seat moves with the action\n・Arduino-controlled wind and water effects",
    gallery: ["assets/works/starwar2/trailer.mp4",
        "assets/works/starwar2/243ed52d.webp"]
},
{
    cat: "展場互動裝置",
    title: "冬季獵人 Winter Hunter VR",
    desc: "改裝實體電動槍的 VR 雪地打怪射擊，已上架 VR 主題樂園。",
    tags: ["PC", "VR", "Arduino", "Sensor"],
    image: "assets/works/winterhunter/bf95d840.webp",
    details: "雪地主題的 VR 射擊遊戲，一場約 10 分鐘。玩家手持改裝過的實體電動槍，在雪地中迎戰怪物；開槍時有真實的後座力。已上架 KOSMOSPOT x VIVELAND VR 虛擬實境樂園。\n\n專案資訊\n・設備：VR＋VIVE Tracker\n・操作：改裝實體電動槍\n\n開發內容\n・電動槍改裝：槍身加裝 VIVE Tracker 追蹤位置與角度，內部偵測板讀取扳機訊號\n・扳機訊號傳入 Unity，與實體後座力同步觸發射擊\n・雪地打怪關卡",
    titleEn: "Winter Hunter VR",
    descEn: "A snowy VR monster shooter with a modified real airsoft gun, live at a VR theme park.",
    detailsEn: "A snow-themed VR shooter, about 10 minutes per round. Players hold a modified real airsoft gun and fight monsters in the snow, with real recoil on every shot. Live at the KOSMOSPOT x VIVELAND VR theme park.\n\nProject\n・Hardware: VR + VIVE Tracker\n・Controls: modified real airsoft gun\n\nDevelopment\n・Gun modification: a VIVE Tracker on the gun tracks position and angle, and an internal board reads the trigger\n・Trigger signal sent to Unity, firing in sync with the physical recoil\n・Snowfield monster-hunting levels",
    gallery: [
        "assets/works/winterhunter/trailer.mp4",
        "assets/works/winterhunter/bf95d840.webp",
        "assets/works/winterhunter/64ac1a6c.webp"
    ]
},
{
    cat: "展場互動裝置",
    title: "VR腳部體感踢球",
    desc: "VR 搭配原廠體感追蹤器，用真實的腳踢中 VR 中的目標。",
    tags: ["VR", "Sensor"],
    image: "assets/works/vrkick/ac5e5ccb.webp",
    details: "用腳玩的 VR 體感遊戲。玩家右腳踝綁上原廠體感追蹤器，在 VR 中真的抬腳踢球，把球踢向場上的目標物。\n\n專案資訊\n・設備：VR＋原廠體感追蹤器（右腳踝）\n\n開發內容\n・讀取腳踝追蹤器的位置與速度，判定踢球的力道與方向\n・球的物理模擬與目標物命中判定",
    titleEn: "VR Foot-Tracking Kick Game",
    descEn: "VR with the official motion tracker — kick real-feeling shots at targets in VR.",
    detailsEn: "A VR motion game played with your feet. Players strap the official motion tracker to the right ankle and really kick the ball in VR, aiming at targets on the field.\n\nProject\n・Hardware: VR + official motion tracker (right ankle)\n\nDevelopment\n・Reads the ankle tracker's position and velocity to determine kick power and direction\n・Ball physics and target hit detection",
    gallery: [
        "assets/works/vrkick/trailer.mp4",
        "assets/works/vrkick/trailer2.mp4",
        "assets/works/vrkick/ac5e5ccb.webp",
        "assets/works/vrkick/b5b5a7cd.webp",
        "assets/works/vrkick/10d1f411.webp"
    ]
},
{
        cat: "展場互動裝置",
        title: "周處除三害－即時人臉合成互動",
        desc: "Webcam 拍照即時合成《周處除三害》風格通緝單，TTXC 未來訊號站展出。",
        tags: ["Android" , "PC" , "多人連線","Webcam"],
        image: "assets/works/zhouchu/03e32dcf.webp",
        details: "TTXC 未來訊號站（高雄流行音樂中心）的展場互動裝置。參與者站到 Webcam 前拍照，系統即時擷取臉部並合成到電影《周處除三害》風格的通緝單上，可以列印，或用手機掃碼下載。\n\n專案資訊\n・展出：TTXC 未來訊號站（高雄流行音樂中心）\n・形式：Webcam＋Android 平板操作介面\n\n開發內容\n・Webcam 即時人臉擷取與通緝單影像合成\n・Android 平板操作介面，透過網路連線控制主機拍照與輸出\n・多台裝置連線至同一台主機\n・成品列印與手機掃碼下載\n相關報導：https://n.yam.com/Article/20231003546536",
    titleEn: "The Pig, the Snake and the Pigeon — Live Face Swap",
    descEn: "A webcam photo booth that puts your face on a wanted poster from the film, shown at TTXC Future Signal.",
    detailsEn: "An interactive installation at TTXC Future Signal (Kaohsiung Music Center). Visitors take a photo in front of a webcam, and the system instantly captures their face and composites it onto a wanted poster styled after the film The Pig, the Snake and the Pigeon, ready to print or download by scanning a QR code.\n\nProject\n・Shown at: TTXC Future Signal (Kaohsiung Music Center)\n・Format: webcam + Android tablet control UI\n\nDevelopment\n・Real-time face capture from the webcam and wanted-poster compositing\n・Android tablet UI that controls photo capture and output over the network\n・Multiple devices connected to one host\n・Printing and QR code download\nPress: https://n.yam.com/Article/20231003546536",
        gallery: [
            "assets/works/zhouchu/03e32dcf.webp",
            "assets/works/zhouchu/040635a4.webp",
            "assets/works/zhouchu/dfc28ad2.webp",
        ]
    },
{
    cat: "展場互動裝置",
    title: "此時此刻－雷達感測投影互動牆",
    desc: "雷達感測投影牆上的配對消除遊戲，TTXC 未來訊號站展出。",
    tags: ["PC","雷達","投影互動"],
    image: "assets/works/herenow/8ae18c36.webp",
    details: "TTXC 未來訊號站的投影互動牆。牆面上投影出配對遊戲，觀眾伸手點選兩個相同的圖案就能消除；牆前由雷達掃出一道感測平面，手伸進去就算觸碰，不必碰到牆面，多人可以同時遊玩。\n\n專案資訊\n・展出：TTXC 未來訊號站（高雄流行音樂中心）\n・形式：大型投影牆＋雷達感測\n\n開發內容\n・雷達感測平面座標轉換為投影畫面上的觸控點，支援多點同時觸控\n・配對消除遊戲玩法\n相關報導：https://n.yam.com/Article/20231003546536",
    titleEn: "Here and Now — Radar-Sensing Projection Wall",
    descEn: "A tile-matching game on a radar-sensing projection wall, shown at TTXC Future Signal.",
    detailsEn: "An interactive projection wall at TTXC Future Signal. A matching game is projected on the wall, and visitors reach out to tap two identical tiles to clear them. A radar scans a sensing plane in front of the wall, so reaching into it counts as a touch — no need to touch the wall itself — and several people can play at once.\n\nProject\n・Shown at: TTXC Future Signal (Kaohsiung Music Center)\n・Format: large projection wall + radar sensing\n\nDevelopment\n・Maps radar sensing-plane coordinates to touch points on the projection, with multi-touch\n・Tile-matching gameplay\nPress: https://n.yam.com/Article/20231003546536",
    gallery: [
        "assets/works/herenow/8ae18c36.webp",
        "assets/works/herenow/346e7a0d.webp",
        "assets/works/herenow/2d56281a.webp"
    ]
},
{
    cat: "展場互動裝置",
    title: "紅外線雷射投影互動牆",
    desc: "紅外線雷射感測的投影牆射氣球遊戲。",
    tags: ["PC" ,"Sensor" , "投影互動"],
    image: "assets/works/irwall/55400934.webp",
    details: "投影牆上的射氣球遊戲。牆前由紅外線雷射形成一道感測平面，玩家擊中牆上飄動的氣球就會爆破，多人可以同時遊玩。\n\n專案資訊\n・形式：大型投影牆＋紅外線雷射感測\n\n開發內容\n・紅外線雷射感測平面座標轉換為投影畫面上的擊中點，支援多點同時偵測\n・射氣球遊戲玩法：氣球生成、飄動與爆破判定",
    titleEn: "Infrared Laser Projection Wall",
    descEn: "A balloon-popping game on an infrared laser-sensing projection wall.",
    detailsEn: "A balloon-popping game on a projection wall. An infrared laser forms a sensing plane in front of the wall, and balloons floating on the wall pop when players hit them; several people can play at once.\n\nProject\n・Format: large projection wall + infrared laser sensing\n\nDevelopment\n・Maps infrared sensing-plane coordinates to hit points on the projection, with multi-point detection\n・Balloon gameplay: spawning, floating and pop detection",
    gallery: ["assets/works/irwall/55400934.webp"]
},
{
    cat: "展場互動裝置",
    title: "澳門神秘房－穿戴感測體感互動",
    desc: "腰間配戴藍牙感測器的雙人體感競速，身體擺動越快、前進越快。",
    tags: ["PC", "Sensor", "藍牙", "投影互動"],
    image: "assets/works/macau/a6d9cece.webp",
    details: "雙人體感競速的投影互動裝置。兩位玩家腰間各戴一顆感測器，用力擺動身體，擺得越快，投影畫面中的角色前進越快，先抵達終點的一方獲勝。\n\n專案資訊\n・形式：投影＋穿戴式感測器（腰部）\n・人數：2 人同時對戰\n\n開發內容\n・藍牙接收兩組穿戴感測器的數據，即時計算擺動速度\n・擺動速度換算為角色前進速度的競速玩法\n・雙人同時連線與勝負判定",
    titleEn: "Macau Mystery Room — Wearable Sensor Race",
    descEn: "A two-player motion race with Bluetooth sensors worn at the waist — the faster you sway, the faster you go.",
    detailsEn: "A two-player motion racing installation with projection. Each player wears a sensor at the waist and sways their body hard — the faster they sway, the faster their character runs on the projection, and the first to the finish line wins.\n\nProject\n・Format: projection + wearable sensors (waist)\n・Players: 2, head to head\n\nDevelopment\n・Receives data from two wearable sensors over Bluetooth and computes sway speed in real time\n・Racing gameplay that converts sway speed into running speed\n・Simultaneous two-player connection and win detection",
    gallery: [
        "assets/works/macau/a6d9cece.webp",
        "assets/works/macau/1d4a623a.webp",
        "assets/works/macau/fecb13b4.webp"
    ]
},
{
    cat: "展場互動裝置",
    title: "見山－嗅覺 VR 藝術展演",
    desc: "SBIR 計畫作品，VR 畫作場景搭配 VAQSO 氣味裝置，於高科大、南紡與長庚醫院展出。",
    tags: ["PC", "VR", "Sensor", "氣味"],
    image: "assets/works/jianshan/7bcc71a6.webp",
    details: "2018 年 SBIR 計畫作品。將資深畫家張立曄的畫作轉化為 VR 場景，詮釋「見山是山、見山不是山、見山又是山」的意境；頭盔上加裝 VAQSO 氣味裝置，隨場景釋放森林、海洋、花香等氣味，讓觀眾同時看見、聽見、聞到畫中世界。\n\n專案資訊\n・計畫：2018 SBIR（小型企業創新研發計畫）\n・設備：VR＋VAQSO 氣味裝置\n・展出：高雄科技大學、南紡購物中心、長庚醫院（提供病患體驗）\n\n開發內容\n・依畫作建構 VR 場景\n・Unity 依場景進度控制 VAQSO 釋放對應氣味",
    titleEn: "Seeing Mountains — VR Art with Scent",
    descEn: "An SBIR project: VR scenes from paintings with a VAQSO scent device, shown at NKUST, Tainan Park Mall and Chang Gung Memorial Hospital.",
    detailsEn: "A 2018 SBIR project. Paintings by veteran artist Chang Li-Yeh are turned into VR scenes that interpret the Zen saying \"first mountains are mountains, then mountains are not mountains, then mountains are mountains again\". A VAQSO scent device on the headset releases forest, ocean and floral scents as the scenes change, so viewers see, hear and smell the world of the paintings.\n\nProject\n・Program: 2018 SBIR (Small Business Innovation Research)\n・Hardware: VR + VAQSO scent device\n・Shown at: National Kaohsiung University of Science and Technology, Tainan Park Mall, Chang Gung Memorial Hospital (for patients)\n\nDevelopment\n・VR scenes built from the paintings\n・Unity triggers matching VAQSO scents as the scenes progress",
    gallery: [
        "assets/works/jianshan/7bcc71a6.webp",
        "assets/works/jianshan/55f1aa85.webp",
        "assets/works/jianshan/27ef484d.webp"
    ]
},
{
    cat: "展場互動裝置",
    title: "便利商店商品夾娃娃機",
    desc: "以便利商店商品為獎品的雙人分割畫面夾娃娃機遊戲。",
    tags: ["PC"],
    image: "assets/works/claw/7292a40e.webp",
    details: "以便利商店商品為主題的夾娃娃機遊戲。一台螢幕分割成左右兩半，兩位玩家各自操作一台夾娃娃機，移動爪子、看準時機夾起商品。\n\n專案資訊\n・形式：單一螢幕左右分割\n・人數：2 人同時遊玩\n\n開發內容\n・夾娃娃機爪子的移動、下降與夾取物理\n・雙人分割畫面與各自獨立的操作\n・商品模型與展示",
    titleEn: "Convenience Store Claw Machine",
    descEn: "A two-player split-screen claw machine game with convenience store products as prizes.",
    detailsEn: "A claw machine game themed around convenience store products. One screen is split in two, and each player runs their own claw machine — move the claw and time the drop to grab a product.\n\nProject\n・Format: single screen, split left and right\n・Players: 2 at once\n\nDevelopment\n・Claw movement, drop and grab physics\n・Two-player split screen with independent controls\n・Product models and display",
    gallery: ["assets/works/claw/7292a40e.webp"]
},
{
    cat: "展場互動裝置",
    title: "酒吧多人互動賽馬",
    desc: "酒吧顧客用手機 App 連線，狂點加速讓自己的馬衝線，最多 8 人同場。",
    tags: ["PC", "App", "Server", "Client"],
    image: "assets/works/horserace/9e64fa5a.webp",
    details: "為酒吧設計的多人賽馬遊戲。顧客掃 QR Code 開啟手機 App 加入比賽、選一匹自己的馬，比賽開始後不停點擊螢幕幫馬加速，大螢幕即時顯示賽況，最多 8 人同場競賽。\n\n專案資訊\n・形式：大螢幕＋手機 App\n・人數：最多 8 人\n\n開發內容\n・手機 App：掃碼加入、選馬、點擊加速\n・Server-Client 架構，即時接收各玩家的點擊並同步賽況\n・大螢幕賽況顯示與名次判定",
    titleEn: "Bar Horse Racing",
    descEn: "Bar guests join with a phone app and tap like mad to push their horse to the finish — up to 8 per race.",
    detailsEn: "A multiplayer horse racing game designed for bars. Guests scan a QR code to open the phone app, join a race and pick a horse; once the race starts they keep tapping to speed it up, with the race shown live on the big screen. Up to 8 players per race.\n\nProject\n・Format: big screen + phone app\n・Players: up to 8\n\nDevelopment\n・Phone app: QR join, horse selection, tap to boost\n・Client-server architecture receiving every player's taps in real time and syncing the race\n・Big-screen race display and ranking",
    gallery: [
        "assets/works/horserace/trailer.mp4","assets/works/horserace/9e64fa5a.webp"]
},
{
    cat: "展場互動裝置",
    title: "廚師接物體感遊戲",
    desc: "為屏東大學課程規劃的 Webcam 體感範例，用手接住食材、避開不能接的東西。",
    tags: ["PC", "體感互動"],
    image: "assets/works/chef/dd235e21.webp",
    details: "為屏東大學課程規劃的教學範例。玩家站在 Webcam 前，用手控制虛擬廚師接住從上方掉下來的食材，同時要避開不能接的東西，考驗反應與判斷。\n\n專案資訊\n・用途：屏東大學課程教學內容\n・設備：Webcam（免穿戴）\n\n開發內容\n・Webcam 手部偵測，將手的位置對應到遊戲中的廚師\n・掉落物生成：可接的食材與不能接的物品\n・接物判定",
    titleEn: "Chef Catch Motion Game",
    descEn: "A webcam motion game built for a National Pingtung University course — catch the food, dodge the rest.",
    detailsEn: "A teaching example built for a National Pingtung University course. Players stand in front of a webcam and use their hands to move a virtual chef who catches falling food while dodging things that shouldn't be caught, testing reflexes and judgment.\n\nProject\n・Use: course material at National Pingtung University\n・Hardware: webcam (nothing to wear)\n\nDevelopment\n・Webcam hand detection mapping hand position to the chef\n・Falling objects: catchable food and items to avoid\n・Catch detection",
    gallery: ["assets/works/chef/dd235e21.webp"]
},
{
    cat: "文化與數位保存",
    title: "排灣族文化園區－3DGS 數位保存",
    desc: "以 3D Gaussian Splatting 重建原住民文化園區，VR 語音導覽。",
    tags: ["GaussianSplatting", "VR"],
    image: "assets/works/aborigines/a4ca83fd.webp",
    details: "以 3D Gaussian Splatting（3DGS）技術重建原住民文化園區的各個景點，在 VR 中身歷其境地走訪園區，並搭配語音導覽介紹排灣族文化。上方 6 個場景可以直接在網頁上旋轉瀏覽。\n\n開發內容\n・自行訓練 3DGS 模型，重建園區各景點\n・3DGS 場景於 VR 中即時渲染\n・VR 導覽與語音解說",
    titleEn: "Paiwan Cultural Park — 3DGS Digital Preservation",
    descEn: "An Indigenous cultural park reconstructed with 3D Gaussian Splatting, explored in VR with an audio guide.",
    detailsEn: "Each site of the Indigenous cultural park is reconstructed with 3D Gaussian Splatting (3DGS). Visitors explore the park in immersive VR while an audio guide introduces Paiwan culture. The 6 scenes above can be orbited right here in the browser.\n\nDevelopment\n・Trained the 3DGS models in-house to reconstruct each site\n・Real-time 3DGS rendering in VR\n・VR guided tour with voice narration",
    // 3DGS 場景（相機參數取自官網 works/cases.json）
    scenes: [
        { slug: "paiwan-stele", name: "排灣族石碑", nameEn: "Paiwan Stele", kind: "env", target: [-0.376, 1.159, -4.798], eye: [0.374, 2.959, 4.773], minDist: 4.4, maxDist: 11.23, azRange: 1.0 },
        { slug: "nanhe-ancestral-house", name: "南和村祖靈屋", nameEn: "Nanhe Village Ancestral House", kind: "env", target: [0.598, 1.001, -2.943], eye: [-1.314, 2.801, 6.465], minDist: 4.4, maxDist: 11.23, azRange: 1.0 },
        { slug: "secret-garden", name: "祕密花園", nameEn: "Secret Garden", kind: "obj", target: [0.008, 2.7, -5.787], eye: [1.1, 5.4, 7.0], minDist: 4.5, maxDist: 17, azRange: null, maxPolar: 0.47 },
        { slug: "wood-figure", name: "木雕人像", nameEn: "Wood-Carved Figure", kind: "obj", target: [-0.04, 1.04, -1.81], eye: [0.031, 1.712, 1.382], minDist: 1.14, maxDist: 5.22, azRange: null },
        { slug: "requiem", name: "安魂曲", nameEn: "Requiem", kind: "obj", target: [-0.245, 1.265, -1.135], eye: [0.706, 2.214, 3.27], minDist: 1.61, maxDist: 7.37, azRange: null },
        { slug: "millennium-code", name: "千年密碼", nameEn: "Millennium Code", kind: "obj", target: [-0.3, 0.25, -1.125], eye: [0.937, 1.261, 3.516], minDist: 1.72, maxDist: 7.85, azRange: null }
    ].map(s => ({ ...s, src: `assets/works/aborigines/gs/${s.slug}.spz`, cover: `assets/works/aborigines/covers/${s.slug}.webp` })),
    gallery: [
        "assets/works/aborigines/a4ca83fd.webp",
        "assets/works/aborigines/21112ea1.webp"
    ]
},
{
    cat: "文化與數位保存",
    title: "西港慶安宮－VR 廟宇文化導覽",
    desc: "VR 走進台南西港慶安宮，認識廟宇建築、天上聖母與王船文化。",
    tags: ["VR"],
    image: "assets/works/temple/e2b23577.webp",
    details: "文化推廣計畫作品。以 3D 建模重現台南西港慶安宮的廟宇建築與天上聖母神像，玩家戴上 VR 頭盔就能在廟中自由走動，近距離認識廟宇文化，並透過動畫看見王船等傳統信仰的樣貌。\n\n專案資訊\n・類型：計畫案\n\n開發內容\n・廟宇建築與神像 3D 建模場景\n・VR 自由走動導覽\n・王船與傳統儀式動畫演出",
    titleEn: "Xigang Qing'an Temple — VR Temple Tour",
    descEn: "Step into Qing'an Temple in Xigang, Tainan, in VR to explore its architecture, the Heavenly Mother and the royal boat tradition.",
    detailsEn: "A cultural promotion project. Qing'an Temple in Xigang, Tainan, and its statue of the Heavenly Mother (Mazu) are recreated with 3D modeling. With a VR headset, visitors walk freely around the temple, take a close look at temple culture, and see traditions such as the royal boat brought to life through animation.\n\nProject\n・Type: government-funded project\n\nDevelopment\n・3D-modeled temple architecture and deity statue\n・Free-roaming VR tour\n・Animated royal boat and traditional rituals",
    gallery: [
        "assets/works/temple/e2b23577.webp",
        "assets/works/temple/5c7f8365.webp"
    ]
},
{
    cat: "文化與數位保存",
    title: "台南老街－VR 文化導覽",
    desc: "VR 走訪台南 4 條老街，Kinect 捕捉真人導覽員動作，中越雙語導覽。",
    tags: ["Kinect", "VR"],
    image: "assets/works/tainan/122301b8.webp",
    details: "文化推廣計畫作品。數位重建台南 4 條老街與 30 處商家景點，讓越南學生戴上 VR 頭盔走訪老街、認識台南文化。導覽員站在 Kinect 前講解，動作即時套用到 VR 中的虛擬導覽員身上，並提供中文與越南語雙語導覽。上方 12 個模型可以直接在網頁上旋轉瀏覽。\n\n專案資訊\n・類型：計畫案\n・設備：VR＋Kinect\n・對象：越南學生\n\n開發內容\n・4 條老街與 30 處商家景點的 3D 場景\n・Kinect 骨架捕捉：導覽員的動作即時驅動 VR 中的虛擬導覽員\n・中文／越南語雙語導覽",
    titleEn: "Tainan Old Streets — VR Cultural Tour",
    descEn: "Tour 4 old streets of Tainan in VR, with a live guide captured by Kinect and Chinese / Vietnamese narration.",
    detailsEn: "A cultural promotion project. Four old streets of Tainan and 30 local shops and landmarks are digitally rebuilt so Vietnamese students can walk the streets in VR and learn about Tainan culture. A live guide speaks in front of a Kinect, and their movements drive a virtual guide in VR in real time, with narration in both Chinese and Vietnamese. The 12 models above can be orbited right here in the browser.\n\nProject\n・Type: government-funded project\n・Hardware: VR + Kinect\n・Audience: Vietnamese students\n\nDevelopment\n・3D scenes of 4 old streets and 30 shops and landmarks\n・Kinect skeleton capture: the guide's movements drive the virtual guide in VR in real time\n・Chinese / Vietnamese bilingual narration",
    // 老街建築模型（GLB，從 Unity 專案轉出）
    scenes: [
        { slug: "anping-shrimp-roll", name: "周氏蝦捲（安平）", nameEn: "Chou's Shrimp Rolls (Anping)" },
        { slug: "anping-tongji", name: "同記豆花（安平）", nameEn: "Tongji Tofu Pudding (Anping)" },
        { slug: "anping-chen-oyster", name: "陳家蚵捲（安平）", nameEn: "Chen's Oyster Rolls (Anping)" },
        { slug: "xinhua-yang-kuei", name: "楊逵文學館（新化）", nameEn: "Yang Kui Literature Museum (Xinhua)" },
        { slug: "xinhua-gongyi", name: "共益冰果室（新化）", nameEn: "Gongyi Ice Shop (Xinhua)" },
        { slug: "xinhua-egg-cake", name: "老攤雞蛋糕（新化）", nameEn: "Old Stall Egg Cakes (Xinhua)" },
        { slug: "qiaonan-beehive-fireworks", name: "鹽水蜂炮（橋南）", nameEn: "Yanshui Beehive Fireworks (Qiaonan)" },
        { slug: "qiaonan-quanli", name: "打鐵舖泉利號（橋南）", nameEn: "Quanli Blacksmith (Qiaonan)" },
        { slug: "qiaonan-yuejin", name: "月津故事館（橋南）", nameEn: "Yuejin Story House (Qiaonan)" },
        { slug: "jingliao-story-house", name: "無米樂故事館（菁寮）", nameEn: "Wumile Story House (Jingliao)" },
        { slug: "jingliao-longtai", name: "隆泰棉被店（菁寮）", nameEn: "Longtai Quilt Shop (Jingliao)" },
        { slug: "jingliao-hexing", name: "和興冰果部（菁寮）", nameEn: "Hexing Ice Shop (Jingliao)" }
    ].map(s => ({ ...s, kind: "obj", model: `assets/works/tainan/models/${s.slug}.glb`, cover: `assets/works/tainan/covers/${s.slug}.webp` })),
    gallery: ["assets/works/tainan/122301b8.webp"]
},
{
        cat: "AI 與跨平台應用",
        title: "智慧哈比－LINE 多模態 AI 助理",
        desc: "Python 開發的 LINE AI 助理，整合 GPT 對話、AI 繪圖、新聞、股市與影片摘要。",
        tags: ["Line", "Python", "AI"],
        image: "assets/works/habi/335cd3b3.webp",
        details: "在 LINE 上直接使用的 AI 助理。傳訊息就能和 GPT 對話、用 DALL-E 畫圖、編輯圖片，也能查即時新聞、看股市圖表，或把影片翻譯並整理成摘要。\n\n專案資訊\n・平台：LINE\n・後端：Python，架設於自有伺服器\n\n開發內容\n・LINE Messaging API 串接，接收與回覆文字、圖片訊息\n・GPT 對話，支援切換不同模型\n・AI 繪圖（DALL-E）與圖像編輯\n・即時新聞查詢、股市數據圖表\n・影片翻譯與摘要\n・功能模組化，方便新增功能",
    titleEn: "Habi — Multimodal AI Assistant on LINE",
    descEn: "A LINE AI assistant in Python with GPT chat, AI image generation, news, stock charts and video summaries.",
    detailsEn: "An AI assistant used right inside LINE. Send a message to chat with GPT, generate images with DALL-E or edit pictures, check live news and stock charts, or translate a video and get a summary.\n\nProject\n・Platform: LINE\n・Back end: Python, self-hosted server\n\nDevelopment\n・LINE Messaging API integration for receiving and replying to text and image messages\n・GPT chat with switchable models\n・AI image generation (DALL-E) and image editing\n・Live news lookup and stock charts\n・Video translation and summaries\n・Modular features that are easy to extend",
        gallery: [
            "assets/works/habi/335cd3b3.webp",
            "assets/works/habi/c4454913.webp",
            "assets/works/habi/c4454913.webp",
            "assets/works/habi/303e2119.webp",
            "assets/works/habi/57d35f3c.webp",
            "assets/works/habi/4f131f68.webp",
            "assets/works/habi/f0e703d9.webp",
            "assets/works/habi/ee873b8a.webp",
            "assets/works/habi/3a44473b.webp",
            "assets/works/habi/3a44473b.webp",
            "assets/works/habi/7f09882b.webp",
            "assets/works/habi/cc865127.webp",
            "assets/works/habi/ef02ffed.webp",
            "assets/works/habi/e019ce89.webp",
            "assets/works/habi/bda17f78.webp"
        ]
    },
{
    cat: "AI 與跨平台應用",
    title: "VR 語音 AI 虛擬助理（LLM）",
    desc: "在 VR 裡用說話和 3D AI 虛擬助理對話，串接 Claude API，語音回覆並同步嘴型與動作。",
    tags: ["PC", "VR", "AI", "LLM", "Claude API"],
    image: "assets/works/llm/e6be5a41.webp",
    details: "在 VR 裡用說話和 3D 虛擬助理對話的技術展示。玩家說話後，語音先轉成文字，再透過 Claude API 產生回覆；回覆以語音念出，虛擬角色同步嘴型與動作，支援多輪對話，會記得前面聊過的內容。\n\n開發內容\n・語音辨識（STT）：將玩家語音轉為文字\n・串接 Claude API 產生回覆，保留對話上下文\n・語音合成（TTS）念出回覆\n・3D 虛擬角色嘴型同步與動作",
    titleEn: "VR Voice AI Assistant (LLM)",
    descEn: "Talk to a 3D AI assistant in VR, powered by the Claude API, with spoken replies and synced lip movement and gestures.",
    detailsEn: "A tech demo of talking to a 3D virtual assistant in VR. The player's speech is transcribed to text and sent to the Claude API for a reply; the reply is spoken aloud while the character's lips and gestures stay in sync. It supports multi-turn conversations and remembers what was said earlier.\n\nDevelopment\n・Speech recognition (STT) turning the player's voice into text\n・Claude API integration for replies, keeping conversation context\n・Text-to-speech (TTS) for spoken replies\n・Lip sync and gestures for the 3D character",
    gallery: ["assets/works/llm/e6be5a41.webp"]
},
{
    cat: "AI 與跨平台應用",
    title: "語音生成 3D 模型－AI 即時建模",
    desc: "在 VR 裡說出想要的東西，AI 即時生成 3D 模型放進場景，並可匯出 FBX。",
    tags: ["VR", "AI", "Shap-E"],
    image: "assets/works/text3d/fe07497e.webp",
    details: "在 VR 裡用說的就能生成 3D 模型。玩家說出想要的物品，語音轉成文字後送到 Shap-E 生成模型，完成後直接出現在 VR 場景中；模型也能匯出成 FBX，交給美術在建模軟體裡精修。\n\n開發內容\n・VR 內語音辨識，將玩家的描述轉成文字\n・串接 Shap-E Text-to-3D，即時生成 3D 模型\n・生成模型即時載入 VR 場景\n・模型匯出 FBX，供後續精修",
    titleEn: "Voice to 3D Model — Real-Time AI Modeling",
    descEn: "Say what you want in VR and AI generates a 3D model into the scene on the spot, exportable as FBX.",
    detailsEn: "Create 3D models in VR just by speaking. The player describes an object, the speech is transcribed and sent to Shap-E to generate a model, which then appears right in the VR scene; models can also be exported as FBX for artists to refine in modeling software.\n\nDevelopment\n・In-VR speech recognition turning the player's description into text\n・Shap-E text-to-3D integration generating models on the fly\n・Loading generated models into the VR scene in real time\n・FBX export for further refinement",
    gallery: [
        "assets/works/text3d/fe07497e.webp",
    ]
},
{
    cat: "AI 與跨平台應用",
    title: "VR 智慧家居監控系統",
    desc: "Arduino 連接實體感測器與家電，在 VR 中監看家中狀態、開關燈與電扇。",
    tags: ["PC", "VR", "Arduino", "Sensor"],
    image: "assets/works/smarthouse/589ec3c0.webp",
    details: "把實體的家連進 VR。Arduino 透過 USB 連接溫濕度感測器與紅外線偵測，再加上攝影機，使用者在 VR 中就能看到家中的即時數據與監視畫面，並直接開關燈和電扇；紅外線偵測到有東西時，VR 內會立刻跳出警示。\n\n專案資訊\n・設備：VR＋Arduino＋實體感測器與家電\n\n開發內容\n・Arduino 以 USB 與 Unity 雙向通訊，讀取感測數據、送出家電控制指令\n・溫濕度數據即時顯示於 VR 場景\n・攝影機即時畫面串入 VR\n・VR 中開關燈與電扇，連動實體家電\n・紅外線偵測觸發 VR 內警示",
    titleEn: "VR Smart Home Monitoring",
    descEn: "Arduino connects real sensors and appliances so you can monitor your home and switch lights and fans from VR.",
    detailsEn: "Bringing a real home into VR. An Arduino connected over USB reads a temperature and humidity sensor and an infrared detector, plus a camera feed, so users can see live readings and camera footage of their home in VR and switch the lights and fan directly; when the infrared detector picks something up, an alert pops up in VR immediately.\n\nProject\n・Hardware: VR + Arduino + real sensors and appliances\n\nDevelopment\n・Two-way USB communication between Arduino and Unity, reading sensor data and sending appliance commands\n・Live temperature and humidity shown in the VR scene\n・Live camera feed in VR\n・Lights and fan switched from VR, controlling the real appliances\n・Infrared detection triggering alerts in VR",
    gallery: [
        "assets/works/smarthouse/trailer.mp4",
        "assets/works/smarthouse/589ec3c0.webp",
        "assets/works/smarthouse/87e662e2.webp"
    ]
},
{
    cat: "AI 與跨平台應用",
    title: "Unity 即時串流遠端控制",
    desc: "把 Unity 畫面即時串流到瀏覽器，手機或電腦就能遠端操作 Unity。",
    tags: ["Android"],
    image: "assets/works/streaming/abc89d2d.webp",
    details: "使用 Unity 的串流套件，把 Unity 執行畫面即時串流到網頁，PC、Android、iOS 瀏覽器都能觀看，並可從網頁回傳操作指令遠端控制 Unity。",
    titleEn: "Unity Live Streaming Remote Control",
    descEn: "Stream a running Unity app to the browser in real time and control it remotely from a phone or PC.",
    detailsEn: "Uses Unity's streaming package to stream a running Unity app to a web page in real time. It can be viewed in PC, Android and iOS browsers, and the page sends input back to control Unity remotely.",
    gallery: [
        "assets/works/streaming/trailer.mp4","assets/works/streaming/abc89d2d.webp"]
},
{
    cat: "AI 與跨平台應用",
    title: "WebAR 網頁擴增實境展示",
    desc: "Unity 製作的 WebAR，手機瀏覽器掃描圖片即可看到 3D 產品模型。",
    tags: ["Android", "AR"],
    image: "assets/works/webar/07eabe1f.webp",
    details: "免安裝 App 的產品 AR 展示。用手機瀏覽器開啟網頁、對準指定圖片，3D 產品模型就會出現在圖片上，並可以縮放、旋轉、移動，從各個角度查看產品。\n\n專案資訊\n・平台：手機瀏覽器（免安裝 App）\n\n開發內容\n・Unity 製作 WebAR，輸出為網頁執行\n・圖片辨識追蹤，3D 模型疊加於辨識圖上\n・觸控縮放、旋轉、移動模型",
    titleEn: "WebAR Product Showcase",
    descEn: "WebAR built with Unity — scan an image in the phone browser to see a 3D product model.",
    detailsEn: "A product AR showcase with no app to install. Open the page in a phone browser and point it at a target image, and a 3D product model appears on top of it; scale, rotate and move the model to view the product from every angle.\n\nProject\n・Platform: mobile browser (no app needed)\n\nDevelopment\n・WebAR built in Unity and exported to run on the web\n・Image tracking with the 3D model anchored on the target image\n・Touch to scale, rotate and move the model",
    gallery: ["assets/works/webar/07eabe1f.webp"]
},
{
    cat: "AI 與跨平台應用",
    title: "AR相框",
    desc: "Unity WebAR 相框，掃描圖片出現虛擬相框，並可換上自己手機裡的照片。",
    tags: ["Android", "AR"],
    image: "assets/works/arframe/d9337d89.webp",
    details: "免安裝 App 的 AR 相框。用手機瀏覽器對準指定圖片，虛擬相框就會出現在圖片上；從手機選一張自己的照片上傳，相框裡的照片立刻換成它。\n\n專案資訊\n・平台：手機瀏覽器（免安裝 App）\n\n開發內容\n・Unity 製作 WebAR，圖片辨識追蹤\n・讀取使用者手機中的本機圖片，即時替換相框內的照片",
    titleEn: "AR Photo Frame",
    descEn: "A Unity WebAR photo frame — scan an image to see a virtual frame and swap in a photo from your phone.",
    detailsEn: "An AR photo frame with no app to install. Point the phone browser at a target image and a virtual frame appears on it; choose a photo from your phone and the picture in the frame changes instantly.\n\nProject\n・Platform: mobile browser (no app needed)\n\nDevelopment\n・WebAR built in Unity with image tracking\n・Loads a local photo from the user's phone and swaps it into the frame in real time",
    gallery: [
        "assets/works/arframe/trailer.mp4",
        "assets/works/arframe/d9337d89.webp"],
},
{
    cat: "AI 與跨平台應用",
    title: "AR萌寵",
    desc: "AR Foundation 手機 App，虛擬貓狗出現在真實桌面上，可餵食、撫摸、丟東西玩耍。",
    tags: ["Android", "AR"],
    image: "assets/works/arpet/12410b5b.webp",
    details: "手機 AR 寵物互動 App。偵測桌面後，虛擬貓狗就出現在真實的桌上，玩家可以餵食、撫摸、丟東西跟牠玩，寵物會依自己的 AI 行為四處走動、做出反應。\n\n專案資訊\n・平台：手機 App（Unity AR Foundation）\n\n開發內容\n・AR Foundation 平面偵測，將寵物放置於真實桌面\n・餵食、撫摸、丟東西等觸控互動\n・寵物 AI 行為：自主移動與互動反應",
    titleEn: "AR Pets",
    descEn: "An AR Foundation mobile app where virtual cats and dogs appear on your real table — feed, pet and play fetch.",
    detailsEn: "A mobile AR pet app. Once a table is detected, virtual cats and dogs appear on the real tabletop; players can feed them, pet them and throw things for them, and the pets wander around and react with their own AI behavior.\n\nProject\n・Platform: mobile app (Unity AR Foundation)\n\nDevelopment\n・AR Foundation plane detection placing pets on the real table\n・Touch interactions: feeding, petting, throwing\n・Pet AI behavior: free roaming and reactions",
    gallery: [
        "assets/works/arpet/12410b5b.webp",
        "assets/works/arpet/2654acb3.webp"
    ]
},
{
    cat: "AI 與跨平台應用",
    title: "VR 虛擬商店遠端下單系統",
    desc: "在 VR 商店裡選購結帳，訂單即時傳到店家主機顯示。",
    tags: ["PC", "VR", "Server"],
    image: "assets/works/vrshop/76772b2e.webp",
    details: "VR 購物與遠端下單系統。顧客在 VR 虛擬商店裡走動、拿起商品查看、放進購物車並結帳；送出的訂單即時傳到店家端的主機，畫面上顯示訂單內容。\n\n開發內容\n・VR 商店場景：走動、拿取商品、購物車與結帳流程\n・訂單資料透過網路傳送至店家主機\n・店家主機接收並顯示訂單資訊\n・簡易資料庫儲存訂單",
    titleEn: "VR Store Remote Ordering",
    descEn: "Shop and check out in a VR store, with orders sent straight to the store's host computer.",
    detailsEn: "A VR shopping and remote ordering system. Customers walk around a virtual store, pick up products to look at them, add them to the cart and check out; the order is sent instantly to the store's host computer and shown on screen.\n\nDevelopment\n・VR store scene: walking, picking up products, cart and checkout flow\n・Order data sent over the network to the store's host\n・Host receives and displays order details\n・Simple database for storing orders",
    gallery: [
        "assets/works/vrshop/trailer.mp4",
        "assets/works/vrshop/76772b2e.webp",
        "assets/works/vrshop/75a594fd.webp"
    ]
}
];

/* =========================================
   2. 個人照片與技能（在這裡修改文字）
   ========================================= */
const PROFILE_PHOTO = 'assets/og/d05bf5ca.jpg';

// 技能清單（由上到下顯示；第一張會放大反白）
/* 技能：name = [中文, English]；items 單一字串代表中英相同，陣列為 [中文, English] */
const SKILLS = [
    { name: ['Unity 開發', 'Unity Development'], items: ['C#', 'Addressable / AssetBundle', ['效能分析與記憶體管理', 'Profiling & Memory'], ['自定義編輯器工具', 'Custom Editor Tools'], 'Timeline / Cinemachine', ['PC / Android / iOS / WebGL / Steam 發行', 'PC / Android / iOS / WebGL / Steam Release']] },
    { name: ['軟體工程', 'Software Engineering'], items: ['C# / Python / JavaScript', ['物件導向程式設計（OOP）', 'Object-Oriented Programming'], ['系統架構設計', 'System Architecture'], ['自訂網路通訊協定設計', 'Custom Network Protocol Design'], 'REST API / HTTP', 'Git (GitHub / GitLab / Gitea / Bitbucket)'] },
    { name: ['VR 虛擬實境', 'Virtual Reality'], items: ['HTC Vive', 'Apple Vision Pro', 'Meta Quest 2 / 3', 'Pico', 'OpenXR / XR Interaction Toolkit', ['手部追蹤', 'Hand Tracking'], ['大空間多人定位', 'Free-roam Multiplayer Tracking'], ['追蹤器道具整合', 'Tracker-based Props'], ['眼動儀整合', 'Eye Tracker Integration'], ['一體機 / PC 串流', 'Standalone / PC Streaming'], ['VR 職業訓練', 'VR Vocational Training']] },
    { name: ['AR / MR', 'Augmented / Mixed Reality'], items: [['圖形辨識', 'Image Tracking'], ['平面偵測', 'Plane Detection'], ['臉部辨識', 'Face Tracking'], 'Quest 3 MR Passthrough', ['MR Utility Kit 空間場景', 'MR Utility Kit Scene'], ['空間錨點', 'Spatial Anchors'], ['場景網格重建', 'Scene Mesh'], ['MR 語音互動', 'MR Voice Interaction'], ['虛實整合', 'Mixed-Reality Integration'], 'WebAR'] },
    { name: ['軟硬體串接', 'Hardware Integration'], items: ['Kinect', 'Webcam', 'Arduino', ['藍牙 BLE 感測器', 'Bluetooth BLE Sensors'], ['體感座椅', 'Motion Seats'], ['紅外線雷射', 'IR Laser'], 'URG / A-GUI', ['USB HID 遙控器（熱插拔）', 'USB HID Controllers (Hot-plug)'], ['IMU 感測器', 'IMU Sensors'], ['雷達', 'Radar'], 'Serial Port'] },
    { name: ['電腦視覺', 'Computer Vision'], items: [['MediaPipe 姿態辨識', 'MediaPipe Pose Estimation'], ['多人同時追蹤', 'Multi-person Tracking'], ['手勢 / 動作判定', 'Gesture / Motion Detection'], ['人臉捕捉合成', 'Face Capture & Compositing'], ['顏色辨識', 'Color Recognition']] },
    { name: ['渲染與 3D', 'Rendering & 3D'], items: ['Shader Graph', 'VFX Graph', ['3D 高斯潑濺（3DGS）', '3D Gaussian Splatting'], ['點雲 PLY', 'PLY Point Clouds'], ['裸視 3D', 'Glasses-free 3D'], ['3D 模型優化', '3D Model Optimization'], ['材質處理', 'Materials'], ['光影設定', 'Lighting Setup'], ['渲染優化', 'Rendering Optimization']] },
    { name: ['多人連線', 'Networking'], items: ['Server / Client', ['區網自動探索', 'LAN Discovery'], ['斷線自動重連', 'Auto Reconnect'], 'WebSocket / Socket.IO', 'WebRTC', 'Steam P2P / Lobby', 'Photon', 'Mirror', 'FishNet', 'UDP / TCP'] },
    { name: ['後端與雲端', 'Backend & Cloud'], items: ['Firebase Auth / Firestore', 'Realtime Database / Storage', ['Steamworks 成就 / 統計', 'Steamworks Achievements / Stats'], ['Steam Cloud 存檔', 'Steam Cloud Saves'], ['綠界 ECPay 金流', 'ECPay Payments']] },
    { name: ['AI 開發', 'AI Development'], items: [['Claude Code AI Agent 開發', 'AI-Agent Coding with Claude Code'], ['多 Agent 平行協作', 'Parallel Multi-agent Workflows'], ['LLM / 生成式 AI 串接', 'LLM / Generative AI Integration'], ['MCP 協作', 'MCP Integration'], ['離線語音辨識 + LLM 評分', 'Offline Speech Recognition + LLM Scoring'], ['AI 配音（GPT-SoVITS / F5-TTS / 台語 TTS）', 'AI Voice (GPT-SoVITS / F5-TTS / Taiwanese TTS)'], ['AI 繪圖 / 生成', 'AI Image Generation'], 'LineBot', 'Claude Code Skill', 'AI Agent'] },
    { name: ['AI 自動化與經營', 'AI Automation & Operations'], items: [['短片自動產線', 'Automated Short-video Pipeline'], ['自動剪輯', 'Auto Editing'], ['排程發布', 'Scheduled Publishing'], ['自動回復', 'Auto Replies'], ['Claude 瀏覽器自動化', 'Claude Browser Automation'], ['自媒體經營', 'Social Media Operations'], ['系統 / 流程管理', 'Systems / Workflow Management']] }
];

/* =========================================
   3. 展區分類（依 tags 與標題自動判斷）
   ========================================= */
const ZONES = ['VR', 'AR', '互動裝置', '遊戲 / App / 工具'];
const ZONE_LETTERS = ['A', 'B', 'C', 'D'];
const CATS = [['遊戲', 'Games'], ['教育訓練與研究', 'Training & Research'], ['展場互動裝置', 'Interactive Installations'], ['文化與數位保存', 'Culture & Heritage'], ['AI 與跨平台應用', 'AI & Cross-platform Apps']];
const CAT_LETTERS = ['A', 'B', 'C', 'D', 'E'];
const PLATFORM_TAGS = ['PC', 'Android', 'IOS', 'Steam'];
const PLATFORM_LABEL = { PC: 'PC', Android: 'Android', IOS: 'iOS', Steam: 'Steam' };
const INSTALLATION_TAGS = ['Kinect', 'Sensor', 'Arduino', '雷達', '體感座椅', '體感互動', '投影互動', 'Webcam', '手部辨識', '眼動'];

function zoneOf(p) {
    if (p.zone && ZONES.includes(p.zone)) return p.zone;   // 想手動指定時，在作品資料加 zone: "VR"（或 AR、互動裝置、遊戲 / App / 工具）
    if (p.tags.includes('VR') || /VR/.test(p.title)) return 'VR';
    if (p.tags.includes('AR') || /AR/.test(p.title)) return 'AR';
    if (p.tags.some(t => INSTALLATION_TAGS.includes(t))) return '互動裝置';
    return '遊戲 / App / 工具';
}

/* 圖庫可放影片（.mp4），封面用同名 .jpg；影片排在最前面 */
const isVid = s => /\.mp4$/i.test(s);
const posterOf = s => s.replace(/\.mp4$/i, '.jpg');
const videosFirst = list => {
    const vids = list.filter(isVid);
    const posters = vids.map(posterOf);
    return [...vids, ...list.filter(s => !isVid(s) && !posters.includes(s))];
};

const PROJECTS = projectData.map((p, i) => {
    const zone = zoneOf(p);
    return {
        ...p,
        index: i,
        no: String(i + 1).padStart(2, '0'),
        zone,
        zi: ZONES.indexOf(zone),
        platforms: p.tags.filter(t => PLATFORM_TAGS.includes(t)).map(t => PLATFORM_LABEL[t]),
        tech: p.tags.filter(t => !PLATFORM_TAGS.includes(t)),
        gallery: videosFirst([...new Set([p.image, ...(p.gallery || [])].filter(Boolean))])
    };
});

/* =========================================
   4. 畫面
   ========================================= */
const $ = id => document.getElementById(id);
const grid = $('grid');
const filters = $('filters');
const detail = $('detail');
const detailBody = $('detail-body');
let filter = 'all';
let current = -1;
let lastFocus = null;

/* ===== 中／英切換 =====
   作品可加 titleEn / descEn / detailsEn，沒有就顯示中文 */
let LANG = 'zh';
try {
    const q = new URLSearchParams(location.search).get('lang');
    LANG = q === 'en' || q === 'zh' ? q : (localStorage.getItem('lang') === 'en' ? 'en' : 'zh');
} catch (e) {}
const T = (zh, en) => (LANG === 'en' ? en : zh);
const L = (p, f) => (LANG === 'en' && p[f + 'En']) || p[f];
const TAG_EN = {
    '3D 列印': '3D printing', 'AI 姿態辨識': 'AI pose tracking', '多人連線': 'Multiplayer', '手機': 'Mobile',
    '手部辨識': 'Hand tracking', '投影互動': 'Projection', '氣味': 'Scent', '眼動': 'Eye tracking', '藍牙': 'Bluetooth',
    '雷達': 'Radar', '體感互動': 'Motion sensing', '體感座椅': 'Motion seat'
};
const tagT = s => (LANG === 'en' && TAG_EN[s]) || s;

function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function linkify(text) {
    return esc(text).replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
}

const visible = () => PROJECTS;
const catIndex = p => CATS.findIndex(c => c[0] === p.cat);

function renderFilters() {
    filters.innerHTML = CATS.map((c, i) => `
        <button type="button" class="zone" data-cat="${i}">
            <span class="letter">${CAT_LETTERS[i]}</span><span class="name">${esc(T(c[0], c[1]))}</span><span class="n">${PROJECTS.filter(p => p.cat === c[0]).length}</span>
        </button>`).join('');
}

const cardHTML = (p, k) => `
        <button type="button" class="card" data-open="${p.index}" style="animation-delay:${Math.min(k, 12) * 30}ms">
            <div class="card-top"><span class="card-no">No.${p.no}</span></div>
            ${p.image
                ? `<div class="card-img"><img src="${esc(p.image)}" alt="" loading="lazy" decoding="async"></div>`
                : `<div class="card-img text-cover"><span>${esc(LANG === 'en' ? L(p, 'title') : (p.cover || p.title))}</span></div>`}
            <h3>${p.icon ? `<img class="card-icon" src="${esc(p.icon)}" alt="">` : ''}${esc(L(p, 'title'))}</h3>
            ${p.award ? `<p class="award"><span class="medal" aria-hidden="true"></span>${esc(p.award)}</p>` : ''}
        </button>`;

function renderGrid() {
    grid.innerHTML = CATS.map((c, i) => `
        <div class="cat" id="cat-${i}">
            <div class="cat-head"><h3><span class="letter">${CAT_LETTERS[i]}</span>${esc(T(c[0], c[1]))}</h3><span>${esc(T(c[1], c[0]))} · ${PROJECTS.filter(p => p.cat === c[0]).length}</span></div>
            <div class="cat-grid">${PROJECTS.filter(p => p.cat === c[0]).map(cardHTML).join('')}</div>
        </div>`).join('');
}


/* 獲獎紀錄（獎狀圖 + 對應作品） */
const AWARDS = [
    {
        year: '2025',
        name: '第十六屆 IIIC 國際創新發明競賽',
        nameEn: '16th International Innovation and Invention Competition (IIIC)',
        medal: '銀牌 Silver Medal',
        medalEn: 'Silver Medal',
        work: 'AI 與 LINE 結合 VR 的環保綠能學習互動系統',
        workEn: 'AI × LINE × VR Green Energy Learning System',
        image: 'assets/awards/iiic-2025-silver.jpg',
        project: 'AI與LINE結合VR的環保綠能學習互動系統'
    },
    {
        year: '2024',
        name: '中華民國新型專利 M652769',
        nameEn: 'Taiwan Utility Model Patent M652769',
        medal: '新型專利',
        medalEn: 'Utility Model Patent',
        work: '互動式網路導覽裝置（共同創作人）',
        workEn: 'Interactive Online Guided Tour Device (co-creator)',
        image: 'assets/awards/patent-m652769.jpg',
        project: 'AI與LINE結合VR的環保綠能學習互動系統'
    }
];

function renderAwards() {
    $('award-list').innerHTML = AWARDS.map(a => {
        const pi = PROJECTS.findIndex(p => p.title === a.project);
        return `
        <article class="award-item">
            <button type="button" class="award-cert" data-zoom="${esc(a.image)}" aria-label="${T('放大獎狀', 'Enlarge certificate')}"><img src="${esc(a.image)}" alt="${esc(a.name)} 獎狀" loading="lazy"></button>
            <div class="award-info">
                <p class="award-year">${esc(a.year)}</p>
                <h3>${esc(T(a.name, a.nameEn))}</h3>
                <p class="award-en">${esc(T(a.nameEn, a.name))}</p>
                <p class="award award-medal"><span class="medal" aria-hidden="true"></span>${esc(T(a.medal, a.medalEn))}</p>
                <dl>
                    <div><dt>${T('作品', 'Project')}</dt><dd>${esc(T(a.work, a.workEn))}</dd></div>
                </dl>
                ${pi >= 0 ? `<button type="button" class="award-open" data-open="${pi}">${T('看作品', 'View project')} No.${PROJECTS[pi].no} →</button>` : ''}
            </div>
        </article>`;
    }).join('');
}

function renderSkills() {
    const zh = t => Array.isArray(t) ? t[0] : t;
    const en = t => Array.isArray(t) ? t[1] : t;
    $('skills').innerHTML = SKILLS.map(s => `
        <div class="skill">
            <h3>${esc(T(s.name[0], s.name[1]))}${s.name[1] !== s.name[0] ? `<small>${esc(T(s.name[1], s.name[0]))}</small>` : ''}</h3>
            ${LANG === 'en'
                ? `<p lang="en">${esc(s.items.map(en).join(', '))}</p>`
                : `<p>${esc(s.items.map(zh).join('、'))}</p>
            <p class="en" lang="en">${esc(s.items.map(en).join(', '))}</p>`}
        </div>`).join('');
}

/* =========================================
   5. 展品說明牌（詳情）
   ========================================= */
function plateHTML(p) {
    return `
        <div class="plate-bar">
            <span>${CAT_LETTERS[catIndex(p)]} — ${esc(T(p.cat, CATS[catIndex(p)][1]))}</span>
            <div class="nav">
                <button type="button" data-prev aria-label="${T('上一件', 'Previous')}">←</button>
                <button type="button" data-next aria-label="${T('下一件', 'Next')}">→</button>
                <button type="button" class="x" data-close aria-label="${T('關閉', 'Close')}">×</button>
            </div>
        </div>
        <div class="detail-scroll">
            <div class="plate-no">No.<span>${p.no}</span></div>
            <div class="plate-title">
                ${p.icon ? `<img class="plate-icon" src="${esc(p.icon)}" alt="">` : ''}
                <h2>${esc(L(p, 'title'))}</h2>
            </div>
            ${p.award ? `<p class="award plate-award"><span class="medal" aria-hidden="true"></span>${esc(p.award)}</p>` : ''}
            ${p.link ? `<a class="plate-link" href="${esc(p.link.url)}" target="_blank" rel="noopener noreferrer">${esc(T(p.link.label, p.link.labelEn || p.link.label))} ↗</a>` : ''}
            ${p.gallery.length ? heroHTML(p.gallery[0], L(p, 'title')) : ''}
            ${p.gallery.length > 1 ? `<div class="thumbs">${p.gallery.map((g, i) => `
                <button type="button" data-img="${esc(g)}" class="${[i === 0 ? 'current' : '', isVid(g) ? 'vid' : ''].join(' ').trim()}" aria-label="${isVid(g) ? '影片' : '圖片'} ${i + 1}">
                    <img src="${esc(isVid(g) ? posterOf(g) : g)}" alt="" loading="lazy">
                </button>`).join('')}</div>` : ''}
            ${p.scenes ? `<div class="scenes">${p.scenes.map((s, si) => `
                <button type="button" class="scene" data-scene="${si}" aria-label="${esc(T(s.name, s.nameEn || s.name))}（3D）">
                    <span class="scene-media"><img src="${esc(s.cover)}" alt="" loading="lazy" decoding="async"></span>
                    <span class="scene-cap"><span class="scene-no">${String(si + 1).padStart(2, '0')}</span><span class="scene-name">${esc(T(s.name, s.nameEn || s.name))}</span><span class="orbit" aria-hidden="true"></span></span>
                </button>`).join('')}</div>` : ''}
            <dl class="spec">
                <div><dt>${T('平台', 'Platform')}</dt><dd>${esc(p.platforms.map(tagT).join(T('、', ', ')) || '—')}</dd></div>
                <div><dt>${T('技術', 'Tech')}</dt><dd>${esc(p.tech.map(tagT).join(T('、', ', ')) || '—')}</dd></div>
            </dl>
            <p class="lead">${esc(L(p, 'desc'))}</p>
            <p class="body">${linkify(L(p, 'details') || '')}</p>
        </div>`;
}

function open(index) {
    if (detail.hidden) lastFocus = document.activeElement;
    current = index;
    detailBody.innerHTML = plateHTML(PROJECTS[index]);
    detailBody.setAttribute('aria-label', L(PROJECTS[index], 'title'));
    detail.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => detail.classList.add('open'));
    const closeBtn = detailBody.querySelector('[data-close]');
    if (closeBtn) closeBtn.focus({ preventScroll: true });
    history.replaceState(null, '', '#p' + (index + 1));
}

function close() {
    detailBody.querySelectorAll('video').forEach(v => v.pause());
    detail.classList.remove('open');
    document.body.style.overflow = '';
    history.replaceState(null, '', location.pathname + location.search);
    setTimeout(() => { if (!detail.classList.contains('open')) detail.hidden = true; }, 300);
    if (lastFocus) lastFocus.focus({ preventScroll: true });
}

function step(dir) {
    const list = visible();
    const k = list.findIndex(p => p.index === current);
    const next = list[(k + dir + list.length) % list.length];
    if (next) open(next.index);
}

/* =========================================
   6. 事件
   ========================================= */
/* 放大看圖 */
const lightbox = $('lightbox');
const lbImg = $('lb-img');
let lbList = [];
let lbIdx = 0;
let lbFree = false;   // true：不是從作品詳情打開的，不用同步大圖

function heroHTML(src, title) {
    return isVid(src)
        ? `<video class="detail-hero" src="${esc(src)}" poster="${esc(posterOf(src))}" controls playsinline preload="metadata"></video>`
        : `<img class="detail-hero" src="${esc(src)}" alt="${esc(title)}">`;
}
function heroList() {
    const p = PROJECTS[current];
    return (p.gallery.length ? p.gallery : [p.image]).filter(s => !isVid(s));
}
function showHero(src) {
    const hero = detailBody.querySelector('.detail-hero');
    if (hero && hero.getAttribute('src') !== src) hero.outerHTML = heroHTML(src, PROJECTS[current].title);
    detailBody.querySelectorAll('[data-img]').forEach(b => b.classList.toggle('current', b.dataset.img === src));
}
function lbShow(i) {
    lbIdx = (i + lbList.length) % lbList.length;
    lbImg.src = lbList[lbIdx];
    lightbox.classList.remove('actual');
    lightbox.scrollTo(0, 0);
    if (!lbFree) showHero(lbList[lbIdx]);
}
function lbOpen() {
    const hero = detailBody.querySelector('.detail-hero');
    lbList = heroList();
    lbFree = false;
    lightbox.classList.toggle('single', lbList.length < 2);
    lbShow(Math.max(0, lbList.indexOf(hero.getAttribute('src'))));
    lightbox.hidden = false;
    requestAnimationFrame(() => lightbox.classList.add('open'));
    lightbox.querySelector('[data-lb-close]').focus({ preventScroll: true });
}
function lbOpenList(list, i) {
    lbList = list;
    lbFree = true;
    lightbox.classList.toggle('single', lbList.length < 2);
    lbShow(i);
    lightbox.hidden = false;
    requestAnimationFrame(() => lightbox.classList.add('open'));
    lightbox.querySelector('[data-lb-close]').focus({ preventScroll: true });
}
function lbClose() {
    lightbox.classList.remove('open', 'actual');
    lightbox.hidden = true;
    const hero = detailBody.querySelector('.detail-hero');
    if (hero) hero.focus({ preventScroll: true });
}

lightbox.addEventListener('click', e => {
    e.stopPropagation();
    if (e.target.closest('[data-lb-prev]')) return lbShow(lbIdx - 1);
    if (e.target.closest('[data-lb-next]')) return lbShow(lbIdx + 1);
    if (e.target === lbImg) return lightbox.classList.toggle('actual');
    lbClose();
});

/* 3DGS 場景：點開才載入檢視器；滑過先在背景下載 */
const gsModule = () => import('./gsviewer.js?v=20261121zzp');
const gsPrefetched = new Set();
document.addEventListener('pointerover', e => {
    const b = e.target.closest('[data-scene]');
    if (!b) return;
    const s = PROJECTS[current].scenes[+b.dataset.scene];
    gsModule().then(m => m.loadEngine());
    const u = s.src || s.model;
    if (!gsPrefetched.has(u)) { gsPrefetched.add(u); fetch(u, { priority: 'low' }).catch(() => gsPrefetched.delete(u)); }
});

document.addEventListener('click', e => {
    const sc = e.target.closest('[data-scene]');
    if (sc) { const p = PROJECTS[current]; gsModule().then(m => m.openGS(p.scenes, +sc.dataset.scene, L(p, 'title'), sc)); return; }
    if (e.target.closest('img.detail-hero')) { lbOpen(); return; }
    const z = e.target.closest('[data-zoom]');
    if (z) { lbOpenList([z.dataset.zoom], 0); return; }
    const f = e.target.closest('[data-cat]');
    if (f) {
        const sec = $('cat-' + f.dataset.cat);
        scrollTo({ top: sec.getBoundingClientRect().top + scrollY - (document.querySelector('.top')?.offsetHeight || 52) - filters.offsetHeight - 8, behavior: 'smooth' });
        return;
    }
    const o = e.target.closest('[data-open]');
    if (o) { open(Number(o.dataset.open)); return; }
    if (e.target.closest('[data-close]') || e.target === detail) { close(); return; }
    if (e.target.closest('[data-prev]')) { step(-1); return; }
    if (e.target.closest('[data-next]')) { step(1); return; }
    const img = e.target.closest('[data-img]');
    if (img) showHero(img.dataset.img);
});

document.addEventListener('keydown', e => {
    if (document.documentElement.classList.contains('gs-open')) return;
    if (!lightbox.hidden) {
        if (e.key === 'Escape') lbClose();
        if (e.key === 'ArrowRight') lbShow(lbIdx + 1);
        if (e.key === 'ArrowLeft') lbShow(lbIdx - 1);
        return;
    }
    if (detail.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
});

/* =========================================
   7. 初始化
   ========================================= */
document.querySelectorAll('[data-photo]').forEach(el => { el.src = PROFILE_PHOTO; });

/* 靜態文字：元素上有 data-en 就切換（原本的中文記在 data-zh） */
function applyStatic() {
    document.documentElement.lang = T('zh-TW', 'en');
    document.title = T('林唐逸 Tang | Unity × AI × Interactive', 'Tang Lin | Unity × AI × Interactive');
    document.querySelectorAll('[data-en]').forEach(el => {
        if (el.dataset.zh === undefined) el.dataset.zh = el.innerHTML;
        el.innerHTML = LANG === 'en' ? el.dataset.en : el.dataset.zh;
    });
    document.querySelectorAll('[data-en-alt]').forEach(el => {
        if (el.dataset.zhAlt === undefined) el.dataset.zhAlt = el.alt;
        el.alt = LANG === 'en' ? el.dataset.enAlt : el.dataset.zhAlt;
    });
    document.querySelectorAll('[data-count]').forEach(el => { el.textContent = PROJECTS.length; });
    const b = $('lang-toggle');
    if (b) { b.textContent = T('EN', '中'); b.setAttribute('aria-label', T('Switch to English', '切換成中文')); }
}

function renderAll() {
    applyStatic();
    renderFilters();
    renderGrid();
    renderAwards();
    renderSkills();
    if (typeof catObserver !== 'undefined') document.querySelectorAll('.cat').forEach(s => catObserver.observe(s));
}

function setLang(l) {
    LANG = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    const u = new URL(location.href);
    if (u.searchParams.has('lang')) { u.searchParams.set('lang', l); history.replaceState(null, '', u); }
    renderAll();
    if (!detail.hidden && current >= 0) open(current);
}
$('lang-toggle').addEventListener('click', () => setLang(LANG === 'en' ? 'zh' : 'en'));

applyStatic();
renderFilters();
renderGrid();
renderAwards();
const catObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
        if (!en.isIntersecting) return;
        const i = en.target.id.split('-')[1];
        filters.querySelectorAll('[data-cat]').forEach(b => b.classList.toggle('on', b.dataset.cat === i));
    });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('.cat').forEach(s => catObserver.observe(s));
renderSkills();

const hashMatch = location.hash.match(/^#p(\d+)$/);
if (hashMatch && PROJECTS[Number(hashMatch[1]) - 1]) open(Number(hashMatch[1]) - 1);

// 授課照片：點了放大（可左右切換同一區的照片）
document.addEventListener('click', e => {
    const img = e.target.closest('.talk-img img');
    if (!img) return;
    const all = [...document.querySelectorAll('.talk-img img')];
    lbOpenList(all.map(i => i.getAttribute('src')), all.indexOf(img));
});
