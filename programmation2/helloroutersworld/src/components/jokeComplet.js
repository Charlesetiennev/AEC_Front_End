import React from 'react';
import {Row} from 'react-bootstrap';
import {JokeCard} from './jokeCard';
import {RetourAccueil} from '../components/retouracceuil';

export class JokeComplet extends React.Component{
    constructor(props){
        super(props)
        this.state = {data:[]};
        }

        async componentDidMount(){ 
            try { 
                const response = await fetch('https://sv443.net/jokeapi/v2/joke/id='+ this.props.match.params.id +'/'); 
                const json = await response.json(); 
                this.setState({ data: json }); 
            if (!response.ok) { 
                throw Error(response.statusText); 
                } 
            } catch (error) { 
            console.log(error); 
            } 
        }         
      
        // https://sv443.net/jokeapi/v2/joke/id=8
        
// // Ou encore, en utilisant les méthodes génériques
// Object.entries(autreObjet).forEach(([clé, valeur]) => {
//     console.log(clé + ' ' + valeur);
//   });
     
        render() {
            console.log(tableau)
            return(        
                 <>
               {/* <Row>   {Object.entries((this.state.data).map([allo,key],i ) => (
                   <JokeCard>
                      
                   </JokeCard>
               ))}
               </Row> */}
               <Row>
              {tableau = Object.entries(this.state.data).forEach(([key, value]) => {
                    (key,value)
    })}

               </Row>
               <Row>
                    <RetourAccueil/>               
               </Row>
              </>
            )
        }
    }
let tableau= [];