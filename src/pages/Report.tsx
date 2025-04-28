import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '@/assets/styles/Report.css';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Card from '../components/Card';
import title_1 from '@/assets/images/report/1.png';
import title_2 from '@/assets/images/report/2.png';
import title_3 from '@/assets/images/report/3.png';
import title_4 from '@/assets/images/report/4.png';
import title_6 from '@/assets/images/report/6.png';
import title_7 from '@/assets/images/report/7.png';
import title_8 from '@/assets/images/report/8.png';
import title_9 from '@/assets/images/report/9.png';
import title_10 from '@/assets/images/report/10.png';
import title_11 from '@/assets/images/report/11.png';
import title_12 from '@/assets/images/report/12.png';
import title_13 from '@/assets/images/report/13.png';
import title_14 from '@/assets/images/report/14.png';

const titleImgMap: Record<string, string | undefined> = {
    '研究型摸魚大師': title_1,
    '話術王': title_2,
    '焦點轉移達人': title_3,
    '裝傻天王': title_4,
    '消失的草莓': undefined,
    '生成式草莓': title_6,
    '鍵盤時間魔術師': title_7,
    '貼圖外交官': title_8,
    '隱身聆聽莓': title_9,
    '夢遊莓': title_10,
    '內心宇宙莓': title_11,
    '系統提示莓': title_12,
    '辦公室幽靈莓': title_13,
    '臨陣脫逃莓': title_14,
};

const Report: React.FC = () => {
    const navigate = useNavigate();
    const [report, setReport] = useState<any>(null);
    const [showHint, setShowHint] = useState(false);
    const [hintMsg, setHintMsg] = useState('');
    const imgRef = useRef<HTMLImageElement>(null);
    // 彩蛋提示內容
    const hintList = [
      '摸魚有理，裝忙無罪！',
      '下次會議記得帶草莓牛奶～',
      '你已經是傳奇莓了！',
      '據說連主管都在偷玩這個遊戲…',
      '摸魚摸到升天！',
      '理智值爆表，恭喜！',
      '壓力太大，記得多休息！',
      '有沒有發現這裡有彩蛋？',
    ];
    // 點擊角色時觸發動畫與彩蛋
    const handleImgClick = () => {
      if (imgRef.current) {
        imgRef.current.classList.add('strawberry-animate');
        setTimeout(() => {
          imgRef.current && imgRef.current.classList.remove('strawberry-animate');
        }, 600);
      }
      // 顯示隨機提示
      setHintMsg(hintList[Math.floor(Math.random()*hintList.length)]);
      setShowHint(true);
      setTimeout(() => setShowHint(false), 2000);
    };

    useEffect(() => {
      // 只在從 Meeting 頁面跳轉時才 prompt 名稱、寫入排行榜
      const fromMeeting = sessionStorage.getItem('fromMeeting') === '1';
      sessionStorage.removeItem('fromMeeting');

      const last = localStorage.getItem('lastReport');
      if (last) {
        let playerName = localStorage.getItem('playerName') || '';
        if (fromMeeting) {
          playerName = window.prompt('請輸入你的暱稱：', playerName) || '匿名莓';
          localStorage.setItem('playerName', playerName);
        }
        try {
          const parsed = JSON.parse(last);
          const totalScore = parsed.sanity + parsed.busy - parsed.stress;
          // 只有從 Meeting 跳轉才會 push 到排行榜
          if (fromMeeting) {
            const records = JSON.parse(localStorage.getItem('meetingRecords') || '[]');
            const current = { ...parsed, playerName, date: new Date().toISOString(), totalScore, id: Date.now() };
            records.push(current);
            localStorage.setItem('meetingRecords', JSON.stringify(records));
            // 上傳到 Firebase
            addDoc(collection(db, 'leaderboard'), current);
            setReport({ ...parsed, playerName, totalScore });
          } else {
            setReport({ ...parsed, playerName, totalScore });
          }
        } catch {
          setReport(null);
        }
      } else {
        setReport(null);
      }
    }, []);

    if (!report) {
      return <div style={{textAlign:'center',marginTop:'4rem',fontSize:'1.2rem'}}>載入中...</div>;
    }

    const reportImg = titleImgMap[report.title];

    return (
        <Container>
            <Card type="report" title="摸魚報告卡">
                <div style={{width:'13rem',height:'13rem',margin:'0 auto 1rem auto',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
                  {reportImg ? (
                    <img
                      ref={imgRef}
                      src={reportImg}
                      alt="report strawberry"
                      className="report-strawberry"
                      style={{cursor:'pointer'}}
                      onClick={handleImgClick}
                    />
                  ) : null}
                  {showHint && (
                    <div className="report-hint-bubble">{hintMsg}</div>
                  )}
                </div>
                <div className="report-stats">
                    <span className="report-stat">理智值：{report.sanity}</span>
                    <span className="report-stat">裝忙指數：{report.busy}</span>
                    <span className="report-stat">壓力值：{report.stress}</span>
                </div>
                <span className="report-title-badge">
                    稱號：{report.title || '辦公室幽靈莓'}
                </span>
            </Card>
            <Footer />
        </Container>
    );
};

export default Report;
