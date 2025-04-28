// meetingDialog.ts
// 只負責匯總所有腳本模組與 mapping

export { meetingDialogOpening, meetingDialogOpening2 } from '../data/meetingDialog/opening';
export { meetingDialogBoss } from '../data/meetingDialog/boss';
export { answerOptions1, answerOptionsA, answerOptionsB, answerOptionsC } from '../data/meetingDialog/answers';
export { resultA1, resultA2, resultA3, resultA4 } from '../data/meetingDialog/resultsA';
export { resultA, resultB, resultC } from '../data/meetingDialog/resultsCommon';
export { resultB1, resultB2, resultB3, resultB4 } from '../data/meetingDialog/resultsB';
export { resultC1, resultC2, resultC3, resultC4 } from '../data/meetingDialog/resultsC';
export { resultD } from '../data/meetingDialog/resultsD';

import { meetingDialogOpening, meetingDialogOpening2 } from '../data/meetingDialog/opening';
import { meetingDialogBoss } from '../data/meetingDialog/boss';
import { answerOptions1, answerOptionsA, answerOptionsB, answerOptionsC } from '../data/meetingDialog/answers';
import { resultA1, resultA2, resultA3, resultA4 } from '../data/meetingDialog/resultsA';
import { resultA, resultB, resultC } from '../data/meetingDialog/resultsCommon';
import { resultB1, resultB2, resultB3, resultB4 } from '../data/meetingDialog/resultsB';
import { resultC1, resultC2, resultC3, resultC4 } from '../data/meetingDialog/resultsC';
import { resultD } from '../data/meetingDialog/resultsD';

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