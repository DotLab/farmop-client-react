import React from 'react';
import {Link} from 'react-router-dom';
import {INFO, DANGER, WAITING} from './utils';

export default class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;

    this.state = {
      type: INFO,
      title: 'Feed the poutry 2kg grains',
      location: '202',
      date: '3 hr ago',
      status: WAITING,
    };
  }


  render() {
    const {type, title, location, date, status} = this.state;

    return <div class="D(f) Ai(c) Jc(sb) Py(4px) Px(12px) bg-dark Bdrs(8px) Mt(10px) Op(0.8):h">
      <div class="D(f) Ai(c)">
        {type === INFO && <div class="H(fc) C(white)"><i class="fas fa-info-circle"></i></div>}
        {type === DANGER && <div class="H(fc) C(#ff0000)"><i class="fas fa-exclamation-triangle"></i></div>}
        <div class="Mstart(10px)">
          <div class="Lh(1.2) Fz(18px) C(white)">{title}</div>
          <div class="Lh(1.5) Fz(14px) C(#999)"><span class="Mend(14px) C(#eeaa00)">Room {location}</span>{date}</div>
        </div>
      </div>
      <div class="Fl(end) D(f)">
        <div class="C(#ffcc22) Fw(600)" data-toggle="tooltip" title="performance"> {status} </div>
      </div>
    </div>;
  }
}
