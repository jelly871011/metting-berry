import React, { useState } from 'react';
import '@/assets/styles/Setting.css';
import { FaCommentDots, FaBookOpen, FaEnvelope, FaInfoCircle, FaRocket, FaGhost } from 'react-icons/fa';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { VERSION } from '../version';

// props: 由父層傳入 hintOn, setHintOn
interface SettingProps {
  hintOn: boolean;
  setHintOn: (v: boolean) => void;
  funOn: boolean;
  setFunOn: (v: boolean) => void;
  ghostOn: boolean;
  setGhostOn: (v: boolean) => void;
}

const Setting: React.FC<SettingProps> = ({ hintOn, setHintOn, funOn, setFunOn, ghostOn, setGhostOn }) => {
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

    // 有趣開關事件
    const onFunToggle = () => {
      if (ghostOn) {
        alert('幽靈模式開啟中，請先關閉幽靈模式再啟用快樂模式！');
        return;
      }
      setFunOn(v => !v);
      alert(funOn ? '你關閉了「快樂模式」，會議又變無聊了...' : '快樂模式啟動！你要笑著參與會議 🍓💃');
    };

    // 幽靈模式開關事件
    const onGhostToggle = () => {
      if (funOn) {
        alert('快樂模式開啟中，請先關閉快樂模式再啟用幽靈模式！');
        return;
      }
      setGhostOn(v => !v);
      alert(ghostOn ? '幽靈模式解除，大家都看得到你了！' : '幽靈模式啟動，主管再也找不到你 👻');
    };

    return (
        <Container>
            <Card type="setting" title="設定">
                <div className="setting-list">
                    <div className="setting-list-item">
                        <FaCommentDots className="setting-icon" />
                        <span>系統提示</span>
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
                                {lang === 'zh' ? '中' : 'EN'}
                            </div>
                        </div>
                    </div>
                    <div className="setting-list-item">
                        <FaRocket className="setting-icon" />
                        <span>快樂模式</span>
                        <div className="setting-switch">
                            <div
                                className={`setting-square-toggle${funOn ? ' selected' : ''}`}
                                onClick={onFunToggle}
                            >
                                {funOn ? '開' : '關'}
                            </div>
                        </div>
                    </div>
                    <div className="setting-list-item">
                        <FaGhost className="setting-icon" />
                        <span>幽靈模式</span>
                        <div className="setting-switch">
                            <div
                                className={`setting-square-toggle${ghostOn ? ' selected' : ''}`}
                                onClick={onGhostToggle}
                            >
                                {ghostOn ? '開' : '關'}
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