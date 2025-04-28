import React from 'react';
import '@/assets/styles/Title.css';
import title_1 from '@/assets/images/titles/1.png';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Card from '../components/Card';

const titleImgMap: Record<string, string> = {
    '研究型摸魚大師': title_1,
    '話術王': title_1,
    '焦點轉移達人': title_1,
    "裝傻天王": title_1,
    '消失的草莓': title_1,
    '生成式草莓': title_1,
    '鍵盤時間魔術師': title_1,
    '貼圖外交官': title_1,
    '隱身聆聽莓': title_1,
    '夢遊莓': title_1,
    '內心宇宙莓': title_1,
    '系統提示莓': title_1,
    '辦公室幽靈莓': title_1,
};

const Title: React.FC = () => {
    const myTitles: string[] = React.useMemo(() => {
        try {
            return JSON.parse(localStorage.getItem('myTitles') || '[]');
        } catch {
            return [];
        }
    }, []);
    return (
        <Container>
            <Card type="title" title="我的稱號">
                <div className="title-list">
                    {myTitles.map((title, idx) => (
                        <div className="title-list-item" key={title+idx}>
                            <span className="title-icon-box">
                              {titleImgMap[title] ? (
                                <img src={titleImgMap[title]} alt={title} className="title-icon" />
                              ) : null}
                            </span>
                            <span className="title-list-text">{title}</span>
                        </div>
                    ))}
                </div>
            </Card>
            <Footer />
        </Container>
    );
};

export default Title;
