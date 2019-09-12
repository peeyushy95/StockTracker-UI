import React from 'react';
import PropTypes from 'prop-types';
import styles from './LogoutStyle';
import {Link} from 'react-router-dom';
import {Header} from '../componentsInterface';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const LogoutPage = ({classes}) => (
  <React.Fragment>
    <Header />
    <Typography component="p" className={classes.textAlignment}>
      Thank you for using Stocks Tracker, Please click
      <Link to="/"> here</Link> to login back again.
    </Typography>
  </React.Fragment>
);

LogoutPage.defaultProps = {};

LogoutPage.propTypes = {
  classes: PropTypes.shape({
    textAlignment: PropTypes.string.isRequired,
  })
};

export default withStyles(styles)(LogoutPage);
