# Exercise 9: Command Pattern

## What is the Command Pattern?
The Command Pattern **encapsulates a request as an object**, allowing you to parameterize clients with different requests, queue operations, and support undoable actions.

## Scenario
A home automation system where a `RemoteControl` issues commands to turn lights on and off. The remote doesn't know about the light directly — it only knows about Command objects.

## Classes
| File | Role |
|------|------|
| `Command.java` | Command interface with `execute()` |
| `Light.java` | Receiver — has `turnOn()` and `turnOff()` methods |
| `LightOnCommand.java` | Concrete command — turns the light on |
| `LightOffCommand.java` | Concrete command — turns the light off |
| `RemoteControl.java` | Invoker — holds and fires a command |
| `CommandTest.java` | Test demonstrating commands on multiple lights |

## How to Run
```bash
javac *.java
java CommandTest
```

## Expected Output
```
Living Room light is ON.
Living Room light is OFF.
Bedroom light is ON.
Bedroom light is OFF.
```

## Key Concepts
- **Invoker** (`RemoteControl`) is decoupled from **Receiver** (`Light`)
- Commands can be stored, queued, or logged
- Easily extendable — add `UndoCommand`, `FanOnCommand`, etc. without changing the invoker
