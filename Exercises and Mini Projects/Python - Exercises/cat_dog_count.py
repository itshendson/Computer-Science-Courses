# Return True if the string "cat" and "dog" appear the same number of times in the given string.
#
#
# cat_dog('catdog') → True
# cat_dog('catcat') → False
# cat_dog('1cat1cadodog') → True

def cat_dog(str):
    un = 0
    deux = 0
    trois = 0
    k = 0
    cat_count = 0
    dog_count = 0

    while k < (len(str) - 2):
        first_letter = str[0 + un]
        second_letter = str[1 + deux]
        third_letter = str[2 + trois]

        word = first_letter + second_letter + third_letter

        un += 1
        deux += 1
        trois += 1
        k += 1

        if word == "cat":
            cat_count += 1
        elif word == "dog":
            dog_count += 1

    if cat_count == dog_count:
        return True
    else:
        return False
