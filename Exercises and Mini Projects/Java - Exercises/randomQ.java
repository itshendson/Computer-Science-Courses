public class randomQ {


//    Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.
//    scoresIncreasing([1, 3, 4]) → true
//    scoresIncreasing([1, 3, 2]) → false
//    scoresIncreasing([1, 1, 2, 4, 3, 7]) → false
    public static boolean scoresIncreasing(int[] scores) {
        boolean condition = false;

        for (int i = 1; i < scores.length; i++) {
            if (scores[scores.length - i] >= scores[scores.length - i - 1]) {
                condition = true;
            } else {
                return false;
            }
        } return condition;
    }

//    Given an array of scores sorted in increasing order, return true if the array contains 3 adjacent scores that differ from each other by at most 2,
//    such as with {3, 4, 5} or {3, 5, 5}.
//    scoresClump([3, 4, 5]) → true
//    scoresClump([3, 4, 6]) → false
//    scoresClump([1, 3, 5, 5]) → true
    public static boolean scoresClump(int[] scores) {
        boolean differBy2 = false;

        for (int i = 0; i < scores.length - 1; i++) {
            for (int compareTo: scores) {
                if (scores[i] - compareTo <= 2) {
                    differBy2 = true;
                } else {
                    return false;
                }
            }
        }
        return differBy2;
    }

}
