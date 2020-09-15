// Menu.js
// Par Charles-Etienne Villemure
// Le 14 Septembre 2020
import React, { useEffect, useRef } from 'react';
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { TweenMax, Power3 } from 'gsap';

export default function Menu() {
  let logo = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);

  const activeStyle = { color: '#5BBA6F', textDecoration: 'underline' };
  useEffect(() => {
    TweenMax.from(logo, 0.8, { opacity: '0', x: -50, ease: Power3.easeIn });
    TweenMax.from(link1, 0.8, {
      opacity: '0',
      y: 101,
      ease: Power3.easeIn,
      delay: 0.2,
    });
    TweenMax.from(link2, 0.8, {
      opacity: '0',
      y: -100,
      ease: Power3.easeIn,
      delay: 0.3,
    });
  });
  return (
    <>
      <Nav>
        <Navbar className='p-0'>
          <Row className='w-100'>
            <Col xs='12' md='4' className='text-center pt-3'>
              <NavLink
                exact
                to='/'
                className='navbar-brand'
                ref={(el) => {
                  logo = el;
                }}
              >
                <h2>
                  Code <br />
                </h2>
                <h1 className='accentColorText'>DIY</h1>
                {/* <Image src={Logo} roundedCircle fluid /> */}
              </NavLink>
            </Col>
            <Col className='text-center pt-3' xs='12' md='4'>
              <NavLink
                to='/listeLibrairies'
                activeStyle={activeStyle}
                ref={(el) => {
                  link1 = el;
                }}
              >
                Liste des meilleurs Librairies Javascript
              </NavLink>
            </Col>
            <Col className='text-center pt-3' xs='12' md='4'>
              <NavLink
                to='/ajouterLibrairies'
                activeStyle={activeStyle}
                ref={(el) => {
                  link2 = el;
                }}
              >
                Ajouter une Librairies
              </NavLink>
            </Col>
          </Row>
        </Navbar>
      </Nav>
    </>
  );
}
