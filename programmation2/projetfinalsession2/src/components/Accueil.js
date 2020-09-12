import React, { useEffect, useRef } from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import { TweenMax, Power2 } from 'gsap';

export default function Accueil() {
  let col1 = useRef(null);
  let col2 = useRef(null);
  let col3 = useRef(null);
  useEffect(() => {
    TweenMax.from(col1, 1, { opacity: '0', y: 70, ease: Power2.easeIn });
    TweenMax.from(col2, 1, {
      opacity: '0',
      delay: 0.2,
      y: 70,
      ease: Power2.easeIn,
    });
    TweenMax.from(col3, 1, {
      opacity: '0',
      delay: 0.4,
      y: 70,
      ease: Power2.easeIn,
    });
  });

  //TweenMax.from(col1, 1, { opacity: '0', x: -50, ease: Power3.easeIn });
  return (
    <Container fluid>
      <Row className='p-3' id='imageIndex'>
        {/* PREMIERE COLONE */}
        <Col
          xs='12'
          md='6'
          lg='4'
          ref={(el) => {
            col1 = el;
          }}
        >
          <Row>
            <Image src={require('../images/photo1.jpg')} alt='essaie' fluid />
          </Row>
          <Row>
            <Image src={require('../images/photo2.jpg')} fluid />
          </Row>
        </Col>
        {/* DEUXIEME COLONNE */}
        <Col
          xs='12'
          md='6'
          lg='4'
          ref={(el) => {
            col2 = el;
          }}
        >
          <Row>
            <h1 className='text-center accentColorText'>
              Bienvenue Sur CodeDIY, la place ou trouver et partager les
              meilleurs Librairies Javascript
            </h1>
          </Row>
          <Row>
            <div className=''></div>
            <Image src={require('../images/photo6.jpg')} fluid />
          </Row>
          <Row>
            <Image src={require('../images/photo4.jpg')} fluid />
          </Row>
        </Col>
        {/* TROISIEME COLONNE */}
        <Col
          xs='12'
          md='6'
          lg='4'
          ref={(el) => {
            col3 = el;
          }}
        >
          <Row>
            <Image src={require('../images/photo7.jpg')} fluid />
          </Row>
          <Row>
            <Image src={require('../images/photo5.jpg')} fluid />
          </Row>
          <Row>
            <Image src={require('../images/photo3.jpg')} fluid />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
