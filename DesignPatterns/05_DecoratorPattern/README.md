# Exercise 5: Decorator Pattern

## What is the Decorator Pattern?
The Decorator Pattern **dynamically adds behaviour** to an object without modifying its class, by wrapping it in decorator objects that share the same interface.

## Scenario
A notification system that can send alerts via Email, SMS, and Slack. Channels can be combined at runtime without creating a new subclass for every combination.

## Classes
| File | Role |
|------|------|
| `Notifier.java` | Component interface with `send()` |
| `EmailNotifier.java` | Concrete base component |
| `NotifierDecorator.java` | Abstract decorator holding a wrapped `Notifier` |
| `SMSNotifierDecorator.java` | Adds SMS notification on top of wrapped notifier |
| `SlackNotifierDecorator.java` | Adds Slack notification on top of wrapped notifier |
| `DecoratorTest.java` | Demonstrates Email, Email+SMS, and Email+SMS+Slack |

## How to Run
```bash
javac *.java
java DecoratorTest
```

## Expected Output
```
-- Email only --
Sending Email: Server is down!

-- Email + SMS --
Sending Email: Disk usage at 90%!
Sending SMS: Disk usage at 90%!

-- Email + SMS + Slack --
Sending Email: Critical: Database connection lost!
Sending SMS: Critical: Database connection lost!
Sending Slack message: Critical: Database connection lost!
```

## Key Concepts
- Decorators are stacked by wrapping one inside another
- Each decorator calls `super.send()` to trigger the inner notifier first
- New channels can be added without changing existing classes (Open/Closed Principle)
