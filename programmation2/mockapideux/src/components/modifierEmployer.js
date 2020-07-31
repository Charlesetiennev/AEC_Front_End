import React from "react"; 
import {Container,Row,Col,Form,Image,Button} from 'react-bootstrap';
import {MenuGauche} from './menuGauche';
import {toast} from "react-toastify";

export class FicheEmployer extends React.Component { 
 constructor(props){
     super(props);
     this.state = { donneesRecues: {Nom:'',Prenom:'',Departement:'',Fonction:''}}
     this.modifierEmployer= this.modifierEmployer.bind(this);
     this.handleEdit = this.handleEdit.bind(this);
     this.handleDelete = this.handleDelete.bind(this);
 }
 

//Recuperation de l'employer 
async componentDidMount() { 
    try {  
        await this.setState({pokemonID : this.props.match.params.id});  
       const response = await fetch("http://localhost:3001/employers/"+this.props.match.params.id); 
       const reponseDeApi = await response.json(); 
       this.setState({ donneesRecues: reponseDeApi }); 
       if (!response.ok) { 
          throw Error(response.statusText); 
       } 
    } catch (error) {  
      console.log(error); 
       } 
 } 
//Modification de l'employer
async modifierEmployer(id,nom,prenom,fonction,photo,departement) { 
    try{ 
      const response = await fetch('http://localhost:3001/employers/'+ this.state.pokemonID , { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({id: id,
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
        toast.warn("Modification de " + prenom + ' ' +nom);
        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}
//Handle la modification
handleEdit(event){
  event.preventDefault();
  const nom = document.getElementById('nomEmployer').value;
  const prenom = document.getElementById('prenomEmployer').value;
  const fonction = document.getElementById('fonctionEmployer').value;
  const photo = document.getElementById('photoEmployer').value;
  const departement = document.getElementById('departementEmployer').value;
  this.modifierEmployer(nom,prenom,fonction,photo,departement);



}
//Suppression de l'employer
async handleDelete() { 
  try{ 
  const response = await fetch('http://localhost:3001/employers/'+this.state.pokemonID, { 
    method:'delete', 
  }); 
  if(response.ok){ 
    const jsonResponse = await response.json(); 
    console.log("SUPPRESSION!");
    this.props.history.push("/");
    toast.error("Supression de l'employer ");

    return jsonResponse; 
  } 
  throw new Error('Request failed!'); 
} 
catch(error){ 
  console.log(error); 
} 
}

    render() { 
        console.log(this.props); 
        return <>
      <Row className='m-0'>
       <MenuGauche/>  
          <Col lg='10'>
            <Form>
              <Form.Group controlId="nomEmployer">
                <Form.Label className='Jauner'>Nom :</Form.Label>
                <Form.Control type="text" defaultValue={this.state.donneesRecues.Nom} />
              </Form.Group>
              <Form.Group controlId="prenomEmployer">
                <Form.Label className='Jauner'>Prenom :</Form.Label>
                <Form.Control type="text" defaultValue={this.state.donneesRecues.Prenom}  />
              </Form.Group>
              <Form.Group controlId="fonctionEmployer">
                <Form.Label className='Jauner'>Fonction :</Form.Label>
                <Form.Control type="text" defaultValue={this.state.donneesRecues.Fonction} />
              </Form.Group>
              <Form.Group controlId="photoEmployer">
                <Form.Label className='Jauner'>URL de sa photo</Form.Label>
                <Form.Control type="text" defaultValue={this.state.donneesRecues.Photo} 
                //onBlur={this.handlePhoto}
                />
              </Form.Group>
              {/* {this.state.photo !== "" && <Image src={this.state.photo} rounded width="125"/>} */}
              <Form.Group controlId="departementEmployer">
                <Form.Label className='Jauner'>Departement :</Form.Label>
                <Form.Control type="text" defaultValue={this.state.donneesRecues.Departement} />
              </Form.Group>

            <Button variant="primary" type="submit"
              onClick={this.handleEdit}
             >
                Enregistrer
            </Button>
            <h1>{this.props.location.search.substring}</h1>
            </Form>
            <p className="btn btn-danger mt-5" onClick={this.handleDelete}>Supprimer l'employer</p>  
            </Col>    
          </Row>
             </>; 
        } 
        } 