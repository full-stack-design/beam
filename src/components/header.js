import React from 'react';
import Nav from './nav';
import './footer.scss';

const Header = ({ sitePaths }) => {
  return (
    <header className='navbar container'>
      <h1 className='logo'>BEAM</h1>
      <Nav className='container' sitePaths={sitePaths} />
    </header>
  );
};

export default Header;
