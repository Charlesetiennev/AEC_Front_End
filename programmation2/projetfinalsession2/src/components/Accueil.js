import React, { useEffect, useRef } from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import { TweenMax, Power2 } from 'gsap';
import {
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
} from '../images/imagesAccueil/imagesAccueil';
import Img1 from '../images/imagesAccueil/photo1.jpg';
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

  // TweenMax.from(col1, 1, { opacity: '0', x: -50, ease: Power3.easeIn });
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
            <Image src={Img1} alt='essaie' fluid />
          </Row>
          <Row>
            <Image src={Img2} fluid />
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
            <Image src={Img6} fluid />
          </Row>
          <Row>
            <Image src={Img4} fluid />
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
            <Image src={Img7} fluid />
          </Row>
          <Row>
            <Image src={Img5} fluid />
          </Row>
          <Row>
            <Image src={Img3} fluid />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
