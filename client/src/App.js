import React, { useEffect, lazy, Suspense } from 'react';
// Routing
import { Switch, Route, Redirect } from 'react-router-dom';
// Base components
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import Footer from './components/footer/footer.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
// Redux
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// Redux config
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
// CSS in JS
import { GlobalStyle } from './global.styles';
import AppContainer from './components/app-container/app-container.styles';
// Page components
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

////////////////////////////////////////////////////////////////////////////////

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // Suspense allows for dynamic imports to be handled as promises
  return (
    <div>
      <Header />
      <AppContainer>
        <GlobalStyle />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </AppContainer>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
