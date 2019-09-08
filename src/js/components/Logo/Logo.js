import React from 'react';
import './Logo.scss';
import logoMark from '../../../assets/images/logomark.svg';

const Logo = () => (
  <nav className="Logo--container">
    <img
      src={logoMark}
      alt="AYO!"
    />
  </nav>
);

export default Logo;
