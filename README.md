# Java Exercises Collection

This repository combines hands-on Java exercises covering both data structures and algorithms and design patterns and principles.

---

## Algorithms & Data Structures

| # | Exercise | Key Concept | Data Structure / Algorithm |
|---|----------|-------------|---------------------------|
| 01 | [Inventory Management](./01_InventoryManagement/) | CRUD operations | HashMap |
| 02 | [E-commerce Search](./02_EcommerceSearch/) | Big O Notation | Linear Search, Binary Search |
| 03 | [Sorting Customer Orders](./03_SortingOrders/) | Sorting Algorithms | Bubble Sort, Quick Sort |
| 04 | [Employee Management](./04_EmployeeManagement/) | Arrays in Memory | Array |
| 05 | [Task Management](./05_TaskManagement/) | Linked Lists | Singly Linked List |
| 06 | [Library Management](./06_LibraryManagement/) | Search Algorithms | Linear Search, Binary Search |
| 07 | [Financial Forecasting](./07_FinancialForecasting/) | Recursion & Memoization | Recursive Algorithm |

## Design Patterns & Principles

| # | Pattern | Category | Scenario |
|---|---------|----------|----------|
| 01 | [Singleton](./01_SingletonPattern/) | Creational | Logger with a single shared instance |
| 02 | [Factory Method](./02_FactoryMethodPattern/) | Creational | Document management (Word, PDF, Excel) |
| 03 | [Builder](./03_BuilderPattern/) | Creational | Computer with optional configuration parts |
| 04 | [Adapter](./04_AdapterPattern/) | Structural | Unified interface for multiple payment gateways |
| 05 | [Decorator](./05_DecoratorPattern/) | Structural | Multi-channel notification system |
| 06 | [Proxy](./06_ProxyPattern/) | Structural | Lazy-loading image viewer with caching |
| 07 | [Observer](./07_ObserverPattern/) | Behavioral | Stock market price alerts |
| 08 | [Strategy](./08_StrategyPattern/) | Behavioral | Swappable payment methods at runtime |
| 09 | [Command](./09_CommandPattern/) | Behavioral | Home automation remote control |
| 10 | [MVC](./10_MVCPattern/) | Architectural | Student records management app |
| 11 | [Dependency Injection](./11_DependencyInjection/) | Architectural | Customer service with injected repository |

---

## How to Run Any Exercise

Each exercise is self-contained. Navigate into the folder, compile all `.java` files, and run the test class:

```bash
cd 01_InventoryManagement
javac *.java
java InventoryTest
```

Replace the folder name and test class name as needed. Every folder has its own `README.md` with the exact commands and expected output.

---

## Requirements

- Java 8 or higher
- No external dependencies - pure Java

---

## Big O Quick Reference

| Complexity | Name | Example |
|------------|------|---------|
| O(1) | Constant | HashMap lookup |
| O(log n) | Logarithmic | Binary Search |
| O(n) | Linear | Linear Search, Array traversal |
| O(n log n) | Linearithmic | Quick Sort (avg), Merge Sort |
| O(n²) | Quadratic | Bubble Sort |

## Pattern Categories

### Creational
Deal with object creation mechanisms, aiming to create objects in a manner suitable to the situation.

### Structural
Deal with object composition, creating relationships between objects to form larger structures.

### Behavioral
Deal with communication between objects, defining how they interact and distribute responsibility.

### Architectural
High-level strategies for organising code at the application level.
