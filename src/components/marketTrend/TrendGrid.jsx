import PropTypes from 'prop-types';
import styles from './TrendGridStyles';
import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {LineChart} from '../componentsInterface';

class TrendGrid extends Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    const {classes, data, width} = this.props;
    return (
        <Paper elevation={2} className={classes.baseClass}>
          <Grid container
                spacing={8}
                direction="column"
                justify="flex-start"
                alignItems="center"
                className={classes.formControl}
          >
            <Grid item>
              <Typography className={classes.textTypography}>
                Market Trend
              </Typography>
            </Grid>
            <Grid item>
              <LineChart
                data={data}
                x={'updated_at'}
                y={'ratio'}
                width={width - 10}
                height={70}
                smallVariance
              />
            </Grid>
          </Grid>
        </Paper>
    );
  }

}

TrendGrid.defaultProps = {};

TrendGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrendGrid);
