import React, { useState, useEffect, useRef } from 'react';
import { Nav, Navbar, Row, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { TweenMax, Power3 } from 'gsap';
import Logo from '../../src/images/logo/logo.jpg';

export default function Menu() {
  let logo = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let link4 = useRef(null);

  useEffect(() => {
    TweenMax.from(logo, 0.8, { opacity: '0', x: -50, ease: Power3.easeIn });
    TweenMax.from(link1, 0.8, {
      opacity: '0',
      x: -50,
      ease: Power3.easeIn,
      delay: 0.2,
    });
    TweenMax.from(link2, 0.8, {
      opacity: '0',
      x: -50,
      ease: Power3.easeIn,
      delay: 0.4,
    });
    TweenMax.from(link3, 0.8, {
      opacity: '0',
      x: -50,
      ease: Power3.easeIn,
      delay: 0.6,
    });
    TweenMax.from(link4, 0.8, {
      opacity: '0',
      x: -50,
      ease: Power3.easeIn,
      delay: 0.8,
    });
  });
  return (
    <>
      <Nav className='col-lg-2 col-md-3 col-sm-12'>
        <Navbar>
          <NavLink
            exact
            to='/'
            className='logo'
            ref={(el) => {
              logo = el;
            }}
          >
            <Image src={Logo} roundedCircle fluid />
          </NavLink>
          <NavLink
            to='/listeLibrairies'
            className='link1'
            ref={(el) => {
              link1 = el;
            }}
          >
            Liste des meilleurs Librairies Javascript
          </NavLink>
          <NavLink
            to='/ajouterLibrairies'
            className='link2'
            ref={(el) => {
              link2 = el;
            }}
          >
            Ajouter une Librairies
          </NavLink>
          <NavLink
            to='/'
            className='link3'
            ref={(el) => {
              link3 = el;
            }}
          >
            4
          </NavLink>
          <NavLink
            to='/'
            className='link4'
            ref={(el) => {
              link4 = el;
            }}
          >
            5
          </NavLink>
        </Navbar>
      </Nav>
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
