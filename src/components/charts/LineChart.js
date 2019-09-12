import React, {Component} from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

class LineCharts extends Component {

  constructor(props){
    super(props);

    this.state = {
    }

  }

  render() {

    const {x, y, height, width, stroke, y1, y2, showCartesian, smallVariance} = this.props;
    let domain = ['dataMin - 2', 'dataMax + 2'];
    if(smallVariance){
      domain = ['auto', 'auto'];
    }
    return (
      <LineChart width={width} height={height} data={this.props.data}
                 margin={{top: 5, right: 10, left: 10, bottom: 0}}>
        <XAxis hide dataKey={x}/>
        <YAxis hide type="number" domain={domain} />
        { showCartesian && <CartesianGrid strokeDasharray="3 3"/>}
        <Tooltip/>
        <Line type="monotone" dataKey={y} stroke={stroke} />
        {
          y1 && <Line type="monotone" dataKey={y1} stroke="#00ff00"/>
        }
        {
          y2 && <Line type="monotone" dataKey={y2} stroke="#0000ff"/>
        }
      </LineChart>
    );
  }
}
export default LineCharts;
