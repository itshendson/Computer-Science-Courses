# If n >= 1, then factorial n! = n(n-1)!
# By definition, if n = 0, then n! = 1
# We assume that n cannot be negative
# We can use recursion to perform a factorial

def fact(n):
    if n >= 1:
        return n * fact(n-1)
    elif n == 0:
        return 1

# Fibonaucci: add the previous to numbers to the list
# 1 1 2 3 5 8 ....
# n is a positive number greater than or equal to 3

def fib(n):
    if n >= 3:
        return fib(n - 2) + fib(n - 1)
    elif n >= 0 and n < 3:
        return 1