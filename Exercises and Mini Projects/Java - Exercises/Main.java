public class Main {

    public static void main(String[] args) {

        String s1 = stringExercise.parseString("<<>>", "word");
        System.out.println("Q1: " + s1);

        String s2 = stringExercise.makeTags("i", "word");
        System.out.println("Q2: " + s2);

        String s3 = stringExercise.withoutX2("xxwhy");
        System.out.println("Q3: " + s3);

        int[] a1Array = {1, 2, 3};
        int[] a1 = arrayExercise.fix23(a1Array);
        System.out.println("Q4: " + a1);

        int[] a2Array = {1, 2, 3};
        int[] a22Array = {1, 3};
        int a2 = arrayExercise.start1(a2Array, a22Array);
        System.out.println("Q5: " + a2);

        int l1 = logicExercise.loneSum(1, 2, 3);
        System.out.println("Q6: " + l1);

        int l2 = logicExercise.noTeenSum(2, 15, 2);
        System.out.println("Q7: " + l2);

        int s4 = stringExercise.countYZ("fez day");
        System.out.println("Q7: " + s4);

        int[] r1Array = {1, 3, 2};
        boolean r1 = randomQ.scoresIncreasing(r1Array);
        System.out.println("Q8: " + r1);

        int[] r2Array = {3, 4, 6};
        boolean r2 = randomQ.scoresClump(r2Array);
        System.out.println("Q9: " + r2);
    }
}

