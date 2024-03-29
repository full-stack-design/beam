import React from 'react';
// import {button} from '@mui/material';
// import { useHistory } from "react-router-dom";
// import Breadcrumb from "../../components/breadcrumb";

const IntroPlans = props => {

  // const history = useHistory();

  const goNext = (e) => {
    e.preventDefault();
    const location = {
      pathname: '/sign-up/setup-plan'
    }
    // history.push(location);
  }

  return (
    <article className="center intro-account">
      
      {/* <Breadcrumb step={2}/> */}

      <section className="card card--intro art__stagger-in art__stagger-out">
        <div className="card__content">
          <h1>Awesome!<br/>Now choose your streaming plan</h1>
          <ul>
            <li>No commitments, cancel anytime</li>
            <li>All of HBO Max and Discovery+ for one low price</li>
            <li>Exclusive streaming access to the biggest Warner Bros. movies of 2022 at no extra cost.</li>
            <li>Unlimited viewing on all your devices</li>
          </ul>
        </div>
        <div className="card__actions"></div>
        <button onClick={goNext} className="next" variant="contained" size="large">Let's Do It</button>
      </section>
    </article>
  );

}

export default IntroPlans;
