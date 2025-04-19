import React, { useEffect, useState } from 'react';
import strawberry from '@/assets/images/strawberry_loading.png';
import '@/assets/styles/Loading.css';

const Loading: React.FC = () => {
    const [dotCount, setDotCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setDotCount((prev) => (prev + 1) % 4);
        }, 400);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="loading-root">
            <div className="loading-spinner" />
            <div className="loading-text">
                正在連線中{'.'.repeat(dotCount)}
            </div>
            <img src={strawberry} alt="loading strawberry" className="loading-strawberry" />
        </div>
    );
};

export default Loading;
