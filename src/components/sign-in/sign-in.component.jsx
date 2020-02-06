import React, { Component } from "react";
import {
  provider,
  auth,
  firestore,
  firebase
} from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";


provider.setCustomParameters({ prompt: "select_account" });

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  signInWithGoogle = () => auth.signInWithPopup(provider);

  handleSubmit = async e => {
    e.preventDefault();
    const { email,password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password);
      
    } catch (error) {
      
    }
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  

  render() {
    return (
      <div className="sign-in">
        <h4>I already have an account</h4>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              id="emailin"
              className="validate"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label for="emailin">Email</label>
          </div>

          <div className="input-field">
            <input
              className="validate"
              id="passwordin"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <label for="passwordin">Password</label>
          </div>

          <button className="submit-button btn blue darken-3 waves-effect white-text">
            <i class="material-icons left">send</i>
            Submit
          </button>

          <button
            className="submit-button-google btn blue darken-3 waves-effect white-text"
            onClick={this.signInWithGoogle}
          >
            <i class="material-icons left">
              <img src="https://img.icons8.com/officexs/16/000000/google-logo.png" />
            </i>
            Signin with Google
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
