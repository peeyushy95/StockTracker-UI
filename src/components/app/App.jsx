import styles from './AppStyle';
import React, {Component} from 'react';
import {Landing} from '../componentsInterface';
import {withStyles} from '@material-ui/core/styles';
import '../../../node_modules/toastr/build/toastr.min.css';
import {DEFAULT_CONSTANTS} from '../../config/configInterface';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AuthorizedRoute, Logout, BlockBreaker} from '../componentsInterface';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path={DEFAULT_CONSTANTS.ROUTES.LOGOUT}  component={Logout}/>
          <Route path={DEFAULT_CONSTANTS.ROUTES.BLOCK_BREAKER}  component={BlockBreaker}/>
          <Route path={DEFAULT_CONSTANTS.ROUTES.BASE}  render={ (routeProps) =>
            <React.Fragment>Bhaag Bc!!</React.Fragment>
          }/>
          <AuthorizedRoute
            path={DEFAULT_CONSTANTS.ROUTES.ROOT}
            loggedIn
            component={Landing}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.defaultProps = {};

App.propTypes = {};

export default withStyles(styles)(App);


