import React from 'react';
import {Personnage} from './personnages';

export class ListesPersonnages extends React.Component{
    constructor(props){
        super(props)
        this.state = {data:[]};
        }
    async componentDidMount(){ 
        let tableauTemporaire=[];
        for(let count=1;count<=10;count++){ 
        try { 
            const response = await fetch('https://swapi.dev/api/people/'+count+'/');  
            const reponseDeAPI = await response.json();
            tableauTemporaire.push(reponseDeAPI) 
            this.setState({ data: tableauTemporaire }); 
        if (!response.ok) { 
            throw Error(response.statusText); 
            } 
        } catch (error) { 
        console.log(error); 
        } 
    }
    } 
    render() {
        return ( this.state.data.map((key) =>(
                            <Personnage 
                            nom={key.name}
                            toutLobjet ={key}/>
                        ))

        )    
}
}
