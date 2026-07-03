# Exercise 5: Task Management System

## Scenario
A task manager using a singly linked list where tasks are frequently added and removed dynamically.

## Linked List Types
| Type | Structure | Extra Cost |
|------|-----------|------------|
| Singly Linked | Each node points to next | O(1) extra per node |
| Doubly Linked | Each node points to next AND prev | O(1) extra per node, faster backward traversal |

## Classes
| File | Role |
|------|------|
| `Task.java` | Node class — taskId, taskName, status, next pointer |
| `TaskLinkedList.java` | Singly linked list with add, search, traverse, delete |
| `TaskTest.java` | Demonstrates all operations |

## How to Run
```bash
javac *.java
java TaskTest
```

## Time Complexity Analysis
| Operation | Complexity | Reason |
|-----------|------------|--------|
| add (tail)| O(n)       | Must walk to the end |
| add (head)| O(1)       | Just update head pointer |
| search    | O(n)       | Linear scan |
| traverse  | O(n)       | Visit every node |
| delete    | O(n)       | Find + re-link predecessor |

## Linked List vs Array
| Feature | Array | Linked List |
|---------|-------|-------------|
| Index access | O(1) | O(n) |
| Insert at head | O(n) (shift) | O(1) |
| Delete middle | O(n) (shift) | O(n) (find) + O(1) (unlink) |
| Memory | Contiguous | Scattered (pointer overhead) |
| Size | Fixed or costly resize | Dynamic |

**Use a linked list** when the number of elements is unpredictable and insertions/deletions are frequent.
