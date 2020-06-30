// ListeChansons.js 
// Par Charles-Etienne Villemure
// Le 16 Juin 2020
import React from 'react';
import {Col} from 'react-bootstrap';

export class ListeChansons extends React.Component{
    constructor(props){
        super(props);
      }
afficherChanson =()=>{
      }

render(){
  return( <Col xs lg="2">
          <ListeChansons>
            <li onClick={this.afficherChanson}>
            <ol>    
  { callList && callList.map(item => <li>{item}</li>) }
</ol>
          </li>
            </ListeChansons>
        </Col>
  )
}
    
}
