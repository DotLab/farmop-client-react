import React from 'react';
import {Switch} from 'react-router-dom';
import PropsRoute from './PropsRoute';
import axios from 'axios';

import Navbar from './components/Navbar';
import Status from './components/Status';
import Profile from './components/Profile';
import TaskPage from './components/TaskPage';
import NotificationPage from './components/NotificationPage';
import TaskDetail from './components/TaskDetailPage';
import IssuePage from './components/IssuePage';


import echarts from 'echarts';
(function(echarts) {
  const contrastColor = '#eee';
  const axisCommon = function() {
    return {
      axisLine: {
        lineStyle: {
          color: contrastColor,
        },
      },
      axisTick: {
        lineStyle: {
          color: contrastColor,
        },
      },
      axisLabel: {
        textStyle: {
          color: contrastColor,
        },
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#aaa',
        },
      },
      splitArea: {
        areaStyle: {
          color: contrastColor,
        },
      },
    };
  };

  const colorPalette = ['#dd6b66', '#759aa0', '#e69d87', '#8dc1a9', '#ea7e53', '#eedd78', '#73a373', '#73b9bc', '#7289ab', '#91ca8c', '#f49f42'];
  const theme = {
    color: colorPalette,
    // backgroundColor: '#333',
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: contrastColor,
        },
        crossStyle: {
          color: contrastColor,
        },
      },
    },
    legend: {
      textStyle: {
        color: contrastColor,
      },
    },
    textStyle: {
      color: contrastColor,
    },
    title: {
      textStyle: {
        color: contrastColor,
      },
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: contrastColor,
        },
      },
    },
    dataZoom: {
      textStyle: {
        color: contrastColor,
      },
    },
    timeline: {
      lineStyle: {
        color: contrastColor,
      },
      itemStyle: {
        normal: {
          color: colorPalette[1],
        },
      },
      label: {
        normal: {
          textStyle: {
            color: contrastColor,
          },
        },
      },
      controlStyle: {
        normal: {
          color: contrastColor,
          borderColor: contrastColor,
        },
      },
    },
    timeAxis: axisCommon(),
    logAxis: axisCommon(),
    valueAxis: axisCommon(),
    categoryAxis: axisCommon(),

    line: {
      symbol: 'circle',
    },
    graph: {
      color: colorPalette,
    },
    gauge: {
      title: {
        textStyle: {
          color: contrastColor,
        },
      },
    },
    candlestick: {
      itemStyle: {
        normal: {
          color: '#FD1050',
          color0: '#0CF49B',
          borderColor: '#FD1050',
          borderColor0: '#0CF49B',
        },
      },
    },
  };
  theme.categoryAxis.splitLine.show = false;
  echarts.registerTheme('dark', theme);
})(echarts);

