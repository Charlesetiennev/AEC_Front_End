// Albums.js 
// Par Charles-Etienne Villemure
// Le 16 Juin 2020

import React from 'react';
import {Card,Col} from 'react-bootstrap';

export class Albums extends React.Component{
constructor(props){
  super(props);
 this.state = {
                hovered: false,
                complet:false,
                clicker:false}
            }

onDeleteClick =() =>{
    if(this.state.complet===true){
    
    }
    else{this.setState({complet:true})
 this.props.deleteClickHandler();
    }
}

  render(){
      return  <Col lg='4' md='5' xs='12'>
      <Card
          onClick ={this.onDeleteClick}
          className='border-0 m-3' 
          onMouseOut={() => this.setState({hovered: false})}
          onMouseOver={() => this.setState({hovered: true})}
          style={{transform: `${this.state.hovered ? 'scale(1.1,1.1)' : 'scale(1,1)'}`}} 
      >
      <Card.Img className="pl-3" variant="top" 
          src={this.props.src}/> 
      <Card.Body>
      <Card.Title>
          {this.props.nomArtiste}
      </Card.Title>
      <Card.Text>
          {this.props.nomAlbum}
      </Card.Text>
      <Card.Text>
          <ul>
          {this.props.chanson}
          </ul>
      </Card.Text>
      </Card.Body>
  </Card>
  </Col>        
    }
} 

