import React from 'react';
import './App.css';
import logoNetflix from './img/netflix.png';

import bill from './img/billWennington.png';
import dennis from './img/dennisRodman.png';
import michael from './img/michaelJordan.jpg';
import scottie from './img/scottiePippen.jpg';
import steve from './img/steveKerr.jpg';

const texteAfficher = (
  <div className="App-Header">
    <h1>THE LAST DANCE</h1>
    <p>
      Une production de</p>
    <img
     src={logoNetflix}
     alt='logoNetflix' />
    <p>
      Mettant en vedette
    </p>
  </div>
);

const joueurBasket = ['Bill Wennington', 'Dennis Rodman','Michael Jordan', 'Scottie Pippen','Steve Kerr'];
let imageAcceuil;

// joueurBasket[0] = (
//   <div>
//     <h2>billWennington</h2>
//     <img 
//     src={bill}
//     alt='Bill Wennington'/>
//   </div>
// )


let joueurAffiche = Math.floor(Math.random() * 5);
let joueurAlea = (
  joueurBasket [joueurAffiche]
);



if (joueurAffiche[0]){
  imageAcceuil = "all"
};


const listeJoueur = joueurBasket.map((joueur,i)=>
<li key = {'joueur'+i}>{joueur}</li>
);




// Fais toi une variable en haut qui contient le nom du joueur.
// Let nomJ = tabJoueurs[0] mettons au début 
// nomJ === "Michael Jordan" && <li.....




function App() {
  return (
    <div className="App">
      {texteAfficher}
      <h2>{joueurAlea}</h2>
        {imageAcceuil}
      <h2>Le 5 partant affiches avec MAP()</h2>
        <ul>{listeJoueur}</ul>
      <h2>Le 4 Partants affiche avec &&</h2>
        <ul></ul>
        
    </div>
  );
}

export default App;
