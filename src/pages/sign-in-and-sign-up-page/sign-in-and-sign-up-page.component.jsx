import React from "react";
import "./sign-in-and-sign-up-page.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up-page container">
      <div className="row">
        <div className="col m6">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default SignInAndSignUp;
