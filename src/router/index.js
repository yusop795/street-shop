import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Favorite,
  Home,
  MyPage,
  Shop,
  ShopManaging,
  ShopRanking,
  SignIn,
  SignUp,
} from '../containers';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/signIn">
        <SignIn />
      </Route>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorite" component={Favorite} />
        <Route exact path="/myPage" component={MyPage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shopManaging" component={ShopManaging} />
        <Route exact path="/shopRanking" component={ShopRanking} />
      </Switch>
    </Switch>
  </BrowserRouter>
);

export default Router;
