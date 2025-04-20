import React from 'react';
import strawberry from '@/assets/images/meeting_strawberry_1.png';
import supervisor from '@/assets/images/meeting_supervisor_1.png';
import female from '@/assets/images/meeting_coworker_female_1.png';
import male from '@/assets/images/meeting_coworker_male_1.png';
import '@/assets/styles/Meeting.css';
import { FaMicrophone, FaPhoneSlash, FaVideo } from 'react-icons/fa';

const Meeting: React.FC = () => (
    <div className="meeting-container">
        <div className="meeting-grid">
            <div className="meeting-cell"><img src={strawberry} alt="主角草莓" className="meeting-avatar" /></div>
            <div className="meeting-cell"><img src={female} alt="女同事" className="meeting-avatar" /></div>
            <div className="meeting-cell"><img src={supervisor} alt="主管" className="meeting-avatar" /></div>
            <div className="meeting-cell"><img src={male} alt="男同事" className="meeting-avatar" /></div>
        </div>
        <div className="meeting-dialog">
            <div className="meeting-dialog-box">
                <span className="meeting-dialog-text">會議室一片沈默....</span>
                <span className="meeting-dialog-text">會議室一片沈默....</span>
                <span className="meeting-dialog-text">會議室一片沈默....</span>
                <span className="meeting-dialog-text">會議室一片沈默....</span>
            </div>
        </div>
        <div className="meeting-actions">
            <button className="meeting-action-btn"><FaMicrophone /></button>
            <button className="meeting-action-btn meeting-action-hangup"><FaPhoneSlash /></button>
            <button className="meeting-action-btn"><FaVideo /></button>
        </div>
    </div>
);

export default Meeting;
