import React from "react"; 

 
export class ErreurPage extends React.Component { 
  render() { 
    return ( 
      <> 
        <h1>Ohhh ! On dirais qu'on s'aventure un peu trop... Le menu est en haut ! </h1>
        <img src={require("../images/erreurpage.jpg")} /> 
        {/* LINK A LACCUEIL */}
      </> 
    ); 
  } 
} 