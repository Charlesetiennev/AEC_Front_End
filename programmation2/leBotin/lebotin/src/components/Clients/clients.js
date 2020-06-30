import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Col from 'react-bootstrap/Col';



export class Client extends React.Component{

    render() {
        return  <Col lg='2'> <Card>
        <Card.Img variant="top" src={this.props.src} className='fluid' /> 
        <Card.Body>
        <Card.Title>{this.props.nom}</Card.Title>
        <Card.Text>{this.props.travail}</Card.Text>
            <ListGroup variant='flush'>
                <ListGroup.Item>Email: {this.props.email}</ListGroup.Item>
                <ListGroup.Item>Telephone : {this.props.telephone}</ListGroup.Item>
                <ListGroup.Item>Adresse :  {this.props.adresse}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
    </Col>
    
    };
};