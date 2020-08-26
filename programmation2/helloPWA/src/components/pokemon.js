import React, { useState, useEffect } from 'react';
import ManagePokemon from './managePokemon';
import { Card } from 'react-bootstrap';

export default function Pokemon(props) {
  return (
    <Card>
      <Card.Body>
        <h3>{props.name}</h3>
      </Card.Body>
    </Card>
  );
}
