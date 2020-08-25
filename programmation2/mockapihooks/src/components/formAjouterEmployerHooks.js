import React, { useState, UseEffect } from 'react';
import { Form, Button, Image, Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';

function FormAjouterEmployerHooks(props) {
  const [photo, setPhoto] = useState('');
  //Retourne le prochain ID pour savoir où ajouter
  async function getID() {
    try {
      let nextID = 0;
      const response = await fetch('http://localhost:3001/employers');
      const reponseDeApi = await response.json();
      for (let i = 0; i < reponseDeApi.length; i++) {
        if (reponseDeApi[i].id > nextID) {
          nextID = reponseDeApi[i].id;
        }
      }
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return nextID + 1;
    } catch (error) {
      console.log(error);
    }
  }

  function handleAdd(event) {
    event.preventDefault();
    const nom = document.getElementById('nomEmployer').value;
    const prenom = document.getElementById('prenomEmployer').value;
    const fonction = document.getElementById('fonctionEmployer').value;
    const photo = document.getElementById('photoEmployer').value;
    const departement = document.getElementById('departementEmployer').value;
    ajoutEmployer(nom, prenom, fonction, photo, departement);
  }
  //POST d'ajout d'employer
  async function ajoutEmployer(nom, prenom, fonction, photo, departement) {
    try {
      const newID = await getID();
      const response = await fetch('http://localhost:3001/employers/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: newID,
          Nom: nom,
          Prenom: prenom,
          Fonction: fonction,
          Photo: photo,
          Departement: departement,
        }),
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        props.history.push('/');
        toast.success('Ajout de ' + prenom + ' ' + nom);

        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }

  function handlePhoto(event) {
    const photos = document.getElementById('photoEmployer').value;
    //en dessous
    setPhoto(photos);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId='nomEmployer'>
                <Form.Label className='Jauner'>Nom :</Form.Label>
                <Form.Control type='text' placeholder='Entrer le nom' />
              </Form.Group>
              <Form.Group controlId='prenomEmployer'>
                <Form.Label className='Jauner'>Prenom :</Form.Label>
                <Form.Control type='text' placeholder='Entrer le prenom' />
              </Form.Group>
              <Form.Group controlId='fonctionEmployer'>
                <Form.Label className='Jauner'>Fonction :</Form.Label>
                <Form.Control type='text' placeholder='Entrer sa fonction' />
              </Form.Group>
              <Form.Group controlId='photoEmployer'>
                <Form.Label className='Jauner'>URL de sa photo</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Entrer une URL valide'
                  onBlur={() => handlePhoto()}
                />
              </Form.Group>
              {photo !== '' && <Image src={photo} rounded width='125' />}
              <Form.Group controlId='departementEmployer'>
                <Form.Label className='Jauner'>Departement :</Form.Label>
                <Form.Control type='text' placeholder='Departement' />
              </Form.Group>

              <Button
                variant='primary'
                type='submit'
                onClick={() => handleAdd()}
              >
                Enregistrer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default FormAjouterEmployerHooks;
