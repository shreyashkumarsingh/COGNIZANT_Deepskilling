# Exercise 1: Singleton Pattern

## What is the Singleton Pattern?
The Singleton Pattern ensures a class has **only one instance** throughout the application lifecycle and provides a global point of access to it.

## Scenario
A `Logger` utility class that must share a single instance across the entire application to ensure consistent logging.

## Classes
| File | Role |
|------|------|
| `Logger.java` | Singleton class with private constructor and static `getInstance()` |
| `SingletonTest.java` | Test that verifies both references point to the same instance |

## How to Run
```bash
javac *.java
java SingletonTest
```

## Expected Output
```
[LOG] This is the first log message.
[LOG] This is the second log message.
Both logger1 and logger2 are the same instance. Singleton works!
```

## Key Concepts
- **Private constructor** prevents external instantiation
- **Static instance** holds the single object
- **`getInstance()`** creates the instance on first call, returns cached instance thereafter (lazy initialization)
