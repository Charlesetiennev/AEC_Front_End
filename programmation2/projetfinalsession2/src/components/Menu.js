import React, { useEffect, useRef } from 'react';
import { Nav, Navbar, Image, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { TweenMax, Power3 } from 'gsap';
import Logo from '../../src/images/logo/logo.jpg';

export default function Menu() {
  let logo = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);

  useEffect(() => {
    TweenMax.from(logo, 0.8, { opacity: '0', x: -50, ease: Power3.easeIn });
    TweenMax.from(link1, 0.8, {
      opacity: '0',
      y: 100,
      ease: Power3.easeInOut,
      delay: 0.2,
    });
    TweenMax.from(link2, 0.8, {
      opacity: '1',
      y: -70,
      ease: Power3.easeIn,
      delay: 0.4,
    });
  });
  return (
    <>
      <Nav>
        <Navbar className='p-0'>
          <NavLink
            exact
            to='/'
            className='logo navbar-brand'
            ref={(el) => {
              logo = el;
            }}
          >
            <Image src={Logo} roundedCircle fluid />
          </NavLink>

          <NavLink
            to='/listeLibrairies'
            className='link1 text-center'
            ref={(el) => {
              link1 = el;
            }}
          >
            Liste des meilleurs Librairies Javascript
          </NavLink>
          <NavLink
            to='/ajouterLibrairies'
            className='link2 text-center'
            ref={(el) => {
              link2 = el;
            }}
          >
            Ajouter une Librairies
          </NavLink>
        </Navbar>
      </Nav>
      ;
    </>
  );
}
// TweenMax.from(
//   logo,
//   0.8,
//   {
//     opacity: 0,
//     x: -50,
//     ease: Power3.easeIn,
//   },
//   []
// );
