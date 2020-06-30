import React from 'react'; 
import Row from 'react-bootstrap/Row';
import {TvShow} from '../TvShow/TvShow';

const tabSuspense = [
    {
        src: require('../../img/Suspense/19-2.jpg'), 
        alt:"19-2" ,
        title:"19-2"},
    {
    src: require('../../img/Suspense/unite9.jpg'), 
        alt:"Unite 9" ,
        title:"Unite 9"},
    { 
    src: require('../../img/Suspense/district31.jpg'), 
        alt:"District 31", 
        title:"District 31" },
    {
    src:require('../../img/Suspense/fugueuse.jpg'), 
        alt:"Fugueuse", 
        title:"Fugueuse"},
    {
    src:require('../../img/Suspense/lesinvincibles.jpg'), 
        alt:"Les invincibles", 
        title:"Les Invincibles" },
    { 
    src:require('../../img/Suspense/serienoire.jpg'), 
        alt:"Serie noire", 
        title:"Serie noire" }
];

const tabHumour = [
    {
        src: require('../../img/Humour/lanceEtCompte.jpg'), 
        alt:"19-2" ,
        title:"19-2"},
    {
    src: require('../../img/Humour/lapetitevie.jpg'), 
        alt:"Unite 9" ,
        title:"Unite 9"},
    { 
    src: require('../../img/Humour/lesbeauxmalaises.jpg'), 
        alt:"District 31", 
        title:"District 31" },
    {
    src:require('../../img/Humour/lesbougon.jpg'), 
        alt:"Fugueuse", 
        title:"Fugueuse"},
    {
    src:require('../../img/Humour/lesboys.jpg'), 
        alt:"Les invincibles", 
        title:"Les Invincibles" },
    { 
    src:require('../../img/Humour/minuitlesoir.jpg'), 
        alt:"Serie noire", 
        title:"Serie noire" }
];
const tabSerieAmericaines = [
    {
        src: require('../../img/SeriesAmericaines/betterCallSaul.jpg'), 
        alt:"Better call Saul" ,
        title:"Better call Saul"},
    {
    src: require('../../img/SeriesAmericaines/breakingbad.jpg'), 
        alt:"Breaking bad" ,
        title:"Breaking bad"},
    { 
    src: require('../../img/SeriesAmericaines/dexter.jpg'), 
        alt:"Dexter", 
        title:"Dexter" },
    {
    src:require('../../img/SeriesAmericaines/got.jpg'), 
        alt:"Game of thrones", 
        title:"Game of thrones"},
    {
    src:require('../../img/SeriesAmericaines/mandalorian.jpg'), 
        alt:"Mandolarian", 
        title:"Mandolarian" },
    { 
    src:require('../../img/SeriesAmericaines/vikings.jpg'), 
        alt:"Vikings", 
        title:"Vikings" }
];
export class Categorie extends React.Component{
    render() {
        return (
        <>
                <Row>
                    <h1>{this.props.categorie}</h1>
                    <p>{this.props.title}</p>
                </Row>
           <Row>
                 {this.AfficherCategorie()}
            </Row>
        </>
        );
        }
    AfficherCategorie(){
        if (this.props.categorie === 'Suspense'){
        return(
            tabSuspense.map((element,i) => <TvShow  

            keys={"suspense" + i} 
                src={element.src} 
                alt={element.alt} 
                title={element.title}></TvShow>) 
            )
        }
        else if(this.props.categorie === 'Séries américaines')
        {
            return(
                    tabSerieAmericaines.map((element,i) =>
                    <TvShow
                    keys={'Séries américaines' + i}
                        src={element.src}
                        alt={element.src}
                        title={element.src}
                    ></TvShow>
                    )
                    )
        }
        else if(this.props.categorie === 'Humour'){
            return(
                    tabHumour.map((element,i) =><TvShow
                    keys={'Humour' + i}
                        src={element.src}
                        alt={element.src}
                        title={element.src}
                    ></TvShow>
                    )
                )
        }
    }
};

Categorie.defaultProps = {
    categorie : 'Suspense'};