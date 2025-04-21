import React from 'react';
import '../assets/styles/Container.css';

/**
 * 共用外層容器，獨立樣式 container
 */
const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="container">
        {children}
    </div>
);

export default Container;
