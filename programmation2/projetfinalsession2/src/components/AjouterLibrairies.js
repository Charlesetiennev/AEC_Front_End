import React from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
import { API } from '../CrudCrudAPI/API';
import { TweenLite } from 'gsap';
import { toast } from 'react-toastify';

export class AjouterLibrairies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        this.props.history.push('/listeLibrairies');
        toast.success('Ajout de la librairie ' + nomLib, {
          position: 'top-left',
        });

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

  handlePhoto(event) {
    const photos = document.getElementById('logoLibrairies').value;
    this.setState({ photo: photos });
  }

  handleNom(event) {
    const nomApercu = document.getElementById('nomLibrairies').value;
    this.setState({ nom: nomApercu });
  }

  handleDescription(event) {
    const descriptionApercu = document.getElementById('descriptionLibrairies')
      .value;
    this.setState({ description: descriptionApercu });
  }
  handleLien(event) {
    const lienApercu = document.getElementById('lienLibrairies').value;
    this.setState({ lien: lienApercu });
  }
  componentDidMount() {
    this.titreFromTop = TweenLite.from(this.titre, 1, { y: -100 });
    this.formFromBot = TweenLite.from(this.form, 1, { y: 100 });
  }

  render() {
    return (
      <Container>
        <h1
          ref={(div) => (this.titre = div)}
          className='text-center accentColorText titrePage'
        >
          Ajouter une librairies Javascript a la liste
        </h1>

        {/* APERCU CARD */}
        <div className='apercu '>
          <Row className='w-75 mx-auto'>
            <Col xs='6'>
              <Row>
                {this.state.photo !== '' && (
                  <Image
                    src={this.state.photo}
                    rounded
                    width='175'
                    className='p-3'
                  />
                )}
              </Row>
              <Row>
                {this.state.nom !== '' && (
                  <h3 className='p-3'>{this.state.nom}</h3>
                )}
              </Row>
            </Col>
            <Col xs='6'>
              {this.state.description !== '' && (
                <p className='p-3'>{this.state.description}</p>
              )}
            </Col>
            <Col lg='2' className='d-flex align-items-end pb-3'>
              {this.state.lien !== '' && <a href='#'>{this.state.lien}</a>}
            </Col>
          </Row>
        </div>
        {/* FORM */}
        <Row className='p-3'>
          <Col lg={{ span: 8, offset: 2 }}>
            <Form ref={(div) => (this.form = div)} name='ajout'>
              <Form.Group controlId='logoLibrairies'>
                <Form.Label>Logo</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Url contenant le logo'
                  onBlur={this.handlePhoto.bind(this)}
                  required
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId='nomLibrairies'>
                <Form.Label>Nom de la librairies</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Entrer le nom de la librairie'
                  onBlur={this.handleNom.bind(this)}
                  min='5'
                  max='25'
                  required='required'
                />
              </Form.Group>
              <Form.Group controlId='descriptionLibrairies'>
                <Form.Label>Description </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Entrez un resumer des fonctionnalites de la librairies'
                  onBlur={this.handleDescription.bind(this)}
                  required
                />
              </Form.Group>
              <Form.Group controlId='lienLibrairies'>
                <Form.Label>Lien</Form.Label>
                <Form.Control
                  type='text'
                  placeholder="Entrez l'url pour la docummentation"
                  onBlur={this.handleLien.bind(this)}
                  required
                />
              </Form.Group>
              <button
                className='accentColor'
                type='submit'
                onClick={this.handleAdd.bind(this)}
              >
                Ajouter
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
