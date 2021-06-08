# Return the number of times that the string "hi" appears anywhere in the given string.
#
# count_hi('abc hi ho') → 1
# count_hi('ABChi hi') → 2
# count_hi('hihi') → 2

def count_hi(str):
    k = 0
    i = 0
    n = 0
    is_hi = ""
    hi_count = 0

    while k < (len(str) - 1):
        first_letter = str[0 + i]
        second_letter = str[1 + n]
        is_hi = first_letter + second_letter
        i += 1
        n += 1
        k += 1
        if is_hi == "hi":
            hi_count += 1

    print(hi_count)



