# Exercise 2: E-commerce Platform Search Function

## Scenario
Optimising search on an e-commerce platform by comparing linear and binary search.

## Big O Notation
Big O describes how an algorithm's runtime grows relative to input size (n), focusing on the worst case. It lets us compare algorithms independent of hardware.

## Classes
| File | Role |
|------|------|
| `Product.java` | Data model — productId, productName, category |
| `SearchAlgorithms.java` | Linear search + binary search implementations |
| `SearchTest.java` | Demonstrates both searches with hit and miss cases |

## How to Run
```bash
javac *.java
java SearchTest
```

## Time Complexity Comparison
| Algorithm     | Best   | Average  | Worst    | Requires Sorted? |
|---------------|--------|----------|----------|-----------------|
| Linear Search | O(1)   | O(n)     | O(n)     | No              |
| Binary Search | O(1)   | O(log n) | O(log n) | Yes             |

## Which to Use?
- **Small or unsorted data** → Linear Search (no sorting overhead)
- **Large, sorted data** → Binary Search (dramatically faster; e.g. 1M items: 1M steps vs ~20 steps)
- **Very frequent searches** → Sort once upfront, then binary search every time
