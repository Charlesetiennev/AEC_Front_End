import React from 'react';
import './App.css';
import logo from '../../img/becflix.png'; 
import Container from 'react-bootstrap/Container';
import {Cataloge} from '../Catalogue/Catalogue';

const longueur = "200px"; 


const logoAcceuil = <img 
    src={logo}
    alt="logo"
    height={longueur}
    width={longueur}
    className='logoAcceuil'/>
    

function App() {
  return (
    <Container fluid>
      {logoAcceuil}
      <Cataloge/>
    </Container>
  );
}

export default App;
