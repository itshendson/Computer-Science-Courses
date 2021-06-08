"use strict";
var createTimerBtn = document.getElementById('create-timer-button');
createTimerBtn.addEventListener('click', createTimer);
var counter = 0;
var Timer = /** @class */ (function () {
    function Timer(id, parent) {
        var _this = this;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.id = id;
        this.button = document.createElement("button");
        this.button.innerText = "Show Id";
        parent.appendChild(this.button);
        this.button.addEventListener('click', function () { return _this.tick(); }); // use this syntax to bind this
    }
    Timer.prototype.tick = function () {
        var _this = this;
        // console.log(this);
        setInterval(function () {
            _this.seconds++;
            console.log(_this.id + ": " + _this.seconds);
        }, 1000);
    };
    return Timer;
}());
function createTimer() {
    new Timer(counter, document.body);
    counter++;
}
