import React from 'react';
import { useNavigate } from 'react-router-dom';
import report_strawberry_1 from '@/assets/images/report_strawberry_1.png';
import '@/assets/styles/Report.css';

const Report: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="report-container">
            <div className="report-card">
                <span className="report-title">摸魚報告卡</span>
                <div className="report-divider" />
                <img src={report_strawberry_1} alt="report strawberry" className="report-strawberry" />
                <div className="report-stats">
                    <span className="report-stat">理智值：-10</span>
                    <span className="report-stat">裝忙指數：100</span>
                    <span className="report-stat">壓力值：5</span>
                </div>
                <span className="report-title-badge">
                    稱號：辦公室幽靈莓
                </span>
            </div>
            <button className="report-btn" onClick={() => navigate('/home')}>繼續裝忙</button>
        </div>
    );
};

export default Report;
