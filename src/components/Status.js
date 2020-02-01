import React from 'react';
import {Link} from 'react-router-dom';
import TaskList from './TaskList';
import NotificationList from './NotificationList';
import ReactEcharts from 'echarts-for-react';

function buildOption2(title) {
  return {
    title: {
      text: title,
      left: 'center',
    },
    width: '70%',
    tooltip: {},
    legend: {
      orient: 'vertical',
      right: -40,
      top: 40,
    },
    xAxis: {
      boundaryGap: false,
      data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
    },
    yAxis: [
      {
        name: 'Amp (A)',
        type: 'value',
      },
      {
        name: 'Flow (ft^3/minutes)',
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Fan Current',
        type: 'line',
        animation: false,
        areaStyle: {},
        lineStyle: {
          width: 1,
        },
        data: [5, 20, 36, 10, 10, 20],
      },
      {
        name: 'Ventilation',
        type: 'line',
        yAxisIndex: 1,
        animation: false,
        areaStyle: {},
        lineStyle: {
          width: 1,
        },
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
}

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;

    this.state = {
      firstName: 'John',
      lastName: 'Smith',
      level: 12,
      pp: 20901,
      location: 'Portland',
      position: 'Mentor',
      workYear: 10,
      taskNumber: '1k',
      workingHours: 3000,
    };
  }

  render() {
    const {firstName, lastName, level, pp, location, position, workYear, taskNumber, workingHours} = this.state;

    return <div class="Mx(30px)">
      <div className="D(f)">
        <div class="Mt(10px) W(25%)">
          <ReactEcharts theme='dark' option={buildOption2('Fan / Ventilation')} />
        </div>
        <div class="Mt(10px) W(25%)">
          <ReactEcharts theme='dark' option={buildOption2('Cooling')} />
        </div>
        <div class="Mt(10px) W(25%)">
          <ReactEcharts theme='dark' option={buildOption2('Heating')} />
        </div>
        <div class="Mt(10px) W(25%)">
          <ReactEcharts theme='dark' option={buildOption2('Temperature / Humidity')} />
        </div>
      </div>
      <div className="D(f)">
        <div class="Mt(10px) W(33%)">
          <ReactEcharts theme='dark' option={buildOption2('CO2 / Amonia')} />
        </div>
        <div class="Mt(10px) W(33%)">
          <ReactEcharts theme='dark' option={buildOption2('Inlet / Opening')} />
        </div>
        <div class="Mt(10px) W(33%)">
          <ReactEcharts theme='dark' option={buildOption2('Light / Intensity')} />
        </div>
      </div>
      <div className="D(f)">
        <div class="Mt(10px) W(33%)">
          <ReactEcharts theme='dark' option={buildOption2('Feed')} />
        </div>
        <div class="Mt(10px) W(33%)">
          <ReactEcharts theme='dark' option={buildOption2('Water')} />
        </div>
        <div class="Mt(10px) W(33%)">
          <ReactEcharts theme='dark' option={buildOption2('Weight')} />
        </div>
      </div>
    </div>;
  }
}
