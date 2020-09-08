import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { API } from '../CrudCrudAPI/API';
import { TweenLite } from 'gsap';

export class AjouterLibrairies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photo: '', setErrors: {} };
    this.handleAdd = this.handleAdd.bind(this);
    // H1Gsap
    this.titre = null;
    this.titreFromTop = null;
    // FormGsap
    this.form = null;
    this.formFromBot = null;
  }

  async AjouterLibrairies(nomLib, logoLib, descriptionLib, lienLib) {
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: nomLib,
          logo: logoLib,
          description: descriptionLib,
          lien: lienLib,
        }),
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        this.props.history.push('/');
        //      toast.success('Ajout de la librairie ' + nomLib);

        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }

  handleAdd(event) {
    event.preventDefault();

    const nomLib = document.getElementById('nomLibrairies').value;
    const logoLib = document.getElementById('logoLibrairies').value;
    const descriptionLib = document.getElementById('descriptionLibrairies')
      .value;
    const lienLib = document.getElementById('lienLibrairies').value;

    this.AjouterLibrairies(nomLib, logoLib, descriptionLib, lienLib);
  }
  componentDidMount() {
    this.titreFromTop = TweenLite.from(this.titre, 1, { y: -100 });
    this.formFromBot = TweenLite.from(this.form, 1, { y: 100 });
  }
  render() {
    return (
      <>
        <h1 ref={(div) => (this.titre = div)} className='text-center'>
          Ajouter une librairies Javascript a la liste{' '}
        </h1>
        <Form ref={(div) => (this.form = div)}>
          <Form.Group controlId='nomLibrairies'>
            <Form.Label>Nom de la librairies</Form.Label>
            <Form.Control
              type='text'
              placeholder='Entrer le nom de la librairie'
            />
          </Form.Group>
          <Form.Group controlId='logoLibrairies'>
            <Form.Label>Logo</Form.Label>
            <Form.Control
              type='text'
              placeholder='Entrer le nom de la librairie'
            />
          </Form.Group>
          <Form.Group controlId='descriptionLibrairies'>
            <Form.Label>Description </Form.Label>
            <Form.Control
              type='text'
              placeholder='Entrez un resumer des fonctionnalites de la librairies'
            />
          </Form.Group>
          <Form.Group controlId='lienLibrairies'>
            <Form.Label>Lien</Form.Label>
            <Form.Control
              type='text'
              placeholder="Entrez l'url pour la docummentation"
            />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={this.handleAdd}>
            Ajouter
          </Button>
        </Form>
      </>
    );
  }
}
