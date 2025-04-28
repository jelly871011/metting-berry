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


// 之後可擴充更多稱號圖
const titleImgMap: Record<string, string> = {
    '研究型摸魚大師': title_1,
    '話術王': title_2,
    '焦點轉移達人': title_3,
    '裝傻天王': title_4,
    '消失的草莓': title_1,
    '生成式草莓': title_1,
    '鍵盤時間魔術師': title_1,
    '貼圖外交官': title_1,
    '隱身聆聽莓': title_1,
    '夢遊莓': title_1,
    '內心宇宙莓': title_1,
    '系統提示莓': title_1,
    '辦公室幽靈莓': title_1,
    '臨陣脫逃莓': title_1,
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
      }
    }, []);

    const reportImg = titleImgMap[report.title] || title_1;

    return (
        <Container>
            <Card type="report" title="摸魚報告卡">
                <img src={reportImg} alt="report strawberry" className="report-strawberry" />
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
