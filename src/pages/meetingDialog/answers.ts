// 玩家回答選項腳本
export const answerOptions1 = [
  { speaker: 'strawberry', text: "我剛剛有更新在 Trello 上", next: 'answerA' },
  { speaker: 'strawberry', text: "抱歉麥克風好像壞了", next: 'answerB' },
  { speaker: 'strawberry', text: "你們繼續，我先聽", next: 'answerC' },
  { speaker: 'strawberry', text: "(直接畫面定格，假裝當機)", next: 'resultD' },
];

export const answerOptionsA = [
  { speaker: 'strawberry', text: "其實我還在研究中…", next: 'resultA1' },
  { speaker: 'strawberry', text: "我怕講太多大家會無聊…", next: 'resultA2' },
  { speaker: 'strawberry', text: "呃…我想聽聽大家的建議", next: 'resultA3' },
  { speaker: 'strawberry', text: "你說的 Trello 是哪個 Trello？", next: 'resultA4' },
];

export const answerOptionsB = [
  { speaker: 'strawberry', text: "（裝死不回）", next: 'resultB1' },
  { speaker: 'strawberry', text: "（迅速複製 ChatGPT 回答）", next: 'resultB2' },
  { speaker: 'strawberry', text: "在，會後補報！", next: 'resultB3' },
  { speaker: 'strawberry', text: "（傳送草莓貼圖）", next: 'resultB4' },
];

export const answerOptionsC = [
  { speaker: 'strawberry', text: "（全程靜默）", next: 'resultC1' },
  { speaker: 'strawberry', text: "（勉強點頭打哈欠）", next: 'resultC2' },
  { speaker: 'strawberry', text: "（內心發呆）", next: 'resultC3' },
  { speaker: 'strawberry', text: "（假裝聽會議，觸發系統提示）", next: 'resultC4' },
];
