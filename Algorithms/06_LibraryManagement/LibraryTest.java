public class LibraryTest {
    public static void main(String[] args) {
        // Unsorted — for linear search
        Book[] books = {
            new Book(3, "The Great Gatsby",    "F. Scott Fitzgerald"),
            new Book(1, "Clean Code",          "Robert C. Martin"),
            new Book(5, "To Kill a Mockingbird","Harper Lee"),
            new Book(2, "Effective Java",      "Joshua Bloch"),
            new Book(4, "1984",                "George Orwell")
        };

        // Sorted alphabetically by title — for binary search
        Book[] sortedBooks = {
            new Book(4, "1984",                "George Orwell"),
            new Book(1, "Clean Code",          "Robert C. Martin"),
            new Book(2, "Effective Java",      "Joshua Bloch"),
            new Book(3, "The Great Gatsby",    "F. Scott Fitzgerald"),
            new Book(5, "To Kill a Mockingbird","Harper Lee")
        };

        // --- Linear Search ---
        System.out.println("=== Linear Search ===");
        String target = "Effective Java";
        Book result = LibrarySearch.linearSearchByTitle(books, target);
        System.out.println("Search '" + target + "': " + (result != null ? result : "Not found"));

        result = LibrarySearch.linearSearchByTitle(books, "Unknown Book");
        System.out.println("Search 'Unknown Book': " + (result != null ? result : "Not found"));

        // --- Binary Search ---
        System.out.println("\n=== Binary Search ===");
        result = LibrarySearch.binarySearchByTitle(sortedBooks, target);
        System.out.println("Search '" + target + "': " + (result != null ? result : "Not found"));

        result = LibrarySearch.binarySearchByTitle(sortedBooks, "Unknown Book");
        System.out.println("Search 'Unknown Book': " + (result != null ? result : "Not found"));
    }
}
