import React from "react";
import { Link } from "react-router-dom";
import {Card} from "react-bootstrap"

export class Employer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <Card>
        <Card.Body>
          <Link to={"Employers/" + this.props.id  }>
            <h3>{this.props.Prenom} {this.props.Nom}</h3>
          </Link>
        </Card.Body>
      </Card>     
      </>
    );
  }
}