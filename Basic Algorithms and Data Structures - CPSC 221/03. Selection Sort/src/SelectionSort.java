import java.util.ArrayList;

public class SelectionSort {

    /**
     * You have a hand of cards. You want to sort the cards from smallest to largest.
     * Assume you won't get the same card twice.
     *
     * This algorithm will be slow because of the nested for loops O(n^2)
     */
    ArrayList<Integer> unsortedList = new ArrayList<Integer>();

    public static int[] selectionSort(int[] unsortedList) {
        int minValue;
        int minIndex;

        for (int i = 0; i < unsortedList.length; i++) {
            minValue = unsortedList[i];
            minIndex = i;

            for (int j = i; j < unsortedList.length; j++) {

                if (unsortedList[j] < minValue) {
                    minValue = unsortedList[j];
                    minIndex = j;
                }
            }

            if (minValue < unsortedList[i]) {
                int temp = unsortedList[i];
                unsortedList[i] = unsortedList[minIndex];
                unsortedList[minIndex] = temp;
            }
        }
        return unsortedList;
    }

}
