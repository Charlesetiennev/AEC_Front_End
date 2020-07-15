import React from 'react';

 export class AjouterPokemon extends React.Component { 
    constructor(props) { 
    super(props); 
    this.state = {photo: ""}; 
    this.handleSave = this.handleSave.bind(this);     
    this.handlePhoto = this.handlePhoto.bind(this); 
    } 
    async savePokemon(nom,photo,attaque1, attaque2) {  
       try{  
          const response = await fetch('http://localhost:3001/pokemons/', {  
                           method:'POST',  
                           headers: {'Content-Type': 'application/json' },  
                           body:JSON.stringify({id : nom, 
                                                name: nom, 
                                                picture: photo, 
                                                abilities: [ 
                                                { 
                                                   name: attaque1 
                                                }, 
                                                { 
                                                   name: attaque2 
                                                } 
                                                ] 
                                              })  
                           });  
           if(response.ok){  
              const jsonResponse = await response.json();  
              return jsonResponse;  
            }  
            throw new Error('Request failed!');  
           }  
           catch(error){  
               console.log(error);  
           }  
    } 
} 