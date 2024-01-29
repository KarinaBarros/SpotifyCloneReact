import React, { useEffect } from 'react';
import './Playlist.css';
import Offer from '../offer/Offer.js';

const Playlist = () => {
  useEffect(() => {
    
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();

    const greetingMessage =
      currentHour >= 5 && currentHour < 12
        ? "Bom dia"
        : currentHour >= 12 && currentHour < 18
        ? "Boa tarde"
        : "Boa noite";

    if (greetingElement) {
      greetingElement.textContent = greetingMessage;
    }
  }, []); 

  return (
    <div className="playlist-container">
      <div id="result-playlists">
        <div className="playlist">
          <h1 id="greeting"></h1>
          <h2 className="session">Navegar por todas as seções</h2>
        </div>
        <Offer />
      </div>
    </div>
  );
}

export default Playlist;