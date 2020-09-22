// Accueil.js
// Par Charles-Etienne Villemure
// Le 14 Septembre 2020
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

  return (
    <Container fluid>
      <Row className='p-3 w-100' id='imageIndex'>
        {/* PREMIERE COLONE */}
        <Col
          className='hidebeforemd'
          xs='12'
          md='6'
          lg='4'
          ref={(el) => {
            col1 = el;
          }}
        >
          <Row>
            <Image
              src='https://i.pinimg.com/originals/bf/5e/b6/bf5eb6d135d3a29cdd19a9441c8accaa.jpg'
              alt='essaie'
              fluid
            />
          </Row>
          <Row>
            <Image
              src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a51a6de-f960-4f82-b743-c1a61ea08a79/dbesgmc-15a0852a-dd64-461b-8613-33f4613f4d90.png/v1/fill/w_1024,h_576,q_80,strp/programming_wallpaper_by_affanindo_dbesgmc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC8xYTUxYTZkZS1mOTYwLTRmODItYjc0My1jMWE2MWVhMDhhNzlcL2RiZXNnbWMtMTVhMDg1MmEtZGQ2NC00NjFiLTg2MTMtMzNmNDYxM2Y0ZDkwLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.bWHdw532HGaOtX2f46GcVx9PyBAON76yGT2VxJO8mJI'
              alt='essaie'
              fluid
            />
          </Row>
          <Row>
            <Image
              src='https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt='essaie'
              fluid
            />
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
            <Image
              src='https://images.idgesg.net/images/article/2018/02/project_management_strategy_meeting_teamwork_thinkstock_681735120-100749444-large.jpg'
              fluid
            />
          </Row>
          <Row>
            <Image
              src='https://images.pexels.com/photos/4709288/pexels-photo-4709288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              fluid
            />
          </Row>
          <Row>
            <Image
              src='https://image.freepik.com/free-photo/programmer-coding-software-development-working-project-it_1423-2973.jpg'
              fluid
            />
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
            <Image
              src='https://www.thebalancecareers.com/thmb/3p9hVQeRHU6UuHZY3PBoP5RNUIU=/2121x1193/smart/filters:no_upscale()/GettyImages-1080999454-621fea37834b4192bc32d82b9770b46d.jpg'
              fluid
            />
          </Row>
          <Row>
            <Image
              src='https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              fluid
            />
          </Row>
          <Row>
            <Image
              src='https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              fluid
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
