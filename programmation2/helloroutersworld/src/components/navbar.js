
import React from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export class BarreDeNavigation extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        const activeStyle = { color : "orange" }; 

        return ( 
        <> 
        <Navbar bg="dark" variant="dark"> 
            <Navbar.Brand to="/">Zoo de Granby</Navbar.Brand> 
            <Nav className="mr-auto"> 
            <NavLink exact to="/" activeStyle={activeStyle}>Accueil</NavLink> 
            <NavLink to="/photos" activeStyle={activeStyle}>Photos</NavLink>  
            <NavLink to="/video" activeStyle={activeStyle}>Video</NavLink> 
            <NavLink to="/Joke" activeStyle={activeStyle}>Joke</NavLink> 
            <NavLink to="/carte" activeStyle={activeStyle}>Carte</NavLink> 
            </Nav> 
        </Navbar> 
        <br /> 
        </>) 
        }
    }
