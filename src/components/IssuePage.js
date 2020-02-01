import React from 'react';
import TaskList from './TaskList';
import IssueList from './IssueList';

export default class IssuePage extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;

    this.state = {
      currentTasks: [1, 2],
      pastTasks: [1, 2, 3],
    };
  }


  render() {
    const {currentTasks, pastTasks} = this.state;

    return <div class="Mx(30px) Miw(500px)">
      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc($red-1) Fz(20px) C($red-3) "><i class="far fa-clone"></i> Current issues</div>
      <div class="Bgc(#0b304a) Pt(10px) Pb(6px) Px(10px)">
        {currentTasks.map((task) => <IssueList key={task} type="current"/>)}
      </div>

      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc($purple-1) Fz(20px) C($purple-3)"><i class="far fa-clone"></i> Past issues</div>
      <div class="Bgc(#0b304a) Pt(10px) Pb(6px) Px(10px)">
        {pastTasks.map((task) => <IssueList key={task} type="past"/>)}
      </div>
    </div>;
  }
}
