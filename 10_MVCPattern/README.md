# Exercise 10: MVC Pattern

## What is the MVC Pattern?
The MVC (Model-View-Controller) Pattern separates an application into three components: **Model** (data), **View** (display), and **Controller** (logic). This separation makes the code easier to maintain and test.

## Scenario
A student records web application where student data (Model) is displayed on screen (View) and managed through a controller that handles updates.

## Classes
| File | Role |
|------|------|
| `Student.java` | Model — holds student data (name, id, grade) |
| `StudentView.java` | View — displays student details |
| `StudentController.java` | Controller — mediates between Model and View |
| `MVCTest.java` | Main class demonstrating create, update, and display |

## How to Run
```bash
javac *.java
java MVCTest
```

## Expected Output
```
Initial Student Details:
----------------------
Student Details:
  Name  : Alice Johnson
  ID    : S101
  Grade : A
----------------------
Updated Student Details:
----------------------
Student Details:
  Name  : Alice Smith
  ID    : S101
  Grade : A+
----------------------
```

## Key Concepts
- **Model** is pure data — no display logic
- **View** is pure display — no business logic
- **Controller** connects them: reads from Model, updates Model, triggers View
