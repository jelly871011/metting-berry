import React, { useState, useEffect } from 'react';
import '@/assets/styles/Setting.css';
import { FaMusic, FaVolumeUp, FaCommentDots, FaBookOpen, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { VERSION } from '../version';

// props: 由父層傳入 hintOn, setHintOn
interface SettingProps {
  hintOn: boolean;
  setHintOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Setting: React.FC<SettingProps> = ({ hintOn, setHintOn }) => {
    const [musicOn, setMusicOn] = useState(true);
    const [soundOn, setSoundOn] = useState(true);
    const [lang, setLang] = useState<'zh' | 'en'>('zh');

    // 兩句話輪流顯示
    const tutorialMsgs = [
      '作者懶得打，自己研究好不好 😎',
      '這麼簡單的遊戲，也需要教學？🤔'
    ];
    const [msgIdx, setMsgIdx] = useState(0);
    const onTutorialClick = () => {
      alert(tutorialMsgs[msgIdx]);
      setMsgIdx((msgIdx + 1) % tutorialMsgs.length);
    };
    const onContactClick = () => alert('作者夢遊中，請稍後再撥 💤');
    const onInfoClick = () => alert(`目前版本：${VERSION}\n不知道會不會有第二版\n有 bug 純屬正常，請享受 XD`);

    // 切換提示開關時，只用 props 的 setHintOn
    const onHintToggle = () => setHintOn(v => !v);

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
                                onClick={onHintToggle}
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
                                style={{ opacity: 1, cursor: 'pointer' }}
                                onClick={() => alert('要切語言請抖內，感恩！')}
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
