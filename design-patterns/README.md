# Java Design Patterns & Principles

A complete set of 11 hands-on exercises covering the most important design patterns and principles in Java.

---

## Exercises

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

Each exercise is self-contained. Navigate into the folder, compile all files, and run the test class:

```bash
cd 01_SingletonPattern
javac *.java
java SingletonTest
```

Replace the folder name and test class name as needed. Every folder has its own `README.md` with the exact commands and expected output.

---

## Requirements

- Java 8 or higher
- No external dependencies — pure Java

---

## Pattern Categories

### Creational
Deal with object creation mechanisms, aiming to create objects in a manner suitable to the situation.

### Structural
Deal with object composition, creating relationships between objects to form larger structures.

### Behavioral
Deal with communication between objects, defining how they interact and distribute responsibility.

### Architectural
High-level strategies for organising code at the application level.
