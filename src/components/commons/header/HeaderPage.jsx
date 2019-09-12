/* global gapi */
import styles from './HeaderStyle';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {withRouter} from 'react-router';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles/index';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {DEFAULT_CONSTANTS} from '../../../config/configInterface';
import {cookieHandler} from '../../../helpers/helperInterface';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
    };

    this.login = this.login.bind(this);

    this.logout = this.logout.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.routeToHome = this.routeToHome.bind(this);
    this.routeToBlockBreaker = this.routeToBlockBreaker.bind(this);
  }

  handleClose(event, checked) {
    this.setState({anchorEl: null});
  }

  handleMenu(event) {
    this.setState({anchorEl: event.currentTarget});
  };

  routeToHome(){
    this.props.history.push(DEFAULT_CONSTANTS.ROUTES.ROOT);
  }

  routeToBlockBreaker(){
    this.props.history.push(DEFAULT_CONSTANTS.ROUTES.BLOCK_BREAKER);
  }

  login(){
    this.props.history.push(DEFAULT_CONSTANTS.ROUTES.ROOT);
  }

  logout(){
    let that = this;
    gapi.load('auth2', function () {
      gapi.auth2.init({
        client_id: "841272997895-oivjovp70dd377t0gp4h0k91khsva0ue.apps.googleusercontent.com",
      }).then((auth2) => {
        auth2.signOut().then(function () {
          cookieHandler.removeUserInfoCookie();
          that.props.history.push(DEFAULT_CONSTANTS.ROUTES.LOGOUT);
        });
      });
    });
  }

  render() {
    const {classes, loggedIn} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);
    return (
        <AppBar position='static' style={{flex: 1}}>
          <Toolbar>
            <Typography variant="headline" component="h3" color="inherit" className={classes.flex} onClick={this.routeToHome}>
              Stocks Tracker
            </Typography>

            <Typography variant="headline" component="h3" color="inherit" className={classes.flex} onClick={this.routeToBlockBreaker}>
              Block Breaker
            </Typography>

            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={open}
                onClose={this.handleClose}
              >
                {!loggedIn && <MenuItem onClick={this.login}>Login</MenuItem>}
                {loggedIn && <MenuItem onClick={this.logout}>Logout</MenuItem>}
              </Menu>
            </div>

          </Toolbar>
        </AppBar>
    );
  }
}

Header.defaultProps = {};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Header));
