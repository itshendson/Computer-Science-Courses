/**
 * Task: Console.log from 0 to 2.
 * Notice that the below function just prints 3 repeatedly. This happens because "var i" is a global variable. 
 * The for loop will complete its entire iteration and reach i = 3 long before setTimeout() completes and console.log is called.
 */
let countToFive = () => {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}

// countToFive();

/**
 * Fix 1: Use 'let' instead of 'var' in the for-loop.
 * let creates a block scope for EVERY i iteration. Hence setTimeout() has a different i variable every block
 */
 let countToFiveUsingLet = () => {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}

// countToFiveUsingLet();

/**
 * Fix 2: Implement a closure
 * Closure remembers the value that was initially passed to it. Hence each call of close() has the correct i value.
 */
 let countToFiveUsingClosure = () => {
    
    for (let i = 0; i < 3; i++) {
        let close = () => {
            setTimeout(() => {
                console.log(i)
            }, i * 1000)
        }

        close();
    }
    
}

countToFiveUsingLet();