import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route , Switch} from "react-router-dom";
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'
import {auth} from './firebase/firebase.utils'

class App extends React.Component {

  constructor(){
    super();
    this.state={
      currentUser :null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/shop" component={ShopPage} />
        <Route path="/signin-signup" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
 
}

export default App;
