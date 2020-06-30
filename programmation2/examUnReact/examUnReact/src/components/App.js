// App.js 
// Par Charles-Etienne Villemure
// Le 16 Juin 2020
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Acceuil} from '../components/acceuil';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Acceuil/>
      </header>
    </div>
  );
}

export default App;
