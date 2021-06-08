public class Node {

    int value;
    Node leftChild;
    Node rightChild;

    Node(int value) {
        this.value = value;
        leftChild = null;
        rightChild = null;
    }

//    public String toString() {
//        return "The value of this Node is: " + value + ". Left Child: " + leftChild + ". Right Child: " + rightChild;
//    }

    //Sub-method of childrenCheck to find the successor node, which is by definition the smallest node in the right subtree.
    public int findSuccessor(Node root) {
        return root.leftChild == null
                ? root.value
                : findSuccessor(root.leftChild);
    }

}
