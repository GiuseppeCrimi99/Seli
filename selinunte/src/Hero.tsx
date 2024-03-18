import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const images = [
    'https://mangias.com/wp-content/uploads/2021/07/parco_selinunte.jpg',
    'https://cms.seonweb.eu/sw_images/news/shutterstock136948499155.jpg',
    'https://www.storieparallele.it/wp-content/uploads/2021/10/selinunte.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia l'immagine ogni 5000 millisecondi (5 secondi)

    return () => clearInterval(interval);
  }, [images.length]);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <div className="hero-container" style={backgroundImageStyle}>
      <div className="hero-content">
        <div className='containerPar'>
          <div className="h1-cont">
            <h1 className='benvenuto'>BENVENUTO A SELINUNTE!</h1>
          </div>
          <p className='benvenuto'>Esplora l'antica bellezza della magnifica città di Selinunte, dove ogni pietra racconta una storia millenaria. Scopri le rovine imponenti che testimoniano la grandezza della Magna Grecia e immergiti nell'atmosfera unica di questo sito archeologico straordinario.</p>
          <button className="hero-button"><span>Inizia la tua avventura</span></button>
        </div> 
      </div>
    </div>
  );
};

export default Hero;
