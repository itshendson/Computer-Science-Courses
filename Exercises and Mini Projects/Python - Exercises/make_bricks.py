# We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return True if it is possible to make the goal by choosing from the given bricks.
# This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks
#
# make_bricks(3, 1, 8) → True
# make_bricks(3, 1, 9) → False
# make_bricks(3, 2, 10) → True

def make_bricks(small, big, goal):
    goal_count = goal
    big_count = big
    small_count = small
    answer = False

    while answer == False:

        if goal_count == 0:
            answer = True
            print("True")
            return answer

        elif goal_count >= 5 and big_count != 0:
            goal_count -= 5
            big_count -= 1

        elif goal_count > 0 and small_count != 0:
            goal_count -= 1
            small_count -= 1

        else:
            print("False")
            return False