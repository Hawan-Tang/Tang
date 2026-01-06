/* =========================================
   1. 資料設定區 (在這裡新增/修改內容)
   ========================================= */
const projectData = [
    {
        title: "NBA BOX 互動體驗",
        desc: "結合 Kinect 體感偵測與 VR 技術的多人連線沉浸式投籃競技系統。",
        tags: ["Android", "PC", "Kinect" , "多人連線" , "手部辨識" , "Server" , "Client"],
        image: "https://valley-astronomy-253.notion.site/image/attachment%3A782bb92b-9b47-4b70-a15e-71b16be87b16%3AS__67469339_0.jpg?table=block&id=2614a175-899a-80bd-8be6-fc37ce511433&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        details: "整合 Kinect 人體骨架追蹤技術與 VR 虛擬實境，建構即時多人連線投籃競技平台。系統採用 Client-Server 架構，實現低延遲的骨架數據傳輸與同步，提供沉浸式的運動體驗。支援手部辨識與精準動作捕捉，適用於展場互動與運動訓練場景。",
        gallery: [
            "https://valley-astronomy-253.notion.site/image/attachment%3A782bb92b-9b47-4b70-a15e-71b16be87b16%3AS__67469339_0.jpg?table=block&id=2614a175-899a-80bd-8be6-fc37ce511433&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3Ae5f340c3-d50d-4274-8669-8a7b2565fed3%3Aimage.png?table=block&id=2614a175-899a-80a3-9413-ee07f569b0de&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=2000&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3A0b931ca8-98b5-4ded-bc6b-207b60021d76%3Aimage.png?table=block&id=2614a175-899a-80bd-92a3-d967f02aa480&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3A8c5fe4ff-a3e2-4e7d-b511-25e10d92ed1e%3Aimage.png?table=block&id=2614a175-899a-8001-8c71-c9aa0159a0b5&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
        ]
    },
    {
        title: "Line智慧哈比",
        desc: "整合多模態 AI 服務的 LineBot 智能助理平台。",
        tags: ["Android" , "Line" , "AI"],
        image: "https://valley-astronomy-253.notion.site/image/attachment%3A335cd3b3-fb88-4313-bf98-43bfc22b677f%3Aimage.png?table=block&id=2614a175-899a-80ce-86bf-dc93b9b60198&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=480&userId=&cache=v2",
        details: "基於 LINE Messaging API 開發的全方位智能服務平台，整合 GPT 對話、AI 繪圖（DALL-E/Midjourney）、圖像編輯、多模型切換等功能。提供即時新聞查詢、股市數據視覺化、影片翻譯與摘要等服務。採用模組化架構設計，支援快速功能擴展與 API 整合。",
        gallery: [
            "https://valley-astronomy-253.notion.site/image/attachment%3A335cd3b3-fb88-4313-bf98-43bfc22b677f%3Aimage.png?table=block&id=2614a175-899a-80ce-86bf-dc93b9b60198&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=2000&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3Ac4454913-c56f-4150-9e78-5c28856a6170%3Aimage.png?table=block&id=2614a175-899a-8094-a925-ee276f463fa5&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=480&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3Ac4454913-c56f-4150-9e78-5c28856a6170%3Aimage.png?table=block&id=2614a175-899a-8094-a925-ee276f463fa5&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=480&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3A303e2119-e431-4d0b-9ffd-b3da0ebe866c%3Aimage.png?table=block&id=2614a175-899a-8083-93e6-e22dc2a21399&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3A57d35f3c-798b-45ca-ae4c-b2f9cbab6458%3Aimage.png?table=block&id=2614a175-899a-803b-af44-fea6d0004306&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=480&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3A4f131f68-19b3-4687-8eac-d11604a75e35%3Aimage.png?table=block&id=2614a175-899a-8047-a280-c1b89a1e07f3&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=580&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3Af0e703d9-12e2-4e83-a258-da00719bb733%3Aimage.png?table=block&id=2614a175-899a-8066-8dd5-eae5925229bc&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=580&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3Aee873b8a-d5a6-431e-a41d-b201fca56290%3Aimage.png?table=block&id=2614a175-899a-80ec-ad11-fa1b1d35b6e4&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=480&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3A3a44473b-8c57-4769-ab08-d7d486bbec26%3Aimage.png?table=block&id=2614a175-899a-80fe-9872-e2a2bb759195&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3A3a44473b-8c57-4769-ab08-d7d486bbec26%3Aimage.png?table=block&id=2614a175-899a-80fe-9872-e2a2bb759195&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3A7f09882b-cba1-4d80-8580-c84fa253f391%3Aimage.png?table=block&id=2614a175-899a-8079-967d-db09b9e3a2b9&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=480&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3Acc865127-aaf7-4ebb-b1df-9ebc8e433ad3%3Aimage.png?table=block&id=2614a175-899a-807e-a59a-f400e2218cb4&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3Aef02ffed-63a6-4313-9dd3-e5d962605898%3Aimage.png?table=block&id=2614a175-899a-8009-9550-d1866d340184&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=580&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3Ae019ce89-5d55-4cdb-b72a-a2f8dcbb284c%3Aimage.png?table=block&id=2614a175-899a-8063-8eae-e62c4c4bd8d7&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=580&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3Abda17f78-171c-4941-bdbd-0077f2bafdd0%3AS__89726979.jpg?table=block&id=2614a175-899a-80b2-8d0e-d6ef91cbdf7e&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=670&userId=&cache=v2"
        ]
    },
    {
        title: "影像互動-周處除三害",
        desc: "基於 Webcam 的即時人臉捕捉與圖像合成互動系統。",
        tags: ["Android" , "PC" , "多人連線","Webcam"],
        image: "https://valley-astronomy-253.notion.site/image/attachment%3A03e32dcf-b2e3-4e21-b8de-def16b353f58%3Aimage.png?table=block&id=18d4a175-899a-8092-814a-f518a176a218&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1070&userId=&cache=v2",
        details: "應用於 TTXC 未來訊號站高雄流行音樂中心的展場互動裝置。系統採用即時影像處理技術，捕捉參與者人臉特徵並合成至客製化通緝單模板。提供即時預覽與輸出功能。\n相關報導：https://n.yam.com/Article/20231003546536",
        gallery: [
            "https://valley-astronomy-253.notion.site/image/attachment%3A03e32dcf-b2e3-4e21-b8de-def16b353f58%3Aimage.png?table=block&id=18d4a175-899a-8092-814a-f518a176a218&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1070&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3A040635a4-896b-4aa0-93e5-bd2abb9e4968%3Aimage.png?table=block&id=18d4a175-899a-8037-9e73-cca076dc1eb2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1110&userId=&cache=v2",
            "https://valley-astronomy-253.notion.site/image/attachment%3Adfc28ad2-8884-4ce1-b077-3d3d9f1dc328%3Aimage.png?table=block&id=18d4a175-899a-80a7-8758-d52ab90879c0&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=780&userId=&cache=v2",
        ]
    },
    {
    title: "影像互動-此時此刻",
    desc: "結合雷達感測的大型投影牆面互動裝置。",
    tags: ["PC","雷達","投影互動"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A8ae18c36-a52a-4a24-b671-b331cb1045e0%3AS__67469340_0.jpg?table=block&id=18d4a175-899a-80f4-8f6b-c96f672ffcb2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "部署於 TTXC 未來訊號站的沉浸式投影互動系統。採用雷達感測技術偵測手部動作，實現非接觸式互動體驗。系統支援多點觸控辨識，適用於大型展場與公共空間互動應用。\n相關報導：https://n.yam.com/Article/20231003546536",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A8ae18c36-a52a-4a24-b671-b331cb1045e0%3AS__67469340_0.jpg?table=block&id=18d4a175-899a-80f4-8f6b-c96f672ffcb2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A346e7a0d-2736-41e5-a672-8b9515ed3f9c%3Aimage.png?table=block&id=18d4a175-899a-8022-99fe-fc213d816b66&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=810&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A2d56281a-b2b0-4da9-ad64-4b247fd6d9b6%3Aimage.png?table=block&id=18d4a175-899a-801f-ac9b-c2fa2b839085&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=700&userId=&cache=v2"
    ]
},
{
    title: "排灣族-原住民文化園區",
    desc: "應用 Gaussian Splatting 技術的文化遺產數位保存專案。",
    tags: ["PC", "GaussianSplatting", "VR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Aa4ca83fd-49a2-44d4-a476-043f4d22c314%3Aimage.png?table=block&id=2614a175-899a-80ca-a547-cd37afad75f2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "採用實景拍攝結合 Gaussian Splatting 3D 重建技術，高精度還原原住民文化園區各景點。支援 VR 沉浸式導覽，提供互動式文化解說功能。技術特點包括高保真度場景重現、即時渲染與跨平台部署能力。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3Aa4ca83fd-49a2-44d4-a476-043f4d22c314%3Aimage.png?table=block&id=2614a175-899a-80ca-a547-cd37afad75f2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A21112ea1-a284-4f3e-96a0-be408ccd9b75%3Aimage.png?table=block&id=2614a175-899a-8021-9c26-d8131fd36f39&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "巧遇ChanceMeet交友交友平台",
    desc: "跨平台即時通訊社交應用，支援文字與語音通話。",
    tags: ["PC", "Android", "IOS"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A476ea911-5d70-48ea-8d3a-59f29dc13981%3Aimage.png?table=block&id=2614a175-899a-808d-ad5d-fab64f2f80c7&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=580&userId=&cache=v2",
    details: "全功能線上社交平台，提供即時文字訊息、語音通話、用戶配對等服務。採用 WebSocket 實現低延遲通訊，支援多媒體內容傳輸。跨平台架構設計，確保 PC、Android、iOS 端一致的使用體驗。\n平台網址：https://chancemeet.me/",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A476ea911-5d70-48ea-8d3a-59f29dc13981%3Aimage.png?table=block&id=2614a175-899a-808d-ad5d-fab64f2f80c7&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=580&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A0b4f53a4-3430-47a1-b0a4-d4ffa9eac4b1%3Aimage.png?table=block&id=2614a175-899a-80d5-8cdf-dc85955ef113&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=660&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3Af1f9347f-8400-4c65-ab37-e5516d3932f6%3Aimage.png?table=block&id=2614a175-899a-8018-95fa-ffafb84a4495&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=660&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A82c0524a-f1c0-47b7-8a07-8010c7170d12%3Aimage.png?table=block&id=2614a175-899a-8055-a0d0-cff9bafa41a8&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=660&userId=&cache=v2"
    ]
},
{
    title: "VR健康監督教學系統",
    desc: "醫護技能培訓的沉浸式 VR 教學平台。",
    tags: ["PC", "VR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A90380ba7-507d-4b28-8796-d6c4809f3bf2%3Aimage.png?table=block&id=2614a175-899a-8027-b200-cbdde1f7b5a5&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "針對健康照護領域開發的 VR 技能訓練系統。結合 3D 動畫演示與文字指引，提供標準化的操作流程教學。支援重複練習與操作評估，有效降低實體訓練成本，適用於醫護教育與在職培訓場景。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A90380ba7-507d-4b28-8796-d6c4809f3bf2%3Aimage.png?table=block&id=2614a175-899a-8027-b200-cbdde1f7b5a5&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "VR打字母",
    desc: "基於 Quest 3 的 VR 互動打字遊戲。",
    tags: ["PC", "VR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A3517ff60-49de-405b-8d6a-3eed57af4ad5%3Aimage.png?table=block&id=2614a175-899a-80f9-a2e4-d846e62a6119&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "利用 Quest 3 開發的教育類 VR 遊戲。玩家透過字母辨識與互動，提升學習趣味性。系統採用物理交互設計，支援自然手勢識別與即時反饋。\nhttps://www.youtube.com/watch?v=oWIHB-oPU1w",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A3517ff60-49de-405b-8d6a-3eed57af4ad5%3Aimage.png?table=block&id=2614a175-899a-80f9-a2e4-d846e62a6119&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"]
},
{
    title: "雲霄飛車體感測驗",
    desc: "VR 暈動症研究專用的眼動追蹤實驗平台。",
    tags: ["PC", "VR", "眼動"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Afaae0e7a-bc52-4c86-92bb-12f4b4e81806%3Aimage.png?table=block&id=2614a175-899a-80a1-8f40-f0683200c7e2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "用於研究 VR 環境中被動運動對人體影響的實驗系統。整合眼動追蹤設備，即時記錄視線數據與瞳孔變化。實驗結束後自動執行 VA（視力）與 CS（對比敏感度）測驗，數據自動匯出為 CSV 格式供後續分析。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3Afaae0e7a-bc52-4c86-92bb-12f4b4e81806%3Aimage.png?table=block&id=2614a175-899a-80a1-8f40-f0683200c7e2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"]
},
{
    title: "星戰海島",
    desc: "結合六軸體感座椅與環境特效的雙人互動射擊體驗。",
    tags: ["PC", "Arduino","體感座椅"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Aef1c8e28-3266-4b73-abf9-3a10cb210708%3Aimage.png?table=block&id=18d4a175-899a-804b-95a2-c52ce0d0ecb6&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "整合六軸體感座椅、Arduino 控制的風扇與噴水裝置，打造多感官沉浸式體驗。支援雙人同時遊玩，座椅動作與遊戲畫面完全同步。適用於主題樂園、展場等商業娛樂場景。\nhttps://www.youtube.com/watch?v=Fwu2r0ctc1U",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3Aef1c8e28-3266-4b73-abf9-3a10cb210708%3Aimage.png?table=block&id=18d4a175-899a-804b-95a2-c52ce0d0ecb6&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A1f045f3e-84af-4fd7-be4d-3adb8771144d%3Aimage.png?table=block&id=18d4a175-899a-8052-9639-dcbcf199b6b9&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1330&userId=&cache=v2"
    ]
},
{
    title: "星戰2",
    desc: "升級版六軸體感座椅射擊遊戲，優化動作同步與畫面表現。",
    tags: ["PC", "Arduino","體感座椅"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A243ed52d-7b1c-4eb3-bac0-0c8735fba156%3Aimage.png?table=block&id=18d4a175-899a-80a0-99ae-feb75d050264&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "星戰系列第二代作品，改進座椅控制算法，提升動作響應速度與平滑度。支援雙人協作模式，大螢幕投影提供更佳視覺體驗。適合商業展演與娛樂場所部署。\nhttps://youtu.be/6mZENhzGQwg?si=zsBQr2_YTJWF8vRh",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A243ed52d-7b1c-4eb3-bac0-0c8735fba156%3Aimage.png?table=block&id=18d4a175-899a-80a0-99ae-feb75d050264&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"]
},
{
    title: "VR踢球",
    desc: "結合 Pico Body Tracker 的全身追蹤 VR 足球遊戲。",
    tags: ["Android" , "Arduino" , "Sensor"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Aac5e5ccb-4862-4d04-bb40-c73d935221d3%3Aimage.png?table=block&id=18d4a175-899a-80ea-ab9c-e908479d41c2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1340&userId=&cache=v2",
    details: "採用 Pico 全身追蹤傳感器，精準捕捉下肢動作實現真實踢球體驗。系統支援腳部動作識別、球體物理模擬與即時反饋。適用於運動訓練、展場互動與娛樂體驗場景。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3Aac5e5ccb-4862-4d04-bb40-c73d935221d3%3Aimage.png?table=block&id=18d4a175-899a-80ea-ab9c-e908479d41c2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1340&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3Ab5b5a7cd-f549-4b58-aa73-c35bd5e226a9%3Aimage.png?table=block&id=18d4a175-899a-80f2-bf94-f8202df0206d&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1280&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A10d1f411-2339-4422-8c5b-5705dad80053%3Aimage.png?table=block&id=18d4a175-899a-801d-b398-f5cb2111ddb4&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1250&userId=&cache=v2"
    ]
},
{
    title: "VR慶安宮互動",
    desc: "台南西港慶安宮數位孿生 VR 文化體驗專案。",
    tags: ["PC","VR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Ae2b23577-b678-4241-be0a-52a696a788a6%3Aimage.png?table=block&id=18d4a175-899a-80af-9180-c57325dff679&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1300&userId=&cache=v2",
    details: "高精度重建台南西港慶安宮建築與天上聖母神像，結合動畫演繹傳統廟宇儀式。玩家可在 VR 環境中體驗參拜、祈福等互動流程，實現文化遺產的數位保存與推廣。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3Ae2b23577-b678-4241-be0a-52a696a788a6%3Aimage.png?table=block&id=18d4a175-899a-80af-9180-c57325dff679&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1300&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A5c7f8365-e03f-41cc-8103-6410e5c87802%3Aimage.png?table=block&id=18d4a175-899a-80c4-b3e7-e0f24e974c4e&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "紅外線雷射互動",
    desc: "基於紅外線雷射感測的大型投影牆面互動系統。",
    tags: ["PC" ,"Sensor" , "投影互動"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A55400934-2f71-4175-b2d3-0020e9891d43%3Aimage.png?table=block&id=18d4a175-899a-8048-97ac-f686f1dab559&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=910&userId=&cache=v2",
    details: "採用紅外線雷射陣列構建觸控平面，實現大尺寸投影牆面的精準互動。系統支援多點同時觸控、手勢識別與即時反饋。適用於展覽、商場、教育等公共互動場景。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A55400934-2f71-4175-b2d3-0020e9891d43%3Aimage.png?table=block&id=18d4a175-899a-8048-97ac-f686f1dab559&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=910&userId=&cache=v2"]
},
{
    title: "WebAR",
    desc: "基於瀏覽器的輕量級 AR 展示解決方案。",
    tags: ["Android", "AR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A07eabe1f-5f1f-47fc-b702-607c3e63e90f%3Aimage.png?table=block&id=18d4a175-899a-8022-9cce-e7b7aacc540c&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=760&userId=&cache=v2",
    details: "無需安裝 App 的 WebAR 應用，支援 3D 模型展示、縮放、旋轉與移動操作。相容主流移動瀏覽器。適用於產品展示、行銷推廣與電商應用。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A07eabe1f-5f1f-47fc-b702-607c3e63e90f%3Aimage.png?table=block&id=18d4a175-899a-8022-9cce-e7b7aacc540c&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=760&userId=&cache=v2"]
},
{
    title: "腳踏車VR",
    desc: "改造實體腳踏車的 VR 騎行模擬訓練系統。",
    tags: ["PC", "Server", "VR", "Android"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A35bff7d8-8905-4ae8-87c3-1f310e89a259%3Aimage.png?table=block&id=18d4a175-899a-80c1-952f-d5bbfac61efd&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "對實體腳踏車進行硬體改造，採集龍頭轉向與踏板轉速數據。透過藍牙傳輸至 VR 頭顯，實現真實騎行體驗。支援多種路線場景與訓練模式，適用於室內健身與競技訓練。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A35bff7d8-8905-4ae8-87c3-1f310e89a259%3Aimage.png?table=block&id=18d4a175-899a-80c1-952f-d5bbfac61efd&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A4b579003-7662-4ff5-9c4d-807fc28a34ba%3Aimage.png?table=block&id=18d4a175-899a-80e7-b2aa-f8c20cf9f6fc&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "即時模型生成AI",
    desc: "語音驅動的 AI 3D 模型快速生成工具。",
    tags: ["PC" ,"AI"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Afe07497e-d56f-4601-9e68-7bc8ac4b6ccb%3Aimage.png?table=block&id=18e4a175-899a-8069-8f4e-e732d14726c0&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1450&userId=&cache=v2",
    details: "整合語音識別與 AI 3D 生成技術，實現語音描述到 3D 模型的即時轉換。系統採用 Text-to-3D 模型生成粗模，支援後續精修與優化。適用於快速原型設計、創意發想與教育演示。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3Afe07497e-d56f-4601-9e68-7bc8ac4b6ccb%3Aimage.png?table=block&id=18e4a175-899a-8069-8f4e-e732d14726c0&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1450&userId=&cache=v2",
    ]
},
{
    title: "中國象棋",
    desc: "創新玩法的多人連線中國象棋競技遊戲。",
    tags: ["PC", "多人連線"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Abc06496b-57c7-43a7-a423-d1b489778e3e%3Aimage.png?table=block&id=18d4a175-899a-8092-8cd1-ffebcf8994bd&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1450&userId=&cache=v2",
    details: "在傳統中國象棋規則基礎上，為每個棋子設計獨特技能系統。支援線上多人對戰、技能策略搭配與即時戰況分析。採用網路同步技術確保公平競技體驗。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3Abc06496b-57c7-43a7-a423-d1b489778e3e%3Aimage.png?table=block&id=18d4a175-899a-8092-8cd1-ffebcf8994bd&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1450&userId=&cache=v2"]
},
{
    title: "台南景點遊",
    desc: "結合 Kinect 與多語言導覽的台南文化 VR 體驗。",
    tags: ["PC", "Kinect" , "VR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A122301b8-c6d4-4511-8f0a-ce93838b70c0%3Aimage.png?table=block&id=18d4a175-899a-8021-9bc4-e850ad3493c2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1450&userId=&cache=v2",
    details: "數位重建台南 4 條老街與 30 處商家景點，提供中文與越南語雙語導覽。整合 Kinect 人體追蹤，將真人動作映射至 3D 虛擬角色。適用於文化推廣、觀光導覽與多元文化教育。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A122301b8-c6d4-4511-8f0a-ce93838b70c0%3Aimage.png?table=block&id=18d4a175-899a-8021-9bc4-e850ad3493c2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1450&userId=&cache=v2"]
},
{
    title: "酒吧-賽馬Demo",
    desc: "酒吧娛樂場景的多人互動賽馬遊戲系統。",
    tags: ["PC", "Arduino", "Server" , "Client"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A9e64fa5a-079c-46c0-bedb-f0bed3ac9bd2%3Aimage.png?table=block&id=18d4a175-899a-80df-8cff-e364b2347684&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "為酒吧環境設計的社交娛樂系統。顧客掃描 QR Code 即可加入遊戲，選擇專屬馬匹參與競賽。大螢幕即時顯示賽況，支援多人同時參與。採用 Server-Client 架構確保穩定運行。\nhttps://www.youtube.com/watch?v=yg5wqPcq2_s",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A9e64fa5a-079c-46c0-bedb-f0bed3ac9bd2%3Aimage.png?table=block&id=18d4a175-899a-80df-8cff-e364b2347684&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"]
},
{
    title: "顏色辨識VR",
    desc: "針對高齡者設計的 VR 色彩辨識能力評估工具。",
    tags: ["PC", "VR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A8933074f-5654-4f22-bdd0-7c1f66cdb55f%3Aimage.png?table=block&id=18d4a175-899a-805c-ac09-d05ef5fab0e8&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "專為高齡族群開發的視覺功能評估系統。透過 VR 環境呈現標準化色彩測試，記錄反應時間與準確率。系統自動生成評估報告，輔助醫療診斷與視力追蹤。\nhttps://www.youtube.com/watch?v=MxLKeJ_AjvU",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A8933074f-5654-4f22-bdd0-7c1f66cdb55f%3Aimage.png?table=block&id=18d4a175-899a-805c-ac09-d05ef5fab0e8&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "AR相框",
    desc: "個人化照片展示的移動端 AR 應用。",
    tags: ["Android", "AR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Ad9337d89-dc33-437f-b2c5-4e577c2df034%3Aimage.png?table=block&id=18d4a175-899a-805a-9c92-f74ac58e7142&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "讀取手機相簿照片並套用至 AR 虛擬相框中展示。支援相框樣式切換、尺寸調整與空間定位。適用於個人紀念、禮品展示與創意攝影場景。\nhttps://www.youtube.com/watch?v=7ONgKjEevW8",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3Ad9337d89-dc33-437f-b2c5-4e577c2df034%3Aimage.png?table=block&id=18d4a175-899a-805a-9c92-f74ac58e7142&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://www.youtube.com/watch?v=7ONgKjEevW8"],
},
{
    title: "智慧屋VR",
    desc: "虛實融合的智慧家居 VR 監控與控制系統。",
    tags: ["PC", "VR", "Arduino", "Sensor"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A589ec3c0-f427-404c-ae66-e3499cadaae3%3Aimage.png?table=block&id=18d4a175-899a-80d8-a95b-fa6e7bedacef&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "整合溫濕度傳感器、攝影機、紅外線偵測等 IoT 設備，將實時數據映射至 VR 虛擬環境。用戶可在 VR 中監控家居狀態並執行遠端控制。展示物聯網與虛擬實境結合的創新應用。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A589ec3c0-f427-404c-ae66-e3499cadaae3%3Aimage.png?table=block&id=18d4a175-899a-80d8-a95b-fa6e7bedacef&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A87e662e2-d471-4c44-94d1-877310362d8b%3Aimage.png?table=block&id=18d4a175-899a-802a-a462-ca51ddefb49a&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "澳門神秘房",
    desc: "結合雷達與 Arduino 的多模態投影互動裝置。",
    tags: ["PC", "Arduino", "Sensor", "雷達", "投影互動"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Aa6d9cece-d6cb-4c67-af5b-3186f8bdb96b%3Aimage.png?table=block&id=18d4a175-899a-806f-8724-c48313771c58&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "為展場設計的沉浸式互動體驗。採用雷達感測手部動作控制投影內容，結合 Arduino 控制的震動反饋裝置。支援多人同時互動，提供豐富的感官刺激與遊戲性。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3Aa6d9cece-d6cb-4c67-af5b-3186f8bdb96b%3Aimage.png?table=block&id=18d4a175-899a-806f-8724-c48313771c58&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A1d4a623a-76f3-415b-8214-246c62f05a7f%3Aimage.png?table=block&id=18d4a175-899a-80d4-a444-fd368c445626&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3Afecb13b4-13a2-496e-a75c-685cc6075297%3Aimage.png?table=block&id=18d4a175-899a-8008-ac0e-f15cec5cb3f8&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "VR無人機證照訓練",
    desc: "符合證照考試標準的 VR 無人機飛行模擬器。",
    tags: ["Android", "VR", "Sensor"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A5cb83e02-ebfd-4973-8bc7-06a0af875d6a%3Aimage.png?table=block&id=18d4a175-899a-80ae-af75-de7d56164f6a&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "依據無人機證照考試設計 7 項術科題目，整合實體遙控器進行操作。VR 環境模擬真實飛行物理與氣象條件，提供安全且經濟的訓練方案。支援成績記錄與錯誤分析功能。\nhttps://www.youtube.com/watch?v=yJ7U0GW7TK0",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A5cb83e02-ebfd-4973-8bc7-06a0af875d6a%3Aimage.png?table=block&id=18d4a175-899a-80ae-af75-de7d56164f6a&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A8fd5554d-9c9f-421f-9542-4307f9b9fe27%3AS__67469347.jpg?table=block&id=18d4a175-899a-8016-8797-e539500aba3c&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=960&userId=&cache=v2"
    ]
},
{
    title: "OpenAI應用",
    desc: "整合 GPT 與語音識別的 VR 智能對話系統。",
    tags: ["PC", "VR" , "AI"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Ae6be5a41-c2e1-4447-8b79-4f1e285301f5%3Aimage.png?table=block&id=18d4a175-899a-80d6-84e1-dc827f02c739&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1450&userId=&cache=v2",
    details: "在 VR 環境中實現與 AI 角色的自然語言對話。整合 OpenAI API 與即時語音轉文字技術，支援多輪對話與上下文理解。適用於虛擬助理、教育訓練與娛樂互動場景。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3Ae6be5a41-c2e1-4447-8b79-4f1e285301f5%3Aimage.png?table=block&id=18d4a175-899a-80d6-84e1-dc827f02c739&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1450&userId=&cache=v2"]
},
{
    title: "魔法夜派對",
    desc: "手勢識別驅動的多人 VR 魔法對戰遊戲。",
    tags: ["PC" , "VR" , "多人連線"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A88bbd2ef-a9b1-435a-b063-dc9f98c4dca9%3Aimage.png?table=block&id=18d4a175-899a-8032-a287-d0680c2041e6&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "採用創新手勢識別技術，玩家揮動手柄施放魔法攻擊敵人。支援多人連線協作，對抗 AI 敵人與 Boss。遊戲場景包含飛行、地面戰鬥等多樣玩法，提供沉浸式奇幻體驗。\nhttps://www.youtube.com/watch?v=iyWmJmWusrI",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A88bbd2ef-a9b1-435a-b063-dc9f98c4dca9%3Aimage.png?table=block&id=18d4a175-899a-8032-a287-d0680c2041e6&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A97f74f7e-6ed1-4881-b2d0-6438b77e7a63%3Aimage.png?table=block&id=18d4a175-899a-80f9-8fe1-d3c4aecbd6cd&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "農村生活",
    desc: "於虛多人社交類 VR 農場模擬經營遊戲。擬實境中與好友體驗農村生活",
    tags: ["PC" , "VR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Aca0a7c90-2b85-4d8f-831d-6b1e6a1e5f3e%3Aimage.png?table=block&id=18d4a175-899a-8096-b52e-df96dc7622a7&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "在 VR 虛擬農場中體驗種植、收穫、養殖等農務活動。支援多人連線協作，共同建設與經營農場。提供休閒放鬆的社交互動體驗。\nhttps://www.youtube.com/watch?v=iXdpxM9fOKY",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3Aca0a7c90-2b85-4d8f-831d-6b1e6a1e5f3e%3Aimage.png?table=block&id=18d4a175-899a-8096-b52e-df96dc7622a7&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"]
},
{
    title: "串流應用",
    desc: "跨平台的雲端串流技術展示方案。",
    tags: ["Android"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Aabc89d2d-db06-46f4-ab2c-6be5c9347f54%3Aimage.png?table=block&id=18d4a175-899a-8028-b0fa-c7085f59ae2c&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "將應用程式畫面串流至 Web 端，支援 PC、Android、iOS 瀏覽器訪問。實現遠端操作與指令回傳，展示雲遊戲與遠端桌面技術的應用潛力。\nhttps://www.youtube.com/watch?v=IPQyYyH5J9k",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3Aabc89d2d-db06-46f4-ab2c-6be5c9347f54%3Aimage.png?table=block&id=18d4a175-899a-8028-b0fa-c7085f59ae2c&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"]
},
{
    title: "Webcam體感互動",
    desc: "基於 Webcam 的即時骨架追蹤互動系統。",
    tags: ["PC" ,"手部辨識"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Afa8f9119-f821-4e19-acb3-8a1e44cb2543%3Aimage.png?table=block&id=18d4a175-899a-8062-bb35-dd370cb5b770&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1220&userId=&cache=v2",
    details: "使用普通 Webcam 在 Unity 中實現人體骨架識別與追蹤。無需額外硬體設備即可實現體感互動，適用於教育、展覽與居家娛樂場景。\nhttps://www.youtube.com/watch?v=GPSfp58lDr8",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3Afa8f9119-f821-4e19-acb3-8a1e44cb2543%3Aimage.png?table=block&id=18d4a175-899a-8062-bb35-dd370cb5b770&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1220&userId=&cache=v2"]
},
{
    title: "全家咖啡機",
    desc: "基於手部追蹤的 VR 咖啡機操作培訓系統。",
    tags: ["Android", "VR", "手部辨識"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A5587401e-21ad-4091-b74b-ab85bae47a0a%3Aimage.png?table=block&id=18d4a175-899a-80af-9501-d4a2510ed1f4&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "使用 Quest 原生手部追蹤功能，模擬全家便利商店咖啡機的完整操作流程。支援手指精細動作識別，提供標準化培訓與考核功能。降低實體設備損耗與培訓成本。\nhttps://www.youtube.com/watch?v=r3i_QCF5fr4",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A5587401e-21ad-4091-b74b-ab85bae47a0a%3Aimage.png?table=block&id=18d4a175-899a-80af-9501-d4a2510ed1f4&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"]
},
{
    title: "全家商品夾娃娃機",
    desc: "商業展示用的大型互動夾娃娃機系統。",
    tags: ["PC"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A7292a40e-6395-4646-83e6-c1f0fb143203%3Aimage.png?table=block&id=18d4a175-899a-80af-a3d1-c20534ac96d3&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1230&userId=&cache=v2",
    details: "部署於全家門市的大尺寸平板互動裝置。顧客可預覽商品並操作虛擬夾娃娃機（支援雙向操作）。結合娛樂性與商品展示功能，提升顧客參與度。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A7292a40e-6395-4646-83e6-c1f0fb143203%3Aimage.png?table=block&id=18d4a175-899a-80af-a3d1-c20534ac96d3&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1230&userId=&cache=v2"]
},
{
    title: "派對遊戲",
    desc: "本地多人同屏競技派對遊戲合集。",
    tags: ["PC"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Add596c89-5516-493c-ad6e-8a337cc7acdd%3Aimage.png?table=block&id=18d4a175-899a-8013-902d-e64e70b84dc2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "包含多款快節奏小遊戲的派對遊戲合集。支援單機多人同屏對戰，適合家庭聚會與朋友聚會場景。遊戲設計簡單易上手，強調競技性與趣味性。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3Add596c89-5516-493c-ad6e-8a337cc7acdd%3Aimage.png?table=block&id=18d4a175-899a-8013-902d-e64e70b84dc2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3Aeb4458ed-2cac-43cf-90f6-945aada43653%3Aimage.png?table=block&id=18d4a175-899a-80ba-8345-e61d1cad514f&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "KRANIA ISLAND骷髏島",
    desc: "大學專題 VR 冒險射擊遊戲作品。",
    tags: ["PC", "VR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A4768f1fe-c503-48a6-a500-8b95c0047e2c%3Aimage.png?table=block&id=18d4a175-899a-80d0-9680-d9d51617d082&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1000&userId=&cache=v2",
    details: "大學專題作品。玩家扮演勇者解救被殭屍佔領的村莊，穿越機關陷阱擊敗敵人。遊戲包含探索、戰鬥與解謎元素，展現 VR 遊戲設計的完整流程。\nhttps://www.youtube.com/watch?v=qP-JP2iVtLQ",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A4768f1fe-c503-48a6-a500-8b95c0047e2c%3Aimage.png?table=block&id=18d4a175-899a-80d0-9680-d9d51617d082&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1000&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A69dcc728-7f67-4783-a6dd-05006afac1d2%3Aimage.png?table=block&id=18d4a175-899a-80cd-be35-e15db62ab839&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1330&userId=&cache=v2"
    ]
},
{
    title: "Jailbreak Simulator監獄模擬器",
    desc: "Steam 平台發行的策略逃獄模擬遊戲。",
    tags: ["PC", "Steam"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A6ab2f4f7-335c-4ea2-87db-34c714f3102a%3Aimage.png?table=block&id=18d4a175-899a-8053-9cb3-ec0dfc466080&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "已上架 Steam 的獨立遊戲作品。玩家扮演囚犯，需結交獄友、躲避警衛、破解機關逃離監獄。遊戲融合策略規劃與動作元素，提供多種逃獄路線選擇。\nhttps://www.youtube.com/watch?v=3pp5XmFDjlg",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A6ab2f4f7-335c-4ea2-87db-34c714f3102a%3Aimage.png?table=block&id=18d4a175-899a-8053-9cb3-ec0dfc466080&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A04fac5ce-4282-4abe-8002-e68304ce974c%3Aimage.png?table=block&id=18d4a175-899a-80ee-a616-f66762c70bec&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "冬季獵人VR Winter Hunter",
    desc: "改造電動槍的商業 VR 射擊體驗。",
    tags: ["PC", "VR", "Arduino", "Sensor"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Abf95d840-b21b-4570-b768-f37de570950d%3Aimage.png?table=block&id=18d4a175-899a-80f3-9775-d3b7dd4c2c3a&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "對電動槍進行 Tracker 改造，實現 VR 中的真實射擊手感。已上架 KOSMOSPOT x VIVELAND VR 虛擬實境樂園。遊戲採用冬季狩獵主題，提供刺激的射擊體驗。\nhttps://www.youtube.com/watch?v=BI5bN2k85D4",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3Abf95d840-b21b-4570-b768-f37de570950d%3Aimage.png?table=block&id=18d4a175-899a-80f3-9775-d3b7dd4c2c3a&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A64ac1a6c-9f1a-4faf-816f-a435e8dc31b2%3Aimage.png?table=block&id=18d4a175-899a-80a2-a367-f048f4793bd5&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "VR工業配線實習",
    desc: "工業配線技能證照 VR 模擬訓練系統。",
    tags: ["PC", "VR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A5c1e28a0-b7e3-4d75-add1-08dbfd2ef589%3Aimage.png?table=block&id=18d4a175-899a-80ab-8de6-d3730550f324&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1220&userId=&cache=v2",
    details: "教育部虛擬實境暨擴增實境教學應用教材開發計畫成果。模擬工業配線證照考試流程與操作環境，提供安全且可重複練習的訓練方案。支援操作評分與錯誤提示功能。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A5c1e28a0-b7e3-4d75-add1-08dbfd2ef589%3Aimage.png?table=block&id=18d4a175-899a-80ab-8de6-d3730550f324&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1220&userId=&cache=v2"]
},
{
    title: "VR運動分析",
    desc: "整合生理監測的 VR 運動遊戲研究平台。",
    tags: ["PC", "VR", "Arduino", "Sensor"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A70022f47-9451-46f6-9563-a8da049c7728%3Aimage.png?table=block&id=18d4a175-899a-8045-ba13-e37b4c6876da&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1250&userId=&cache=v2",
    details: "包含投籃、打鼓、體感測試三款運動遊戲。整合心率傳感器即時監測運動強度，數據用於運動科學研究。系統可評估 VR 運動的健身效果與生理影響。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A70022f47-9451-46f6-9563-a8da049c7728%3Aimage.png?table=block&id=18d4a175-899a-8045-ba13-e37b4c6876da&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1250&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3Ae1308c3f-6402-4580-9392-d0191a2d78ed%3Aimage.png?table=block&id=18d4a175-899a-80fd-8ed4-d689f11f326f&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1240&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A1cf93b6d-1749-426c-a52e-f4700e7ca406%3Aimage.png?table=block&id=18d4a175-899a-80cc-a3e8-cb581900b6b5&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1250&userId=&cache=v2"
    ]
},
{
    title: "VR電腦鑑識工作站",
    desc: "丙級電腦軟體應用證照 VR 模擬考試系統。",
    tags: ["PC"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A8a26a969-cc01-4f5e-a83e-d9ed0cdc4b32%3Aimage.png?table=block&id=18d4a175-899a-80c1-bd9d-c877454e6f24&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "完整模擬丙級電腦軟體應用證照考試環境與題目。在 VR 中操作虛擬電腦完成文書處理、試算表等任務。提供標準化評分與即時反饋，輔助證照考試準備。\nhttps://www.youtube.com/watch?v=mOSg__GbYuY",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A8a26a969-cc01-4f5e-a83e-d9ed0cdc4b32%3Aimage.png?table=block&id=18d4a175-899a-80c1-bd9d-c877454e6f24&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"]
},
{
    title: "見山",
    desc: "結合嗅覺體驗的 VR 藝術創作展演作品。",
    tags: ["Android", "VR", "Arduino", "Sensor"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A7bcc71a6-78d3-4de1-9656-763ef6f10a9e%3Aimage.png?table=block&id=18d4a175-899a-804e-8f80-c2a306a98eb6&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "融合資深畫家張立曄作品的 VR 藝術體驗。整合氣味發生裝置，依據場景釋放森林、海洋、花香等氣味。詮釋「見山是山、見山不是山、見山又是山」的禪意境界，打造視聽嗅多感官藝術體驗。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A7bcc71a6-78d3-4de1-9656-763ef6f10a9e%3Aimage.png?table=block&id=18d4a175-899a-804e-8f80-c2a306a98eb6&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A55f1aa85-417c-4333-afdf-e9f3af2e12e9%3Aimage.png?table=block&id=18d4a175-899a-80ad-84a7-c50223da5ef7&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A27ef484d-d336-4440-8d54-bb780080dd86%3Aimage.png?table=block&id=18d4a175-899a-8069-b028-d1741500c3c7&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "AR萌寵",
    desc: "寵物互動主題的移動端 AR 應用。",
    tags: ["Android", "AR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A12410b5b-bd75-4d8f-997a-fa9a54e826ff%3Aimage.png?table=block&id=18d4a175-899a-8018-a53e-f4b952e278c5&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=580&userId=&cache=v2",
    details: "在 AR 環境中與虛擬貓狗互動的休閒應用。支援餵食、撫摸、玩耍等互動行為，寵物具備 AI 行為系統。適合寵物愛好者與兒童娛樂使用。",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A12410b5b-bd75-4d8f-997a-fa9a54e826ff%3Aimage.png?table=block&id=18d4a175-899a-8018-a53e-f4b952e278c5&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=580&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A2654acb3-7d8c-4306-b401-95e8852349bc%3Aimage.png?table=block&id=18d4a175-899a-80a5-82e0-e25e9e3970b2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=580&userId=&cache=v2"
    ]
},
{
    title: "鬼抓人",
    desc: "基於 Photon 的多人連線對抗遊戲專題。",
    tags: ["PC", "多人連線"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Ae02bf1ae-ddb6-4499-8808-6b026f1b6367%3Aimage.png?table=block&id=18d4a175-899a-8044-98f9-ca4e2a34cb95&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "專題作品。使用 Photon 網路框架開發的多人連線鬼抓人遊戲。實現玩家匹配、角色分配、即時追逐與計分系統。展示網路遊戲開發的核心技術。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3Ae02bf1ae-ddb6-4499-8808-6b026f1b6367%3Aimage.png?table=block&id=18d4a175-899a-8044-98f9-ca4e2a34cb95&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"]
},
{
    title: "VR保齡球",
    desc: "物理模擬精準的 VR 保齡球遊戲專題。",
    tags: ["PC"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A25a5c11d-3c6d-4484-a230-8e1ba761e6d5%3Aimage.png?table=block&id=18d4a175-899a-80fb-9472-f210f96a771b&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "專題作品。採用 Unity 物理引擎實現真實的保齡球運動軌跡與碰撞效果。支援標準保齡球規則與計分系統，提供沉浸式的運動體驗。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A25a5c11d-3c6d-4484-a230-8e1ba761e6d5%3Aimage.png?table=block&id=18d4a175-899a-80fb-9472-f210f96a771b&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"]
},
{
    title: "飯店管理",
    desc: "服務業情境模擬的 VR 對話訓練系統。",
    tags: ["PC", "VR"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A6e0bff37-cd36-4928-b5c2-38f82b48ada6%3Aimage.png?table=block&id=18d4a175-899a-800b-873e-fb8a2d59b866&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2",
    details: "模擬飯店服務生與顧客的對話場景，提供標準化服務流程訓練。系統支援多種情境分支與對話選項，評估學員的應對能力。適用於服務業職前培訓。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3A6e0bff37-cd36-4928-b5c2-38f82b48ada6%3Aimage.png?table=block&id=18d4a175-899a-800b-873e-fb8a2d59b866&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"]
},
{
    title: "VR購物遠端下單",
    desc: "虛實整合的 VR 電商購物體驗系統。",
    tags: ["PC"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3A76772b2e-59ac-4cfc-8c5c-83899122c09d%3Aimage.png?table=block&id=18d4a175-899a-80f4-8a15-d3905d4810b2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1250&userId=&cache=v2",
    details: "在 VR 虛擬商店中瀏覽商品並即時下單。訂單數據同步至後端系統，實現完整的電商流程。展示 VR 技術在零售業的應用潛力。\nhttps://www.youtube.com/watch?v=LgCKMK-1K8E",
    gallery: [
        "https://valley-astronomy-253.notion.site/image/attachment%3A76772b2e-59ac-4cfc-8c5c-83899122c09d%3Aimage.png?table=block&id=18d4a175-899a-80f4-8a15-d3905d4810b2&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1250&userId=&cache=v2",
        "https://valley-astronomy-253.notion.site/image/attachment%3A75a594fd-f88e-4950-b7e5-78cb0b6307cc%3Aimage.png?table=block&id=18d4a175-899a-804a-9b31-e37fa4a6c368&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1420&userId=&cache=v2"
    ]
},
{
    title: "廚師體感互動",
    desc: "基於體感識別的接物反應遊戲。",
    tags: ["PC", "體感互動"],
    image: "https://valley-astronomy-253.notion.site/image/attachment%3Add235e21-1ca5-4c87-9663-d172c82cb2b0%3Aimage.png?table=block&id=18d4a175-899a-8091-8758-ffcf33a55425&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1140&userId=&cache=v2",
    details: "使用體感設備捕捉玩家動作，控制虛擬廚師接住掉落食材。遊戲節奏快速，考驗反應能力。適合展場互動與親子娛樂場景。",
    gallery: ["https://valley-astronomy-253.notion.site/image/attachment%3Add235e21-1ca5-4c87-9663-d172c82cb2b0%3Aimage.png?table=block&id=18d4a175-899a-8091-8758-ffcf33a55425&spaceId=053f2a42-af3c-4374-9fdc-1b11140cb665&width=1140&userId=&cache=v2"]
}
];
/* =========================================
   2. 程式邏輯區
   ========================================= */
const projectContainer = document.getElementById('project-container');
const modal = document.getElementById('project-modal');

function renderProjects() {
    if (!projectContainer) return;

    let htmlContent = '';
    
    projectData.forEach((project, index) => {
        const tagHtml = project.tags.map(tag => {
            const tagLower = tag.toLowerCase().replace(/\s+/g, '-');
            return `<span class="tag ${tagLower}">${tag}</span>`;
        }).join('');

        const delayClass = `delay-${(index % 4) * 100}`;

        htmlContent += `
        <article class="project-card hidden ${delayClass}">
            <div class="card-image" onclick="openModal(${index})">
                <img src="${project.image}" alt="${project.title}">
                <div class="overlay">
                    <span class="view-hint">點擊查看</span>
                </div>
            </div>
            <div class="card-content">
                <div class="tags">${tagHtml}</div>
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
            </div>
        </article>
        `;
    });

    projectContainer.innerHTML = htmlContent;
}

function openModal(index) {
    const data = projectData[index];
    
    document.getElementById('modal-title').innerText = data.title;
    const detailText = data.details || data.desc;
    const detailWithLinks = detailText.replace(
        /(https?:\/\/[^\s]+)/g, 
        '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );
    document.getElementById('modal-desc').innerHTML = detailWithLinks;
    document.getElementById('modal-main-img').src = data.image;
    
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = data.tags.map(tag => {
        const tagLower = tag.toLowerCase().replace(/\s+/g, '-');
        return `<span class="tag ${tagLower}">${tag}</span>`;
    }).join('');

    const galleryContainer = document.getElementById('modal-gallery');
    const galleryTitle = document.querySelector('.gallery-title');

    if (data.gallery && data.gallery.length > 0) {
        galleryContainer.innerHTML = data.gallery.map(imgUrl => 
            `<img src="${imgUrl}" onclick="changeMainImage(this.src)">`
        ).join('');
        galleryTitle.style.display = 'block';
    } else {
        galleryContainer.innerHTML = '';
        galleryTitle.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (galleryContainer) galleryContainer.scrollLeft = 0;
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeMainImage(src) {
    document.getElementById('modal-main-img').src = src;
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

renderProjects();

/* =========================================
   3. 動畫特效區
   ========================================= */
// 打字機效果
const textElement = document.querySelector('.typing-text');
const texts = ["Unity Developer", "VR/AR Specialist", "Game Engineer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (!textElement) return;

    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;
    
    let typeSpeed = 100;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        typeSpeed = 2000; 
    }

    setTimeout(type, typeSpeed);
}());

// 捲動浮現動畫
setTimeout(() => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
}, 100);

// 平滑捲動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* =========================================
   4. 畫廊拖曳功能
   ========================================= */
const gallery = document.getElementById('modal-gallery');
let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
    isDown = true;
    gallery.classList.add('active');
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
    isDown = false;
    gallery.classList.remove('active');
});

gallery.addEventListener('mouseup', () => {
    isDown = false;
    gallery.classList.remove('active');
    
    setTimeout(() => {
        gallery.querySelectorAll('img').forEach(img => img.style.pointerEvents = 'auto');
    }, 50);
});

gallery.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2;
    gallery.scrollLeft = scrollLeft - walk;

    if (Math.abs(walk) > 5) {
        gallery.querySelectorAll('img').forEach(img => img.style.pointerEvents = 'none');
    }
});
/* =========================================
   🔥 5. 新增：數字計數動畫
   ========================================= */
function animateCounter() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target + '+';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + '+';
            }
        }, 16);
    });
}

// 當頁面載入時執行數字動畫
window.addEventListener('load', () => {
    setTimeout(animateCounter, 500); // 延遲 0.5 秒後開始動畫
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
/* =========================================
   6. 導覽列互動功能
   ========================================= */
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 點擊連結後關閉選單
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// 捲動時改變導覽列樣式
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
