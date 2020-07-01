import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import {RetourAccueil} from '../components/retouracceuil';



export class Photos extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        this.afficherPhoto=this.afficherPhoto.bind(this)
    }
afficherPhoto(){
   return tabImage.map((element, i) => ( 
   <Col xs='3'>
   <Image
        key={"photo" + i}
        src={element.src}
        alt={element.alt}
        title={element.title}
      ></Image>
      </Col>
    ))
}

    render() {
                return (
                    <Container fluid>
                        <Row>
                           {this.afficherPhoto()}                      
                        </Row>
                        <RetourAccueil/>
                    </Container>
                )                
        }
    }
    const tabImage= [
        {
        src: require('./../images/zebre.jpg'), 
        alt:"" ,
        title:""},
    {
    src: require('../images/zebre.jpg'), 
        alt:"" ,
        title:""},
    { 
    src: require('../images/zebre.jpg'), 
        alt:"", 
        title:"" },
    {
    src:require('../images/zebre.jpg'), 
        alt:"", 
        title:""},
    {
    src:require('../images/zebre.jpg'), 
        alt:"Les invincibles", 
        title:"Les Invincibles" },
    { 
    src:require('../images/zebre.jpg'), 
        alt:"Serie noire", 
        title:"Serie noire" },
        {
            src: require('../images/zebre.jpg'), 
            alt:"19-2" ,
            title:"19-2"},
        {
        src: require('../images/zebre.jpg'), 
            alt:"Unite 9" ,
            title:"Unite 9"},
        { 
        src: require('../images/zebre.jpg'), 
            alt:"District 31", 
            title:"District 31" },
        {
        src:require('../images/zebre.jpg'), 
            alt:"Fugueuse", 
            title:"Fugueuse"},
        {
        src:require('../images/zebre.jpg'), 
            alt:"Les invincibles", 
            title:"Les Invincibles" },
        { 
        src:require('../images/zebre.jpg'), 
            alt:"Serie noire", 
            title:"Serie noire" }
]