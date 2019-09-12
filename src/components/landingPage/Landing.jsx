import PropTypes from 'prop-types';
import styles from './LandingStyle';
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Header, DashBoard, PriceGraph, WindowProvider} from '../componentsInterface';
import {Switch, Route, Redirect} from 'react-router-dom';
import {DEFAULT_CONSTANTS} from '../../config/configInterface';


class Landing extends Component {

  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    const {classes} = this.props;
    return (
      <WindowProvider>
          <div className={classes.heightFull} >
            <Header loggedIn/>
            <Switch>
              <Route exact path={DEFAULT_CONSTANTS.ROUTES.ROOT} component={DashBoard} />
              <Route path={DEFAULT_CONSTANTS.ROUTES.STOCK_DETAIL} component={PriceGraph} />
              <Redirect to={DEFAULT_CONSTANTS.ROUTES.BASE} />
            </Switch>
            <footer className={classes.alignFooter}>
            &copy; 2018, StocksTracker Inc. All rights reserved.
            </footer>
          </div>
      </WindowProvider>
    );
  }
}

Landing.defaultProps = {};

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
