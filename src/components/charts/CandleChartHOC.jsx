
import React from 'react';
import Chart from './candleChart';
import { timeParse } from "d3-time-format";

const parseDate = timeParse("%Y-%m-%d");

export default class CandleChart extends React.Component {

  componentDidMount() {
    let data = Array.from(this.props.data).map((entry) => { return {...entry, date: parseDate(entry.date)}});
    this.setState({ data });
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>
    }
    return (
       <Chart type={"hybrid"} data={this.state.data} />
    )
  }
}

