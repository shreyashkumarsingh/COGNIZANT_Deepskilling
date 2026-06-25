public class SearchTest {
    public static void main(String[] args) {
        // Unsorted array for linear search
        Product[] products = {
            new Product(3, "Laptop",   "Electronics"),
            new Product(1, "T-Shirt",  "Clothing"),
            new Product(5, "Headphones","Electronics"),
            new Product(2, "Jeans",    "Clothing"),
            new Product(4, "Watch",    "Accessories")
        };

        // Sorted array (by productId) for binary search
        Product[] sortedProducts = {
            new Product(1, "T-Shirt",   "Clothing"),
            new Product(2, "Jeans",     "Clothing"),
            new Product(3, "Laptop",    "Electronics"),
            new Product(4, "Watch",     "Accessories"),
            new Product(5, "Headphones","Electronics")
        };

        // --- Linear Search ---
        System.out.println("=== Linear Search ===");
        int linearTarget = 4;
        Product result = SearchAlgorithms.linearSearch(products, linearTarget);
        System.out.println("Search for ID " + linearTarget + ": " +
                (result != null ? result : "Not found"));

        result = SearchAlgorithms.linearSearch(products, 99);
        System.out.println("Search for ID 99: " + (result != null ? result : "Not found"));

        // --- Binary Search ---
        System.out.println("\n=== Binary Search ===");
        int binaryTarget = 4;
        result = SearchAlgorithms.binarySearch(sortedProducts, binaryTarget);
        System.out.println("Search for ID " + binaryTarget + ": " +
                (result != null ? result : "Not found"));

        result = SearchAlgorithms.binarySearch(sortedProducts, 99);
        System.out.println("Search for ID 99: " + (result != null ? result : "Not found"));
    }
}
