import {connect} from "react-redux";
import styles from './PriceGraphStyle';
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {Loader, LineChart, BarChart, WindowConsumer, CandleChart} from '../componentsInterface';
import {stockDetailDispatcher, dashboardDispatcher} from "../../actions/dispatcherInterface";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
class PriceGraph extends Component {

  constructor(props){
    super(props);

    this.state = {
      width: window.innerWidth,
      selectedStock: !this.props.isDialog ? props.match.params.name: this.props.stock,
      candleView: [{key:0, text:"candle chart", checked:false}]
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleChange = key => event => {
    let checkedArray = Array.from(this.state.candleView);
    checkedArray[0].checked = event.target.checked;
    this.setState({ candleView: checkedArray });
  };

  handleDropdownChange(event){
      this.setState({ [event.target.name]: event.target.value });
      if(!this.props.isDialog) {
        this.props.history.push('/stock/' + event.target.value);
      } else {
        this.props.setSelectedStock(event.target.value);
      }
  }

  render(){
    const {classes, stockInfo, stocksName} = this.props;
    return (
      <WindowConsumer>
        {({width, height}) =>
        <React.Fragment>
          {this.props.ajaxCallStatus.callsInProgress > 0 && <Loader info={this.props.ajaxCallStatus} />}
          { stockInfo.length > 0 &&
            <div>
              <div className={classes.paddinT}>
                <Grid container
                      spacing={8}
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      className={classes.formControl1}
                >
                  <Grid item>
                    <FormGroup row>
                      {
                        this.state.candleView.map( obj => (
                          <FormControlLabel
                            key={obj.key}
                            control={
                              <Switch
                                checked={obj.checked}
                                onChange={this.handleChange(obj.key)}
                                value="checkedA"
                              />
                            }
                            label={obj.text}
                          />
                        ))
                      }
                    </FormGroup>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.textTypography}>
                      Stock Price Graph
                    </Typography>
                  </Grid>
                  <Grid item>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-simple">Stock</InputLabel>
                      <Select
                        value={this.state.selectedStock}
                        onChange={this.handleDropdownChange}
                        inputProps={{
                          name: 'selectedStock',
                          id: 'age-simple',
                        }}
                      >
                        {
                          stocksName.map( (name) =>
                            (<MenuItem key={name} value={name}>{name}</MenuItem>)
                          )
                        }
                      </Select>
                    </FormControl>
                  </Grid>

                </Grid>
                {
                  !this.state.candleView[0].checked ?
                    <LineChart
                      data={stockInfo}
                      x={'date'}
                      y={'close'}
                      y1={'ema45'}
                      y2={'sellPrice'}
                      width={width}
                      height={height / 2}
                      stroke={'#ff0000'}
                      showCartesian
                    /> :
                    <CandleChart data={stockInfo}/>
                }
              </div>
              {
                !this.state.candleView[0].checked &&
                <div className={classes.paddinT}>
                  <Typography className={classes.textTypography}>
                    Volume Graph
                  </Typography>
                  <BarChart
                    data={stockInfo}
                    x={'date'}
                    y={'volume'}
                    width={width}
                    height={height / 5}
                  />
                </div>
              }
            </div>
          }
        </React.Fragment>}
      </WindowConsumer>
    );
  }


  componentDidUpdate(preProps, state){
    if(!this.props.isDialog) {
      if (this.props.location.pathname !== preProps.location.pathname) {
        this.fetchStockInfo();
      }
    } else {
      if (this.props.stock !== preProps.stock) {
        this.fetchStockInfo();
      }
    }
    return true;
  }

  componentWillUnmount(){
    this.props.actions.removeStocksDetail();
  }

  fetchStockInfo(){
    if(!this.props.isDialog) {
      let path = this.props.location.pathname.split('/');
      if (path.length === 3) {
        this.props.actions.fetchStockDetail(path[2]);
      }
    } else {
      this.props.actions.fetchStockDetail(this.props.stock);
    }
  }

  componentDidMount(){
    this.props.actions.fetchStocksList();
    this.fetchStockInfo();
  }
}

PriceGraph.defaultProps = {};

PriceGraph.propTypes = {};

const mapStateToProps = (state) => ({
  stockInfo: state.stockInfo,
  stocksName: state.stocksList.stockNames,
  ajaxCallStatus: state.ajaxCallStatus,
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(Object.assign({}, stockDetailDispatcher, dashboardDispatcher), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PriceGraph));


