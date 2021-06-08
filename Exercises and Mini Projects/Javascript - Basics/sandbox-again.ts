var timers = [];

//Class based objects ES6
class Timer {
    seconds: number;
    minutes: number;
    hours: number;
    id: string;

    constructor(id: string) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.id = id;
    }

    tick() {
        console.log('hi')
    }
}

const timerA = new Timer('1');
timerA.tick();

timers.push(timerA);
timers[0].tick();