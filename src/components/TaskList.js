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
    const bgCol = type === 'current' ? '#5a8d88' : '#3f8994';
    const textCol = type === 'current' ? '#b9e5d8' : '#7db3bd';

    return <div>
      <Link to="/taskid" class="Td(n):h D(f) Ai(c) Jc(sb) Py(4px) Px(12px) Bgc(#207561) Bdrs(8px) Mb(10px) Op(0.8):h" style={{backgroundColor: bgCol}}>
        <div class="D(f) Ai(c)">
          <div class="H(fc) badge badge-pill badge-secondary">L{level}</div>
          <div class="Mstart(10px)">
            <div class="Lh(1.2) Fz(18px) C(white)">{title}</div>
            <div class="Lh(1.5) Fz(14px) C(#ccc)"><span class="Mend(14px)" style={{color: textCol}}>Room {location}</span>{date}</div>
          </div>
        </div>
        <div class="Fl(end) D(f)">
          <div class="C(#fff467) Fw(600)" data-toggle="tooltip" title="performance"> {percentage}% </div>
          <div class="Mstart(20px) C(white) Fw(600)"> {totalPP}pp</div>
          <div class="Mstart(40px) C(#f0808c) Fw(600)"> {gainPP}pp</div>
        </div>
      </Link>
    </div>;
  }
}
