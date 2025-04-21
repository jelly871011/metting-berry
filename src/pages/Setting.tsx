import React, { useState } from 'react';
import '@/assets/styles/Setting.css';
import { FaMusic, FaVolumeUp, FaCommentDots, FaBookOpen, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Setting: React.FC = () => {
    const [musicOn, setMusicOn] = useState(true);
    const [soundOn, setSoundOn] = useState(true);
    const [hintOn, setHintOn] = useState(true);
    const [lang, setLang] = useState<'zh' | 'en'>('zh');

    const onTutorialClick = () => alert('操作教學');
    const onContactClick = () => alert('聯絡作者');
    const onInfoClick = () => alert('版本資訊');

    return (
        <Container>
            <Card type="setting" title="設定">
                <div className="setting-list">
                    <div className="setting-list-item">
                        <FaMusic className="setting-icon" />
                        <span>背景音樂</span>
                        <div className="setting-switch">
                            <div
                                className={`setting-square-toggle${musicOn ? ' selected' : ''}`}
                                onClick={() => setMusicOn(!musicOn)}
                            >
                                {musicOn ? '開' : '關'}
                            </div>
                        </div>
                    </div>
                    <div className="setting-list-item">
                        <FaVolumeUp className="setting-icon" />
                        <span>音效</span>
                        <div className="setting-switch">
                            <div
                                className={`setting-square-toggle${soundOn ? ' selected' : ''}`}
                                onClick={() => setSoundOn(!soundOn)}
                            >
                                {soundOn ? '開' : '關'}
                            </div>
                        </div>
                    </div>
                    <div className="setting-list-item">
                        <FaCommentDots className="setting-icon" />
                        <span>提示</span>
                        <div className="setting-switch">
                            <div
                                className={`setting-square-toggle${hintOn ? ' selected' : ''}`}
                                onClick={() => setHintOn(!hintOn)}
                            >
                                {hintOn ? '開' : '關'}
                            </div>
                        </div>
                    </div>
                    <div className="setting-list-item">
                        <span className="setting-icon" style={{fontSize: '2rem'}}>語</span>
                        <span>語言</span>
                        <div className="setting-switch">
                            <div
                                className={`setting-square-toggle${lang === 'en' ? ' selected' : ''}`}
                                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                            >
                                {lang === 'zh' ? '中文' : 'EN'}
                            </div>
                        </div>
                    </div>
                    <div className="setting-list-item">
                        <FaBookOpen className="setting-icon" />
                        <button className="setting-list-btn" onClick={onTutorialClick}>操作教學</button>
                    </div>
                    <div className="setting-list-item">
                        <FaEnvelope className="setting-icon" />
                        <button className="setting-list-btn" onClick={onContactClick}>聯絡作者</button>
                    </div>
                    <div className="setting-list-item">
                        <FaInfoCircle className="setting-icon" />
                        <button className="setting-list-btn" onClick={e => { onInfoClick(); (e.currentTarget as HTMLButtonElement).blur(); }}>版本資訊</button>
                    </div>
                </div>
            </Card>
            <Footer />
        </Container>
    );
};

export default Setting;
