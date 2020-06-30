import React from 'react';
import {Connexion} from '../connexion/connexion';
import {LigneBotin} from '../ligneBotin/lignebotin';
import {Row} from 'react-bootstrap';
import { BarreDeRecherche } from '../barreDeRecherche/barreDeRecherche';

export class Acceuil extends React.Component {
    constructor(props){
        super(props);
        this.state = {connecter: true};
        this.gererConnexion = this.gererConnexion.bind(this);
        this.verifierConnexion = this.verifierConnexion.bind(this);
    }
    verifierConnexion(connexion){
        this.setState({ connecter: connexion });
      }
      gererConnexion(){
        if(this.state.connecter){
          return (<>
              <BarreDeRecherche/>
              <Row>
                <LigneBotin/>
              </Row>
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



