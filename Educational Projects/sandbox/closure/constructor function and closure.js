// Counter = () => {
//     let count = 0;
//     this.incrementCounter = () => {
//         count++;
//         console.log(count)
//     }
//     this.decrementCounter = () => {
//         count--;
//         console.log(count)
//     }
// }

// var counterA = new Counter();
// counterA.incrementCounter();

function Counter() {
    var count = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.decrementCounter = function() {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.decrementCounter();