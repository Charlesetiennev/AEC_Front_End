// Acceuil.js 
// Par Charles-Etienne Villemure
// Le 16 Juin 2020
import React from 'react';
import {Connexion} from '../components/connexion';
//import {Container} from 'react-bootstrap';
import {Catalogue} from './catalogue';
import {Deconnexion} from './deconnexion'
export class Acceuil extends React.Component {
    constructor(props){
        super(props);
        this.state = {connecter: false,
        };
        this.gererConnexion = this.gererConnexion.bind(this);
        this.verifierConnexion = this.verifierConnexion.bind(this);
        this.gererDeconnexion = this.gererDeconnexion.bind(this)
    }
    verifierConnexion(connexion){
        this.setState({ connecter: connexion })
      console.log('verifier')
      }
    gererDeconnexion(){
     this.setState({ connecter: false })
    }
      gererConnexion(){
        if(this.state.connecter===true){
          return (<> 
              <Deconnexion onClick={this.gererDeconnexion}/>
                <Catalogue/>             
              </>  
          )
        }
        else{
          return(
            <Connexion onClick={this.verifierConnexion} />
          )
        }
      }
      render() {
        return (
            this.gererConnexion()
            
        );
      }
    }
