import React, { useState, useEffect } from 'react';
import FormAjouterEmployerHooks from './formAjouterEmployerHooks';
import { Row, Col } from 'react-bootstrap';

function AjouterEmployerHooks(props) {
  return (
    <>
      <Row className='m-0 formPourAjout'>
        <Col lg='10'>
          <FormAjouterEmployerHooks history={props.history} />
        </Col>
      </Row>
    </>
  );
}
export default AjouterEmployerHooks;
