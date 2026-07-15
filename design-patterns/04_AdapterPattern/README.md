# Exercise 4: Adapter Pattern

## What is the Adapter Pattern?
The Adapter Pattern acts as a **bridge between incompatible interfaces**. It wraps an existing class with a new interface so it can work with code that expects a different interface.

## Scenario
A payment processing system integrating multiple third-party gateways (PayPal, Stripe), each with its own API, behind a unified `PaymentProcessor` interface.

## Classes
| File | Role |
|------|------|
| `PaymentProcessor.java` | Target interface expected by client code |
| `PayPalGateway.java` | Adaptee — third-party PayPal API |
| `StripeGateway.java` | Adaptee — third-party Stripe API |
| `PayPalAdapter.java` | Adapter wrapping PayPal to match `PaymentProcessor` |
| `StripeAdapter.java` | Adapter wrapping Stripe to match `PaymentProcessor` |
| `AdapterTest.java` | Test demonstrating unified payment processing |

## How to Run
```bash
javac *.java
java AdapterTest
```

## Expected Output
```
Processing $150.0 via PayPal.
Charging $250.0 through Stripe.
```

## Key Concepts
- Client only knows about `PaymentProcessor` — unaware of third-party APIs
- Adapters translate `processPayment()` calls to gateway-specific methods
- Easy to add new gateways by creating a new adapter — no client code changes
