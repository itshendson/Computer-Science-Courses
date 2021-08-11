# The purpose of this document is to review big o notation as it has been a while since I've touched them.

---

## Constant Time
- When the output doesn't scale with the input. Increasing input has no impact on output time or space wise
- Constant time is considered negligible as it is too small to matter. As n increases to infinity, constants are too negligible.
- Example: function func(arr) { console.log(100*1000) }
- Notice in the example as arr increases, output does NOT increase
- ***Denoted*** Big O(1)

## Linear Time
- When output increases proportionately to increases in input.
- ***Denoted*** Big O(n)