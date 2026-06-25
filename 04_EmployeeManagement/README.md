# Exercise 4: Employee Management System

## Scenario
Managing employee records using a fixed-size array, exploring memory layout and operation costs.

## How Arrays Work in Memory
Arrays store elements in **contiguous memory blocks**. This means:
- Index access is O(1) — the CPU computes the address directly: `base + (index × element_size)`
- Insertion at the end is O(1) (if space is available)
- Insertion/deletion in the middle is O(n) — elements must be shifted

## Classes
| File | Role |
|------|------|
| `Employee.java` | Data model — employeeId, name, position, salary |
| `EmployeeArray.java` | Fixed-capacity array with add, search, traverse, delete |
| `EmployeeTest.java` | Demonstrates all four operations |

## How to Run
```bash
javac *.java
java EmployeeTest
```

## Time Complexity Analysis
| Operation | Complexity | Reason |
|-----------|------------|--------|
| add       | O(1)       | Append to next free slot |
| search    | O(n)       | Linear scan — no sorting assumed |
| traverse  | O(n)       | Visit every element |
| delete    | O(n)       | Find + shift remaining elements |

## When to Use Arrays
✅ Fixed or predictable number of elements  
✅ Frequent index-based access  
✅ Memory-efficient (no pointer overhead)  
❌ Avoid when frequent insertions/deletions in the middle are needed (use LinkedList instead)  
❌ Avoid when size is unpredictable (use ArrayList which auto-resizes)
