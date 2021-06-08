def has22(nums):
    k = 0

    while k < len(nums) - 1:
        for el in nums:
            first_el = nums[0 + k]
            second_el = nums[1 + k]
            k += 1

            if first_el == 2 and second_el == 2:
                return True
