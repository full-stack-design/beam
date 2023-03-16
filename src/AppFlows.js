import React, {useState} from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";
// import { Route, Switch, useParams } from "react-router-dom"; // https://v5.reactrouter.com/web/example/nesting

// Route Components


import Home from "./pages/home";
import Series from "./pages/series";
import Features from "./pages/features";
import Hubs from "./pages/hubs";
import SignIn from "./pages/sign-in";
import SignUpFlow from "./pages/sign-up-flow/_sign-up-flow";
import NotFound from "./pages/not-found";

const prevPathname = null;

const AppFlows = (props) => {

  // const [newAccountData, setNewAccountDataState] = useState({
  //   email: "",
  //   password: "",
  //   recurrence: "",
  //   plan: "",
  //   price: "",
  // });

  // console.log("AppFlows newAccountData",newAccountData);

  return (
    <Routes>
      <Route exact path="/" element={<Home/>}  />
      <Route path="/series" element={<Series/>} />
      <Route path="/features" element={<Features/>} />
      <Route path="/hubs" element={<Hubs/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUpFlow/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
};

export default AppFlows;
