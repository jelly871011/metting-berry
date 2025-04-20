import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import strawberry from '@/assets/images/home_strawberry.png';
import '@/assets/styles/Home.css';
import { FaCog, FaStar, FaRegListAlt, FaBars, FaTimes } from 'react-icons/fa';

const Home = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <div className="home-bg">
                <div className="home-bg-top" />
                <div className="home-bg-middle" />
            </div>
            <div className="home-root home-root-center">
                <div className="home-title">開會莓在聽</div>
                <img src={strawberry} alt="strawberry" className="home-strawberry" />
                <div className="home-buttons">
                    <button className="home-btn-main" onClick={() => navigate('/meeting')}>開始上線</button>
                    <button className="home-btn-main" onClick={() => navigate('/meeting')}>趕快上線</button>
                </div>
                <button className="drawer-toggle-btn" onClick={() => setDrawerOpen(true)}>
                    <FaBars />
                </button>
                {drawerOpen && (
                    <>
                        <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)} />
                        <div className="drawer">
                            <div className="drawer-handle"></div>
                            <button className="drawer-close-btn" onClick={() => setDrawerOpen(false)}><FaTimes /></button>
                            <div className="drawer-bar-btns">
                                <button className="home-bar-btn"><FaCog className="home-bar-icon" />設定</button>
                                <button className="home-bar-btn"><FaStar className="home-bar-icon" />我的稱號</button>
                                <button className="home-bar-btn"><FaRegListAlt className="home-bar-icon" />報告卡</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
