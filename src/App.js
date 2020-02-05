import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route , Switch} from "react-router-dom";
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'

function App() {
  return (
    <div>
    <Header/>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route  path="/shop" component={ShopPage} />
      <Route path="/signin-signup" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
