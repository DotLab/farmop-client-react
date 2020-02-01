import React from 'react';
import {Link} from 'react-router-dom';
import {INFO, DANGER} from './utils';

export default class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;

    this.state = {
      title: 'Feed the poutry 2kg grains',
      location: '202',
      date: '3 hr ago',
    };
  }


  render() {
    const {title, location, created} = this.props;
    const {type, status} = this.props;
    const bgCol = status === 'unread' ? '#6fa1a0' : '#3f8994';
    const textCol = status === 'unread' ? '#b9e5d8' : '#7db3bd';

    return <div class="D(f) Ai(c) Jc(sb) Py(4px) Px(12px) Bdrs(8px) Mt(10px) Op(0.8):h" style={{backgroundColor: bgCol}}>
      <div class="D(f) Ai(c)">
        {type === INFO && <div class="H(fc) C(white)"><i class="fas fa-info-circle"></i></div>}
        {type === DANGER && <div class="H(fc) C($red-1)"><i class="fas fa-exclamation-triangle"></i></div>}
        <div class="Mstart(10px)">
          <div class="Lh(1.2) Fz(18px) C(white)">{title}</div>
          <div class="Lh(1.5) Fz(14px) C(white)"><span class="Mend(14px)" style={{color: textCol}}> {location}</span>{created}</div>
        </div>
      </div>
    </div>;
  }
}
