import './App.css';
import React, { useState } from 'react';
function App() {
  const nome = "Alice Fortes"
  return (
    <div className="App">
       <h1>
         <p>Olá Mundo!</p>
       </h1>
       <p>Meu primeiro app do 0</p>
       <p>Feito por {nome}</p>

    </div>
  );
}

export default App;
