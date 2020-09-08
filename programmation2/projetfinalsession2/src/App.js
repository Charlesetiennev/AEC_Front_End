import React from 'react';
import './App.sass';
import Accueil from './components/Accueil';
import Menu from './components/Menu';
import Erreur404 from './components/Erreur404';
import { AjouterLibrairies } from './components/AjouterLibrairies';
import { Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import ManageLibrairies from './components/ManageLibrairies';
import FicheLibrairie from './components/FicheLibrairie';

function App() {
  return (
    <>
      {Menu()}

      <Row>
        <Col sm='12'>
          <Switch className='rowafficher'>
            <Route path='/4' component={Accueil} />
            <Route path='/2' component={Accueil} />
            <Route path='/listeLibrairies' component={ManageLibrairies} />
            <Route path='/ajouterLibrairies' component={AjouterLibrairies} />
            <Route path='/' exact component={FicheLibrairie} />
            <Route component={Erreur404} />
          </Switch>
        </Col>
      </Row>
    </>
  );
}

export default App;
