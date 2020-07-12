export default class NotificationMessage {
  static active;
  message = null
  durationInSeconds = 2;
  type = "";
  duration = 2000;
  element =null;
  timerId = null;

  constructor(message,{duration = 2000,
    type = 'success',}={}){
    this.message=message;
    this.durationInSeconds=(duration/1000)+ 's';;
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
    this.element.remove();
    NotificationMessage.active=null;
  }
  show(parent = document.body) {
    console.log(`Before parent append - `, parent);
    parent.append(this.element);
    console.log(`After element append - `,this.element.outerHTML);
    console.log(`After parent append - ` ,parent.outerHTML);
    this.timerId = setTimeout(this.remove(),this.duration);
    clearTimeout(this.timerId);
    return this.element;
  }
  remove() {
  this.element.remove();
  this.element=null;
  NotificationMessage.active=null;

  }


};
