import React from 'react';
import {Accueil} from './components/accueil';
import {Photos} from './components/photos';
import {Video} from './components/video';
import {Carte} from './components/carte';
import {Joke} from './components/joke'
import {JokeComplet} from './components/jokeComplet';
import {BarreDeNavigation} from './components/navbar';
import {ErreurPage} from './components/erreurpage';
import {Route,Switch} from 'react-router-dom' 
import './App.css';

function App() {
  return (
    <> 
    <BarreDeNavigation />
      <Switch> 
        <Route path="/" exact component={Accueil} /> 
        <Route path="/video" component={Video} /> 
        <Route path="/photos" component={Photos} /> 
        <Route path="/carte" component={Carte} />
        <Route path="/Joke" component={Joke}/>
        <Route path="/JokeComplet/:id" component={JokeComplet}/>
        <Route component={ErreurPage} />
      </Switch>
    </>

  );
}

export default App;
