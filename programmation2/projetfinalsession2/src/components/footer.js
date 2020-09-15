// Footer.js
// Par Charles-Etienne Villemure
// Le 14 Septembre 2020
import React from 'react';
import { Col } from 'react-bootstrap';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col className='text-center footer pt-2'>
        <h4 className='pb-2'>&copy; 2020 Charles-Etienne Villemure</h4>
      </Col>
    );
  }
}
