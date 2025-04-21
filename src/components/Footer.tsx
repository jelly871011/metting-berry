import React from 'react';
import ContinueBusyButton from './ContinueBusyButton';
import '../assets/styles/Footer.css';

/**
 * 共用 Footer，固定於底部，包含 ContinueBusyButton
 */
const Footer: React.FC = () => (
    <footer className="footer">
        <ContinueBusyButton />
    </footer>
);

export default Footer;
