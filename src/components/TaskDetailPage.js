import React from 'react';
import {Link} from 'react-router-dom';
import {ACCEPTED, NEW, COMPLETED, DEFERRED} from './utils';

export default class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;

    this.state = {
      type: 'Feeding',
      status: NEW,
      level: 3,
      title: 'Feed the poutry 2kg grains',
      manager: 'Elise Miller',
      location: '202',
      date: '2019-06-01',
      time: '14:00',
      totalPP: 5,
      gainPP: 4,
    };

    this.accept = this.accept.bind(this);
  }

  accept(e) {
    e.preventDefault();
    this.setState({status: ACCEPTED});
  }

  render() {
    const {type, status, level, title, manager, location, date, time, totalPP} = this.state;

    return <div class="Mx(20px) Py(30px) Px(20px) shadow Ov(a) Miw(500px)">
      <div class="Fz(20px) Fw(600)">{title}</div>
      <span class="badge badge-pill badge-secondary">L{level}</span>
      <span class="badge badge-pill badge-secondary Bgc(#ffcc22) Mstart(10px)">{totalPP}pp</span>
      <span class="Mstart(20px) Fz(14px)">Create by <span class="Mstart(4px) Fw(600)">{manager}</span> on {date}</span>
      <div class="Mt(10px) Fz(16px)">
        Feed the poutry 2kg grains
      </div>
      <div class="D(f)">
        <div class="Mt(20px)"> Location
          <div><i class="Mend(6px) fas fa-compass"></i> {location}</div>
        </div>
        <div class="Mt(20px) Mstart(40px)"> To complete by
          <div><i class="fas fa-clock"></i> {time}</div>
        </div>

      </div>
      {status === NEW && <div class="Mt(20px) Fl(end)">
        <button onClick={this.accept} class="btn btn-outline-primary">Accept</button>
        <button class="btn btn-primary Mstart(20px)">Defer</button>
      </div>}

      {status !== NEW && type === 'Feeding' && <div class="Mt(20px) Fl(end)">
        <button class="btn btn-success">Completed</button>
        <button class="btn btn-primary Mstart(20px)">Defer</button>
      </div>}

      {status !== NEW && type === 'Fixing' && <div class="Mt(20px) Fl(end)">
        <button class="btn btn-warning C(white)">Need specialists</button>
        <button class="btn btn-success Mstart(20px)">Completed</button>
        <button class="btn btn-primary Mstart(20px)">Defer</button>
      </div>}
    </div>;
  }
}
