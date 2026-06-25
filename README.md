# Java Algorithms & Data Structures

A complete set of 7 hands-on exercises covering core data structures and algorithms in Java.

---

## Exercises

| # | Exercise | Key Concept | Data Structure / Algorithm |
|---|----------|-------------|---------------------------|
| 01 | [Inventory Management](./01_InventoryManagement/) | CRUD operations | HashMap |
| 02 | [E-commerce Search](./02_EcommerceSearch/) | Big O Notation | Linear Search, Binary Search |
| 03 | [Sorting Customer Orders](./03_SortingOrders/) | Sorting Algorithms | Bubble Sort, Quick Sort |
| 04 | [Employee Management](./04_EmployeeManagement/) | Arrays in Memory | Array |
| 05 | [Task Management](./05_TaskManagement/) | Linked Lists | Singly Linked List |
| 06 | [Library Management](./06_LibraryManagement/) | Search Algorithms | Linear Search, Binary Search |
| 07 | [Financial Forecasting](./07_FinancialForecasting/) | Recursion & Memoization | Recursive Algorithm |

---

## How to Run Any Exercise

Each exercise is self-contained. Navigate into the folder, compile all `.java` files, and run the test class:

```bash
cd 01_InventoryManagement
javac *.java
java InventoryTest
```

Each folder has a `README.md` with the exact commands and expected output.

---

## Requirements

- Java 8 or higher
- No external dependencies — pure Java

---

## Big O Quick Reference

| Complexity | Name | Example |
|------------|------|---------|
| O(1) | Constant | HashMap lookup |
| O(log n) | Logarithmic | Binary Search |
| O(n) | Linear | Linear Search, Array traversal |
| O(n log n) | Linearithmic | Quick Sort (avg), Merge Sort |
| O(n²) | Quadratic | Bubble Sort |
