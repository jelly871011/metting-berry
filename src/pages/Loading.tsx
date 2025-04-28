import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import strawberry from '@/assets/images/strawberry_loading.png';
import '@/assets/styles/Loading.css';

const Loading: React.FC = () => {
    const [dotCount, setDotCount] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate();

    const loadingQuotes = [
      '摸魚是生存本能。',
      '主管還在連線中，請稍等…',
      '據說摸魚可以延年益壽（？）',
      '會議永遠不會準時開始。',
      '今天你摸魚了嗎？',
      '草莓正在努力裝忙中…',
      '理智值正在恢復，請耐心等待。',
      '摸魚使人快樂！',
    ];

    const [quoteIdx] = useState(() => Math.floor(Math.random() * loadingQuotes.length));

    useEffect(() => {
        const timer = setInterval(() => {
            setDotCount((prev) => (prev + 1) % 4);
        }, 400);
        // 2秒後觸發淡出
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2000);
        // 2.7秒後跳轉到 Home
        const navTimer = setTimeout(() => {
            navigate('/home');
        }, 2700);
        return () => {
            clearInterval(timer);
            clearTimeout(fadeTimer);
            clearTimeout(navTimer);
        };
    }, [navigate]);

    return (
        <div className={`loading-root${fadeOut ? ' fade-out' : ''}`}>
            <div className="loading-spinner" />
            <div className="loading-text">
                正在連線中{'.'.repeat(dotCount)}
            </div>
            <img src={strawberry} alt="loading strawberry" className="loading-strawberry strawberry-bounce" />
            <div className="loading-quote">{loadingQuotes[quoteIdx]}</div>
        </div>
    );
};

export default Loading;
