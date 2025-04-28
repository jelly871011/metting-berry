// 選項C（你們繼續，我先聽）分支結局腳本

export const resultC1 = {
  title: '隱身聆聽莓',
  systemMsg: '草莓全程靜默，沒人注意到你的存在。',
  dialog: [
    { speaker: 'strawberry', text: '......（靜靜地聽，偶爾點頭）' },
    { speaker: 'boss', text: '這位同事今天很安靜啊。' },
    { speaker: 'coworkerA', text: '他是不是網路卡住了？' },
    { speaker: 'strawberry', text: '（其實我只是想當背景板）' }
  ],
  busy: 0,
  sanity: +5,
  stress: -5,
  skills: ['潛行']
};

export const resultC2 = {
  title: '夢遊莓',
  systemMsg: '你努力裝作專心，其實在發呆。',
  dialog: [
    { speaker: 'strawberry', text: '（點頭、打哈欠，靈魂出竅）' },
    { speaker: 'coworkerB', text: '草莓看起來好像很累。' },
    { speaker: 'strawberry', text: '（我其實在想晚餐吃什麼）' }
  ],
  busy: 0,
  sanity: +2,
  stress: -2,
  skills: ['夢遊']
};

export const resultC3 = {
  title: '內心宇宙莓',
  systemMsg: '你內心飛到宇宙，外表毫無波瀾。',
  dialog: [
    { speaker: 'strawberry', text: '（眼神空洞，腦中宇宙大爆炸）' },
    { speaker: 'boss', text: '草莓有在聽嗎？' },
    { speaker: 'strawberry', text: '（我在和宇宙對話）' }
  ],
  busy: 0,
  sanity: 0,
  stress: 0,
  skills: ['冥想']
};

export const resultC4 = {
  title: '系統提示莓',
  systemMsg: '你假裝聽會議，卻被系統發現。',
  dialog: [
    { speaker: 'strawberry', text: '（假裝很專心）' },
    { text: '系統偵測到你未參與會議，請專心！' },
    { speaker: 'strawberry', text: '（嚇到回神）' }
  ],
  busy: 0,
  sanity: -2,
  stress: +2,
  skills: ['裝傻']
};
