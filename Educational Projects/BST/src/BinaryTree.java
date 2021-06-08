import org.junit.Test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

// For this program, I tried to learn from the following:
// https://www.youtube.com/watch?v=M6lYob8STMI&t=484s&ab_channel=DerekBanas     :       Didn't like how it didn't use recursion
// https://www.baeldung.com/java-binary-tree        :       For the most part this was great but didn't like how the addNode methods not combined into one method
public class BinaryTree {

    Node root;

    //This method starts the recursion from the root node
    public void addNode(int value) {
        root = addNode(root, value);
    }

    // If Node left or right is null, add new Node
    // If the new node value is lesser -> leftChild
    // If the new node value is greater -> rightChild
    private Node addNode(Node current, int value) {
        if (current == null) {
            return new Node(value);
        }

        if (value < current.value) {
            current.leftChild = addNode(current.leftChild, value);
        } else if (value > current.value) {
            current.rightChild = addNode(current.rightChild, value);
        } else {
            // value already exists
            return current;
        }
        return current;
    }

    //creates a BST with prefilled values
    public BinaryTree createBST() {
        BinaryTree myBST = new BinaryTree();

        myBST.addNode(6);
        myBST.addNode(4);
        myBST.addNode(8);
        myBST.addNode(3);
        myBST.addNode(5);
        myBST.addNode(7);
        myBST.addNode(9);

        return myBST;
    }

    //Method that starts search operation from root
    public boolean containsNode(int value) {
        return searchTree(root, value);
    }

    //Method responsible for actually searching the tree
    private boolean searchTree(Node current, int value) {
        if (current == null) {
            System.out.println("Value not in BST");
            return false;
        }

        if (value == current.value) {
            System.out.println("Value is in BST");
            return true;
        }

        return value < current.value
                ? searchTree(current.leftChild, value)
                : searchTree(current.rightChild, value);
    }

    @Test
    public void testingNodes() {
        BinaryTree testBST = createBST();

        assertTrue(testBST.containsNode(6));
        assertTrue(testBST.containsNode(9));
        assertFalse(testBST.containsNode(1));
        testBST.addNode(1);
        assertTrue(testBST.containsNode(1));
    }

    //Delete Node
    //There are 3 scenarios depending on how many children the deleted node will have
    private Node deleteNode(Node current, int value) {
        if (current == null) {
            return null;
        }

        //THE part of the method that deletes a node
        if (value == current.value) {
            if (current.leftChild == null && current.rightChild == null) {
                return null;
            }

            //current node has one children
            if (current.leftChild == null && current.rightChild != null) {
                return current.rightChild;
            } else if (current.rightChild == null && current.leftChild != null) {
                return current.leftChild;
            }

            //current node has two children
            if (current.leftChild != null && current.rightChild != null) {
                int successor = current.findSuccessor(current);
                current.value = successor;
                current.rightChild = deleteNode(current.rightChild, successor);
                return current;
            }
        }

        if (value < current.value) {
            current.leftChild = deleteNode(current.leftChild, value);
        } else if (value > current.value) {
            current.rightChild = deleteNode(current.rightChild, value);
        } else {
            // value already exists
            return current;
        }
        return current;
    }

    //Method that starts the deleteNode process from the root
    private void deleteNode(int value) {
        root = deleteNode(root, value);
    }

    @Test
    public void deleteNodeTest() {
        BinaryTree testBT = createBST();

        //Test deleting node no children
        assertTrue(testBT.containsNode(9));
        testBT.deleteNode(9);
        assertFalse(testBT.containsNode(9));

        //Test deleting node two children
        assertTrue(testBT.containsNode(8));
        testBT.deleteNode(8);
        assertFalse(testBT.containsNode(8));
    }

}