const currentTasks = [
  {
    title: 'Distribute feed to Area H8',
    description: 'Distribute feed to Area H8 using the material from Feed Container E1.',
    level: 'Lv1',
    pp: '+5',
    location: 'Area H8',
    isCompleted: false,
    isDeferred: false,
    created: new Date(),
    completed: new Date(),
    deadline: new Date(),
  },
  {
    title: 'Check the abnormality in Fan #2 of Area H7',
    description: 'See if the abnormality can be easily fixed. If it cannot be fixed, please marked the task as Unresolved.',
    level: 'Lv2',
    pp: '+6',
    location: 'Area H7',
    isCompleted: false,
    isDeferred: false,
    created: new Date(),
    completed: new Date(),
    deadline: new Date(),
  },
];
const pastTasks = [
  {
    title: 'Clean enclosures in Area H6',
    level: 'Lv2',
    pp: '+6',
    location: 'Area H6',
    isCompleted: true,
    isDeferred: false,
    created: new Date(),
    completed: new Date(),
    deadline: new Date(),
  },
  {
    title: 'Clean enclosures in Area H8',
    level: 'Lv2',
    pp: '+6',
    location: 'Area H8',
    isCompleted: true,
    isDeferred: false,
    created: new Date(),
    completed: new Date(),
    deadline: new Date(),
  },
  {
    title: 'Clean enclosures in Area H9',
    level: 'Lv2',
    pp: '+6',
    location: 'Area H9',
    isCompleted: true,
    isDeferred: false,
    created: new Date(),
    completed: new Date(),
    deadline: new Date(),
  },
  {
    title: 'Restock enclosures with young birds in Area H6',
    level: 'Lv1',
    pp: '+3',
    location: 'Area H6',
    isCompleted: true,
    isDeferred: false,
    created: new Date(),
    completed: new Date(),
    deadline: new Date(),
  },
  {
    title: 'Restock enclosures with young birds in Area H8',
    level: 'Lv1',
    pp: '+3',
    location: 'Area H8',
    isCompleted: true,
    isDeferred: false,
    created: new Date(),
    completed: new Date(),
    deadline: new Date(),
  },
  {
    title: 'Restock enclosures with young birds in Area H9',
    level: 'Lv1',
    pp: '+3',
    location: 'Area H8',
    isCompleted: true,
    isDeferred: false,
    created: new Date(),
    completed: new Date(),
    deadline: new Date(),
  },
];

const unreadNotifications = [
  {
    title: 'Temperature rises 5 degrees in Area H3',
    location: 'Area H3',
    created: new Date(),
  },
  {
    title: 'Temperature rises 6 degrees in Area H6',
    location: 'Area H6',
    created: new Date(),
  },
  {
    title: 'Temperature rises 8 degrees in Area H7',
    location: 'Area H7',
    created: new Date(),
  },
  {
    title: 'CO2 level is too low in Area H8',
    location: 'Area H8',
    created: new Date(),
  },
  {
    title: 'Feed is potentially blocked in Feeder W3',
    location: 'Feeder W3',
    created: new Date(),
  },
  {
    title: 'Good morning',
    location: 'Control Center',
    created: new Date(),
  },
];
const readNotifications = [
  {
    title: 'Thanks for your good work today',
    location: 'Control Center',
    created: new Date(),
  },
  {
    title: 'Humidity falls 5% in Area H8',
    location: 'Area H8',
    created: new Date(),
  },
  {
    title: 'Humidity falls 5% in Area H6',
    location: 'Area H6',
    created: new Date(),
  },
  {
    title: 'Humidity falls 6% in Area H9',
    location: 'Area H9',
    created: new Date(),
  },
  {
    title: 'The Temperature rises 8 degrees in Area H7',
    location: 'Area H7',
    created: new Date(),
  },
  {
    title: 'Feed level too low in Feed Container W3',
    location: 'Feed Container W3',
    created: new Date(),
  },
  {
    title: 'Feed level too low in Feed Container W2',
    location: 'Feed Container W2',
    created: new Date(),
  },
];

const currentIssues = [
  {
    title: 'Light potentially broke in Area H8',
    location: 'Area H8',
    created: new Date(),
  },
];
const fixedIssues = [
  {
    title: 'Fan potentially broke in Feed Container W1',
    location: 'Feed Container W1',
    created: new Date(),
  },
];

const API_SUCCESS = 'SUCCESS';
const API_URL = 'http://localhost:3000';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.history = props.history;
  }

  render() {
    return <div>
      <PropsRoute path="/" component={Navbar} app={this}/>
      <div class="Mstart(90px) Pt(20px)">
        <Switch>
          <PropsRoute exact path="/" component={Status} app={this}/>
          <PropsRoute exact path="/profile" component={Profile} app={this}/>
          <PropsRoute exact path="/tasks" component={TaskPage} app={this}/>
          <PropsRoute exact path="/notification" component={NotificationPage} app={this}/>
          <PropsRoute exact path="/issues" component={IssuePage} app={this}/>
          <PropsRoute exact path="/taskid" component={TaskDetail} app={this}/>


        </Switch>
      </div>
    </div>;
  }
}
