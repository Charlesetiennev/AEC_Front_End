import React from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';

export class BarreDeRecherche extends React.Component {  
    constructor(props){
        super(props);
        this.recherche = this.recherche.bind(this);
    }
    recherche(){
        let lancerRecherche = false;
        const prompt = document.getElementById('rechercheDePersonne').Value;
        if(this.state.lancerRecherche){
            return //Lancer mon map avec include
        }
    }



    render() {  
       return <Container>
            <Form>
                <Row>
                    <Col>
                    <Form.Control type="text" placeholder="Rechercher"/>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={this.lancerRecherche}>
                        Lancer recherche</Button>
                    </Col>
                </Row>
            </Form>
            </Container>  
    }  

};  