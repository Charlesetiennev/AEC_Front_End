import React from 'react';
import { Row, Col } from 'react-bootstrap';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col className='text-center footer pt-2'>
        <h4>&copy; 2020 Charles-Etienne Villemure</h4>
      </Col>
    );
  }
}
