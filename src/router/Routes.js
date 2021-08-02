import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Profile from "../components/Profile";
// import ProduitListe from "../components/Product/ProduitListe";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/test" component={ProduitListe}/> */}
      <Route path="/profile" component={Profile} />
{/* 
      <Route path="/profile" component={Favorite}/>
      <Route path="/history" component={History}/>
      <Route path="/product" component={Product}/> */}

      <Route path="/login" component={Login} />
      {/* <Route path="/" component={}/> */}
    </Switch>
  );
};

export default Routes;
