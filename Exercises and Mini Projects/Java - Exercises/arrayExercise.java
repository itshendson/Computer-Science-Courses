public class arrayExercise {

//    Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.
//    fix23([1, 2, 3]) → [1, 2, 0]
//    fix23([2, 3, 5]) → [2, 0, 5]
//    fix23([1, 2, 1]) → [1, 2, 1]
//    Lessons: Array have to be initialized with a specified length. Arrays can't expand/shrink. You will get an arrayoutofboundexception.
//    Also, you can't pass an array as a parameter to a method, it has to be in a reference variable form.
    public static int[] fix23(int[] nums) {
        Boolean two = false;
        int[] intArray = new int[3];

        for (int i = 0; i < 3; i++) {
            if (nums[i] == 2) {
                intArray[i] = nums[i];
                two = true;
            }
            else if (nums[i] == 3 && two) {
                intArray[i] = 0;
                two = false;
            }
            else {
                intArray[i] = nums[i];
                two = false;
            }
        }
        return intArray;
    }

    //Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.
    //start1([1, 2, 3], [1, 3]) → 2
    //start1([1, 2], []) → 1
    //Lesson: If a paramater being passed can be empty, you should FIRST check if the parameter is empty in the body or else you might get an arrayindexoutofboundsexception
    public static int start1(int[] a, int[] b) {
        int count = 0;

        if (a.length == 0) { // This line does an empty array check
            ; // This means if false, then do nothing
        } else if (a[0] == 1) {
            count++;
        }

        if (b.length == 0) {
            ;
        } else if (b[0] == 1) {
            count++;
        }

        return count;
    }



}
