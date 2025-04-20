import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/styles/commonStyle.css';

interface ContinueBusyButtonProps {
    className?: string;
    style?: React.CSSProperties;
}

const ContinueBusyButton: React.FC<ContinueBusyButtonProps> = ({ className = '', style }) => {
    const navigate = useNavigate();
    return (
        <button
            className={`continue-busy-btn ${className}`.trim()}
            style={style}
            onClick={() => navigate('/home')}
        >
            繼續裝忙
        </button>
    );
};

export default ContinueBusyButton;
