import React from 'react';
import Notification from 'rc-notification';

class Notify {
  constructor() {
    this.key = 'rc-notify';
    this.notifyInstance = Notification.newInstance({
      key: this.key,
      style: {
        top: 30,
        left: '50%'
      }
    });
  }

  make(text, duration) {
    this.notifyInstance.notice({
      content: <p>{ text }</p>,
      duration
    });

    setTimeout(this.removeNotify(), duration);
  }

  removeNotify() {
    this.notifyInstance.removeNotice(this.key);
  }
}

export default new Notify();
