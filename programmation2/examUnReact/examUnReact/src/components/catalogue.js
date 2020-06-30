// Catalogue.js 
// Par Charles-Etienne Villemure
// Le 16 Juin 2020
import React from "react";
import {Albums} from './albums';
import {Row, Button,Col, FormControl, InputGroup} from 'react-bootstrap';
import{AlbumComplet} from './albumcomplet';

export class Catalogue extends React.Component{
    constructor(props){
        super(props);
        this.state = {avance:'premier',
                      listeMusique : catalogue,
                      rechercher: "",
                    }
        this.afficherAlbum=this.afficherAlbum.bind(this);
        this.retourArriere= this.retourArriere.bind(this); 
        }

       

    retourArriere=()=>{
        if(this.state.avance==='deuxieme'){ 
           this.setState({avance:'premier',
                           clicker:false,
                           complet:false,
                           rechercher:''
                       })
                    }
        else if(this.state.avance==='recherche'){
            this.setState({avance:'premier',
                           clicker:false,
                           complet:false,
                           rechercher:''})
                        } 
                    }
   
    Rechercher=()=>{
        let inputRecherche = document.getElementById("rechercherCatalogue").value;
        this.setState({rechercher:inputRecherche,
                        avance:'recherche'});
        if(this.state.rechercher===''){
            this.setState({avance:'premier'})
        }
      }
    afficherAlbum(){
        if(this.state.complet===true){
            this.setState({complet:false,
            avance:'premier'})
        }
        else{this.setState({
                    avance:'deuxieme',
                    clicker:true,
                    rechercher:'',
                    }
                    )
   
                }
            }
    afficherCataloge(){
        if (this.state.avance==='premier') {
            return(    catalogue.map((element, i) => (
                <Albums 
                complet={element.complet}
                  key={"Album" + i}
                  src={element.src}
                  nomArtiste={element.nomArtiste}
                  nomAlbum={element.nomAlbum}
                  deleteClickHandler = {this.afficherAlbum}
                ></Albums>
                )
            )
        )      
    }
        else if (this.state.avance==='deuxieme') {     
            return( catalogue.map((element, i) => (
                    <AlbumComplet
                  key={"Album" + i}
                  src={element.src}
                  nomArtiste={element.nomArtiste}
                  nomAlbum={element.nomAlbum}
                  chanson={element.chanson}
                ></AlbumComplet>
                    )
                )    
            )  
        }        
        else if (this.state.avance==='recherche'){
        //    const recherche = this.state.listeMusique.filter(l => l.chanson[l].includes(this.state.rechercher.toLowerCase()))
            //const recherche = this.state.listeMusique.filter(l => l.nomArtiste.toLowerCase().includes(this.state.rechercher.toLowerCase()))
            return (catalogue.map((element, i) => (element.nomArtiste.toLowerCase().includes(this.state.rechercher.toLowerCase())
            //||
            //element.nom[i].toLowerCase().includes(this.state.rechercher.toLowerCase()))
            &&
              <AlbumComplet
                key={"Album" + i}
                src={element.src}
                nomArtiste={element.nomArtiste}
                nomAlbum={element.nomAlbum}
                chanson={element.chanson}
                deleteClickHandler = {this.afficherAlbum}
              >
              </AlbumComplet>)));
          }
    }
    render() { 
        return( <>
        <Row>
            <Col lg='4'>
           <InputGroup> 
           <Button
            onClick={this.retourArriere}
            >Retour</Button>
            <FormControl 
              id="rechercherCatalogue"
              placeholder="Rechercher"
              onChange={this.Rechercher}
            />
            </InputGroup>
            </Col>
         </Row>
        <Row>
            {this.afficherCataloge()}
        </Row>
        </>)
    }
}
Albums.defaultProps ={parole: "Les paroles ne sont pas encore disponible."}
const catalogue = [
    //1
    {   
        src : require("../img/trone.jpg"),
        nomAlbum : 'Trône',
        nomArtiste : 'Booba',
        chanson :
        <>
        <li>Centurion</li>
        <li>Friday</li>
        <li>Drapeau noir</li>
        <li>Trône</li>
        <li>Bouyon</li>
        <li>Magnifique</li>
        <li>Ça va aller</li>
        <li>Nougat</li>
        <li>Terrain</li>
        <li>À la folie</li>
        <li>113</li>
        <li>Ridin'</li>
        <li>Petite fille</li>
        <li>DKR</li>
        <li>É.L.É.P.H.A.N.T (Bonus Track)</li>
        <li>Tout ira bien</li>
        </>
        ,
        chansonAlbum : [{
            nom: 'Centurion',
            parole: " Izi Y'a jamais de pénurie, j'fume le hasch de mon ceinturon Tout est noir dans mon écurie, sur la tête de mon Amex Centurion J'les baise mais pas sans leurs talons, passe le mot à Cendrillon Bien longtemps qu'j'regarde plus l'prix du gallon J'm'arrêterai pas à cent millions  Moi et ta putain nous en allons  Elle va souffler dans le ballon  Couilles de buffles de daron, la concurrence vend des marrons   Sale fils de pute, tu respectes rien, on n'avait dit pas les parents  Quand s'en viendra la R-15, il faudra pas parler allemand  Faudra parler tout doucement, articuler pour qu'j'comprenne bien  Répéter plusieurs fois, j'suis fonce-dé, il s'peut que j'comprenne rien Les carrières se font doucement, s'arrêtent vite comme hache de guerre Ces fils de putes portent l'œil, j'ai teinté les vitres du double R Revanche, colère, échec scolaire, dis leur y'a R à Baudelaire, à Molière  Y'a Euro, patate, tout c'qu'est khabat J'vais arrêter l'rap, gros ça pue d'la chatte  Ça paie plus les loyers j'dépense trop de mula Tu l'ouvres trop c'est fin de toi du sang sur les mains noires Si t'enlèves Elie Yaffa, t'enlèves un roi"
        },
        {
            nom: 'Friday',
            parole: " Comme ça qu'on les réveille  Réveil au son du kalash Hey, on les réveille au son d'la kalash Les dorsaux remplis de schlass  J'serai au moins dans l'cul d'ta connasse Quand j'aurai pris le coup de grâce Passent les gos, passent les euros, passent les années Passent les clashs, guerres, ma carrière est cellophanée Le Ford Mondeo te dira j'ai commis crimes j'en suis pas fier J'suis avec Théo, on fuck les schmitt, j'rôde avec mon slip en fer Méprise le game, maîtrise le game depuis des années Route pavée de pétales, fleur du mal n'a jamais fané La Vierge Marie et Jésus Christ m'regardent de travers J'charbonne tout l'éte, j'charbonne tout l'hiver, j'fais que du sal-zer L'arme de guerre chargée dans le coffre n'est qu'un détail Million d'euros pour moi, le Roro n'est qu'un métal J'ai foi en peu mais pas en rien lui dis-je dans le shopping room J'vi-sser tous ces fils de putes, leur santé j'm'en bats les couilles Allez les Bleus, allez les lions, moi je suis un peu des deux Tous les baiser nous devons, demande à D2R2 Tous les jours négro, c'est Friday S soixante-cinco, je ridais flow Sénégalais Gros salaire de l'Atletico comme jamain J'ai fait ce qu'il fallait Tous les jours négro, c'est Friday S soixante-cinco, je ridais flow Sénégalais Gros salaire de l'Atletico comme jamain J'ai fait ce qu'il fallait T'es plein de wesh la mif', salam cousin, c'est quoi les bails? Ta tronche d'enfant de putain ne me dit rien qui vaille J'ai du mal avec les humains car instinct animal J'ai craché, garde la pêche, pute, il va falloir qu't'y ailles Chez toi y'a anguille sous roche, chez moi y'a kalash sous l'drap Quand la roue tourne que je t'encule, j'appelle ça le Karmasutra T'as beau faire du MMA, j'vais t'faire bouffer ton RSA Tu nies les faits mais j'étais là, t'as 6 étoiles dans GTA Ça prend des 10 piges, K.O.2.P passe aux assises La justice a deux vitesses, le Lamborghini en a six Quand j'étais minot, beaucoup de négros, corde au coup Vénus de Milo, anus de J-Lo, je veux tout J'ai foi en peu mais pas en rien lui dis-je dans le shopping room J'vi-ser tout ces fils de putes, leur santé j'm'en bats les couilles Allez les Bleus, allez les lions, moi je suis un peu des deux Tous les baiser nous devons, demande à D2R2 Tous les jours négro, c'est Friday S soixante-cinco, je ridais flow Sénégalais Gros salaire de l'Atletico comme jamain J'ai fait ce qu'il fallait Tous les jours négro, c'est Friday  S soixante-cinco, je ridais flow Sénégalais Gros salaire de l'Atletico comme jamain J'ai fait ce qu'il fallait "
        },
        {
            nom:'Drapeau Noir',
        },
        {
            nom: 'Trône',
        },
        {
            nom:'Bouyon',
        },
        {
            nom:'Magnifique',
        },
        {
            nom:'Ça Va Aller',
        },
        {
            nom:'Nougat',
        },
        {
            nom:'Terrain',
        },
        {
            nom:'A la Folie',
        },
        {
            nom:'113',
        },
        {
            nom:'Ridin',
        },
        {
            nom:'Petite Fille',
        },
        {
            nom:'DKR',
        },
        {
            nom:'É.L.É.P.H.A.N.T',
        },
        {
            nom:'Tout ira bien',
        }
    ]
    },
    //2
    {
        src : require("../img/derien.jpg"),
        nomAlbum : 'De rien',
        nomArtiste : 'Enima',
        chanson :
        <>
        <li>Belzébuth</li>
        <li>Up</li>
        <li>Easy</li>
        <li>Détour</li>
        <li>Réussir</li>
        <li>Numéro</li>
        <li>Oh Yeah</li>
        <li>Marina</li>
        <li>Génération Muzion</li>
        <li>Big dog</li>
        <li>Toute la nuit</li>
        <li>Plastic</li>
        <li>Best friend</li>
        <li>Maybach</li>
        <li>Momento</li>
        <li>Arab</li>
        </>
        ,
        chansonAlbum : [
            {
                nom:'Belzébuth',
            },
            {
                nom:'Up',
            },
            {
                nom:'Easy',
            },
            {
                nom:'Détour',
            },
            {
                nom:'Réussir',
            },
            {
                nom:'Numéro',
            },
            {
                nom:'Oh Yeah',
            },
            {
                nom:'Marina',
            },
            {
                nom:'Génération Muzion',
            },
            {
                nom:'Big dog',
            },
            {
                nom:'Toute la nuit',
            },
            {
                nom:'Plastic',
            },
            {
                nom:'Best friend',
            },
            {
                nom:'Maybach',
            },
            {
                nom:'Momento',
            },
            {
                nom:'Arab',
            }
        ]
    },
    //3
    {
        src : require("../img/chaisepliante.jpg"),
        nomAlbum : 'Chaise pliante',
        nomArtiste : 'Hatik',
        chanson :
        <>
        <li>Welcome</li>
        <li>Camaro sport</li>
        <li>M'attend pas</li>
        <li>C'est la base</li>
        <li>TVFR</li>
        <li>Tout droit</li>
        <li>Iaps</li>
        <li>Mula</li>
        <li>Abimé</li>
        <li>Une histoire</li>
        <li>C'est la cite</li>
        <li>Ouais mon reuf</li>
        <li>La lune</li>
        <li>Angela</li>
        <li>L'amour du vide</li>
        <li>Machine a sous</li>
        <li>Belle en noir</li>
        </>
        ,
        chansonAlbum : [
            {
                nom:'Welcome',
            },
            {
                nom:'Camaro sport',
            },
            {
                nom:'M\'attend pas',

            },
            {
                nom:'C\'est la base',
            },
            {
                nom:'TVFR',
            },
            {
                nom:'Tout droit',
            },
            {
                nom:'Iaps',
            },
            {
                nom:'Mula',
            },
            {
                nom:'Abimé',
            },
            {
                nom:'Une histoire',
            },
            {
                nom:'C\'est la cite',
            },
            {
                nom:'Ouais mon reuf',
            },
            {
                nom:'La lune',
            },
            {
                nom:'Angela',
            },
            {
                nom:'L\'amour du vide',
            },
            {
                nom:'Machine a sous',
            },
            {
                nom:'Belle en noir',
            },
        ]
    },
    //4
    {
        src : require("../img/lesdernierssalopars.jpg"),
        nomAlbum : 'Les derniers salopards',
        nomArtiste : 'Maes',
        chanson :
        <>
        <li>Dragovic</li>
        <li>Street</li>
        <li>Elvira</li>
        <li>Mémoire</li>
        <li>Blanche</li>
        <li>Les gens disent</li>
        <li>A coté de moi</li>
        <li>Distant</li>
        <li>Police</li>
        <li>Chromé</li>
        <li>Dybala</li>
        <li>Marco polo</li>
        <li>Étoile</li>
        <li>Imparfait</li>
       </>
        ,
        chansonAlbum : [
            {
                nom:'Dragovic',
            },
            {
                nom:'Street',
            },
            {
                nom:'Elvira',
            },
            {
                nom:'Mémoire',
            },
            {
                nom:'Blanche',
            },
            {
                nom:'Les gens disent',
            },
            {
                nom:'A coté de moi',
            },
            {
                nom:'Distant',
            },
            {
                nom:'Police',
            },
            {
                nom:'Chromé',
            },
            {
                nom:'Dybala',
            },
            {
                nom:'Marco polo',
            },
            {
                nom:'Étoile',
            },
            {
                nom:'Imparfait',
            },
        ]
    },
    //5
    {   
        src : require("../img/mistral.jpg"),
        nomAlbum : 'Mistral',
        nomArtiste : 'Soso Maness',
        chanson :
        <>
        <li>Mistral</li>
        <li>Pinpon</li>
        <li>Qu'est-ce qu'ils connaissent ?</li>
        <li>Balance</li>
        <li>Dans mes rêves</li>
        <li>Fucked up</li>
        <li>Zodiaque</li>
        <li>Le sang appelle le sang</li>
        <li>Interlude</li>
        <li>Boussole</li>
        <li>DDD</li>
        <li>Bilail</li>
        <li>Sadio maness</li>
        <li>Ecouté par les vrais</li>
        <li>Tout pour la FM</li>
       </>
        ,
        chansonAlbum : [
            {
                nom:'Mistral',
            },
            {
                nom:'Pinpon',
            },
            {
                nom:'Qu\'est-ce qu\'ils connaissent ?',
            },
            {
                nom:'Balance',
            },
            {
                nom:'Dans mes rêves',
            },
            {
                nom:'Fucked up',
            },
            {
                nom:'Zodiaque',
            },
            {
                nom:'Le sang appelle le sang',
            },
            {
                nom:'Interlude',
            },
            {
                nom:'Boussole',
            },
            {
                nom:'So maness',
            },
            {
                nom:'DDD',
            },
            {
                nom:'Bilail',
            },
            {
                nom:'Sadio maness',
            },
            {
                nom:'Ecouté par les vrais',
            },
            {
                nom:'Tout pour la FM',
            },
        ]
    },
    //6
    {
        src : require("../img/zayzay.jpg"),
        nomAlbum : 'Zay',
        nomArtiste : 'Fouki',
        chanson :
        <>
        <li>Zay go</li>
        <li>Iiii</li>
        <li>BTT</li>
        <li>Nonon</li>
        <li>Makeup</li>
        <li>All zay</li>
        <li>Late night</li>
        <li>Eau</li>
        <li>Playa</li>
        <li>Gentil gang</li>
        <li>Back home</li>
        <li>Tu c déja</li>
       </>
        ,
        chansonAlbum : [
            {
                nom:'Zay go',
            },
            {
                nom:'Iiii',
            },
            {
                nom:'BTT',
            },
            {
                nom:'Nonon',
            },
            {
                nom:'Makeup',
            },
            {
                nom:'All zay',
            },
            {
                nom:'Late night',
            },
            {
                nom:'Eau',
            },
            {
                nom:'Playa',
            },
            {
                nom:'Gentil Gang',
            },
            {
                nom:'Back home',
            },
            {
                nom:'Tu C Déjà',
            },

        ]
     }
]

// const test=[{nomChanson:'centurion',
// parole: 'madreputo'},
// {nomChanson:'minuit',
// parole:'none'}]
// const callList = listeChansonss.map(({nomChanson}) => nomChanson)





