import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = ({ sitePaths, className }) => {
  return (
    <nav className={'navbar ' + className}>
      <ul className='navbar-nav'>
        {sitePaths.filter(item => item.type === 'nav').map(({ path, title, className, type }) => (
          <li key={path} className='nav-item'>
            <Link className={className + ' ' + 'nav-link'} to={path}>{title}</Link>
          </li>
        ))}
      </ul>
      <ul className='navbar-nav'>
        {sitePaths.filter(item => item.type === 'cta').map(({ path, title, className, type }) => (
          <li key={path} className='nav-item'>
            <Link className={className + ' ' + 'nav-link'} to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
