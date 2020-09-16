import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import Checkout from "./pages/checkout/checkout-component";

class App extends React.Component {
  /* Tried_using_dispatch_to_props
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }*/
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    //Tried_auth_subscription
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //Tried_this_is_google_user_object - this logs null when auth.signOut() is called
      console.log("auth state change", userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //Tried_onSnapshot_like_behaviour_subject_subscription
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });

          /* Tried_using_dispatch_to_props
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => console.log("state set with user from snapshot", this.state)
          );
          */
        });
      } else {
        setCurrentUser(null);
        /* Tried_using_dispatch_to_props
        this.setState({ currentUser: null }); */
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={(props) => {
              if (!this.props.currentUser) {
                return <SignInAndSignUpPage {...props} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

// Tried_mapDispatchToProps_map_state_passed_as_null
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
