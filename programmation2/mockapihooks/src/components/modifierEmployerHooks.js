import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function ModifierEmployerHooks(props) {
  const [donneesRecues, setDonneesRecues] = useState([
    { id: '', Nom: '', Prenom: '', Departement: '', Fonction: '', Photo: '' },
  ]);
  const [photo, setPhoto] = useState(donneesRecues.photo);
  useEffect(() => {
    getEmployers({});
  }, []);

  //recuperation de l'employer
  async function getEmployers() {
    try {
      await props.match.params.id;
      const response = await fetch(
        'http://localhost:3001/employers/' + props.match.params.id
      );
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //Handle la modification
  function handleEdit(event) {
    event.preventDefault();
    const id = donneesRecues.id;
    const nom = document.getElementById('nomEmployer').value;
    const prenom = document.getElementById('prenomEmployer').value;
    const fonction = document.getElementById('fonctionEmployer').value;
    const photo = document.getElementById('photoEmployer').value;
    const departement = document.getElementById('departementEmployer').value;
    modifierEmployer(id, nom, prenom, fonction, photo, departement);
  }

  //Modification de l'employer
  async function modifierEmployer(
    id,
    nom,
    prenom,
    fonction,
    photo,
    departement
  ) {
    try {
      const response = await fetch(
        'http://localhost:3001/employers/' + donneesRecues.id,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: id,
            Nom: nom,
            Prenom: prenom,
            Fonction: fonction,
            Photo: photo,
            Departement: departement,
          }),
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        props.history.push('/');
        toast.warn('Modification de ' + prenom + ' ' + nom);
        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }
  //Suppresion de l'empoyer
  async function handleDelete() {
    try {
      const response = await fetch(
        'http://localhost:3001/employers/' + donneesRecues.id,
        {
          method: 'delete',
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('SUPPRESSION!');
        props.history.push('/');
        toast.error("Supression de l'employer ");

        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }

  //Handle Photo onBlur
  function handlePhoto(event) {
    const photos = document.getElementById('photoEmployer').value;
    setPhoto(photos);
  }
  return (
    <>
      <Row className='m-0'>
        <Col lg='8'>
          <Form>
            <Form.Group controlId='nomEmployer'>
              <Form.Label className='Jauner'>Nom :</Form.Label>
              <Form.Control type='text' defaultValue={donneesRecues.Nom} />
            </Form.Group>
            <Form.Group controlId='prenomEmployer'>
              <Form.Label className='Jauner'>Prenom :</Form.Label>
              <Form.Control type='text' defaultValue={donneesRecues.Prenom} />
            </Form.Group>
            <Form.Group controlId='fonctionEmployer'>
              <Form.Label className='Jauner'>Fonction :</Form.Label>
              <Form.Control type='text' defaultValue={donneesRecues.Fonction} />
            </Form.Group>
            <Form.Group controlId='photoEmployer'>
              <Form.Label className='Jauner'>URL de sa photo</Form.Label>
              <Form.Control
                type='text'
                defaultValue={donneesRecues.Photo}
                onBlur={() => handlePhoto()}
              />
            </Form.Group>
            <Image src={donneesRecues.Photo} rounded width='125' />
            <Form.Group controlId='departementEmployer'>
              <Form.Label className='Jauner'>Departement :</Form.Label>
              <Form.Control
                type='text'
                defaultValue={donneesRecues.Departement}
              />
            </Form.Group>

            <Button
              variant='primary'
              type='submit'
              onClick={() => handleEdit()}
            >
              Enregistrer
            </Button>
            {/* <h1>{location.search.substring}</h1> */}
            <p className='btn btn-danger mt-5' onClick={() => handleDelete()}>
              Supprimer l'employer
            </p>
          </Form>
        </Col>
      </Row>
    </>
  );
}
