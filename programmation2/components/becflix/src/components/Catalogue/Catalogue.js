import React from 'react'; 
import Container from 'react-bootstrap/Container';
import {Categorie} from '../Categorie/Categorie';


export class Cataloge extends React.Component{
    render() {
        return (
            <Container fluid> 
                <Categorie categorie='Suspense' />
                <Categorie categorie='Humour'/>
                <Categorie categorie='Séries américaines'/>
                <Categorie/>
                <Categorie/>
            </Container>
        );
    }
};