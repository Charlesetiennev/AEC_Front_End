// Albumcomplet.js 
// Par Charles-Etienne Villemure
// Le 16 Juin 2020
import React from 'react';
import {Col,Card} from 'react-bootstrap';


export class AlbumComplet extends React.Component{
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <Col lg='4' xs='7'>
      <Card
          className='border-0 m-3'  
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
          {this.props.chanson}
      </Card.Text>
      </Card.Body>
  </Card>
  </Col>
        )
            
        
    }
}