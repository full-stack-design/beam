import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import { sitePaths } from './app-data';
import { enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/

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
  const { pathname, key } = location;
  const prevPathname = null;

  return (
    <div className="">
      <Header sitePaths={sitePaths}/>
      
        <TransitionGroup component={null}>
          <Transition
            key={key}
            appear={true}
            onEnter={(node) => enter(node, pathname, prevPathname)}
            onExit={(node) => exit(node, pathname, prevPathname)}
            timeout={{enter: 500, exit: 500 }}
            >
              <main className="container" style={{position: 'relative', height: '100%'}}>
                <Routes location={location}>
                  <Route exact path="/" element={<Home/>}  />
                  <Route path="/series" element={<Series/>} />
                  <Route path="/features" element={<Features/>} />
                  <Route path="/sign-in" element={<SignIn/>} />
                  <Route path="/sign-up" element={<SignUp/>} />
                </Routes>
              </main>
          </Transition>
        </TransitionGroup>
      
      <Footer sitePaths={sitePaths}/>
    </div>
  );
}

export default App;
