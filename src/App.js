import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route , Switch} from "react-router-dom";
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount(){
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
    //   this.setState({currentUser:user})
    //   createUserProfileDocument(user);
      
    // })

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {

          this.props.setCurrentUser({
              id : snapshot.id,
              ...snapshot.data()
            });
          });
         
        
        
      }

      this.props.setCurrentUser(userAuth)
      
      
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  


  render(){
    
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
 
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
