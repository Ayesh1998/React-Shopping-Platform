import React from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      comfirmPassword: ""
    };
  }

  

  handleSubmit = (async event => {
      event.preventDefault();

      const { displayName, email, password, comfirmPassword} = this.state;

      if(password != comfirmPassword){
          alert("passwords dont match");
          return;
      }

      try {
          const { user } = await auth.createUserWithEmailAndPassword(email,password);
          await createUserProfileDocument(user, {displayName});
          this.setState({
            displayName: "",
            email: "",
            password: "",
            comfirmPassword: ""
          });

      } catch (error) {
          console.log(error);
      }
    
  })

  handleChange = event =>{
      const { value , name } = event.target;
      this.setState({
          [name] : value
      })
  }


  render() {
    return (
      <div className="sign-up ">
        <h4>I dont have an account</h4>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>

        <div className="input-field">
            <input
              id="displayName"
              className="validate"
              name="displayName"
              type="text"
              value={this.state.displayName}
              onChange={this.handleChange}
            />
            <label for="displayName">Name</label>
          </div>

          <div className="input-field">
            <input
              id="email"
              className="validate"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label for="email">Email</label>
          </div>

          <div className="input-field">
            <input
              className="validate"
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <label for="password">Password</label>
          </div>

          <div className="input-field">
            <input
              className="validate"
              id="comfirmPassword"
              name="comfirmPassword"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
            <label for="comfirmPassword">Confirm Password</label>
          </div>

          <button className="submit-button btn blue darken-3 waves-effect white-text">
            <i class="material-icons left">send</i>
            Submit
          </button>

          
        </form>
      </div>
    );
  }
}

export default SignUp;
