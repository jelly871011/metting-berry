import React, { useState } from 'react';
import '@/assets/styles/Setting.css';
import { FaMusic, FaVolumeUp, FaCommentDots, FaBookOpen, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import ContinueBusyButton from '../components/ContinueBusyButton';

const Setting: React.FC = () => {
    const [musicOn, setMusicOn] = useState(true);
    const [soundOn, setSoundOn] = useState(true);
    const [hintOn, setHintOn] = useState(true);
    const [lang, setLang] = useState<'zh' | 'en'>('zh');

    const onTutorialClick = () => alert('操作教學');
    const onContactClick = () => alert('聯絡作者');
    const onInfoClick = () => alert('版本資訊');

    return (
        <div className="setting-container">
            <div className="setting-card">
                <div className="setting-title">設定</div>
                <div className="setting-divider" />
                <div className="setting-list">
                    <div className="setting-list-item">
                        <FaMusic className="setting-icon" /> 音樂
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
                        <FaVolumeUp className="setting-icon" /> 音效
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
                        <FaCommentDots className="setting-icon" /> 提示文字
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
                        <span className="setting-icon" style={{fontSize: '2rem'}}>語</span> 語言
                        <div className="setting-switch">
                            <div
                                className={`setting-square-toggle${lang === 'en' ? ' selected' : ''}`}
                                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                            >
                                {lang === 'en' ? 'EN' : '中'}
                            </div>
                        </div>
                    </div>
                    <div className="setting-list-item">
                        <FaBookOpen className="setting-icon" />
                        <button className="setting-list-btn" onClick={e => { onTutorialClick(); (e.currentTarget as HTMLButtonElement).blur(); }}>操作教學</button>
                    </div>
                    <div className="setting-list-item">
                        <FaEnvelope className="setting-icon" />
                        <button className="setting-list-btn" onClick={e => { onContactClick(); (e.currentTarget as HTMLButtonElement).blur(); }}>聯絡作者</button>
                    </div>
                    <div className="setting-list-item">
                        <FaInfoCircle className="setting-icon" />
                        <button className="setting-list-btn" onClick={e => { onInfoClick(); (e.currentTarget as HTMLButtonElement).blur(); }}>版本資訊</button>
                    </div>
                </div>
            </div>
            <div className="setting-bottom">
                <ContinueBusyButton />
            </div>
        </div>
    );
};

export default Setting;
