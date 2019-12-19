"use strict";
var selector = function (selector) { return document.querySelector(selector); };
var daysDiv = selector('.days');
var hoursDiv = selector('.hours');
var minutesDiv = selector('.minutes');
var secondsDiv = selector('.seconds');
var today = new Date();
var deadline = 'January 1 ' + (today.getFullYear() + 1) + " 00:00:00";
if (today.getMonth() == 0 && today.getDate() == 1) {
    deadline = 'January 1 ' + (today.getFullYear()) + " 00:00:00";
}
;
var timeLeft = function (endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date().toString());
    var count = {
        days: Math.floor(t / (1000 * 60 * 60 * 24)),
        hours: Math.floor((t / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((t / 1000 / 60) % 60),
        seconds: Math.floor((t / 1000) % 60)
    };
    return count;
};
var setClock = function (newyear) {
    setInterval(function () {
        var t = timeLeft(newyear);
        if (daysDiv && hoursDiv && minutesDiv && secondsDiv) {
            daysDiv.innerHTML = t.days.toString() + '<span> Days</span>';
            hoursDiv.innerHTML = t.hours.toString() + '<span> Hours</span>';
            minutesDiv.innerHTML = t.minutes.toString() + '<span> Minutes</span>';
            secondsDiv.innerHTML = t.seconds.toString() + '<span> Seconds</span>';
        }
    }, 1000);
};
setClock(deadline);
