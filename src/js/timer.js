
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerId = null;
    this.selector = selector;
    this.targetDate = targetDate;
    this.Refs = {
      days: document.querySelector(
        `${this.selector} [data-value="days"]`),
      hours: document.querySelector(
        `${this.selector} [data-value="hours"]`),
      mins: document.querySelector(
        `${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    }
    
    this.start()
    
  };
  
  start() {
    this.timerId = setInterval(() => {
      const deltaTime = this.targetDate - Date.now();
      const time = this.getTimeComponents(deltaTime);
      this.Refs.days.textContent = time.days;
  
      this.Refs.hours.textContent = time.hours;
  
      this.Refs.mins.textContent = time.mins;
      
      this.Refs.secs.textContent = time.secs;
     }, 1000)
    }


  pad(value) {
    return String(value).padStart(2, '0');
  };

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
return { days, hours, mins, secs };
  }

};

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),

});