import React from "react";
import { FormAjouterEmployer } from "./formAjouterEmployer";
import { MenuGauche } from "./menuGauche";
import {Row,Col} from 'react-bootstrap';
export class AjouterEmployer extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <>
      <Row className='m-0'>
        <MenuGauche/>
          <Col lg='10'>
            <FormAjouterEmployer history={this.props.history} />
          </Col>
      </Row>
      </>
    );
  }
}