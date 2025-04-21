import React from 'react';
import { useNavigate } from 'react-router-dom';
import report_strawberry_1 from '@/assets/images/report_strawberry_1.png';
import '@/assets/styles/Report.css';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Report: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Card type="report" title="摸魚報告卡">
                <img src={report_strawberry_1} alt="report strawberry" className="report-strawberry" />
                <div className="report-stats">
                    <span className="report-stat">理智值：-10</span>
                    <span className="report-stat">裝忙指數：100</span>
                    <span className="report-stat">壓力值：5</span>
                </div>
                <span className="report-title-badge">
                    稱號：辦公室幽靈莓
                </span>
            </Card>
            <Footer />
        </Container>
    );
};

export default Report;
