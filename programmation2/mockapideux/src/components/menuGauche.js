import React from "react"; 
import {Nav,Navbar, NavItem} from "react-bootstrap" 
import {NavLink} from 'react-router-dom'  
import {Col,Row} from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

export class MenuGauche extends React.Component { 
constructor(props) { 
super(props); 
} npm
render() { 
const activeStyle = { color : "orange" }; 
return ( 
<> 
<Col lg='2 p-0'>
<Navbar bg="dark" variant="dark" className='flex-column menuGauche'>
    <Row>
    <Navbar.Brand href="/">Compagnie X</Navbar.Brand>
    </Row>  
<Nav className="flex-column"> 
<NavLink exact to="/" activeStyle={activeStyle} className='py-4'>Accueil</NavLink>
<NavLink to="/ajouterEmployer" activeStyle={activeStyle}>Ajouter Employer</NavLink>
</Nav> 
</Navbar> 
<br /> 
</Col>
</> 
); 
} 
} 
