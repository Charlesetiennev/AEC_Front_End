// AfficherLibrairie.js
// Par Charles-Etienne Villemure
// Le 14 Septembre 2020
import React, { useEffect, useState } from 'react';
import { API } from '../CrudCrudAPI/API';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function AfficherLibrairie(props) {
  const [donneesRecues, setDonneesRecues] = useState({
    nom: '',
    logo: '',
    description: '',
    lien: '',
  });
  const [libID, setlibID] = useState(
    props.location.pathname.substring(19, props.location.pathname.length)
  );
  useEffect(() => {
    getLibrairieInfos();
  }, []);
  //   Recuperation des infos
  async function getLibrairieInfos() {
    try {
      const response = await fetch(API + libID);
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
      <Col xs='12' className='pb-5'>
        <Link to='/listeLibrairies'>
          <button>Retour à la liste</button>
        </Link>
      </Col>

      <Col xs='6'>
        <Image src={donneesRecues.logo} fluid />
      </Col>
      <Col xs='6'>
        <Row>
          <h1>{donneesRecues.nom}</h1>
        </Row>
        <Row>
          <p>{donneesRecues.description}</p>
        </Row>
        <Row>
          <a href={donneesRecues.lien}>{donneesRecues.lien}</a>
        </Row>
      </Col>
    </>
  );
}
