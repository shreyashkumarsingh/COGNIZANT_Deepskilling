/**
 * SearchAlgorithms provides linear and binary search on Product arrays.
 *
 * Linear Search  — O(n) — works on any (unsorted) array
 * Binary Search  — O(log n) — requires a sorted array
 */
public class SearchAlgorithms {

    /**
     * Linear search: scans every element until a match is found.
     * Best case:    O(1)  — target is first element
     * Average case: O(n/2) ~ O(n)
     * Worst case:   O(n)  — target is last or absent
     */
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.getProductId() == targetId) {
                return p;
            }
        }
        return null;
    }

    /**
     * Binary search: halves the search space each step.
     * Requires the array to be sorted by productId.
     * Best case:    O(1)     — target is the middle element
     * Average case: O(log n)
     * Worst case:   O(log n)
     */
    public static Product binarySearch(Product[] sortedProducts, int targetId) {
        int low = 0, high = sortedProducts.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            int midId = sortedProducts[mid].getProductId();

            if (midId == targetId) {
                return sortedProducts[mid];
            } else if (midId < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }
}
