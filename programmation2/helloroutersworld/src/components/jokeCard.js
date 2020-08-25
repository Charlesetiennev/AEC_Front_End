import React from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class JokeCard extends React.Component{
    constructor(props){
        super(props)
    }

    
render() {
    console.log(this.props.data);
         return(
              <Card className='col-lg-2'>
                <Card.Body>
                    <Card.Text>
                        <Link to={"/JokeComplet/" + this.props.id}>
                            <h1>{this.props.message}</h1>
                            <h1>{this.props.joke}</h1>
                        </Link>
                        {/* <ul> 
                    {Object.keys(this.props.toutLobjet).map(key => 
                        ( <li key={key}>{key} : {this.props.toutLobjet[key]}</li>))} 
                    </ul>  */}
                    </Card.Text>
                </Card.Body>
            </Card>
       
        )
    }
}


JokeCard.defaultProps = {data : []};

