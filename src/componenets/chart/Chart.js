import './Chart.css';
import ChartBar from './ChartBar';
import React from 'react';

const Chart = props => {

    const dataPointsValues = props.datapoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {props.datapoints.map(datapoint =>
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={totalMaximum}
                    label={datapoint.label}
                />)}
        </div>
    )
}
export default Chart;