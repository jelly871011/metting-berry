# 開會莓在聽

> 一款以幽默反諷為主題的會議生存遊戲，模擬線上會議摸魚情境。

## 技術棧
- React 18 + TypeScript（.tsx/.ts）
- Vite
- CSS（含 RWD，主要使用 rem 單位）
- Firebase（排行榜、資料儲存）

## 快速開始
```bash
npm install
npm run dev
```

## 專案結構
```
/metting-berry/
├── public/                  # 靜態資源
├── src/
│   ├── assets/              # 圖片、音效、樣式
│   ├── components/          # 共用元件
│   ├── pages/               # 主要頁面（Home, Meeting, Report, Setting, Leaderboard）
│   ├── data/                # 劇情腳本資料
│   ├── firebase.ts          # Firebase 初始化
│   └── App.tsx              # 入口組件
├── package.json
├── vite.config.ts
└── README.md
```

## 主要功能
### 1. Loading 頁
- 進場動畫

### 2. Home 頁
- 進入遊戲主畫面，顯示草莓角色
- 導覽按鈕：開始上線、排行榜、設定、報告卡

### 3. Meeting 會議模擬
- Google Meet 風格四格視訊 UI
- 動畫式對話劇情（逐句顯示，支援事件暫停/續播）
- 隨機事件彈窗，影響理智/壓力/裝忙指數
- 多分支選項互動
- 支援麥克風/視訊/掛斷等操作

### 4. 報告卡 Report
- 結局統計分數（理智、裝忙、壓力、稱號）
- 報告卡視覺化

### 5. 排行榜 Leaderboard
- 顯示前 100 名玩家分數（Firebase 即時讀取）
- 各玩家理智、裝忙、壓力、暱稱

### 6. 設定 Setting
- 系統提示、快樂模式、幽靈模式等開關
- 聯絡作者、版本資訊

## Firebase 安全說明
- 前端僅存放公開 API key，所有資料安全由 Firestore Rules 控制

## 開發者小提醒
- 所有 CSS 樣式皆支援 RWD，並盡量使用 rem 單位
- 劇情腳本、分支互動可於 `/src/data/meetingDialog/` 擴充
- 排行榜查詢已調整為前 100 名

---

## License

MIT License