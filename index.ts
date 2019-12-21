interface CountDown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const selector = (selector: string): Element | null => document.querySelector(selector);

const daysDiv = selector('.days');
const hoursDiv = selector('.hours');
const minutesDiv = selector('.minutes');
const secondsDiv = selector('.seconds');

const today = new Date();
let deadline = 'January 1 ' + (today.getFullYear() + 1) + " 00:00:00";

if (today.getMonth() == 0 && today.getDate() == 1) {
    deadline = 'January 1 ' + (today.getFullYear()) + " 00:00:00";
};

const timeLeft = (endtime: string): CountDown => {
  const t = Date.parse(endtime) - Date.parse(new Date().toString());

  const count: CountDown = {
    days: Math.floor(t/(1000*60*60*24)),
    hours: Math.floor((t/(1000*60*60)) % 24),
    minutes: Math.floor((t/1000/60) % 60),
    seconds: Math.floor((t/1000) % 60)
  };

  return count;
};

const setClock = (newyear : string): void => {
    setInterval(() => {
      const t: CountDown = timeLeft(newyear);
  
      if (daysDiv && hoursDiv && minutesDiv && secondsDiv) {
        daysDiv.innerHTML = t.days.toString() + '<span> Days</span>';
        hoursDiv.innerHTML = t.hours.toString() + '<span> Hours</span>';
        minutesDiv.innerHTML = t.minutes.toString() + '<span> Minutes</span>';
        secondsDiv.innerHTML = t.seconds.toString() + '<span> Seconds</span>';
      }
  },1000);
};
    
setClock(deadline);

