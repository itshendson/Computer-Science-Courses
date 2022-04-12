function Counter() {
    let count = 0;
    this.incrementCounter = () => {
        count++;
        console.log(count)
    }
    this.decrementCounter = () => {
        count--;
        console.log(count)
    }
}

var counterA = new Counter();
counterA.incrementCounter();
counterA.incrementCounter();
counterA.decrementCounter();

// function Counter() {
//     var count = 0;
//     this.incrementCounter = function() {
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function() {
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.decrementCounter();


// Special Notes:
// - Arrow functions CANNOT be used as constructors. They cannot be called with the new keyword and will throw an error indicating that the fuction is not a constructor. 