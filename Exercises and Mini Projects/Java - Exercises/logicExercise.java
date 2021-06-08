public class logicExercise {


//    Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.
//    loneSum(1, 2, 3) → 6
//    loneSum(3, 2, 3) → 2
//    loneSum(3, 3, 3) → 0
    public static int loneSum(int a, int b, int c) {
        Boolean matchA = false;
        Boolean matchB = false;
        Boolean matchC = false;
        int sum = 0;

        if (a == b) {
            matchA = true;
            matchB = true;
        }

        if (a == c) {
            matchA = true;
            matchC = true;
        }

        if (b == c) {
            matchB = true;
            matchC = true;
        }

        if (!matchA) {
            sum += a;
        }
        if (!matchB) {
            sum += b;
        }
        if (!matchC) {
            sum += c;
        }
        return sum;
    }


//    Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive --
//    then that value counts as 0, except 15 and 16 do not count as a teens.
//    Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule.
//    In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().
//    noTeenSum(1, 2, 3) → 6
//    noTeenSum(2, 13, 1) → 3
//    noTeenSum(2, 1, 14) → 3
    public static int noTeenSum(int a, int b, int c) {
        int aa = 0;
        int bb = 0;
        int cc = 0;
        int result = 0;

        aa = fixTeen(a);
        bb = fixTeen(b);
        cc = fixTeen(c);

        return result = aa + bb + cc;
    }

    public static int fixTeen(int n) {
        //takes an int value and returns that value fixed for the teen rule
        if (n == 13 || n == 14 || n == 17 || n == 18 || n == 19) {
            return 0;
        } else {
            return n;
        }
    }


}
