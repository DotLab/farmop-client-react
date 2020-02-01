import React from 'react';
import NotificationList from './NotificationList';
import {INFO, DANGER} from './utils';
import {formatTime} from '../utils';

export default class NotificationPage extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;

    this.state = {
      notification: [1, 2],
    };
  }

  render() {
    const unreadNotifications = [
      {
        title: 'Temperature rises 5 degrees in Area H3',
        location: 'Area H3',
        created: new Date(),
      },
      {
        title: 'Temperature rises 6 degrees in Area H6',
        location: 'Area H6',
        created: new Date(),
      },
      {
        title: 'Temperature rises 8 degrees in Area H7',
        location: 'Area H7',
        created: new Date(),
      },
      {
        title: 'CO2 level is too low in Area H8',
        location: 'Area H8',
        created: new Date(),
      },
      {
        title: 'Feed is potentially blocked in Feeder W3',
        location: 'Feeder W3',
        created: new Date(),
      },
      {
        title: 'Good morning',
        location: 'Control Center',
        created: new Date(),
      },
    ];
    const readNotifications = [
      {
        title: 'Thanks for your good work today',
        location: 'Control Center',
        created: new Date(),
      },
      {
        title: 'Humidity falls 5% in Area H8',
        location: 'Area H8',
        created: new Date(),
      },
      {
        title: 'Humidity falls 5% in Area H6',
        location: 'Area H6',
        created: new Date(),
      },
      {
        title: 'Humidity falls 6% in Area H9',
        location: 'Area H9',
        created: new Date(),
      },
      {
        title: 'The Temperature rises 8 degrees in Area H7',
        location: 'Area H7',
        created: new Date(),
      },
      {
        title: 'Feed level too low in Feed Container W3',
        location: 'Feed Container W3',
        created: new Date(),
      },
      {
        title: 'Feed level too low in Feed Container W2',
        location: 'Feed Container W2',
        created: new Date(),
      },
    ];


    return <div class="Mx(30px) Miw(500px)">
      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc($green-1) Fz(20px) C($green-3) "><i class="far fa-clone"></i> Unread notifications</div>
      <div class="Mt(10px)">
        {unreadNotifications.map((task) => <NotificationList key={task} title={task.title} created={formatTime(task.created)} type={INFO} status="unread"/>)}
      </div>

      <div class="Mt(30px) Py(8px) Px(20px) W(100%) Bgc($blue-1) Fz(20px) C($blue-3)"><i class="far fa-clone"></i> Read notification</div>
      <div class="Mt(10px)">
        {readNotifications.map((task) => <NotificationList key={task} title={task.title} created={formatTime(task.created)} type={INFO} status="read"/>)}
      </div>
    </div>;
  }
}
