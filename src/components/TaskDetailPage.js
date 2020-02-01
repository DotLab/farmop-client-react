import React from 'react';
import {Link} from 'react-router-dom';
import {ACCEPTED, NEW, COMPLETED, DEFERRED} from './utils';
import {formatDate} from '../utils';

export default class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;


    this.accept = this.accept.bind(this);
  }

  accept(e) {
    e.preventDefault();
    this.setState({status: ACCEPTED});
  }

  render() {
    const {type, title, level, pp, loc, isDeferred, created, completed, deadline} = this.props;
    const isCompleted = false;

    return <div class="Mx(20px) Py(30px) Px(20px) shadow Ov(a) Miw(500px) C(white) Bgc(#0b304a)">
      <div class="Fz(20px) Fw(600)">{title}</div>
      <span class="badge badge-pill badge-secondary">L{level}</span>
      <span class="badge badge-pill badge-secondary Bgc(#ffcc22) Mstart(10px)">{pp}pp</span>
      <span class="Mstart(20px) Fz(14px)">Create on {created}</span>
      <div class="Mt(10px) Fz(16px)">
        Check if there are any ill chicken in Area H8
      </div>
      <div class="D(f) Mt(20px)">

        <div class="">
          Location
          <div><i class="Mend(6px) fas fa-compass"></i> {loc}</div>
        </div>
        {isCompleted && <div class="Mstart(40px)"> Complete by
          <div><i class="fas fa-clock"></i> {formatDate(deadline)}</div>
        </div>}
        {!isCompleted && <div class="Mstart(40px)"> Completed by
          <div><i class="fas fa-clock"></i> {completed}</div>
        </div>}

      </div>
      {!isDeferred && <div class="Mt(20px) Fl(end)">
        <button onClick={this.accept} class="btn btn-outline-primary">Accept</button>
        <button class="btn btn-primary Mstart(20px)">Defer</button>
      </div>}

      {!isDeferred && type === 'Feeding' && <div class="Mt(20px) Fl(end)">
        <button class="btn btn-success">Completed</button>
        <button class="btn btn-primary Mstart(20px)">Defer</button>
      </div>}

      {!isDeferred && type === 'Fixing' && <div class="Mt(20px) Fl(end)">
        <button class="btn btn-warning C(white)">Need specialists</button>
        <button class="btn btn-success Mstart(20px)">Completed</button>
        <button class="btn btn-primary Mstart(20px)">Defer</button>
      </div>}

      <div class="Mt(150px)">
        <div class="card W(300px) Bgc(#0b304a) Bdc($blue-2)">
          <a href="https://www.youtube.com/watch?v=m9TORz8-KuM" class=""><img src="https://i.ytimg.com/vi/m9TORz8-KuM/maxresdefault.jpg" class="card-img-top" alt="..."/></a>
          <div class="P(12px)">
            <a href="https://www.youtube.com/watch?v=m9TORz8-KuM" class="Fw(600) C(white)">
          My Chicken Is Sick: 3 Practical Steps To Help It
            </a>
            <a href="https://www.youtube.com/channel/UCMAeSYIjnPm4xqdtxQju71A"> <div class="Mt(6px) Fz(16px) C(#e4d9c5) Fw(500)">Becky's Homestead</div></a>
          </div>
        </div>
      </div>
    </div>;
  }
}
