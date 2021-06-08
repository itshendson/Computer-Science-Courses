def lone_sum(a, b, c):
    list_of_num = []

    if a != b and a != c:
        list_of_num.append(a)

    if b != a and b != c:
        list_of_num.append(b)

    if c != a and c != b:
        list_of_num.append(c)

    answer = sum(list_of_num)

    print(answer)