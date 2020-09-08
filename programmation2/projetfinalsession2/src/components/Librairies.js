import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

export class Librairies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <Image src={this.props.photo} rounded width='125' />
            <Link to={'ficheLibrarie/?id=' + this.props.id}>
              <h1>{this.props.nom}</h1>
              <p>{this.props.description}</p>
            </Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}
