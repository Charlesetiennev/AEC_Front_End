import React from 'react';
import './App.sass';
import Accueil from './components/Accueil';
import Menu from './components/Menu';
import Erreur404 from './components/Erreur404';
import { AjouterLibrairies } from './components/AjouterLibrairies';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row, Container } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import ManageLibrairies from './components/ManageLibrairies';
import ModifierLibrairie from './components/ModifierLibrairie';
import { useLocation } from 'react-router-dom';
import AfficherLibrairie from './components/AfficherLibrairie';
import { Footer } from './components/footer';

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
