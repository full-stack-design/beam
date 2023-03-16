import React from 'react';
import Nav from './nav';
import './footer.scss';

const Footer = ({ sitePaths }) => {
  return (
    <footer>
      <Nav className='container' sitePaths={sitePaths} />
    </footer>
  );
};

export default Footer;
