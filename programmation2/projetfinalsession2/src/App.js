// App.js
// Par Charles-Etienne Villemure
// Le 14 Septembre 2020

import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// BOOTSTRAP
import 'react-toastify/dist/ReactToastify.css';
import { Row, Container } from 'react-bootstrap';
// COMPONENTS
import './App.sass';
import Accueil from './components/Accueil';
import Menu from './components/Menu';
import ManageLibrairies from './components/ManageLibrairies';
import ModifierLibrairie from './components/ModifierLibrairie';
import AfficherLibrairie from './components/AfficherLibrairie';
import { AjouterLibrairies } from './components/AjouterLibrairies';
import { Footer } from './components/footer';
import Erreur404 from './components/Erreur404';

function App() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Container fluid>
        <ToastContainer autoClose={3000} hideProgressBar />
        {Menu()}
        <hr className='hrCouleur' />
        <Row>
          <Switch className='rowafficher'>
            <Redirect
              from='/AEC_Front_End2/programmation2/projetfinalsession2/build/index.html'
              to='/'
            />
            <Route path='/' exact component={Accueil} />
            <Route path='/listeLibrairies' component={ManageLibrairies} />
            <Route path='/ajouterLibrairies' component={AjouterLibrairies} />
            <Route
              path='/ModifierLibrairie/:id'
              component={ModifierLibrairie}
            />
            <Route
              path='/AfficherLibrairie/:id'
              component={AfficherLibrairie}
            />
            <Route component={Erreur404} />
          </Switch>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
