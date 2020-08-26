import Pokemon from './pokemon';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function ManagePokemon() {
  const [donneesRecues, setDonneesRecues] = useState([]);
  useEffect(() => {
    getPokemon();
  }, donneesRecues);

  async function getPokemon() {
    try {
      const response = await fetch('../localDB/db.json');
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
            <Pokemon name={key.name}></Pokemon>
          </Col>
        ))}
      </Row>
    </>
  );
}
