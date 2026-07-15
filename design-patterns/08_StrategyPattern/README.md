# Exercise 8: Strategy Pattern

## What is the Strategy Pattern?
The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them **interchangeable at runtime** without changing the client code.

## Scenario
A payment system where the user can choose between Credit Card and PayPal at runtime. The payment method can be swapped without modifying the checkout logic.

## Classes
| File | Role |
|------|------|
| `PaymentStrategy.java` | Strategy interface with `pay()` |
| `CreditCardPayment.java` | Concrete strategy — Credit Card |
| `PayPalPayment.java` | Concrete strategy — PayPal |
| `PaymentContext.java` | Context that holds and executes the active strategy |
| `StrategyTest.java` | Test demonstrating runtime strategy switching |

## How to Run
```bash
javac *.java
java StrategyTest
```

## Expected Output
```
Paid $99.99 using Credit Card ending in 3456
Paid $49.99 via PayPal account: user@example.com
```

## Key Concepts
- Context delegates payment to whichever strategy is currently set
- New payment methods can be added without changing `PaymentContext`
- Follows the Open/Closed Principle — open for extension, closed for modification
