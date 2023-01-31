import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { sitePaths } from './app-data';

import "./App.scss"

import Home from "./views/home";
import Series from "./views/series";
import Features from "./views/features";
import SignIn from "./views/sign-in";
import SignUp from "./views/sign-up";

import Header from './components/header';
import Footer from './components/footer';

// const SitePaths = ({sitePaths}) =>
//   sitePaths.map(({path, title, element}) => {
//     return (
//       <Route path={path} element={element} key={title} />
//     );
//   });

function App() {
  const location = useLocation();

  return (
    <div className="">
      <Header sitePaths={sitePaths}/>
      <main className="container">
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Routes location={location}>
                <Route exact path="/" element={<Home/>} />
                <Route path="/series" element={<Series/>} />
                <Route path="/features" element={<Features/>} />
                <Route path="/sign-in" element={<SignIn/>} />
                <Route path="/sign-up" element={<SignUp/>} />
              </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer sitePaths={sitePaths}/>
    </div>
  );
}

export default App;
