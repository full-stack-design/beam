import React, { useState, useEffect } from 'react';
// import {button} from '@mui/material';
// import { useHistory } from "react-router-dom";
import "./setup-plan.scss";
import {gsap, Power2} from "gsap";
// import {Alert} from '@mui/material';
// import Breadcrumb from "../../components/breadcrumb";

const SetupPlan = ({account}) => {

  const monthlyBasicPrice = "$9.99";
  const monthlyPremiumPrice = "$14.99";
  const yearlyBasicPrice = "$99.99";
  const yearlyPremiumPrice = "$149.99";

  // const { account } = props;

  // const history = useHistory();

  const [savingsCta, setSavingsCtaState] = useState("Save 16%!");

  console.log("SetupPlan account",account);

  



  const goNext = (e) => {

    e.preventDefault();

    const location = {
      pathname: '/sign-up/intro-payment'
    }
  
    // history.push(location);
    
  }

  const yearlyCells = document.getElementsByClassName("yearly");
  const monthlyCells = document.getElementsByClassName("monthly");

  const setrecurrence = (recurrence) => {

    console.log("SetupPlan togglerecurrence recurrence",recurrence);

    const recruanceAnimation = gsap.timeline({
      defaults: { // children inherit these defaults
        duration: 0.5,
        ease: Power2.inOut 
      },
    });

    if(recurrence === "monthly"){
      // toggle to monthly
      recruanceAnimation.to(yearlyCells,{
        y: -20,
        autoAlpha: 0
      })
      .to(monthlyCells,{
        y: 0,
        autoAlpha: 1
      },"-=80%");
      account.recurrence = "monthly";
      setSavingsCtaState("Save 16%");
    } else {
       // toggle to yearly
       recruanceAnimation.to(monthlyCells,{
        y: 20,
        autoAlpha: 0
      })
      .to(yearlyCells,{
        y: 0,
        autoAlpha: 1
      },"-=80%");
      account.recurrence = "yearly"; // does this need to be in State
      setSavingsCtaState("Pay Monthly");
    }
  }
  const togglerecurrence = () => {

    // console.log("SetupPlan togglerecurrence recurrence",recurrence);

    const recruanceAnimation = gsap.timeline({
      defaults: { // children inherit these defaults
        duration: 0.5,
        ease: Power2.inOut 
      },
    });

    if(account.recurrence === "yearly"){
      // toggle to monthly
      recruanceAnimation.to(yearlyCells,{
        y: -20,
        autoAlpha: 0
      })
      .to(monthlyCells,{
        y: 0,
        autoAlpha: 1
      },"-=80%");
      account.recurrence = "monthly";
      setSavingsCtaState("Save 16%");
    } else {
       // toggle to yearly
       recruanceAnimation.to(monthlyCells,{
        y: 20,
        autoAlpha: 0
      })
      .to(yearlyCells,{
        y: 0,
        autoAlpha: 1
      },"-=80%");
      account.recurrence = "yearly"; // does this need to be in State
      setSavingsCtaState("Pay Monthly");
    }

    getPrice(account.recurrence, account.plan);

  }
  const getPrice = (recurrence, plan) => {
    console.log("SetupPlan getPrice",recurrence, plan);
    switch(plan) {
      case "premium":
        switch(recurrence) {
          case "yearly":
            account.price = yearlyPremiumPrice;
            break;
          case "monthly":
            account.price = monthlyPremiumPrice;
            break;
          default:
        }
        break;
      
      case "basic":
        switch(recurrence) {
          case "yearly":
            account.price = yearlyBasicPrice;
            break;
          case "monthly":
            account.price = monthlyBasicPrice;
            break;
          default:
        }
        break;
      default:
        // code block
    }
    console.log("IntroPayment getPrice account",account);
  }

  React.useEffect(() => {

    // Premium Plan Cells
    const premiumCellsCollection = document.getElementsByClassName('item--premium');
    const premiumCellsArray = Array.prototype.slice.call( premiumCellsCollection );
    // console.log("premiumCells",premiumCellsArray);

    // Basic Plans Cells
    const basicCellsCollection = document.getElementsByClassName('item--basic');
    const basicCellsArray = Array.prototype.slice.call( basicCellsCollection );
    // console.log("basicCells",basicCellsArray);

    // Premium & Basic Plans Cells
    const allCellsArray = basicCellsArray.concat(premiumCellsArray);
    // console.log("allCells",allCellsArray);

    const setPlan = (plan) => {
      allCellsArray.forEach(
        cell => {
          cell.classList.remove("active");
          return
        }
      );

      if(plan === "premium"){
        account.plan = "premium";
        premiumCellsArray.forEach(
          cell => {
            cell.classList.add("active");
            return
          }
        );
      } else {
        account.plan = "basic";
        basicCellsArray.forEach(
          cell => {
            cell.classList.add("active");
          }
        );
      }
      console.log("SetupPlan setPlan", account);
      getPrice(account.recurrence, account.plan);
    }

    const setHoverOnPlan = (plan) => {
      if(plan === "premium"){
        premiumCellsArray.forEach(
          cell => {
            cell.classList.add("hover");
          }
        );
      } else {
        basicCellsArray.forEach(
          cell => {
            cell.classList.add("hover");
          }
        );
      }
    }

    const setHoverOffPlans = () => {
      allCellsArray.forEach(
        cell => {
          cell.classList.remove("hover");
        }
      );
    }

    // Activate interactive plan pickers cells
    premiumCellsArray.forEach(
      cell => {
        cell.addEventListener("mouseup", () => {setPlan("premium")});
        cell.addEventListener("mouseover", () => {setHoverOnPlan("premium")});
        cell.addEventListener("mouseout", () => {setHoverOffPlans()});
      }
    );

    basicCellsArray.forEach(
      cell => {
        cell.addEventListener("mouseup", () => {setPlan("basic")});
        cell.addEventListener("mouseover", () => {setHoverOnPlan("basic")});
        cell.addEventListener("mouseout", () => {setHoverOffPlans()});
      }
    );
    
    const newrecurrence = account ? account.recurrence : "monthly"; 
    // const newrecurrence = "monthly"; 
    const newPlan = account ? account.plan : "premium"; 

    setrecurrence(newrecurrence);

    setPlan(newPlan);
    
    gsap.set(yearlyCells, {
      y: -20,
      autoAlpha: 0
    });

    // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    // eslint-disable-next-line
    
  }, [account]);

  return (
    <article className="center plan-picker">
      
      <section className="card card--wide art__stagger-in art__stagger-out">
        <div className="card__content">
          <h1>Choose the plan that's right for you</h1>
          <p>Enjoy our entire library, plus exclusive streaming access to the biggest Warner&nbsp;Bros. movies of 2022 at no extra cost.</p>
          
          <div onClick={togglerecurrence} className="yearly-cta" severity="success">
              Save 16% when you buy the whole year!
            <button variant="outlined" size="small" >{savingsCta}</button>
          </div>
          
          <div className="plan-compare-chart">

            <div className="sub-grid-row">
              <div className="item item--2 item--value item--basic item--first">Basic</div>
              <div className="item item--3 item--value item--premium item--first">Premium</div>
            </div>
            <div className="sub-grid-row">
              <div className="item item--label yearly-label">
                {/* <MoreVertIcon className="recurrence-icon"/> */}
                <span className="monthly">Monthly</span>
                <span className="yearly">Yearly <span className="small">(16% Savings!!)</span></span>
              </div>
              <div className="item item--value item--basic">
                <span className="monthly">$9.99</span>
                <span className="yearly">$99.99</span>
              </div>
              <div className="item item--value item--premium">
                <span className="monthly">$14.99</span>
                <span className="yearly">$149.99</span>
              </div>
            </div>
            <div className="sub-grid-row">
              <div className="item item--label">Ad Free</div>
              <div className="item item--value item--basic"></div>
              <div className="item item--value item--premium">&#10003;</div>
            </div>
            <div className="sub-grid-row">
              <div className="item item--label">Entire Library</div>
              <div className="item item--value item--basic">&#10003;</div>
              <div className="item item--value item--premium">&#10003;</div>
            </div>
            <div className="sub-grid-row">
              <div className="item item--label">4k UHD</div>
              <div className="item item--value item--basic"></div>
              <div className="item item--value item--premium">&#10003;</div>
            </div>         
            <div className="sub-grid-row">
              <div className="item item--label">Watch on all your devices</div>
              <div className="item item--value item--basic">&#10003;</div>
              <div className="item item--value item--premium">&#10003;</div>
            </div>
            <div className="sub-grid-row">
              <div className="item item--label">Downloads</div>
              <div className="item item--value item--basic item--last"></div>
              <div className="item item--value item--premium item--last">&#10003;</div>
            </div>

          </div>
          
        </div>
        <div className="card__actions flex">
          <button onClick={goNext} className="next" variant="contained" size="large">Next </button>
        </div>
        
      </section>
      <section className="card card--wide card--sub">
        <p className="small align-lef">
          *4k UHD as available<br/>
          *Save 16% when you pre-pay for 1 year 
        </p>
      </section>
      {/* <section className="card card--intro art__stagger-in art__stagger-out">
        Welcome {account.email} Sign Up
      </section> */}
    </article>
  );

}

export default SetupPlan;
