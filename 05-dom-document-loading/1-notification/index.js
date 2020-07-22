export default class NotificationMessage {
  static active;
  message = null
  durationInSeconds = null;
  type = "";
  duration = null;
  element =null;
  timerId = null;

  constructor(message,{duration = 2000,
    type = 'success'}={}){
    this.message=message;
    this.durationInSeconds= (duration / 1000)+ 's';
    this.duration=duration;
    this.type=type;

    if (NotificationMessage.active) {
      NotificationMessage.active.remove();
    }
    this.render();

  }
  render(){
    const element = document.createElement(`div`);
    element.innerHTML=`<div class="notification ${this.type}" style="--value:${this.durationInSeconds}">
      <div class="timer"></div>
      <div class="inner-wrapper">
        <div class="notification-header">Notification</div>
        <div class="notification-body">
          ${this.message}
        </div>
      </div>
    </div>`;
    this.element = element.firstElementChild;
    NotificationMessage.active = this.element;

  }
  destroy() {
    this.remove();
    NotificationMessage.active=null;
  }
  show(parent = document.body) {
    parent.append(this.element);
     setTimeout(()=>this.remove(),this.duration);
    //clearTimeout(this.timerId);
    return this.element;
  }
  remove(){
    this.element.remove();
    NotificationMessage.active = null;
  }


};
