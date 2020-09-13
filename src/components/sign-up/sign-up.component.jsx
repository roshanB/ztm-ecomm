import React from "react";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmedPassword, displayName } = this.state;

    if (password !== confirmedPassword) {
      alert("Passwords do not match");
      return false;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      ); // Tried_userAuth_returned - creating user account with firestore auth

      if (user) {
        await createUserProfileDocument(user, { displayName }); //Tried_add_user_doc_in_our_firestore_db

        //Tried_this_will_clear_form
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmedPassword: "",
        });
      }
    } catch (e) {
      console.log("Could not create user with firestore auth", e);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmedPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={this.handleChange}
            label="Confirmed Password"
            required
          ></FormInput>

          <CustomButton type="submit">SING UP</CustomButton>
          {/* Tried_custom_button_submit_will_trigger_from_onsubmit */}
        </form>
      </div>
    );
  }
}

export default SignUp;
