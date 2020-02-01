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
      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc(#b66b13) Fz(20px) C(#fedc63) "><i class="far fa-clone"></i> Current tasks</div>
      <div class="Bgc(#0b304a) Pt(10px) Pb(6px) Px(10px)">
        {currentTasks.map((task) => <TaskList key={task} type="current"/>)}
      </div>

      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc(#5a3a3f) Fz(20px) C(#e4d9c5)"><i class="far fa-clone"></i> Past tasks</div>
      <div class="Bgc(#0b304a) Pt(10px) Pb(6px) Px(10px)">
        {pastTasks.map((task) => <TaskList key={task}/>)}
      </div>
    </div>;
  }
}
