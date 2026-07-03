# Exercise 11: Dependency Injection

## What is Dependency Injection?
Dependency Injection (DI) is a design principle where an object **receives its dependencies from outside** rather than creating them itself. This promotes loose coupling and makes code easier to test and maintain.

## Scenario
A customer management application where `CustomerService` depends on `CustomerRepository`. The repository is injected via the constructor rather than instantiated inside the service.

## Classes
| File | Role |
|------|------|
| `CustomerRepository.java` | Interface with `findCustomerById()` |
| `CustomerRepositoryImpl.java` | Concrete repository with simulated data |
| `CustomerService.java` | Service that receives repository via constructor injection |
| `DependencyInjectionTest.java` | Main class wiring dependencies and testing the service |

## How to Run
```bash
javac *.java
java DependencyInjectionTest
```

## Expected Output
```
Customer [1]: Alice Johnson
Customer [2]: Bob Smith
Customer [99]: Customer not found
```

## Key Concepts
- **Constructor injection** — dependency passed at object creation time
- `CustomerService` depends on the `CustomerRepository` interface, not the implementation
- Easy to swap `CustomerRepositoryImpl` with a mock for unit testing
- Follows the **Dependency Inversion Principle** — high-level modules depend on abstractions
