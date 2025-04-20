import React from 'react';
import '@/assets/styles/Title.css';
import title_1 from '@/assets/images/title_1.png';
import ContinueBusyButton from '@/components/ContinueBusyButton';

const Title: React.FC = () => {
    return (
        <div className="title-container">
            <div className="title-card">
                <span className="title-title">我的稱號</span>
                <div className="title-divider" />
                <div className="title-list">
                    <div className="title-list-item">
                        <span className="title-icon-box">
                            <img src={title_1} alt="辦公室幽靈莓" className="title-icon" />
                        </span>
                        <span className="title-list-text">辦公室幽靈莓</span>
                    </div>
                    <div className="title-list-item">
                        <span className="title-icon-box"></span>
                        <span className="title-list-text">...</span>
                    </div>
                    <div className="title-list-item">
                        <span className="title-icon-box"></span>
                        <span className="title-list-text">...</span>
                    </div>
                    <div className="title-list-item">
                        <span className="title-icon-box"></span>
                        <span className="title-list-text">...</span>
                    </div>
                </div>
            </div>
            <ContinueBusyButton />
        </div>
    );
};

export default Title;
