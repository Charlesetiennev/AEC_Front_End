import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function BoutonAjouterEmployerHooks() {
  return (
    <NavLink to='/ajouterEmployer' className='boutton'>
      Ajouter Employer
    </NavLink>
  );
}
