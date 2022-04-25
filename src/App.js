import './App.css';
import React, { useState } from 'react';
import Player from './components/Player';
function App() {
  const nome = "Alice Fortes"
  return (
    <div className="App">
     
       <h1>
         <p>Olá, esta é uma música do Eve</p>
       </h1>
     <Player/>
       
       <p>Feito por {nome}</p>

    </div>
  );
}

export default App;
