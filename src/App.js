import './App.css';
import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player'
function App() {
  const nome = "Alice Fortes"
  return (
    <div className="App">
      <AudioPlayer 
      src={process.env.PUBLIC_URL + '/audios/01.mp3'} />
       <h1>
         <p>Olá Mundo!</p>
       </h1>
       <p>Meu primeiro app do 0</p>
       <p>Feito por {nome}</p>

    </div>
  );
}

export default App;
