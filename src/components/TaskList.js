import React from 'react';
import {Link} from 'react-router-dom';
import {formatDate} from '../utils';

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;
  }


  render() {
    const {type, title, level, pp, loc, isCompleted, isDeferred, created, completed, deadline} = this.props;
    const percentage = (pp / pp).toFixed(4) * 100;

    const bgCol = type === 'current' ? '#e5af2f' : '#917260';
    const textCol = type === 'current' ? '#fedc63' : '#e4d9c5';

    return <div>
      <Link to="/taskid" class="Td(n):h D(f) Ai(c) Jc(sb) Py(4px) Px(12px) Bgc(#207561) Bdrs(8px) Mb(10px) Op(0.8):h" style={{backgroundColor: bgCol}}>
        <div class="D(f) Ai(c)">
          <div class="H(fc) badge badge-pill badge-secondary">L{level}</div>
          <div class="Mstart(10px)">
            <div class="Lh(1.2) Fz(18px) C(white)">{title}</div>
            <div class="Lh(1.5) Fz(14px) C(#e4d9c5)"><span class="Mend(14px)" style={{color: textCol}}>Room {loc}</span>{formatDate(deadline)}</div>
          </div>
        </div>
        <div class="Fl(end) D(f)">
          <div class="C(#fff467) Fw(600)" data-toggle="tooltip" title="performance"> {percentage}% </div>
          <div class="Mstart(20px) C(white) Fw(600)"> {pp}pp</div>
          <div class="Mstart(40px) C(#f0808c) Fw(600)"> {pp}pp</div>
        </div>
      </Link>
    </div>;
  }
}
