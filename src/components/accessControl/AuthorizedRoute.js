/* global gapi */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Loader} from '../componentsInterface';
import {withRouter} from 'react-router';
import {Route, Redirect} from 'react-router-dom';
import {cookieHandler} from '../../helpers/helperInterface';
import {DEFAULT_CONSTANTS} from '../../config/configInterface';

export class AuthorizedRoute extends Component {

  constructor(props){
    super(props);
    this.state={
      signInProgress : true
    }
    this.onSignIn = this.onSignIn.bind(this);
  }
  render() {
    const {component: Component, loggedIn, ...rest} = this.props;

    if(this.state.signInProgress){
      return (<Loader />);
    }
    return (
      <Route {...rest}  render={props => {
        return cookieHandler.getCookie(DEFAULT_CONSTANTS.COOKIES_KEY.AUTH_TOKEN)
          ? <Component {...props} loggedIn />
          : <Redirect to={DEFAULT_CONSTANTS.ROUTES.BASE} />;
      }} />
    );
  };

  onSignIn(googleUser) {

    let userToken = googleUser.getAuthResponse().id_token;
    let emailId = googleUser.getBasicProfile().getEmail();
    let mailIds = ['2012ucp1687@mnit.ac.in', 'alankar63@gmail.com', 'peeyushy95@gmail.com', 'sukhbir.connecting@gmail.com',
      'stockstrackor@gmail.com', 'sanketjain1234@gmail.com'];
    if(mailIds.includes(emailId )) {
      cookieHandler.setCookie(DEFAULT_CONSTANTS.COOKIES_KEY.AUTH_TOKEN, userToken);
      cookieHandler.setCookie(DEFAULT_CONSTANTS.COOKIES_KEY.USER_EMAIL, emailId);
      this.setState({signInProgress: false});
    } else {
      this.props.history.push(DEFAULT_CONSTANTS.ROUTES.BASE);
    }
  }

  renderGoogleLoginButton = () => {
    let token = cookieHandler.getCookie(DEFAULT_CONSTANTS.COOKIES_KEY.AUTH_TOKEN);
    if(!token) {
      let that = this;
      gapi.load('auth2', function () {
        gapi.auth2.init({
          client_id: "841272997895-oivjovp70dd377t0gp4h0k91khsva0ue.apps.googleusercontent.com",
        }).then((auth2) => {
          auth2.signIn().then(that.onSignIn, (e) => {
            console.log(e);
          });
        });
      });
    } else{
      this.setState({signInProgress: false});
    }
  };

  componentDidMount(){
    this.renderGoogleLoginButton();
    //window.addEventListener('google-loaded',this.renderGoogleLoginButton);
  }
}

AuthorizedRoute.defaultProps = {};

AuthorizedRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default withRouter(AuthorizedRoute);
