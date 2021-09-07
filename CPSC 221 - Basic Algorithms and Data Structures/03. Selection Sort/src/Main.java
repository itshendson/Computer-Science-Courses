public class Main {

    public static void main(String[] args) {

        int[] myInput = {5, 3, 7};

        for (int el: SelectionSort.selectionSort(myInput)) {
            System.out.print(el + ", ");
        }
    }
}
