// Librairies.js
// Par Charles-Etienne Villemure
// Le 14 Septembre 2020
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { TweenLite } from 'gsap';

export class Librairies extends React.Component {
  constructor(props) {
    super(props);
    this.card = null;
    this.cardFromBot = null;
  }
  componentDidMount() {
    this.cardFromBot = TweenLite.from(this.card, 1, { y: 100, opacity: 0 });
  }
  render() {
    return (
      <>
        <Col xs='12' sm='6' md='4' lg='2' className='py-3'>
          <Card ref={(div) => (this.card = div)}>
            <Card.Body>
              <Card.Img
                variant='top'
                src={this.props.logo}
                className='d-block mx-auto'
                rounded='true'
                fluid='true'
              />

              <NavLink
                to={'/AfficherLibrairie/' + this.props.id}
                className='text-center d-block justify-content-center'
              >
                {this.props.nom}
              </NavLink>
            </Card.Body>
            <Card.Footer>
              <NavLink
                to={'/AfficherLibrairie/' + this.props.id}
                className='text-center d-block justify-content-center'
              >
                <button>En voir plus</button>
              </NavLink>
              <NavLink
                to={'/ModifierLibrairie/' + this.props.id}
                className='text-center pt-2 d-block justify-content-center'
              >
                <button>Mettre les infos a jour</button>
              </NavLink>
            </Card.Footer>
          </Card>
        </Col>
      </>
    );
  }
}
