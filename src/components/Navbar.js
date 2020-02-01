import React from 'react';
import {Link} from 'react-router-dom';
import Agco from './Agco-logo.svg';
import {STATUS, PROFILE, TASK, NOTIFICATION, ISSUE} from './utils';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;
  }


  render() {
    return <div class="Pos(a) W(90px) H(100%) Fl(start) Bdends(s) Bdendw(1px) Bdendc(#0b304a)">
      <div class="D(f) Fxd(c) Jc(c) Ai(c)">
        <Link to="/" class="Td(n):h Py(30px) Cur(p)"><img class="W(50px) H(50px)" src={Agco} alt="logo"/></Link>
        <Link to="/" class="Td(n):h C(white):h Bgc(#0b304a):h Py(20px) W(100%) D(f) Fxd(c) Jc(c) Ai(c) Cur(p) C(#e7eff1)">
          <div class=""><i class="fas fa-thermometer-three-quarters"></i></div>
          <div class="Fz(14px)">Status</div>
        </Link>

        <Link to="/profile" class="Td(n):h C(white):h Bgc(#0b304a):h Py(20px) W(100%) D(f) Fxd(c) Jc(c) Ai(c) Cur(p) C(#e7eff1)">
          <div class=""><i class="fas fa-user"></i></div>
          <div class="Fz(14px)">Profile</div>
        </Link>

        <Link to="/tasks" class="Td(n):h C(white):h Bgc(#0b304a):h Py(20px) W(100%) D(f) Fxd(c) Jc(c) Ai(c) Cur(p) C(#e7eff1)">
          <div class=""><i class="fas fa-tasks"></i></div>
          <div class="Fz(14px)">Task</div>
        </Link>

        <Link to="/notification" class="Td(n):h C(white):h Bgc(#0b304a):h Py(20px) W(100%) D(f) Fxd(c) Jc(c) Ai(c) Cur(p) C(#e7eff1)">
          <div class=""><i class="fas fa-bell"></i></div>
          <div class="Fz(14px)">Notification</div>
        </Link>

        <Link to="/issues" class="Td(n):h C(white):h Bgc(#0b304a):h Py(20px) W(100%) D(f) Fxd(c) Jc(c) Ai(c) Cur(p) C(#e7eff1)">
          <div class=""><i class="fas fa-tools"></i></div>
          <div class="Fz(14px)">Issue</div>
        </Link>

      </div>

    </div>;
  }
}
