import React from 'react';
import NotificationList from './NotificationList';

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
      <div class="Pt(40px) W(100) Bdbs(s) Fz(20px)">Notifications</div>
      <div class="Mt(10px)">
        {notification.map((task) => <NotificationList key={task}/>)}
      </div>
    </div>;
  }
}
