import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
} from '../images/imagesAccueil/imagesAccueil';
export default function Accueil() {
  return (
    <>
      <Row>
        <Col>
          <h1>
            Bienvenue Sur CodeDIY, la place ou trouver et partager les meilleurs
            Librairies Javascript
          </h1>
        </Col>
      </Row>
      <Row>
        <Col sm='12' md='6' lg='4'>
          <Row>
            <Image src={Img1} fluid />
          </Row>
          <Row>
            <Image src={Img2} fluid />
          </Row>
        </Col>
        <Col sm='12' md='6' lg='4'>
          <Row>
            <Image src={Img6} fluid />
          </Row>
          <Row>
            <Image src={Img4} fluid />
          </Row>
        </Col>
        <Col sm='12' md='6' lg='4'>
          <Row>
            <Image src={Img7} fluid />
          </Row>
        </Col>
      </Row>
    </>
  );
}
