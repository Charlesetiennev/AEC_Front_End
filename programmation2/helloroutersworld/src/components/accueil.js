import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap'
import ImageSuricate from '../images/suricateZooGranby.jpg'

export class Accueil extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return(
            <Container fluid>
                <Row>
                    <Col xs='12'>
                        <h1>Destination de cet ete!</h1>
                        <br/>
                        <h3>Zoo de Granby</h3>
                    </Col>
                    <Col xs='8'>
                        <Image src={ImageSuricate} fluid />
                    </Col>
                </Row>
            </Container>
        )
        }
    }
