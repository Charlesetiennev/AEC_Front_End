// Menu.js
// Par Charles-Etienne Villemure
// Le 14 Septembre 2020
import React, { useEffect, useRef } from 'react';
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { TweenMax, Power2 } from 'gsap';

export default function Menu() {
  const activeStyle = { color: '#5BBA6F', textDecoration: 'underline' };

  let logo = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);


  useEffect(() => {
    TweenMax.from(logo, 1, { opacity: '0', y: 70, ease: Power2.easeIn });
    TweenMax.from(link1, 1, {
      opacity: '0',
      delay: 0.2,
      y: 70,
      ease: Power2.easeIn,
    });
    TweenMax.from(link2, 1, {
      opacity: '0',
      delay: 0.4,
      y: 70,
      ease: Power2.easeIn,
    });
  });
  return (
    <>
      <Nav>
        <Navbar className='p-0'>
          <Row className='w-100'>
            <Col
              xs='12'
              md='4'
              className='text-center pt-3'

            >
              <NavLink exact to='/' className='navbar-brand' ref={(el) => {
                logo = el;
              }}>
                <h2>
                  Code <br />
                </h2>
                <h1 className='accentColorText'>DIY</h1>
              </NavLink>
            </Col>
            <Col
              className='text-center pt-3'
              xs='12'
              md='4'
              ref={(el) => {
                link1 = el;
              }}
            >
              <NavLink to='/listeLibrairies' activeStyle={activeStyle}>
                Liste des meilleurs Librairies Javascript
              </NavLink>
            </Col>
            <Col
              className='text-center pt-3'
              xs='12'
              md='4'
              ref={(el) => {
                link2 = el;
              }}
            >
              <NavLink to='/ajouterLibrairies' activeStyle={activeStyle}>
                Ajouter une Librairies
              </NavLink>
            </Col>
          </Row>
        </Navbar>
      </Nav>
    </>
  );
}
