import React, { useState, useEffect } from 'react';
import { Librairies } from './Librairies';
import { Row } from 'react-bootstrap';
import { API } from '../CrudCrudAPI/API';

export default function ManageLibrairies() {
  const [donneesRecues, setDonneesRecues] = useState([]);

  //Ajout de la gestion des erreurs
  useEffect(() => {
    getLibrairies();
  }, [donneesRecues.join(',')]); //Si on enlève le second paramètre, on obtient une boucle infinie.

  async function getLibrairies() {
    try {
      const response = await fetch(API);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      console.log(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Row>
      {donneesRecues.map((key, i) => (
        <Librairies
          nom={key.nom}
          id={key._id}
          description={key.description}
          logo={key.logo}
          lien={key.lien}
          key={key._id}
        ></Librairies>
      ))}
    </Row>
  );
}
