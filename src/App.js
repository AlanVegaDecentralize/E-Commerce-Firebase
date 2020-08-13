import React from 'react';
// Routing
import { Switch, Route, Redirect } from 'react-router-dom';
// Base components
import Header from './components/header/header.component';
// Page components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
// Firebase
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from './firebase/firebase.utils';
// Redux
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// Redux config
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  // Google Auth allows for persistent sign in
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// Dispatch calls the action to change redux store
const mapDispatchToProps = (dispatch) => ({
  // setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  checkUserSession: () => [dispatch(checkUserSession())],
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
