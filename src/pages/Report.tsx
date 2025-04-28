import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [report, setReport] = useState({
      title: '',
      busy: 0,
      sanity: 0,
      stress: 0,
    });

    useEffect(() => {
      const last = localStorage.getItem('lastReport');
      if (last) {
        setReport(JSON.parse(last));
        try {
          const records = JSON.parse(localStorage.getItem('meetingRecords') || '[]');
          const parsed = JSON.parse(last);
          const totalScore = parsed.sanity + parsed.busy - parsed.stress;
          const current = { ...parsed, date: new Date().toISOString(), totalScore };
          records.push(current);
          localStorage.setItem('meetingRecords', JSON.stringify(records));
        } catch {}
      }
    }, []);

    const reportImg = titleImgMap[report.title];

    return (
        <Container>
            <Card type="report" title="摸魚報告卡">
                <div style={{width:'13rem',height:'13rem',margin:'0 auto 1rem auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  {reportImg ? (
                    <img src={reportImg} alt="report strawberry" className="report-strawberry" />
                  ) : null}
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
