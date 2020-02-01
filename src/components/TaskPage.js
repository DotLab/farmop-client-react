import React from 'react';
import TaskList from './TaskList';

export default class TaskPage extends React.Component {
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
      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc(#406867) Fz(20px) C(#b9e5d8) "><i class="far fa-clone"></i> Current tasks</div>
      <div class="Bgc(#0b304a) Py(10px) Px(20px)">
        {currentTasks.map((task) => <TaskList key={task} type="current"/>)}
      </div>

      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc(#218690) Fz(20px) C(#58bdc7)"><i class="far fa-clone"></i> Past tasks</div>
      <div class="Bgc(#0b304a) Py(10px) Px(20px)">
        {pastTasks.map((task) => <TaskList key={task}/>)}
      </div>
    </div>;
  }
}
