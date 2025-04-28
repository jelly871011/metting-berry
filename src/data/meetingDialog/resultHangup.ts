// meetingDialog/resultHangup.ts
const resultHangup = {
  dialog: [
    { speaker: 'strawberry', text: '（按下了掛斷鍵…）' },
    { speaker: 'boss', text: ' 草莓？你怎麼突然離線了？' },
    { speaker: 'coworkerA', text: '（這也太狠了吧…）' },
    { speaker: 'coworkerB', text: '（我都還沒來得及發言…）' },
  ],
  systemMsg: '你已結束會議，逃出生天',
  title: '臨陣脫逃莓',
  busy: 0,
  sanity: 5,
  stress: -5,
  skills: ['極速斷線', '勇敢掛斷'],
};

export default resultHangup;
