// Erreur404.js
// Par Charles-Etienne Villemure
// Le 25 Septembre 2020
import React from 'react';
import { Image, Col } from 'react-bootstrap';

export default function Erreur404() {
  return (
    <Col xs='12' className='d-flex justify-content-center align-items-center'>
      {' '}
      <div>
        <h1 className='text-white'>Erreur 404 la page est introuvable.</h1>{' '}
        <Image
          src='https://leblogauto.b-cdn.net/wp-content/uploads/2020/04/Peugeot-404-1-640x360.jpg'
          fluid
          className='p-3'
        />
      </div>
    </Col>
  );
}
