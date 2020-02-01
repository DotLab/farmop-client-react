import React from 'react';
import {Link} from 'react-router-dom';

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;

    this.state = {
      level: 3,
      title: 'Feed the poutry 2kg grains',
      location: '202',
      date: '3 hr ago',
      totalPP: 5,
      gainPP: 4,
    };
  }


  render() {
    const {level, title, location, date, totalPP, gainPP} = this.state;
    const percentage = (gainPP / totalPP).toFixed(4) * 100;
    const {type} = this.props;
    const col = type === 'current' ? '6fa1a0' : '58bdc7';

    return <div>
      <Link to="/taskid" class="Td(n):h D(f) Ai(c) Jc(sb) Py(4px) Px(12px) Bgc(#207561) Bdrs(8px) Mt(10px) Op(0.8):h" style={{backgroundColor: col}}>
        <div class="D(f) Ai(c)">
          <div class="H(fc) badge badge-pill badge-secondary">L{level}</div>
          <div class="Mstart(10px)">
            <div class="Lh(1.2) Fz(18px) C(white)">{title}</div>
            <div class="Lh(1.5) Fz(14px) C(#999)"><span class="Mend(14px) C(#eeaa00)">Room {location}</span>{date}</div>
          </div>
        </div>
        <div class="Fl(end) D(f)">
          <div class="C(#ffcc22) Fw(600)" data-toggle="tooltip" title="performance"> {percentage}% </div>
          <div class="Mstart(20px) C(white) Fw(600)"> {totalPP}pp</div>
          <div class="Mstart(40px) C(#ff66ab) Fw(600)"> {gainPP}pp</div>
        </div>
      </Link>
    </div>;
  }
}
