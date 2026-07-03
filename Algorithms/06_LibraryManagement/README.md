# Exercise 6: Library Management System

## Scenario
Searching for books by title using linear and binary search in a library management system.

## Classes
| File | Role |
|------|------|
| `Book.java` | Data model — bookId, title, author |
| `LibrarySearch.java` | Linear and binary search by title |
| `LibraryTest.java` | Demonstrates both searches with hit and miss |

## How to Run
```bash
javac *.java
java LibraryTest
```

## Time Complexity Comparison
| Algorithm     | Best   | Average  | Worst    | Sorted Required |
|---------------|--------|----------|----------|----------------|
| Linear Search | O(1)   | O(n)     | O(n)     | No             |
| Binary Search | O(1)   | O(log n) | O(log n) | Yes            |

## When to Use Each
| Situation | Recommended |
|-----------|-------------|
| Small collection (< 100 books) | Either — difference is negligible |
| Unsorted or frequently updated catalogue | Linear Search |
| Large sorted catalogue, frequent lookups | Binary Search |
| One-time search on unsorted data | Linear (no sort cost) |
| Many repeated searches on stable data | Sort once → Binary Search every time |

## Key Insight
For 1,000,000 books: Linear = up to 1,000,000 comparisons; Binary = up to 20 comparisons.
