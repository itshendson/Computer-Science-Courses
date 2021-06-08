import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        int[] unsortedArray = {2, 4, 3, 5, 1};

        ArrayList<Integer> myResult = InsertionSort.insertionSort(unsortedArray);
        int[] theSolution = InsertionSort.solution(unsortedArray);

        System.out.println("My Attempt:");
        for (int el: myResult) {
            System.out.print(el + " ");
        }
        System.out.println();

        System.out.println("Solution:");
        for (int el: theSolution) {
            System.out.print( el + " ");
        }
    }

}
