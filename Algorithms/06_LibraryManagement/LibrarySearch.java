/**
 * Search algorithms for Book arrays, searching by title.
 *
 * Linear Search — O(n) — works on unsorted arrays
 * Binary Search — O(log n) — requires array sorted alphabetically by title
 */
public class LibrarySearch {

    // Linear search by title — O(n)
    public static Book linearSearchByTitle(Book[] books, String title) {
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                return book;
            }
        }
        return null;
    }

    // Binary search by title (array must be sorted alphabetically by title) — O(log n)
    public static Book binarySearchByTitle(Book[] sortedBooks, String title) {
        int low = 0, high = sortedBooks.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            int cmp = sortedBooks[mid].getTitle().compareToIgnoreCase(title);

            if (cmp == 0) {
                return sortedBooks[mid];
            } else if (cmp < 0) {
                low = mid + 1;  // target is in the right half
            } else {
                high = mid - 1; // target is in the left half
            }
        }
        return null;
    }
}
