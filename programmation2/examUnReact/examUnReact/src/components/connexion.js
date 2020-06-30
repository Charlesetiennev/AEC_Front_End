// Connexion.js 
// Par Charles-Etienne Villemure
// Le 16 Juin 2020
import React from 'react';
import {Row,Col,Form,Button, Container} from 'react-bootstrap';

export class Connexion extends React.Component{
    constructor(props){
        super(props);
        this.gererConnexion = this.gererConnexion.bind(this); 
    }
    gererConnexion(){
        let connecter = false;
        const motDePasse = document.getElementById('motDePasse').value;
        const nomUser = document.getElementById('nomUser').value;
        if(motDePasse  === 'patate' && nomUser.toLowerCase() ==='shany'){
            connecter = true;
            this.props.onClick(connecter);
        }
    }
    render(){
        return <>
        <Container>
            <Row>
                <Col lg='6'>
                    <Form id='connexion'>
                        <Form.Group controlId="nomUser">
                            <Form.Label>Nom d'utilisateur</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="motDePasse">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Button variant="primary" onClick={() => this.gererConnexion()}>
                            Connexion
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    }
}