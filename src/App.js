import React from 'react';
import {Switch} from 'react-router-dom';
import PropsRoute from './PropsRoute';
import axios from 'axios';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import TaskPage from './components/TaskPage';
import NotificationPage from './components/NotificationPage';
import TaskDetail from './components/TaskDetailPage';
import IssuePage from './components/IssuePage';

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
