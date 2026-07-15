# Exercise 7: Observer Pattern

## What is the Observer Pattern?
The Observer Pattern defines a **one-to-many dependency** between objects so that when one object (subject) changes state, all its dependents (observers) are notified and updated automatically.

## Scenario
A stock market monitor where multiple clients (MobileApp, WebApp) need to be notified in real time whenever a stock price changes.

## Classes
| File | Role |
|------|------|
| `Stock.java` | Subject interface — register, deregister, notify |
| `Observer.java` | Observer interface with `update()` |
| `StockMarket.java` | Concrete subject maintaining observer list |
| `MobileApp.java` | Concrete observer — mobile client |
| `WebApp.java` | Concrete observer — web client |
| `ObserverTest.java` | Test showing registration, notifications, and deregistration |

## How to Run
```bash
javac *.java
java ObserverTest
```

## Expected Output
```
[StockMarket] AAPL price updated to $180.5
[MobileApp - StockTracker] Alert: AAPL is now $180.5
[WebApp - InvestDash] Update: AAPL price changed to $180.5

[StockMarket] AAPL price updated to $178.25
[MobileApp - StockTracker] Alert: AAPL is now $178.25
[WebApp - InvestDash] Update: AAPL price changed to $178.25

Deregistering WebApp...

[StockMarket] AAPL price updated to $182.0
[MobileApp - StockTracker] Alert: AAPL is now $182.0
```

## Key Concepts
- Subject maintains a dynamic list of observers
- Observers can be added or removed at runtime
- Loose coupling — subject knows nothing about concrete observer types
