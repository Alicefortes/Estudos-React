import './App.css';
import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
function App() {
  const nome = "Alice Fortes"
  return (
    <div className="App">
     
       <h1>
         <p>Olá, esta é uma música do Eve</p>
       </h1>
       <div>
       <AudioPlayer 
      src={process.env.PUBLIC_URL + '/audios/01.mp3'} 
      layout="stacked-reverse"/>
       </div>
       
       <p>Feito por {nome}</p>

    </div>
  );
}

export default App;
