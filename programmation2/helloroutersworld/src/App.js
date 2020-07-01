import React from 'react';
import {Accueil} from './components/accueil';
import {Photos} from './components/photos';
import {Video} from './components/video';
import {Carte} from './components/carte';
import {BarreDeNavigation} from './components/navbar';
import {Route} from 'react-router-dom' 
import './App.css';

function App() {
  return (
    <> 
    <BarreDeNavigation /> 
      <Route path="/" exact component={Accueil} /> 
      <Route path="/video" component={Video} /> 
      <Route path="/photos" component={Photos} /> 
      <Route path="/carte" component={Carte} /> 
    </> 
  );
}

export default App;
