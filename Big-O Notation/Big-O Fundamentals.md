# The purpose of this document is to review big o notation as it has been a while since I've touched them.

---

## Constant Time O(1)
- When the output doesn't scale with the input.
- As n increases to infinity, constants become negligible.
```
function constant(arr) {
	console.log(100*1000) 
}
```
- Notice in the example as arr increases, output does NOT increase
- ***Denoted*** Big O(1)

## Linear Time O(n)
- When output increases proportionately to increases in input.
```
function linear(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(i);
	}
}
```
- ***Denoted*** Big O(n)

## Squared O(n^2)
- Two nested for-loops
- Creates a 2D matrix where you can multiply length by height to get the area....which unsurprisingly leads to n^2
```
function square(n) {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			console.log(i, j);
		}
	}
}
```


## Cubed O(n^3)
- Three nested for-loops
```
function square(n) {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			for (let k = 0; k < 4; k++) {
				console.log(i, j, k);
			}
		}
	}
}
```


## O(log n)
When we recursively call ourselves. A BST is O(log n)
```
function logFunc(n) {
	if (n === 0) return;
	n = Math.floor(n/2);
	return logFunc(n);
}
```
If n = 8, then the output will be 3....because we will recursively call logFunc three times total. Each logFunc will divide n by 2, such that 8/2 = 4, 4/2 = 2, 2/2 = 1.
Notice that log base 2 of 8 is equaled to 3.

Another way to look at O(log n):
```
function logn(n) {
	while (n > 2) {
		n = Math.floor(n/2)
	}
}

If n = 8, output will be 3. Just like logFunc, we will run three iterations.
```

