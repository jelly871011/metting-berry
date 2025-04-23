import React, { useState, useEffect } from 'react';
import strawberry from '@/assets/images/meeting_strawberry_1.png';
import supervisor from '@/assets/images/meeting_supervisor_1.png';
import female from '@/assets/images/meeting_coworker_female_1.png';
import male from '@/assets/images/meeting_coworker_male_1.png';
import '@/assets/styles/Meeting.css';
import { FaMicrophone, FaPhoneSlash, FaVideo, FaExclamationTriangle } from 'react-icons/fa';
import { meetingScriptsMap, answerOptions1, answerOptionsA, answerOptionsB, answerOptionsC } from './meetingDialog';

const avatarMap: Record<string, string> = {
  strawberry,
  boss: supervisor,
  coworkerA: male,
  coworkerB: female,
};

const Meeting: React.FC = () => {
    const [currentScriptKey, setCurrentScriptKey] = useState('opening');
    const currentScript = meetingScriptsMap[currentScriptKey];
    const [dialog, setDialog] = useState<{speaker?: string, text: string}[]>([]);
    const [showEndCall, setShowEndCall] = useState(false);
    const [systemMsg, setSystemMsg] = useState<string | null>(null);

    useEffect(() => {
        if (!currentScript.length) return;
        // 若是選項，不自動跑動畫
        if (currentScript === answerOptions1 || currentScript === answerOptionsA || currentScript === answerOptionsB || currentScript === answerOptionsC) return;
        let i = 0;
        setDialog([currentScript[i]]);
        const interval = setInterval(() => {
            if (i < currentScript.length - 1) {
                setDialog(prev => [...prev, currentScript[i]]);
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

    // 結局對話逐行顯示動畫
    useEffect(() => {
      // 只對 resultA~D 結局做處理
      if (/^result[A-D][1-4]?$/.test(currentScriptKey)) {
        const result = meetingScriptsMap[currentScriptKey];
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
      if (currentScriptKey === 'resultD' && dialog.length === 2) {
        setTimeout(() => setShowEndCall(true), 2000);
      }
    }, [currentScriptKey, dialog]);
    useEffect(() => {
      if (showEndCall) {
        setTimeout(() => {
          window.location.href = '/report';
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
      if (/^result[A-D][1-4]?$/.test(currentScriptKey)) {
        // 取得結局物件
        const result = meetingScriptsMap[currentScriptKey];
        // 依新結構解析 meta
        if (result) {
          // 系統提示
          if (result.systemMsg) {
            setSystemMsg(result.systemMsg);
            setTimeout(() => setSystemMsg(null), 2000);
            setTimeout(() => setShowEndCall(true), 2000);
          }
          // 寫入 localStorage，供報告卡頁使用
          localStorage.setItem('lastReport', JSON.stringify({
            title: result.title || '',
            busy: result.busy || 0,
            sanity: result.sanity || 0,
            stress: result.stress || 0,
            skills: result.skills || [],
          }));
        }
      }
    }, [currentScriptKey]);

    const isAnswerOption = currentScript === answerOptions1 || currentScript === answerOptionsA || currentScript === answerOptionsB || currentScript === answerOptionsC;

    // 渲染對話內容時，僅渲染動畫累積的 dialog
    const displayDialog = isAnswerOption
      ? []
      : dialog;

    return (
        <div className="meeting-container">
          {systemMsg && (
            <div className="system-error-toast">{systemMsg}</div>
          )}
          {showEndCall && (
            <div className="system-endcall-toast">
              會議已結束，正在產生報告卡...
            </div>
          )}
            <div className="meeting-grid">
                <div className="meeting-cell"><img src={strawberry} alt="主角草莓" className="meeting-avatar" /></div>
                <div className="meeting-cell"><img src={female} alt="女同事" className="meeting-avatar" /></div>
                <div className="meeting-cell"><img src={supervisor} alt="主管" className="meeting-avatar" /></div>
                <div className="meeting-cell"><img src={male} alt="男同事" className="meeting-avatar" /></div>
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
                              onClick={() => handleOptionSelect(idx)}
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
                <button className="meeting-action-btn"><FaMicrophone /></button>
                <button className="meeting-action-btn meeting-action-hangup"><FaPhoneSlash /></button>
                <button className="meeting-action-btn"><FaVideo /></button>
            </div>
        </div>
    );
};

export default Meeting;
