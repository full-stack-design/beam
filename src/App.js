import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import { sitePaths } from './app-data';
import { enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/

import "./App.scss"

import Home from "./pages/home";
import Series from "./pages/series";
import Features from "./pages/features";
import Hubs from "./pages/hubs";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import NotFound from "./pages/not-found";

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
                  <Route path="/hubs" element={<Hubs/>} />
                  <Route path="/sign-in" element={<SignIn/>} />
                  <Route path="/sign-up" element={<SignUp/>} />
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
