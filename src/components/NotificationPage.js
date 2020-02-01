import React from 'react';
import NotificationList from './NotificationList';
import {INFO, DANGER} from './utils';

export default class NotificationPage extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;

    this.state = {
      notification: [1, 2],
    };
  }

  render() {
    const {notification} = this.state;

    return <div class="Mx(30px) Miw(500px)">
      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc($green-1) Fz(20px) C($green-3) "><i class="far fa-clone"></i> Unread notifications</div>
      <div class="Mt(10px)">
        {notification.map((task) => <NotificationList key={task} type={INFO} status="unread"/>)}
      </div>

      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc($blue-1) Fz(20px) C($blue-3)"><i class="far fa-clone"></i> Read notification</div>
      <div class="Mt(10px)">
        {notification.map((task) => <NotificationList key={task} type={DANGER} status="read"/>)}
      </div>
    </div>;
  }
}
