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
    // const {currentTasks, pastTasks} = this.state;
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


    return <div class="Mx(30px) Miw(500px)">
      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc($red-1) Fz(20px) C($red-3) "><i class="far fa-clone"></i> Current issues</div>
      <div class="Mt(10px)">
        {currentIssues.map((task) => <IssueList key={task} title={task.title} location={task.location} created={task.created} type="current"/>)}
      </div>

      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc($purple-1) Fz(20px) C($purple-3)"><i class="far fa-clone"></i> Past issues</div>
      <div class="Mt(10px)">
        {fixedIssues.map((task) => <IssueList key={task} title={task.title} location={task.location} created={task.created} type="past"/>)}
      </div>
    </div>;
  }
}
