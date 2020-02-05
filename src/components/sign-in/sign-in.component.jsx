import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
          email:'',
          password:''
      })
  }

  handleChange = (e) => {
      const {value,name } = e.target;
      this.setState({
          [name]:value
      })
  }

  render() {
    return (
      <div className="sign-in">
        <h4>I already have an account</h4>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
            id="email"
              className="validate"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
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
            required
          />
            <label for="password">Password</label>
          </div>

          <input className='btn grey waves-effect white-text' type='submit' value='Submit'/>
          

          
        </form>
      </div>
    );
  }
}

export default SignIn;
