import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BoutonAcceuilHooks() {
  return (
    <NavLink exact to='/' className='py-4 boutton'>
      Accueil
    </NavLink>
  );
}
