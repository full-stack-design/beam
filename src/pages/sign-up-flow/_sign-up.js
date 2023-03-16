import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './sign-up.scss';

const SignUp = () => {
  return (
    <article className="sign-up">

      <nav>
        <Link to='begin'>begin</Link>
        <Link to='account'>account</Link>
        <Link to='plans'>Plans</Link>
        <Link to='choose-plan'>Choose Plan</Link>
        <Link to='payment'>payment</Link>
        <Link to='choose-payment'>choose payment</Link>
        <Link to='complete'>complete</Link>
      </nav>      

      <Outlet />

    </article>
  );
}

export default SignUp;