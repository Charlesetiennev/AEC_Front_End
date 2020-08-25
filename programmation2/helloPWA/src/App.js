import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Button variant='primary' size='lg' block id='boutonInstall'>
        Installer l'application
      </Button>
    </div>
  );
}

export default App;
