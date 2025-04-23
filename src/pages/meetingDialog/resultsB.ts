// 麥克風壞掉分支的所有細分結局

export const resultB1 = {
  dialog: [
    { speaker: 'strawberry', text: "（裝死不回，聊天室一片靜默...）" },
    { speaker: 'boss', text: "......草莓？還在嗎？" },
    { speaker: 'coworkerA', text: "（這招有點狠）" },
  ],
  systemMsg: "裝死戰術發動",
  title: "消失的草莓",
  busy: 0,
  sanity: 0,
  stress: 10,
};

export const resultB2 = {
  dialog: [
    { speaker: 'strawberry', text: "（迅速複製 ChatGPT 回答貼上）" },
    { speaker: 'boss', text: "這麼專業？下次會議你來主講好了。" },
    { speaker: 'coworkerB', text: "（這內容好像在哪看過…）" },
  ],
  systemMsg: "生成式回應",
  title: "生成式草莓",
  busy: 12,
  sanity: -3,
  stress: 2,
};

export const resultB3 = {
  dialog: [
    { speaker: 'strawberry', text: "（簡短回應：『在，會後補報！』）" },
    { speaker: 'boss', text: "好，下次記得。" },
    { speaker: 'coworkerA', text: "（這招省時省力）" },
  ],
  systemMsg: "極速回覆",
  title: "鍵盤時間魔術師",
  busy: 5,
  sanity: 1,
  stress: 1,
};

export const resultB4 = {
  dialog: [
    { speaker: 'strawberry', text: "（傳送一張草莓貼圖）" },
    { speaker: 'boss', text: "……這是什麼意思？" },
    { speaker: 'coworkerB', text: "（好像有點可愛）" },
  ],
  systemMsg: "貼圖戰術",
  title: "貼圖外交官",
  busy: 7,
  sanity: 2,
  stress: 0,
};
