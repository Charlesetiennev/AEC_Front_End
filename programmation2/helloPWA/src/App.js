import React from 'react';
import './App.css';
import DemoJSONLocal from './components/DemoJSONLocal';
import { Button } from 'react-bootstrap';
import ManagePokemon from './components/managePokemon';

function App() {
  return (
    <div className='App'>
      <Button variant='primary' size='lg' block id='boutonInstall' hidden>
        Installer l'application
      </Button>

      <DemoJSONLocal />
    </div>
  );
}

export default App;
