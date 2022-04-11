/**
 * Task: Console.log from 0 to 5.
 * Notice that it just prints 6 repeatedly. This happens because the for loop completes its iterations and reaches 6 before the asynchronous setTimeout() function is even added to the callstack and executed. 
 */
let countToFive = () => {
    for (var i = 0; i < 6; i++) {
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
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}

// countToFiveUsingLet();

/**
 * Fix 2: Implement a closure to remember what the i value is for each loop
 * let creates a block scope for EVERY i iteration. Hence setTimeout() has a different i variable every block
 */
 let countToFiveUsingClosure = () => {
    
    for (let i = 0; i < 6; i++) {
        let close = () => {
            setTimeout(() => {
                console.log(i)
            }, i * 1000)
        }

        close();
    }
    
}

countToFiveUsingLet();