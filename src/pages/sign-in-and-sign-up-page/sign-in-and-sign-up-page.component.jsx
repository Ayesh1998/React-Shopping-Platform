import React from "react";
import "./sign-in-and-sign-up-page.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up-page container">
      <div className="row">
        <div className="col m5">
          <SignIn />
        </div>
        <div className="col m7 sign-up">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignInAndSignUp;
