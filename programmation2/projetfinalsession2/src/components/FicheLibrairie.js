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
  console.log(pokemonID);
  console.log('allo');
  async function getLibrairie() {
    console.log('allo');
    console.log(pokemonID);
    try {
      await props.match.params.id;
      const response = await fetch(API + '5f57951cd899cd03e8b4df61');
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
      <h1>{donneesRecues.nom}</h1>
    </>
  );
}