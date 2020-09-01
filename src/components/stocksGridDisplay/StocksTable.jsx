import React, {Component} from 'react';
import styles from './StocksTableStyle';
import 'ag-grid/dist/styles/ag-grid.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-theme-material.css';
import {withStyles} from '@material-ui/core/styles';
import tableConfiguration from './TableConfiguration';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class StocksTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      name: 'hai',
      rowData: [],
      radioMapper: [
        {key: -1, text: "All", checked: false},
        {key: 5, text: "Baap Stock", checked: true},
        {key: 4, text: "Above EMA", checked: false},
        {key: 3, text: "ETF", checked: false},
        {key: 2, text: "Below EMA", checked: false},
        {key: 0, text: "John Cena", checked: false},
        {key: 1, text: "Sab bta de tumhe", checked: false},
      ],
      rowClassRules: {
        "baap-stock": function(params) {
          return params.data.flag === 5 ;
        },
        "above-ema": function(params) {
          return params.data.flag === 4 ;
        },
        "below-ema": function(params) {
          return params.data.flag === 2 ;
        }
      }
    };

    this.getDataSource = this.getDataSource.bind(this);
    this.onGridReady = this.onGridReady.bind(this);
    this.onRowSelected = this.onRowSelected.bind(this);
    tableConfiguration.cacheBlockSize = this.props.limit;
  }

  onRowSelected(event){
    if(event.node.isSelected()) {
      //this.props.history.push(`/stock/${event.node.data.symbol}`);
      this.props.setSelectedStock(event.node.data.symbol);
      this.props.openStockDialog(event.node.data.symbol);
      event.node.setSelected(false);
    }
  }

  getDataSource(count) {
    function MyDatasource(rowCount) {
      this.rowCount = rowCount;
    }
    let lastRow = -1;
    MyDatasource.prototype.getRows = (params) => {
      if(this.props.limit <= params.endRow) {
        lastRow = this.props.limit;
      }
      params.successCallback(this.props.rowData.slice(params.startRow, params.endRow), lastRow);
    };
    return new MyDatasource(count);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    //this.gridApi.setDatasource(this.getDataSource(this.props.limit));
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.gridApi) {
      if(this.state.rowData.length === 0) {
        this.gridApi.showNoRowsOverlay();
      } else {
        this.gridApi.hideOverlay();
      }
    }
    if (this.props.rowData !== prevProps.rowData) {
      this.setState({rowData: this.props.rowData.filter((x)=> x.flag === 5)});
    }
  }

  handleChange = key => event => {
    let checkedArray = Array.from(this.state.radioMapper);

    checkedArray.forEach((obj) => {
      if(obj.key === key){
        obj.checked = event.target.checked;
      }

      if(key === -1){
        obj.checked = event.target.checked;
      }
    });

    checkedArray[0].checked = checkedArray.every((obj) => {
      return obj.checked === true || obj.key === -1;
    });

    let flagArray = checkedArray.filter((obj) => obj.checked)
                    .map((obj) => obj.key)
                    .filter( value => value !== -1);
    this.setState({ radioMapper: checkedArray });
    let filteredData = this.props.rowData.filter( (row) => {
      return flagArray.includes(row.flag);
    });
    this.setState({rowData:filteredData});
  };


  render() {
    const {width, classes} = this.props;

    const len = tableConfiguration.columnDefs.length -1;
    tableConfiguration.columnDefs.forEach( (col) => {
      if(!col.width)
        col.width = Math.max(120,width/len);
    });
    return (
      <Paper elevation={2}>
        <Grid container
              spacing={8}
              direction="column"
              justify="flex-start"
              alignItems="center"
              className={classes.formControl}
        >
          <Grid item>
            <Typography className={classes.textTypography}>
              Stocks Dekho!!!
            </Typography>
          </Grid>
          <Grid item>
            <FormGroup row>
              {
                this.state.radioMapper.map( obj => (
                  <FormControlLabel key={obj.key}
                    control={
                      <Switch
                        checked={obj.checked}
                        onChange={this.handleChange(obj.key)}
                        value="checkedA"
                        classes={{
                          switchBase: classes['colorSwitchBase' + obj.key],
                          checked: classes.colorChecked,
                          bar: classes.colorBar,
                        }}
                      />
                    }
                    label={obj.text}
                  />
                ))
              }
              </FormGroup>
          </Grid>
          <Grid item  className="ag-theme-material" style={{width:width,height: '61vh'}}>
            <AgGridReact
              rowData={this.state.rowData}
              columnDefs={tableConfiguration.columnDefs}
              headerHeight={tableConfiguration.headerHeight}
              onGridReady={this.onGridReady}
              onRowSelected={this.onRowSelected}
              //rowClassRules={this.state.rowClassRules}
              rowSelection={"single"}
              overlayNoRowsTemplate={tableConfiguration.overlayNoRowsTemplate}
              enableColResize
              enableSorting
              enableFilter
              rowDeselection
              suppressDragLeaveHidesColumns
            >
            </AgGridReact>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

StocksTable.defaultProps = {};

StocksTable.propTypes = {};

export default withStyles(styles)(StocksTable);
