import React from 'react';
import {Card, Col} from 'react-bootstrap';

export class Personnage extends React.Component{
    constructor(props){
        super(props)
    }

    
render() {
    console.log(this.props.data);
         return(
        //     <h1>{this.props.data.name}</h1>

     
            <Card className='col-lg-2'>
                <Card.Body>
                    <Card.Text>
                        <h1>{this.props.message}</h1>
                        <h1>{this.props.joke}</h1>
                        <ul> 
                    {Object.keys(this.props.data).map(key => 
                        ( <li key={key}>{key} : {this.props.data[key]}</li>))} 
                    </ul> 
                    </Card.Text>
                </Card.Body>
            </Card>
       
        )
    }
}


Personnage.defaultProps = {data : []};