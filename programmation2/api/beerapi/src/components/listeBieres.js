import React from 'react';
import { Biere } from './biere';


export class ListeBieres extends React.Component{
    constructor(props){
        super(props)
        this.state={data:[]}
    }

    
    async componentDidMount(){ 
        let tableauTemporaire=[];
        for(let count=1;count<=3;count++){
            try { 
            const response = await fetch('https://api.punkapi.com/v2/beers/'+count); 
            const json = await response.json(); 
            tableauTemporaire.push(json); 
            this.setState({ data: tableauTemporaire});  
            if (!response.ok) { 
            throw Error(response.statusText); 
            } 
            } catch (error) { 
            console.log(error); 
            } 
        }
    }

        render(){
           // console.log(this.state)
            return(<div>
                {this.state.data.map((key) => (
                    <Biere
                    toutLobjet={key}
                    nom={this.props.name}
                    />
                   ))}
               </div>)
        }
}
