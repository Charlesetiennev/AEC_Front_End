import React from 'react';
import {Row,Col,Form,Button, Container} from 'react-bootstrap';

export class Connexion extends React.Component{
    constructor(props){
        super(props);
        this.gererConnexion = this.gererConnexion.bind(this);
    }
    gererConnexion(){
        let connecter = false;
        const motDePasse = document.getElementById('password').value;
        
        if(motDePasse  === 'Alibaba'){
            connecter = true;
            this.props.onClick(connecter);
        }
    }
    render(){
        return <>
        <Container>
            <Row>
                <Col lg='2'>
                    <Form>
                        <Form.Group controlId="password">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Entrez le mot de passe"/>
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