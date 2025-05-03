import React, { useState, useEffect } from 'react';
import strawberry1 from '@/assets/images/meeting/1.png';
import strawberry2 from '@/assets/images/meeting/2.png';
import strawberry3 from '@/assets/images/meeting/3.png';
import strawberry4 from '@/assets/images/meeting/4.png';
import strawberry5 from '@/assets/images/meeting/5.png';
import strawberryGhost from '@/assets/images/strawberry_ghost.png';
import supervisor from '@/assets/images/meeting/supervisor_1.png';
import female from '@/assets/images/meeting/coworker_female_1.png';
import female2 from '@/assets/images/meeting/coworker_female_2.png';
import male from '@/assets/images/meeting/coworker_male_1.png';
import male2 from '@/assets/images/meeting/coworker_male_2.png';
import '@/assets/styles/Meeting.css';
import { FaMicrophone, FaMicrophoneSlash, FaPhoneSlash, FaVideo } from 'react-icons/fa';
import { meetingScriptsMap, answerOptions1, answerOptionsA, answerOptionsB, answerOptionsC } from './meetingDialog';
import resultHangup from '../data/meetingDialog/resultHangup';
import { CameraBrokenIcon } from '../components/CameraBrokenIcon';

const avatarMap: Record<string, string> = {
  strawberry: strawberry5,
  boss: supervisor,
  coworkerA: female,
  coworkerB: male,
};

const strawberryFaces = [strawberry1, strawberry2, strawberry3, strawberry4, strawberry5];

function weightedRandom(min: number, max: number, weights: number[]) {
  const steps = weights.length - 1;
  const stepSize = (max - min) / steps;
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < weights.length; i++) {
    if (r < weights[i]) {
      const base = min + i * stepSize;
      let val = base + Math.random() * stepSize;
      val = Math.round(val);
      if (val > 99) val = 99;
      if (val < -99) val = -99;
      return val;
    }
    r -= weights[i];
  }
  return Math.max(Math.min(max, 99), -99);
}

function generateMeetingStats(title?: string) {
  // 根據腳本設計，理智值偏低、壓力值偏低、裝忙偏高
  // 權重設計（0~99）：
  // sanity: 低機率高分，高機率低分
  // busy: 高機率高分
  // stress: 低機率高分

  // 理智值權重（低分多，高分少）
  const sanityWeights = [10, 8, 4, 2, 1]; // 0~19, 20~39, 40~59, 60~79, 80~99
  // 裝忙權重（高分多，低分少）
  const busyWeights = [1, 2, 4, 8, 10];   // 0~19, 20~39, 40~59, 60~79, 80~99
  // 壓力值權重（低分多，高分少）
  const stressWeights = [10, 8, 4, 2, 1];

  const easyTitles = ['消失的草莓', '隱身聆聽莓', '夢遊莓', '臨陣脫逃莓'];
  let stress = weightedRandom(-50, 99, stressWeights);
  if (title && easyTitles.includes(title)) {
    stress = weightedRandom(-50, -1, [4, 6, 8, 10, 12, 10, 8, 6, 4]);
  }
  return {
    sanity: weightedRandom(-50, 99, sanityWeights),
    busy:   weightedRandom(-30, 99, busyWeights),
    stress,
  };
}

interface MeetingProps {
  hintOn: boolean;
  funOn: boolean;
  ghostOn: boolean;
}

