import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './DashboardStyle';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {withStyles} from '@material-ui/core/styles';
import {Loader, StocksGrid, MarketTrend, WindowConsumer, PriceGraph} from '../componentsInterface';
import {dashboardDispatcher} from '../../actions/dispatcherInterface';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

class DashBoardPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
      selectedStock: "",
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  setSelectedStock = (value) =>{
    this.setState({selectedStock: value});
  }

  transition(props) {
    return <Slide direction="up" {...props} />;
  }

  getPriceDialog(){
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.transition}
        >
          <AppBar className={this.props.classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={this.props.classes.flex}>
                {this.state.selectedStock}
              </Typography>
            </Toolbar>
          </AppBar>
          <PriceGraph
            isDialog
            setSelectedStock = {this.setSelectedStock}
            stock={this.state.selectedStock}/>
        </Dialog>
      </div>
    );
  }

  render() {
    let {stocksList} = this.props;
    return (
      <WindowConsumer>
        {({width, height}) =>
          <React.Fragment>
            {this.props.ajaxCallStatus.callsInProgress > 0 && <Loader info={this.props.ajaxCallStatus}/>}
            {stocksList.marketTrend.length > 0 && <MarketTrend width={width} data={stocksList.marketTrend}/>}
            <StocksGrid
              width={width}
              history={this.props.history}
              rowData={stocksList.bullStocks}
              limit={stocksList.bullStocks.length}
              openStockDialog={this.handleClickOpen}
              setSelectedStock = {this.setSelectedStock}
            />
            {this.getPriceDialog()}
          </React.Fragment>
        }
      </WindowConsumer>
    );
  }

  componentDidMount(){
    this.props.actions.fetchBullStocksList();
    this.props.actions.fetchMarketTrend();
  }

  componentWillUnmount(){
  }
}

DashBoardPage.defaultProps = {};

DashBoardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  stocksList: state.stocksList,
  ajaxCallStatus: state.ajaxCallStatus,
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(dashboardDispatcher, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DashBoardPage));
