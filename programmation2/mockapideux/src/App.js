import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import {ManageEmployers} from './components/manageEmployers';
import {AjouterEmployer} from './components/ajouterEmployer';
import {PageNotFound} from './components/pageNotFound';
import {FicheEmployer} from './components/modifierEmployer';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Switch from 'react-bootstrap/esm/Switch';

function App() {
  return (
    <>
    <ToastContainer autoClose={3000} hideProgressBar />
    <Switch>
        <Route path="/" exact component={ManageEmployers}/>
        <Route path="/ajouterEmployer" component={AjouterEmployer}/>
        <Route path='/Employers/:id' component={FicheEmployer}/>
        <Route component={PageNotFound}/>
    </Switch>
    </>
  );
}

export default App;
