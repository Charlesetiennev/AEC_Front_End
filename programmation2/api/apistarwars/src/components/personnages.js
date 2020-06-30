import React from 'react';
import {Card, Col} from 'react-bootstrap';

export class Personnage extends React.Component{
    constructor(props){
        super(props)
    }

    
render() {
    console.log(this.props.data);
         return(

        <Col lg='2'>    
            <Card>
                <Card.Body>
                    {this.props.nom}
                    <Card.Text>
                    <ul> 
                    {Object.keys(this.props.toutLobjet).map(key => 
                        ( <li key={key}>{key} : {this.props.toutLobjet[key]}</li>))} 
                    </ul> 
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        )
    }
}


Personnage.defaultProps = {data : []};