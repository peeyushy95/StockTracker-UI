import React, {Component} from 'react'
import {BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

class BarCharts extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    const {x, y, height, width} = this.props;

    return (
      <BarChart width={width} height={height} data={this.props.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={x} />
      <YAxis type="number" domain={['dataMin', 'dataMax']}/>
      <Tooltip />
      <Bar dataKey={y} fill="#8884d8" />
      </BarChart>
    );
  }
}

export default BarCharts;
