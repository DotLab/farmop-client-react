import React from 'react';
import NotificationList from './NotificationList';

export default class IssuePage extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;

    this.state = {
      currentIssues: [1, 2],
      pastIssues: [1, 2, 3],
    };
  }


  render() {
    const {currentIssues, pastIssues} = this.state;

    return <div class="Mstart(140px) W(80%)">
      <div class="Pt(40px) W(100) Bdbs(s) Fz(20px)">Current issues</div>
      <div class="Mt(10px)">
        {currentIssues.map((task) => <NotificationList key={task}/>)}
      </div>

      <div class="Pt(40px) W(100) Bdbs(s) Fz(20px)">Past issues</div>
      <div class="Mt(10px)">
        {pastIssues.map((task) => <NotificationList key={task}/>)}
      </div>
    </div>;
  }
}
