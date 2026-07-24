import java.util.Arrays;

public class SortingTest {

    private static Order[] getSampleOrders() {
        return new Order[]{
            new Order(1, "Alice",   250.00),
            new Order(2, "Bob",     89.99),
            new Order(3, "Charlie", 540.50),
            new Order(4, "Diana",   120.00),
            new Order(5, "Eve",     310.75)
        };
    }

    public static void main(String[] args) {
        // --- Bubble Sort ---
        Order[] bubbleOrders = getSampleOrders();
        System.out.println("Before Bubble Sort:");
        SortingAlgorithms.printOrders(bubbleOrders);
        SortingAlgorithms.bubbleSort(bubbleOrders);
        System.out.println("\nAfter Bubble Sort (ascending by totalPrice):");
        SortingAlgorithms.printOrders(bubbleOrders);

        // --- Quick Sort ---
        Order[] quickOrders = getSampleOrders();
        System.out.println("\nBefore Quick Sort:");
        SortingAlgorithms.printOrders(quickOrders);
        SortingAlgorithms.quickSort(quickOrders, 0, quickOrders.length - 1);
        System.out.println("\nAfter Quick Sort (ascending by totalPrice):");
        SortingAlgorithms.printOrders(quickOrders);
    }
}
