import React from 'react';
import {Col,Form} from 'react-bootstrap'

export class InputURL extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        this.grandURL=this.grandURL.bind(this);
    }

grandURL(){
    let grandURL= document.getElementById('inputURL').value;
    this.props.onChange(grandURL);
}   
    render() {
        return(
                <Col lg='6'>
                    <Form onChange={() => this.grandURL()}>
                        <Form.Group controlId="inputURL">
                            <Form.Label>Entrez l'URL</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Form>
                </Col>
        )
    }
}