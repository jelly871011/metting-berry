# 《開會莓在聽》專案架構與完整企劃書

---

> 一款以幽默反諷為主題的會議生存遊戲，模擬線上會議摸魚情境。

## 技術棧
- React 18
- Vite
- TypeScript
- CSS Modules
- Firebase（排行榜）

## 快速開始
1. 安裝依賴：
   ```bash
   npm install
   ```
2. 啟動開發伺服器：
   ```bash
   npm run dev
   ```
3. 打包專案：
   ```bash
   npm run build
   ```

---

## 專案架構與流程

### 1. 專案資料夾結構

/metting-berry/
├── public/                  # 靜態資源（favicon、meta、預載圖片等）
├── src/
│   ├── assets/              # 遊戲素材、圖片、音效
│   ├── components/          # 可重複使用的元件（Button、Dialog、Toast…）
│   ├── layouts/             # 共用佈局（LoadingLayout、MeetingLayout）
│   ├── pages/               # 各主要頁面
│   │   ├── Home.tsx         # 主畫面
│   │   ├── Meeting.tsx      # 會議模擬畫面
│   │   ├── Report.tsx       # 報告卡頁面
│   │   ├── Setting.tsx      # 設定頁面
│   │   ├── Leaderboard.tsx  # 排行榜頁面
│   ├── routes/              # 路由設定
│   ├── states/              # 全域狀態管理
│   ├── constants/           # 常數、文本
│   ├── utils/               # 工具函式
│   └── App.tsx              # 入口組件
├── index.html
├── package.json
├── vite.config.js
└── README.md

### 2. 主要頁面與功能
1. **Loading Page**  
   - 進場動畫、loading 畫面  
2. **Home Page**
   - 登入畫面，顯示草莓趴鍵盤
   - 按「開始上線」、「趕快上線」進入會議
   - 按下方選單可選擇「設定」、「排行榜」、「報告卡」頁面
   - 按「排行榜」進入排行榜頁面
   - 按「設定」進入設定頁面
   - 按「報告卡」進入報告卡頁面  
3. **Meeting Page**
   - 四格 Google Meet 風格視訊
   - 麥克風靜音/開啟功能
   - 視訊關閉/開啟功能
   - 通話結束功能
   - 選項框（底部浮動）＋四選一互動選項
4. **Report Page**
   - 顯示本輪理智值、裝忙指數、壓力值、稱號  
   - 報告卡視覺化
   - 返回按鈕，返回主畫面
5. **Leaderboard Page**
   - 顯示前 30 名玩家的分數、理智、裝忙、壓力
   - 由 Firebase 即時讀取
6. **Setting Page**
   - 背景音樂、音效、提示開關
   - 語言切換（目前僅中文，切換需抖內）
   - 操作教學、聯絡作者、版本資訊

### 3. 互動流程大綱
```plaintext
1. 進入 Home 頁面
2. 點「開始上線」進入 Meeting 會議模擬
3. 劇情互動，選擇回應分支
4. 結局產生報告卡，顯示分數與稱號
5. 回到Homeu 頁面
6. 可進入排行榜、設定、報告卡、再次遊玩
```

⸻

## 備註
- 技術上以 React + Vite 製作網頁版，排行榜採用 Firebase。
- 設計重點：「幽默無用」、「撐場景」，強調摸魚反諷樂趣。
- 後續可用 Capacitor 打包成 App。

---

## License

本專案採用 MIT License。