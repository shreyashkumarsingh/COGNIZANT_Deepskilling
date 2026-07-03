# Exercise 2: Factory Method Pattern

## What is the Factory Method Pattern?
The Factory Method Pattern defines an interface for creating objects but lets **subclasses decide which class to instantiate**. It promotes loose coupling by eliminating the need to hard-code class names.

## Scenario
A document management system that needs to create different types of documents (Word, PDF, Excel) without the client knowing the specific class being created.

## Classes
| File | Role |
|------|------|
| `Document.java` | Target interface with `open()` and `save()` |
| `WordDocument.java` | Concrete document — Word |
| `PdfDocument.java` | Concrete document — PDF |
| `ExcelDocument.java` | Concrete document — Excel |
| `DocumentFactory.java` | Abstract factory with `createDocument()` |
| `WordDocumentFactory.java` | Concrete factory for Word |
| `PdfDocumentFactory.java` | Concrete factory for PDF |
| `ExcelDocumentFactory.java` | Concrete factory for Excel |
| `FactoryMethodTest.java` | Test demonstrating document creation via factories |

## How to Run
```bash
javac *.java
java FactoryMethodTest
```

## Expected Output
```
Opening Word document...
Saving Word document...
Opening PDF document...
Saving PDF document...
Opening Excel document...
Saving Excel document...
```

## Key Concepts
- **Abstract factory** defines the creation method
- **Concrete factories** override it to return specific types
- Client code works with the `Document` interface — not concrete classes
