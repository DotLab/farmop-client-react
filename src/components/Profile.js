import React from 'react';
import {Link} from 'react-router-dom';
import TaskList from './TaskList';
import NotificationList from './NotificationList';

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
    const {firstName, lastName, level, pp, location, position, workYear, taskNumber, workingHours} = this.state;

    return <div class="Pt(40px) W(80%) Mx(30px) Miw(700px) C(white)">
      <div class="D(f) Jc(sb)">
        <div class="D(f)">
          <div class="D(f) Fxd(c) Jc(c) Ai(c) Bds(s) Bdrs(4px) Bdw(1px) Bdc(#ccc) Py(20px) Px(30px)">
            <i class="fas fa-user fa-8x"></i>
            <div class="Mt(20px) Fz(18px) Fw(600)">{pp} <span class="Fz(12px) C(#6a737c)">PP</span></div>
          </div>
          <div class="Mstart(40px)">
            <div class="Fz(28px) Fw(600)">{firstName} {lastName}</div>
            <div class="Fz(14px) badge badge-pill badge-secondary">L{level}</div>
          </div>
        </div>
        <div class="Mend(40px) ">
          <div class="D(f) Mb(20px)">
            <div class="">
              <div class="Fz(18px) Fw(b)">{taskNumber}</div>
              <div class="Fz(14px)">Tasks</div>
            </div>
            <div class="Mstart(20px)">
              <div class="Fz(18px) Fw(b)">{workingHours}</div>
              <div class="Fz(14px)">Hours</div>
            </div>
          </div>
          <div class="Fz(16px) My(4px)"><i class="Mend(6px) C(#6a737c) fas fa-map-marker-alt"></i> {location}</div>
          <div class="Fz(16px) My(4px)"><i class="Mend(6px) C(#6a737c) fas fa-history"></i> {position}, {workYear} years</div>
        </div>
      </div>

      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc(#b66b13) Fz(20px) C(#fedc63) "><i class="far fa-clone"></i> Current tasks</div>

      <div class="Mt(10px)">
        {currentTasks.map((task) => <TaskList key={task.title} level={task.level} title={task.title} loc={task.location} deadline={task.deadline}
          isCompleted={task.isCompleted} isDeferred={task.isDeferred} created={task.created} completed={task.completed} type="current"
          pp={task.pp}/>,
        )}


      </div>
    </div>;
  }
}
