import React, { useState, useEffect } from 'react';
import EmployerHooks from './employerHooks';
import { Row, Col } from 'react-bootstrap';

export default function ManageEmployerHooks() {
  const [donneesRecues, setDonneesRecues] = useState([]);
  useEffect(() => {
    getEmployers();
  }, donneesRecues);

  async function getEmployers() {
    try {
      const response = await fetch('http://localhost:3001/employers');
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Row className='rowEmployer'>
        {donneesRecues.map((key, i) => (
          <Col lg='2'>
            <EmployerHooks
              Prenom={key.Prenom}
              Nom={key.Nom}
              id={key.id}
            ></EmployerHooks>
          </Col>
        ))}
      </Row>
    </>
  );
}
