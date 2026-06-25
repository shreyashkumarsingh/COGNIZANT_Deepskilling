# Exercise 3: Builder Pattern

## What is the Builder Pattern?
The Builder Pattern separates the **construction of a complex object** from its representation, allowing the same construction process to create different configurations.

## Scenario
Building a `Computer` object with multiple optional parts (CPU, RAM, Storage, GPU, OS) without needing a constructor with many parameters.

## Classes
| File | Role |
|------|------|
| `Computer.java` | Product class with a static nested `Builder` |
| `BuilderTest.java` | Test showing two different Computer configurations |

## How to Run
```bash
javac *.java
java BuilderTest
```

## Expected Output
```
Gaming PC:
Computer {
  CPU     = Intel Core i9-13900K
  RAM     = 32GB DDR5
  Storage = 2TB NVMe SSD
  GPU     = NVIDIA RTX 4090
  OS      = Windows 11
}

Office PC:
Computer {
  CPU     = Intel Core i5-13400
  RAM     = 16GB DDR4
  Storage = 512GB SSD
  GPU     = N/A
  OS      = N/A
}
```

## Key Concepts
- **Private constructor** on `Computer` forces use of the Builder
- **Fluent interface** — each setter on Builder returns `this` for chaining
- **`build()`** finalizes and returns the `Computer` object
- Optional fields default to `null` gracefully
