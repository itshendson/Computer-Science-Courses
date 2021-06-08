# Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). 
# Return 0 for no numbers.
#
# sum67([1, 2, 2]) → 5
# sum67([1, 2, 2, 6, 99, 99, 7]) → 5
# sum67([1, 1, 6, 7, 2]) → 4
# sum67([2, 7, 6, 2, 6, 7, 2, 7]) → 18

def sum67(nums):
    list_nums = []
    index_nums = 0


    while index_nums < len(nums):

        if nums[0 + index_nums] != 6:
            list_nums.append(nums[0 + index_nums])
            index_nums += 1

        elif nums[0 + index_nums] == 6:
            while nums[0 + index_nums] != 7:
                index_nums += 1
            index_nums += 1

    print(sum(list_nums))
    return sum(list_nums)
