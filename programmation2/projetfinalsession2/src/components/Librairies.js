import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

export class Librairies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Col sm='4'>
          <Card>
            <Card.Body>
              <Card.Img
                variant='top'
                src={this.props.logo}
                className='d-block mx-auto'
                rounded
                fluid
              />
              <NavLink to={'/AfficherLibrairie/' + this.props.id}>
                {this.props.nom}
              </NavLink>
            </Card.Body>
            <Card.Footer>
              <NavLink to={'/ModifierLibrairie/' + this.props.id}>
                <button>Mettre les infos a jour</button>
              </NavLink>
            </Card.Footer>
          </Card>
        </Col>
      </>
    );
  }
}
