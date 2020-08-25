import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify";

export class FormAjouterEmployer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo: "", setErrors : {}};

    this.handleAdd = this.handleAdd.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.ajoutEmployer = this.ajoutEmployer.bind(this);
  }

  async ajoutEmployer(nom,prenom,fonction,photo,departement) { 
    try{ 
      const newID = await this.getID();
      const response = await fetch('http://localhost:3001/employers/', { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({id : newID,
          Nom: nom,
          Prenom: prenom,
          Fonction: fonction,
          Photo: photo,
          Departement: departement 
        }) 
      }); 
      if(response.ok){ 
        const jsonResponse = await response.json(); 
        this.props.history.push("/");
        toast.success("Ajout de " + prenom + ' ' +nom);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}
  //Retourne le prochain ID pour savoir où ajouter
  async getID() {
    try {
      let nextID = 0 
      const response = await fetch("http://localhost:3001/employers");
      const reponseDeApi = await response.json();
      for (let i=0;i<reponseDeApi.length;i++){
        if(reponseDeApi[i].id > nextID){
            nextID = reponseDeApi[i].id;
        }
      }   
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return nextID+1;
    } catch (error) {
      console.log(error);
    }
  }

  handleAdd(event){
    event.preventDefault();
    
    const nom = document.getElementById('nomEmployer').value;
    const prenom = document.getElementById('prenomEmployer').value;
    const fonction = document.getElementById('fonctionEmployer').value;
    const photo = document.getElementById('photoEmployer').value;
    const departement = document.getElementById('departementEmployer').value;

    this.ajoutEmployer(nom,prenom,fonction,photo,departement);
  }

  handlePhoto(event){
    const photos = document.getElementById('photoEmployer').value;
    this.setState( {photo : photos});
  }


  render() {
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="nomEmployer">
                <Form.Label className='Jauner'>Nom :</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom" />
              </Form.Group>
              <Form.Group controlId="prenomEmployer">
                <Form.Label className='Jauner'>Prenom :</Form.Label>
                <Form.Control type="text" placeholder="Entrer le prenom" />
              </Form.Group>
              <Form.Group controlId="fonctionEmployer">
                <Form.Label className='Jauner'>Fonction :</Form.Label>
                <Form.Control type="text" placeholder="Entrer sa fonction" />
              </Form.Group>
              <Form.Group controlId="photoEmployer">
                <Form.Label className='Jauner'>URL de sa photo</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto}/>
              </Form.Group>
              {this.state.photo !== "" && <Image src={this.state.photo} rounded width="125"/>}
              <Form.Group controlId="departementEmployer">
                <Form.Label className='Jauner'>Departement :</Form.Label>
                <Form.Control type="text" placeholder="Departement" />
              </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleAdd}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
        </Container>
      </>
    );
  }
}