const Meeting: React.FC<MeetingProps> = ({ hintOn, funOn, ghostOn }) => {
    const [currentScriptKey, setCurrentScriptKey] = useState('opening');
    const meetingScriptsMapExt = { ...meetingScriptsMap, resultHangup };
    const currentScript = meetingScriptsMapExt[currentScriptKey];
    const [dialog, setDialog] = useState<{speaker?: string, text: string}[]>([]);
    const [showEndCall, setShowEndCall] = useState(false);
    const [systemMsg, setSystemMsg] = useState<string | null>(null);
    const [titles, setTitles] = useState<string[]>(() => {
      try {
        return JSON.parse(localStorage.getItem('myTitles') || '[]');
      } catch {
        return [];
      }
    });
    const [micOn, setMicOn] = useState(false);
    const [dialogIndex, setDialogIndex] = useState(0);
    const [showCameraBack, setShowCameraBack] = useState(false);
    const [faceIdx, setFaceIdx] = useState(0);

    useEffect(() => {
        if (!currentScript.length) return;
        // 若是選項，不自動跑動畫
        if (currentScript === answerOptions1 || currentScript === answerOptionsA || currentScript === answerOptionsB || currentScript === answerOptionsC) return;
        let i = 0;
        setDialog([currentScript[i]]);
        const interval = setInterval(() => {
            if (i < currentScript.length - 1) {
                setDialog(prev => [...prev, currentScript[i + 1]]);
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    // 劇情流程控制
                    if (currentScriptKey === 'opening') setCurrentScriptKey('opening2');
                    else if (currentScriptKey === 'opening2') setCurrentScriptKey('boss');
                    else if (currentScriptKey === 'boss') setCurrentScriptKey('answer1');
                    // resultA~D 結束後不再自動跳轉
                }, 1000);
            }
        }, 500);
        return () => clearInterval(interval);
    }, [currentScript, currentScriptKey]);

    useEffect(() => {
      setDialogIndex(dialog.length - 1);
    }, [dialog]);

    // 結局對話逐行顯示動畫
    useEffect(() => {
      // 只對 resultA~D 以及 resultHangup 結局做處理
      if (/^result([A-D][1-4]?|Hangup)$/.test(currentScriptKey)) {
        const result = meetingScriptsMapExt[currentScriptKey];
        if (result && result.dialog) {
          let i = 0;
          setDialog([result.dialog[0]]);
          const interval = setInterval(() => {
            i++;
            if (i < result.dialog.length) {
              setDialog(prev => [...prev, result.dialog[i]]);
            } else {
              clearInterval(interval);
            }
          }, 500);
          return () => clearInterval(interval);
        }
      }
    }, [currentScriptKey]);

    // 結束通話提示與自動跳轉
    useEffect(() => {
      // resultD 或 resultHangup 結局都要自動跳轉
      if ((currentScriptKey === 'resultD' || currentScriptKey === 'resultHangup') && dialog.length === 2) {
        setTimeout(() => setShowEndCall(true), 2000);
      }
    }, [currentScriptKey, dialog]);
    useEffect(() => {
      if (showEndCall) {
        setTimeout(() => {
          goToReport();
        }, 2500);
      }
    }, [showEndCall]);

    // 處理選項點擊
    const handleOptionSelect = (idx: number) => {
      const nextKey = (currentScript === answerOptionsA ? answerOptionsA : currentScript === answerOptionsB ? answerOptionsB : currentScript === answerOptionsC ? answerOptionsC : answerOptions1)[idx].next;
      setCurrentScriptKey(nextKey);
    };

    // 當進入結局腳本時，解析內容並儲存到 localStorage
    useEffect(() => {
      // 只對 resultA~D 結局做處理
      if (/^result([A-D][1-4]?|Hangup)$/.test(currentScriptKey)) {
        // 取得結局物件
        const result = meetingScriptsMapExt[currentScriptKey];
        // 依新結構解析 meta
        if (result) {
          // 系統提示
          if (result.systemMsg) {
            setSystemMsg(result.systemMsg);
            setTimeout(() => setSystemMsg(null), 2000);
            setTimeout(() => setShowEndCall(true), 2000);
          }
          // 寫入 localStorage，供報告卡頁使用
          const stats = generateMeetingStats(result.title);
          localStorage.setItem('lastReport', JSON.stringify({
            title: result.title || '',
            busy: stats.busy,
            sanity: stats.sanity,
            stress: stats.stress,
            skills: result.skills || [],
          }));
          // 取得結局時自動加入稱號
          if (result.title) {
            setTitles(prev => {
              if (!prev.includes(result.title)) {
                const next = [...prev, result.title];
                localStorage.setItem('myTitles', JSON.stringify(next));
                return next;
              }
              return prev;
            });
          }
        }
      }
    }, [currentScriptKey]);

    // 掛斷會議
    const handleHangup = () => {
      if (window.confirm('確定要掛斷會議嗎？')) {
        // 進入掛斷腳本
        setCurrentScriptKey('resultHangup');
      }
    };

    useEffect(() => {
      if (currentScriptKey === 'opening2' &&
          dialog[dialogIndex - 1]?.speaker === 'coworkerB' &&
          dialog[dialogIndex - 1]?.text.includes('鏡頭壞掉')) {
        const timer = setTimeout(() => setShowCameraBack(true), 1500);
        return () => clearTimeout(timer);
      } else {
        setShowCameraBack(false);
      }
    }, [currentScriptKey, dialogIndex]);

    useEffect(() => {
      const timer = setInterval(() => {
        setFaceIdx(idx => (idx + 1) % strawberryFaces.length);
      }, 1800); // 每 1.8 秒換一張
      return () => clearInterval(timer);
    }, []);

    const isAnswerOption = currentScript === answerOptions1 || currentScript === answerOptionsA || currentScript === answerOptionsB || currentScript === answerOptionsC;

    const isBracketOption = (text: string) => /^（.*）$/.test(text.trim());

    // 渲染對話內容時，僅渲染動畫累積的 dialog
    const displayDialog = isAnswerOption
      ? []
      : dialog;

    const showCameraBroken = (
      (currentScriptKey === 'opening' && dialog[dialogIndex]?.speaker === 'coworkerB' && dialog[dialogIndex]?.text.includes('鏡頭壞掉')) ||
      (currentScriptKey === 'opening2' && !showCameraBack)
    );

    const goToReport = () => {
      sessionStorage.setItem('fromMeeting', '1');
      window.location.href = '/report';
    };

    // 禁止返回上一頁
    useEffect(() => {
      const handlePopState = (e: PopStateEvent) => {
        window.history.pushState(null, '', window.location.href);
        alert('會議進行中，想跑去哪裡？');
      };
      window.history.pushState(null, '', window.location.href);
      window.addEventListener('popstate', handlePopState);
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }, []);

    const coworkerImg = funOn ? female2 : female;
    const coworkerMaleImg = funOn ? male2 : male;

    const mainStrawberry = ghostOn ? strawberryGhost : strawberryFaces[faceIdx];

    return (
        <div className="meeting-container">
          {hintOn && systemMsg && (
            <div className="system-error-toast">{systemMsg}</div>
          )}
          {showEndCall && (
            <div className="system-endcall-toast">
              會議已結束，正在產生報告卡...
            </div>
          )}
            <div className="meeting-grid">
                <div className="meeting-cell">
                  <img
                    src={mainStrawberry}
                    alt="主角草莓"
                    className="meeting-avatar"
                  />
                </div>
                <div className="meeting-cell"><img src={coworkerImg} alt="女同事" className="meeting-avatar" /></div>
                <div className="meeting-cell"><img src={supervisor} alt="主管" className="meeting-avatar" /></div>
                <div className="meeting-cell">
                  {showCameraBroken ? <CameraBrokenIcon /> : <img src={coworkerMaleImg} alt="男同事" className="meeting-avatar" />}
                </div>
            </div>
            <div className="meeting-dialog">
                <div className="meeting-dialog-box">
                    {isAnswerOption ? (
                        (currentScript === answerOptionsA
                          ? answerOptionsA
                          : currentScript === answerOptionsB
                            ? answerOptionsB
                            : currentScript === answerOptionsC
                              ? answerOptionsC
                              : answerOptions1
                        ).map((opt, idx) => (
                            <button
                              className="meeting-dialog-text answer-option-btn"
                              key={idx}
                              onClick={() => {
                                const isOptionD = opt.next === 'resultD';
                                // 新增：如果是（）開頭結尾的選項，不需檢查 micOn
                                if (!micOn && !isOptionD && !isBracketOption(opt.text)) {
                                  setSystemMsg('發言前要開啟麥克風');
                                  setTimeout(() => setSystemMsg(null), 2000);
                                  return;
                                }
                                handleOptionSelect(idx);
                              }}
                            >
                              <span className="dialog-avatar-wrap">
                                <img src={avatarMap[opt.speaker]} alt={opt.speaker} className="dialog-avatar" />
                              </span>
                              <span className="dialog-text-content">{opt.text}</span>
                            </button>
                        ))
                    ) : (
                        displayDialog.filter(Boolean).map((line, idx) => (
                            <span className="meeting-dialog-text" key={idx}>
                              {line.speaker ? (
                                <span className="dialog-avatar-wrap">
                                  <img src={avatarMap[line.speaker]} alt={line.speaker} className="dialog-avatar" />
                                </span>
                              ) : null}
                              <span className="dialog-text-content">{line.text}</span>
                            </span>
                        ))
                    )}
                </div>
            </div>
            <div className="meeting-actions">
                <button
                  className={`meeting-action-btn${micOn ? '' : ' muted'}`}
                  onClick={() => setMicOn(m => !m)}
                  aria-label={micOn ? '關閉麥克風' : '開啟麥克風'}
                >
                  {micOn ? <FaMicrophone /> : <FaMicrophoneSlash />}
                </button>
                <button className="meeting-action-btn meeting-action-hangup" onClick={handleHangup}><FaPhoneSlash /></button>
                <button className="meeting-action-btn" onClick={() => {
                  setSystemMsg('你逃不掉的，鏡頭永遠打開！');
                  setTimeout(() => setSystemMsg(null), 2000);
                }}>
                  <FaVideo />
                </button>
            </div>
        </div>
    );
};

export default Meeting;
