import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/styles/commonStyle.css';

interface ContinueBusyButtonProps {
    className?: string;
    style?: React.CSSProperties;
}

const ContinueBusyButton: React.FC<ContinueBusyButtonProps> = ({ className = '', style }) => {
    const navigate = useNavigate();
    // 會議中禁止回 home
    const meetingLock = window.location.pathname.startsWith('/meeting');
    const handleClick = () => {
        if (meetingLock) {
            alert('會議進行中，不能回首頁！');
            return;
        }
        navigate('/home');
    };
    return (
        <button
            className={`continue-busy-btn ${className}`.trim()}
            style={style}
            onClick={handleClick}
        >
            繼續裝忙
        </button>
    );
};

export default ContinueBusyButton;
