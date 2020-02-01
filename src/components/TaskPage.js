import React from 'react';
import TaskList from './TaskList';

export default class TaskPage extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;
  }


  render() {
    const currentTasks = [
      {
        title: 'Check chicken sick in Area H8',
        description: 'Check if there are any ill chicken in Area H8',
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


    return <div class="Mx(30px) Miw(500px)">
      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc(#b66b13) Fz(20px) C(#fedc63) "><i class="far fa-clone"></i> Current tasks</div>
      <div class="Mt(10px)">
        {currentTasks.map((task) => <TaskList key={task.title} level={task.level} title={task.title} loc={task.location} deadline={task.deadline}
          isCompleted={task.isCompleted} isDeferred={task.isDeferred} created={task.created} completed={task.completed} type="current"
          pp={task.pp}/>,
        )}


      </div>

      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc(#5a3a3f) Fz(20px) C(#e4d9c5)"><i class="far fa-clone"></i> Past tasks</div>
      <div class="Mt(10px)">
        {pastTasks.map((task) => <TaskList key={task.title} level={task.level} title={task.title} loc={task.location} deadline={task.deadline}
          isCompleted={task.isCompleted} isDeferred={task.isDeferred} created={task.created} completed={task.completed} type="past"
          pp={task.pp}/>,
        )}
      </div>
    </div>;
  }
}
