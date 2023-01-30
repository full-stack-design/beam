import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { sitePaths } from './app-data';

import Home from "./views/home";
import Series from "./views/series";
import Features from "./views/features";

import Nav from './components/nav';

// const SitePaths = ({sitePaths}) =>
//   sitePaths.map(({path, title, element}) => {
//     return (
//       <Route path={path} element={element} key={title} />
//     );
//   });

function App() {
  const location = useLocation();

  return (
    <>
      <header>
        <h1>BEAM</h1>
        <Nav sitePaths={sitePaths} />
      </header>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route exact path="/" element={<Home/>} />
              <Route path="/series" element={<Series/>} />
              <Route path="/features" element={<Features/>} />
            </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
