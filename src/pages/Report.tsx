import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import report_strawberry_1 from '@/assets/images/report_strawberry_1.png';
import '@/assets/styles/Report.css';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Card from '../components/Card';

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

    return (
        <Container>
            <Card type="report" title="摸魚報告卡">
                <img src={report_strawberry_1} alt="report strawberry" className="report-strawberry" />
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
