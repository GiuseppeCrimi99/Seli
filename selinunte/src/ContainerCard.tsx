import React from 'react';
import Card from "./Card"
import "./ContainerCard.css"
const ContainerCard: React.FC =() => {
  return (
    <div>
      <div className="container-card">
        <div className="card">
          <Card
            title="Servizio Navette"
            content="Offriamo un comodo servizio navetta per esplorare le attrazioni locali senza preoccupazioni di parcheggio."
            image="src/assets/images/navette.jpg"
            buttonText="Scopri di più"
            onClick={() => {
              console.log('Prenota ora cliccato!');
            }}
          />
        </div>
        <div className="card">
          <Card
            title="Bar Vicini"
            content="Rilassati e goditi una bevanda rinfrescante nei nostri bar locali, perfetti per un momento di relax dopo una giornata di esplorazione."
            image="src/assets/images/vinu.jpg"
            buttonText="Scopri di più"
            onClick={() => {
              console.log('Scopri di più cliccato!');
            }}
          />
        </div>
        <div className="card">
          <Card
            title="Hotel Vicini"
            content="Scopri una vasta gamma di hotel accoglienti nelle vicinanze, perfetti per un soggiorno confortevole durante la tua visita."
            image="src/assets/images/hotel.jpg"
            buttonText="Scopri di più"
            onClick={() => {
              console.log('Prenota ora cliccato!');
            }}
          />
        </div>
        <div className="card">
          <Card
            title="Ristoranti Locali"
            content="Delizia il tuo palato con le prelibatezze della cucina locale nei nostri ristoranti, dove il gusto incontra la tradizione."
            image="src/assets/images/risto.jpg"
            buttonText="Scopri di più"
            onClick={() => {
              console.log('Scopri di più cliccato!');
            }}
          />
        </div>
        <div className="card">
          <Card
            title="Musei e Attrazioni Culturali"
            content="Scopri la ricca storia e la cultura locale visitando i nostri musei e attrazioni culturali, che offrono un viaggio nel tempo emozionante."
            image="src/assets/images/temple.jpg"
            buttonText="Scopri di più"
            onClick={() => {
              console.log('Esplora cliccato!');
            }}
          />
        </div>
        <div className="card">
          <Card
            title="Lidi Balneari"
            content="Approfitta dei nostri pittoreschi lidi balneari per una giornata di sole e relax sulla spiaggia."
            image="src/assets/images/mare.jpg"
            buttonText="Scopri di più"
            onClick={() => {
              console.log('Prenota ora cliccato!');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;