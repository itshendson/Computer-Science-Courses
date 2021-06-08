const createTimerBtn = document.getElementById('create-timer-button')!;

createTimerBtn.addEventListener('click', createTimer)

let counter: number = 0;

class Timer {
    seconds: number;
    minutes: number;
    hours: number;  
    id: number;
    button: HTMLButtonElement;

    constructor(id: number, parent: HTMLElement) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.id = id;
        this.button = document.createElement("button");
        this.button.innerText = "Show Id";
        parent.appendChild(this.button);
        this.button.addEventListener('click', () => this.tick()); // use this syntax to bind this
    }

    tick() {
        // console.log(this);
        setInterval(() => {
            this.seconds++
            console.log(`${this.id}: ${this.seconds}`)
        }, 1000)
    }
}

function createTimer() {
    new Timer(counter, document.body);
    counter++;
}