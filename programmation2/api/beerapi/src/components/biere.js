import React from 'react';
import {Col,Card} from 'react-bootstrap'
export class Biere extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        console.log(this.props.data);
             return(
          //      <h1>{this.props.data.name}</h1>
          <Col lg='2'>    
          <Card>
              <Card.Body>
                  {this.props.nom}
                  <Card.Text>
                  {/* <ul> 
                  {Object.keys(this.props.data).map(key => 
                      ( <li key={key}>{key} : {this.props.data[key]}</li>))} 
                  </ul>  */}
                  <ul> 
                  {Object.keys(this.props.toutLobjet[0]).map(key => 
                      ( <li key={key}>{key} : {this.props.toutLobjet[0],[key]}</li>))} 
                  </ul> 
                  </Card.Text>
              </Card.Body>
          </Card>
          </Col>
            )
        }
    }


    // https://punkapi.com/documentation/v2