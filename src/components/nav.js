import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ sitePaths }) => {
  return (
    <nav>
      <ul>
        {sitePaths.map(({ path, title }) => (
          <li key={path}><Link to={path}>{title}</Link></li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
