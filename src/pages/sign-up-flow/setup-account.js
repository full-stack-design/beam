import React from 'react';
// import {button} from '@mui/material';
// import { useHistory } from "react-router-dom";
// import input from '@mui/material/TextField';
import {gsap, Power2} from "gsap";
// import Breadcrumb from "../../components/breadcrumb";

const SetupAccount = props => {

  const { account } = props;
  // const history = useHistory();

  console.log("SetupAccount account",account);

  const goNext = (e) => {
    e.preventDefault();

    account.email = e.target.email.value ? e.target.email.value : account.email;
    account.password = e.target.password.value ? e.target.password.value : "securepassword123";

    const location = {
      pathname: '/sign-up/intro-plans'
    }  
    // history.push(location);
    
  }


  return (
    <article className="center create-account">
    
      {/* <Breadcrumb step={1}/> */}

      <section className="card card-- art__stagger-in art__stagger-out">

        <div className="card__content">
          <h1>Create a password to secure your account</h1>
          <p>This door won't hold itself, set a password and we'll "Hold&nbsp;the&nbsp;Door" for you.</p>
        </div>

        <form action="" className="card__actions" onSubmit={goNext}>
          <input className="input" type="email" name="email" label="E-Mail" variant="outlined" value={account.email} />
          <input className="input" type="password" name="password" label="Password" variant="outlined" />
          <input className="input" type="password" name="confirm-password" label="Confirm Password" variant="outlined" />
          <button type="submit" className="" variant="contained" size="large">Next</button>
        </form>
      </section>

    </article>
  );

}

export default SetupAccount;
