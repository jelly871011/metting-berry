// meetingDialog.ts
// 只負責匯總所有腳本模組與 mapping

export { meetingDialogOpening, meetingDialogOpening2 } from './meetingDialog/opening';
export { meetingDialogBoss } from './meetingDialog/boss';
export { answerOptions1, answerOptionsA, answerOptionsB, answerOptionsC } from './meetingDialog/answers';
export { resultA1, resultA2, resultA3, resultA4 } from './meetingDialog/resultsA';
export { resultA, resultB, resultC } from './meetingDialog/resultsCommon';
export { resultB1, resultB2, resultB3, resultB4 } from './meetingDialog/resultsB';
export { resultC1, resultC2, resultC3, resultC4 } from './meetingDialog/resultsC';
export { resultD } from './meetingDialog/resultsD';

import { meetingDialogOpening, meetingDialogOpening2 } from './meetingDialog/opening';
import { meetingDialogBoss } from './meetingDialog/boss';
import { answerOptions1, answerOptionsA, answerOptionsB, answerOptionsC } from './meetingDialog/answers';
import { resultA1, resultA2, resultA3, resultA4 } from './meetingDialog/resultsA';
import { resultA, resultB, resultC } from './meetingDialog/resultsCommon';
import { resultB1, resultB2, resultB3, resultB4 } from './meetingDialog/resultsB';
import { resultC1, resultC2, resultC3, resultC4 } from './meetingDialog/resultsC';
import { resultD } from './meetingDialog/resultsD';

export const meetingScriptsMap = {
  opening: meetingDialogOpening,
  opening2: meetingDialogOpening2,
  boss: meetingDialogBoss,
  answer1: answerOptions1,
  answerA: answerOptionsA,
  answerB: answerOptionsB,
  answerC: answerOptionsC,
  resultA,
  resultA1,
  resultA2,
  resultA3,
  resultA4,
  resultB,
  resultB1,
  resultB2,
  resultB3,
  resultB4,
  resultC,
  resultC1,
  resultC2,
  resultC3,
  resultC4,
  resultD,
  fish: 100, // Add fish: 100 for the report card page
};