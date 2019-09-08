import React from 'react';
import './Header.scss';
import Logo from '../Logo';

const Header = () => (
  <header className="top-header">
    <Logo />
    <div className="PageTitle--container font-secondary lh--1">
      NEWS
    </div>
  </header>
);

export default Header;
