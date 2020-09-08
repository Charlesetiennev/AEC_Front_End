import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { API } from '../CrudCrudAPI/API';
export default function FicheLibrairie(props) {
  const [donneesRecues, setDonneesRecues] = useState([
    { nom: '', logo: '', description: '', lien: '' },
  ]);
  const [pokemonID, setPokemonID] = useState(
    props.location.search.substring(4, props.location.search.length)
  );

  useEffect(() => {
    getLibrairie();
  }, []);

  async function getLibrairie() {
    try {
      await props.match.params.id;
      const response = await fetch(API + '?_id=5f57951cd899cd03e8b4df61');
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      console.log(pokemonID);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>{donneesRecues.nom}</h1>
    </>
  );
}
