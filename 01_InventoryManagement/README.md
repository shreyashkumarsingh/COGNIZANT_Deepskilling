# Exercise 1: Inventory Management System

## Scenario
A warehouse inventory system requiring efficient add, update, delete, and search operations on product records.

## Why HashMap?
- **ArrayList** gives O(n) search/delete (must scan the list)
- **HashMap** gives O(1) average for all key-based operations — ideal when products are accessed by ID

## Classes
| File | Role |
|------|------|
| `Product.java` | Data model — productId, productName, quantity, price |
| `Inventory.java` | HashMap-backed store with add, update, delete, displayAll |
| `InventoryTest.java` | Demonstrates all operations |

## How to Run
```bash
javac *.java
java InventoryTest
```

## Time Complexity Analysis
| Operation | Data Structure | Complexity |
|-----------|---------------|------------|
| add       | HashMap       | O(1) avg   |
| update    | HashMap       | O(1) avg   |
| delete    | HashMap       | O(1) avg   |
| search    | HashMap       | O(1) avg   |
| display   | HashMap       | O(n)       |

## Optimisation Notes
- HashMap is already optimal for keyed access. For sorted output (e.g. by price), use a `TreeMap` — O(log n) per operation but always sorted.
- For concurrent warehouses, use `ConcurrentHashMap` to avoid race conditions.
