import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Button variant='primary' size='lg' block id='boutonInstall'>
        Installer l'application
      </Button>
      <h1>hello World</h1>
    </div>
  );
}

export default App;
