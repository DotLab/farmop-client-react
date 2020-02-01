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
          <PropsRoute exact path="/taskid" component={TaskDetail} app={this} type="info" status="new" level="2" title="Check chicken sick" loc="385" date="2020-01-17" time="14:00" totalPP="12"/>


        </Switch>
      </div>
    </div>;
  }
}
