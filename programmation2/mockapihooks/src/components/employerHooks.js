import React from "react";
import { Link } from "react-router-dom";
import {Card} from "react-bootstrap"

function EmployerHooks(props) {
    return(
        <Card>
        <Card.Body>
          <Link to={"Employers/" + props.id  }>
            <h3>{props.Prenom} {props.Nom}</h3>
          </Link>
        </Card.Body>
      </Card> 
    )
}
export default EmployerHooks;