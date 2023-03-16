import React from 'react';
import Nav from './nav';
import './header.scss';

const Header = ({ sitePaths, className }) => {
  const hamburgerSize = 40;
  const hamburgerPattyHeight = hamburgerSize/8;
  return (
    <header className={className + ' navbar header'}>
      <div className='container'>
        <div className='navbar__logo-container'>
          {/* <button className='hamburger'></button> */}
          <button className="header__hamburger">
            <svg viewBox={`0 0 ${hamburgerSize} ${hamburgerSize}`} preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
              <rect className="header__hamburger__line" y="0" width={hamburgerSize} height={hamburgerPattyHeight} rx={hamburgerPattyHeight/2} />
              <rect className="header__hamburger__line" y={(hamburgerSize/2)-(hamburgerPattyHeight/2)} width={hamburgerSize} height={hamburgerPattyHeight} rx={hamburgerPattyHeight/2} />
              <rect className="header__hamburger__line" y={hamburgerSize-hamburgerPattyHeight} width={hamburgerSize} height={hamburgerPattyHeight} rx={hamburgerPattyHeight/2} />
            </svg>
          </button>
          <h1 className='logo'>BEAM</h1>
        </div>
        <Nav className='container' sitePaths={sitePaths} />
      </div>
    </header>
  );
};

export default Header;
