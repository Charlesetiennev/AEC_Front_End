import React from 'react';
import {Row,Button} from 'react-bootstrap';
import {InputURL} from './inputURL';
import {RenderURL} from './renderURL';


export class Rebrandly extends React.Component{
    constructor(props){
        super(props)
        this.state={click:false,
                    grandURL:'',
                    petitURL:''}
        this.click=this.click.bind(this);
        this.envoieURL=this.envoieURL.bind(this);
        this.getData=this.getData.bind(this);
    }
 async getData(){
    const apiKey = "cef2bd7af23c4c5e998e32fd313b6ca6";
       try{ 
          const response = await fetch('https://api.rebrandly.com/v1/links',{ 
             method:'POST', 
             headers: {'Content-Type': 'application/json','apikey': apiKey  }, 
             body:JSON.stringify({destination: this.state.grandURL}),
           }); 
          if(response.ok){ 
            const jsonResponse = await response.json();
            console.log(jsonResponse); 
            this.setState({petitURL : jsonResponse.shortUrl,
                            click:true});
            console.log(jsonResponse.shortUrl) 
            return jsonResponse;              
          } 
          throw new Error('Request failed!'); 
       } 
       catch(error){ 
          console.log(error); 
       }
           }     

envoieURL(ancienneURL, nouvelleURL){
    this.setState({grandURL:ancienneURL,
                    petitURL:nouvelleURL })
}
click(){
    if(this.state.click===false){
        return (<>
            <InputURL 
            onChange={this.envoieURL}/>
        <Button variant="primary" 
            onClick={()=> this.getData()}>
            Generer
        </Button>
        </>    
        )
    }
    else if (this.state.click === true){
        return(
        <RenderURL
        grandURL={this.state.grandURL}
        petitURL={this.state.petitURL}/>
        )
    }
}
    render() {
        return(
            <Row>
                {this.click()}       
            </Row>
        )
    }
}