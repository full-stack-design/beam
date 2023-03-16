import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom"; // https://www.robinwieruch.de/react-router-nested-routes/
import { TransitionGroup, Transition } from "react-transition-group";
import { sitePaths } from './app-data';
import { enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/

import "./App.scss"

import Header from './components/header';
import Footer from './components/footer';

import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Series from "./pages/series";
import Features from "./pages/features";
import Hubs from "./pages/hubs";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up-flow/_sign-up";
import IntroPlans from "./pages/sign-up-flow/intro-plans";
import SetupPlan from "./pages/sign-up-flow/setup-plan";
import IntroAccount from "./pages/sign-up-flow/intro-account";
import SetupAccount from "./pages/sign-up-flow/setup-account";
import IntroPayment from "./pages/sign-up-flow/intro-payment";
import SetupPayment from "./pages/sign-up-flow/setup-payment";

const App = () => {

  const [newAccountData, setNewAccountDataState] = useState({
    email: "",
    password: "",
    recurrence: "",
    plan: "",
    price: "",
  });
  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerClass, setHeaderClass] = useState('');
  const location = useLocation();
  const { pathname, key } = location;
  const prevPathname = null;

  useEffect(() => {
    const headerEl = document.querySelector('header.navbar');
    if (headerEl) {
      setHeaderHeight(headerEl.offsetHeight);
    }
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderClass('scrolled');
      } else {
        setHeaderClass('');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">

      <Header sitePaths={sitePaths} className={`header ${headerClass}`}/>
      
        <TransitionGroup component={null}>
          <Transition
            key={key}
            appear={true}
            onEnter={(node) => enter(node, pathname, prevPathname)}
            onExit={(node) => exit(node, pathname, prevPathname)}
            timeout={{enter: 500, exit: 500 }}
            >

              <main className="container" style={{position: 'relative', height: '100%', marginTop: headerHeight}}>
                <Routes location={location}>
                  <Route exact path="/" element={<Home/>}  />
                  <Route path="series" element={<Series/>} />
                  <Route path="features" element={<Features/>} />
                  <Route path="hubs" element={<Hubs/>} />
                  <Route path="sign-in" element={<SignIn/>} />
                  <Route path="sign-up" element={<SignUp account={newAccountData} />} >
                    <Route path="begin" element={<IntroAccount account={newAccountData} />} />
                    <Route path="account" element={<SetupAccount account={newAccountData} />} />
                    <Route path="plans" element={<IntroPlans account={newAccountData} />} />
                    <Route path="choose-plan" element={<SetupPlan account={newAccountData} />} />
                    <Route path="payment" element={<IntroPayment account={newAccountData} />} />
                    <Route path="choose-payment" element={<SetupPayment account={newAccountData} />} />
                    <Route path="review" />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>

          </Transition>
        </TransitionGroup>
      
      <Footer sitePaths={sitePaths}/>

    </div>
  );
}

export default App;
