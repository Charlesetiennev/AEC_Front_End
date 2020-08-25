import React from 'react';
import './App.css';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import ManageEmployerHooks from './components/manageEmployersHooks';
import AjouterEmployerHooks from './components/ajouterEmployerHooks';
import ModifierEmployerHooks from './components/modifierEmployerHooks';
import BoutonAjouterEmployerHooks from './components/boutonAjouterEmployerHooks';
import BoutonAcceuilHooks from './components/boutonAcceuilHooks';
// import { FicheEmployer } from './components/modifierEmployer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageNotFoundHooks from './components/pageNotFoundHooks';
//import Switch from 'react-bootstrap/esm/Switch';

function App() {
  let location = useLocation();

  return (
    <>
      <div className='menu'>
        {location.pathname != '/ajouterEmployer' &&
          !location.pathname.startsWith('/Employers') &&
          BoutonAjouterEmployerHooks()}
        {location.pathname != '/' && BoutonAcceuilHooks()}
      </div>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path='/' exact component={ManageEmployerHooks} />
        <Route path='/ajouterEmployer' component={AjouterEmployerHooks} />
        <Route path='/Employers/:id' component={ModifierEmployerHooks} />
        <Route component={PageNotFoundHooks} />
      </Switch>
    </>
  );
}

export default App;
