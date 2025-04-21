import React from 'react';
import '../assets/styles/Card.css';

/**
 * 共用卡片元件，RWD、外觀統一，type 決定不同卡片內容的 className
 */
export type CardType = 'setting' | 'report' | 'title';

interface CardProps {
  title: string;
  type: CardType;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, type, children, className = '' }) => (
  <div className={`card card-${type} ${className}`.trim()}>
    <div className="card-title">{title}</div>
    <div className="card-divider" />
    {children}
  </div>
);

export default Card;
