import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null;

  componentDidMount() {
    //Tried_auth_subscription
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //Tried_this_is_google_user_object - this logs null when auth.signOut() is called
      console.log("auth state change", userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //Tried_onSnapshot_like_behaviour_subject_subscription
        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => console.log("state set with user from snapshot", this.state)
          );
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  //Tried_unsubscribe_from_auth_messaging_system
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
