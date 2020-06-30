import React from 'react';
import {Client} from '../Clients/clients';




export class LigneBotin extends React.Component{
    clients = [
        //1
            {
            src : require("../../img/profil.jpg"),    
            nom : 'Charles-etienne',
            travail :  'Etudiant',
            email : 'abc@cca.com',
            telephone : '819-435-4322',
            adresse : '1324 lapicardie'},
        //2
            {
            src : require("../../img/profil2.jpg"),
            nom : 'Liam',
            travail : 'Concierge',
            email : '@cca.com',
            telephone : '450-435-2344',
            adresse : '321  fdsd'},
        //3
    {
        src : require("../../img/profil3.jpg"),
        nom : 'Olivier',
        travail :  'Pompier',
        email : '@cca.com',
        telephone : '093-123-3213',
        adresse : 'Lake 222'},
    //4
        {
        src : require("../../img/profil4.jpg"),    
        nom : 'Elie',
        travail :  'Depute',
        email : '@cca.com',
        telephone : '432-684-2378',
        adresse : 'a coter de cher son voisin'},
    //5
        {
        src : require("../../img/profil5.jpg"),    
        nom : 'Kopp',
        travail :  'Chanteur',
        email : '@cca.com',
        telephone : '903-985-2348',
        adresse : 'miami'},
    //6
    {
        src : require("../../img/profil6.jpg"),
        nom : 'Chrystel',
        travail :  'Chanteur',
        email : '@cca.com',
        telephone : '903-985-2348',
        adresse : 'miami'},
    //7
    {
        src : require("../../img/profil7.png"),
        travail :  'Chanteur',
        email : '@cca.com',
        telephone : '903-985-2348',
        adresse : 'miami'},
    //8
    {
        src : require("../../img/profil8.jpg"),
        nom : 'Mary',
        travail :  'Chanteur',
        email : '@cca.com',
        telephone : '903-985-2348',
        adresse : 'miami'},
    //9
    {
        src : require("../../img/profil9.jpg"),
        nom : 'Oli',
        travail :  'Chanteur',
        email : '@cca.com',
        telephone : '903-985-2348',
        adresse : 'miami'},
    //10
    {
        src : require("../../img/profil10.jpg"),
        nom : 'Lise',
        travail :  'Chanteur',
        email : '@cca.com',
        telephone : '903-985-2348',
        adresse : 'miami'}, 
    //11
    {
        src : require("../../img/profil11.jpg"),
        nom : 'PPa',
        travail :  'Chanteur',
        email : '@cca.com',
        telephone : '903-985-2348',
        adresse : 'miami'},
    //12
    {
        src : require("../../img/profil12.png"),
        nom : 'Lvoisin',
        travail :  'Chanteur',
        email : '@cca.com',
        telephone : '903-985-2348',
        adresse : 'miami'},                                                       
    ]
    render() {
        return  this.clients.map((element,i) => 
       <Client  
        keys={"clients" + i}
            src={element.src} 
            nom={element.nom} 
            travail={element.travail} 
            email={element.email}
            telephone ={element.telephone}
            adresse={element.adresse}
            ></Client>
            ) 
 } };

  
