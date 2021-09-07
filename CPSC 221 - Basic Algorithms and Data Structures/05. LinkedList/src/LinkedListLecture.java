import java.util.Iterator;
import java.util.LinkedList;

public class LinkedListLecture {

    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList<>();
        int count =0;

        myLinkedList.add("The First Element");
        myLinkedList.add("The Second Element");
        myLinkedList.add(3);
        myLinkedList.add("The 4th Element");
        //myLinkedList.remove(2);
        //myLinkedList.clear();

        System.out.println(myLinkedList.getFirst());
        System.out.println(myLinkedList);
        System.out.print(myLinkedList.get(2));

        Iterator iterator = myLinkedList.iterator();
        while (iterator.hasNext()) {
            count++;
        }
        System.out.print("We've traversed " + count + " nodes.");
    }
}
