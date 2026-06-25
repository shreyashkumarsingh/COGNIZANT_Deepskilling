/**
 * Sorting algorithms for Order arrays, sorted ascending by totalPrice.
 *
 * Bubble Sort — O(n^2) average/worst, O(n) best (already sorted)
 * Quick Sort  — O(n log n) average, O(n^2) worst (rare with good pivot choice)
 */
public class SortingAlgorithms {

    // ----------------------------------------------------------------
    // Bubble Sort
    // Repeatedly compares adjacent elements and swaps if out of order.
    // Simple but slow on large datasets.
    // ----------------------------------------------------------------
    public static void bubbleSort(Order[] orders) {
        int n = orders.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (orders[j].getTotalPrice() > orders[j + 1].getTotalPrice()) {
                    Order temp = orders[j];
                    orders[j] = orders[j + 1];
                    orders[j + 1] = temp;
                    swapped = true;
                }
            }
            // Early exit if no swaps occurred (already sorted)
            if (!swapped) break;
        }
    }

    // ----------------------------------------------------------------
    // Quick Sort
    // Picks a pivot, partitions around it, and recurses on each half.
    // Much faster in practice than Bubble Sort.
    // ----------------------------------------------------------------
    public static void quickSort(Order[] orders, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(orders, low, high);
            quickSort(orders, low, pivotIndex - 1);
            quickSort(orders, pivotIndex + 1, high);
        }
    }

    private static int partition(Order[] orders, int low, int high) {
        double pivot = orders[high].getTotalPrice();
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (orders[j].getTotalPrice() <= pivot) {
                i++;
                Order temp = orders[i];
                orders[i] = orders[j];
                orders[j] = temp;
            }
        }
        Order temp = orders[i + 1];
        orders[i + 1] = orders[high];
        orders[high] = temp;
        return i + 1;
    }

    // Helper: print an Order array
    public static void printOrders(Order[] orders) {
        for (Order o : orders) {
            System.out.println("  " + o);
        }
    }
}
