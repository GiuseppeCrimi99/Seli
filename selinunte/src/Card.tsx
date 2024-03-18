import React, { useState } from 'react';
import "./Card.css";

interface CardProps {
  title: string;
  content: string;
  image: string;
  buttonText?: string;
  onClick?: () => void; // Aggiunto il tipo per la funzione di gestione del clic del bottone
}

const Card: React.FC<CardProps> = ({ title, content, image, buttonText, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`card1 ${isHovered ? 'hover' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="card-image">
        <img src={image} alt="Card Image" />
        <div className="card-overlay">
          <p>{content}</p>
          {buttonText && <button onClick={onClick}>{buttonText}</button>}
        </div>
      </div>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;