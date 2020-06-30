// Deconnexion.js 
// Par Charles-Etienne Villemure
// Le 16 Juin 2020

import React from "react";
import {Button,Col} from "react-bootstrap/";

export class Deconnexion extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeconnexion = this.handleDeconnexion.bind(this);
    }
   handleDeconnexion(connexion){
    this.props.onClick(connexion)
  }
    render() {
    return (
      <Col lg={{span:3,offset:9}} className='d-flex justify-content-end'>
        <Button variant="primary" 
       onClick={this.handleDeconnexion}>
            Déconnexion
        </Button>
        </Col>
    );
  }
}