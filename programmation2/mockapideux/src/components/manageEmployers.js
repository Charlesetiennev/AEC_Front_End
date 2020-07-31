import React from "react"; 
import {MenuGauche} from './menuGauche';
import {Employer} from "./employers";
import {Row,Col} from 'react-bootstrap';

export class ManageEmployers extends React.Component { 
constructor(props) { 
super(props); 
this.state= { donneesRecues: [] };
} 

async componentDidMount() {
    try {
      const response = await fetch("http://localhost:3001/employers");
      const reponseDeApi = await response.json();
      this.setState({ donneesRecues: reponseDeApi });
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }


render() { 
return ( 
<Row className='m-0'> 
<MenuGauche/>
   <Col lg='10'>
       <Row> 
        {this.state.donneesRecues.map((key,i) => (
           <Col lg='2'>
             <Employer Prenom={key.Prenom} Nom={key.Nom} id={key.id}></Employer></Col>
        ))}
        </Row>
    </Col>
</Row> 
); 
} 
} 