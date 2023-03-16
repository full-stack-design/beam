import React from 'react';
// import {button} from '@mui/material';
// import { useHistory } from "react-router-dom";
// import Breadcrumb from "../../components/breadcrumb";

const IntroPayment = props => {

  // const history = useHistory();

  console.log("IntroPayment account",props.account);

  const goNext = (e) => {

    e.preventDefault();

    const location = {
      pathname: '/sign-up/setup-payment'
    }
    // history.push(location);
    
    
  }

  return (
    <article className="center intro-account">
      
      {/* <Breadcrumb step={3}/> */}
      
      <section className="card card--intro art__stagger-in art__stagger-out">
        <div className="card__content">
          <h1>Set up your payment method</h1>
          <p>Start watching as soon as your payment is set up.</p>
          <ul>
            <li>No commitments</li>
            <li>Cancel anytime</li>
          </ul>
        </div>
        <div className="card__actions">
          <form action="" onSubmit={goNext}>
            <button type="submit" className="next" variant="contained" size="large">Credit or Debit</button>
            <button type="submit" className="next" variant="contained" size="large">Paypal</button>
            <button type="submit" className="next" variant="contained" size="large">Bank</button>
          </form>
          <p className='small'>{props.account.price} {props.account.recurrence}<br/> for the "{props.account.plan} plan"</p>

        </div>
        
      </section>
    </article>
  );

}

export default IntroPayment;
