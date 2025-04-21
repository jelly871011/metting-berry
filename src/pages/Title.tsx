import React from 'react';
import '@/assets/styles/Title.css';
import title_1 from '@/assets/images/title_1.png';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Title: React.FC = () => {
    return (
        <Container>
            <Card type="title" title="我的稱號">
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
            </Card>
            <Footer />
        </Container>
    );
};

export default Title;
