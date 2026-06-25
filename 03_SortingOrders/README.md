# Exercise 3: Sorting Customer Orders

## Scenario
Sorting customer orders by total price to prioritise high-value orders on an e-commerce platform.

## Classes
| File | Role |
|------|------|
| `Order.java` | Data model — orderId, customerName, totalPrice |
| `SortingAlgorithms.java` | Bubble Sort and Quick Sort implementations |
| `SortingTest.java` | Demonstrates both sorts on the same dataset |

## How to Run
```bash
javac *.java
java SortingTest
```

## Time Complexity Comparison
| Algorithm   | Best     | Average    | Worst   | Space  |
|-------------|----------|------------|---------|--------|
| Bubble Sort | O(n)     | O(n²)      | O(n²)   | O(1)   |
| Quick Sort  | O(n log n)| O(n log n) | O(n²)  | O(log n)|

## Why Quick Sort is Preferred
- **Bubble Sort** compares every adjacent pair repeatedly — impractical beyond a few hundred elements
- **Quick Sort** divides the problem in half each recursion, giving O(n log n) on average
- For 10,000 orders: Bubble Sort ~100,000,000 operations vs Quick Sort ~130,000 — over 700× faster
- Quick Sort's worst case (O(n²)) is avoided in practice by choosing a good pivot (e.g. median-of-three)
