import React from 'react';
import PropTypes from 'prop-types';
import styles from './CircleLoaderStyles';
import List from '@material-ui/core/List';
import {CircleLoader, PropagateLoader} from 'react-spinners';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import {WindowConsumer} from '../../componentsInterface';


const Loader = ({info, classes}) => {

  const textRow = (text, index) => (
    <ListItem key={index}>
      <ListItemText primary={
        <Typography component="p" style={{color:'#FFFFFF', textAlign: 'center'}} >
          {text.msg}
        </Typography>}
      />
    </ListItem>
  );

  return (
    <WindowConsumer>
      {({width, height}) =>
        <React.Fragment>
          <div className={classes.loadingContainer}>
            <div className={classes.loadingCircle}>
              <CircleLoader
                color={'#01a4cc'}
                size={width/6}
              />
            </div>
            <div className={classes.colFlex}>
              <div className={classes.PropogandaLogo}>
                <PropagateLoader
                  className={classes.loadingLogo1}
                  color={'#01a4cc'}
                  size={width/80}
                />
              </div>
              <div className={classes.loadingData}>
                {
                  info && info.callInfo &&
                  <List>
                    {info.callInfo.map(textRow)}
                  </List>
                }
              </div>

            </div>

          </div>
        </React.Fragment>
      }
    </WindowConsumer>
  );
};

Loader.defaultProps = {};

Loader.propTypes = {
  info: PropTypes.shape({
    callInfo: PropTypes.array,
    numCallsInProgress: PropTypes.number
  }),
  classes: PropTypes.shape({
    loadingContainer: PropTypes.string.isRequired,
    loadingData: PropTypes.string.isRequired,
    loadingCircle: PropTypes.string.isRequired,
  })
};


export default withStyles(styles)(Loader);
