# COGNIZANT Deepskilling — Java Exercises

A structured collection of Java exercises completed as part of the Cognizant Deepskilling programme, covering Algorithms & Data Structures, Design Patterns, PL/SQL, and Java Testing with JUnit, Mockito, and SLF4J.

---

## 📁 Repository Structure

```
COGNIZANT_Deepskilling/
├── Algorithms/
├── DesignPatterns/
├── PL_SQL/
└── JUnit, Mockito and SL4J/
    ├── JUnit_Basic Testing Exercises/
    ├── JUnit_Advanced Testing/
    ├── JUnit_Spring Test/
    ├── Mockito/
    ├── Mockito_Advanced/
    ├── Mockito_Mock Dependencies/
    └── SLF4J Logging/
```

---

## 📊 Module 1 — Algorithms & Data Structures

Hands-on exercises covering core data structures and algorithm fundamentals in plain Java.

| # | Exercise | Key Concept | Data Structure / Algorithm |
|---|----------|-------------|---------------------------|
| 01 | Inventory Management | CRUD operations | HashMap |
| 02 | E-commerce Search | Big O Notation | Linear Search, Binary Search |
| 03 | Sorting Customer Orders | Sorting Algorithms | Bubble Sort, Quick Sort |
| 04 | Employee Management | Arrays in Memory | Array |
| 05 | Task Management | Linked Lists | Singly Linked List |
| 06 | Library Management | Search Algorithms | Linear Search, Binary Search |
| 07 | Financial Forecasting | Recursion & Memoization | Recursive Algorithm |

**Run:**
```bash
cd Algorithms/01_InventoryManagement
javac *.java
java InventoryTest
```

### Big O Quick Reference

| Complexity | Name | Example |
|------------|------|---------|
| O(1) | Constant | HashMap lookup |
| O(log n) | Logarithmic | Binary Search |
| O(n) | Linear | Linear Search, Array traversal |
| O(n log n) | Linearithmic | Quick Sort (avg), Merge Sort |
| O(n²) | Quadratic | Bubble Sort |

---

## 🧩 Module 2 — Design Patterns & Principles

Practical implementation of GoF design patterns in Java.

| # | Pattern | Category | Scenario |
|---|---------|----------|----------|
| 01 | Singleton | Creational | Logger with a single shared instance |
| 02 | Factory Method | Creational | Document management (Word, PDF, Excel) |
| 03 | Builder | Creational | Computer with optional configuration parts |
| 04 | Adapter | Structural | Unified interface for multiple payment gateways |
| 05 | Decorator | Structural | Multi-channel notification system |
| 06 | Proxy | Structural | Lazy-loading image viewer with caching |
| 07 | Observer | Behavioral | Stock market price alerts |
| 08 | Strategy | Behavioral | Swappable payment methods at runtime |
| 09 | Command | Behavioral | Home automation remote control |
| 10 | MVC | Architectural | Student records management app |
| 11 | Dependency Injection | Architectural | Customer service with injected repository |

**Run:**
```bash
cd DesignPatterns/01_SingletonPattern
javac *.java
java SingletonTest
```

### Pattern Categories

| Category | Description |
|----------|-------------|
| **Creational** | Object creation mechanisms for flexibility and reuse |
| **Structural** | Object composition to form larger structures |
| **Behavioral** | Communication and responsibility between objects |
| **Architectural** | High-level application-level organisation strategies |

---

## 🗄️ Module 3 — PL/SQL

Hands-on Oracle PL/SQL exercises covering core database programming constructs.

| File | Topic |
|------|-------|
| `00_schema.sql` | Schema Setup |
| `01_sample_data.sql` | Sample Data Insertion |
| `02_exercise1_control_structures.sql` | IF/ELSE, LOOP, WHILE, FOR |
| `03_exercise2_error_handling.sql` | EXCEPTION blocks, SQLCODE, SQLERRM |
| `04_exercise3_stored_procedures.sql` | CREATE PROCEDURE, IN/OUT parameters |
| `05_exercise4_functions.sql` | CREATE FUNCTION, RETURN values |
| `06_exercise5_triggers.sql` | BEFORE/AFTER DML Triggers |
| `07_exercise6_cursors.sql` | Explicit Cursors, FETCH, LOOP |
| `08_exercise7_packages.sql` | PACKAGE SPEC & BODY |

**Run:** Execute scripts in order (00 → 08) in SQL*Plus or Oracle SQL Developer.

---

## 🧪 Module 4 — JUnit, Mockito & SLF4J

Seven Maven projects covering Java unit testing, mocking, Spring Boot testing, and logging.

### 4.1 JUnit Basic Testing Exercises

Introduces JUnit 5 fundamentals across four exercises.

| Exercise | Topic |
|----------|-------|
| Exercise-1-Setting-Up-JUnit | Maven + JUnit 5 project setup, first test |
| Exercise-2-Basic-JUnit-Tests | `assertEquals` on Calculator operations |
| Exercise-3-Assertions | All core assertion methods |
| Exercise-4-AAA-Pattern | `@BeforeEach`, `@AfterEach`, Arrange-Act-Assert |

```bash
cd "JUnit, Mockito and SL4J/JUnit_Basic Testing Exercises/Exercise-1-Setting-Up-JUnit"
mvn test
```

---

### 4.2 JUnit Advanced Testing

Advanced JUnit 5 features in a single Maven project.

| Exercise | Topic |
|----------|-------|
| Exercise-1-Parameterized-Tests | `@ParameterizedTest`, `@ValueSource` |
| Exercise-2-Test-Suites | `@Suite`, `@SelectClasses` |
| Exercise-3-Test-Execution-Order | `@TestMethodOrder`, `@Order` |
| Exercise-4-Exception-Testing | `assertThrows()` |
| Exercise-5-Timeout-Performance-Testing | `assertTimeout()` |

```bash
cd "JUnit, Mockito and SL4J/JUnit_Advanced Testing"
mvn test
```

---

### 4.3 Mockito

Core Mockito concepts — each exercise is a self-contained sub-project.

| Exercise | Topic |
|----------|-------|
| Exercise-1-Mocking-and-Stubbing | `mock()`, `when().thenReturn()` |
| Exercise-2-Verifying-Interactions | `verify()` |
| Exercise-3-Argument-Matching | `anyInt()`, `ArgumentMatchers` |
| Exercise-4-Handling-Void-Methods | `doNothing()` on void methods |
| Exercise-5-Multiple-Return-Values | Chained `thenReturn()` |
| Exercise-6-Verifying-Interaction-Order | `InOrder` |
| Exercise-7-Void-Methods-With-Exceptions | `doThrow()` |

```bash
cd "JUnit, Mockito and SL4J/Mockito"
mvn test
```

---

### 4.4 Mockito Advanced

Advanced Mockito patterns — mocking real-world dependencies.

| Exercise | Topic |
|----------|-------|
| Exercise-1-Mocking-Repository | Mock database repository layer |
| Exercise-2-Mocking-REST-API | Mock HTTP REST client |
| Exercise-3-Mocking-File-IO | Mock File Reader/Writer via interfaces |
| Exercise-4-Mocking-Network | Mock network connection |
| Exercise-5-Multiple-Return-Values | Consecutive return values |

```bash
cd "JUnit, Mockito and SL4J/Mockito_Advanced"
mvn test
```

---

### 4.5 JUnit Spring Test

Spring Boot testing with 9 exercises in a single Maven project (Spring Boot 3.2 + H2).

| Test Class | Topic |
|------------|-------|
| `CalculatorServiceTest` | `@SpringBootTest` + `@Autowired` |
| `UserServiceTest` | `@Mock` + `@InjectMocks` |
| `UserControllerTest` | `@WebMvcTest` + `MockMvc` GET |
| `IntegrationTest` | `@AutoConfigureMockMvc` integration test |
| `CreateUserControllerTest` | `MockMvc` POST + `ObjectMapper` |
| `UserServiceExceptionTest` | `assertNull` on empty `Optional` |
| `RepositoryTest` | `@DataJpaTest` + H2 |
| `GlobalExceptionHandlerTest` | `@ControllerAdvice` 404 response |
| `ParameterizedCalculatorTest` | `@CsvSource` parameterized test |

```bash
cd "JUnit, Mockito and SL4J/JUnit_Spring Test"
mvn test
```

---

### 4.6 Mockito Mock Dependencies

Spring Boot project demonstrating three key Mockito integration strategies.

| Test Class | Topic |
|------------|-------|
| `UserControllerTest` | `@WebMvcTest` + `@MockBean` on service |
| `UserServiceTest` | `@Mock` + `@InjectMocks` on repository |
| `UserIntegrationTest` | `@SpringBootTest` + `@MockBean` |

```bash
cd "JUnit, Mockito and SL4J/Mockito_Mock Dependencies"
mvn test
```

---

### 4.7 SLF4J Logging

Standalone Maven project using SLF4J 2.0 + Logback 1.5.

| Class | Topic |
|-------|-------|
| `LoggingExample` | `logger.error()` and `logger.warn()` |
| `ParameterizedLogging` | `{}` placeholder substitution |
| `AppenderLogging` | Console + File appenders via `logback.xml` |

```bash
cd "JUnit, Mockito and SL4J/SLF4J Logging"
mvn compile exec:java
```

> To switch exercises, update `<mainClass>` in `pom.xml`.

---

## ⚙️ Tech Stack

| Technology | Version |
|------------|---------|
| Java | 17 |
| Maven | 3.x |
| JUnit Jupiter | 5.10.2 |
| Mockito | 5.12.0 |
| Spring Boot | 3.2.5 |
| H2 Database | Runtime |
| SLF4J API | 2.0.13 |
| Logback Classic | 1.5.6 |

---

## 🚀 Getting Started

**Prerequisites:** Java 17+, Maven 3.x installed.

```bash
# Clone the repo
git clone https://github.com/shreyashkumarsingh/COGNIZANT_Deepskilling.git

# Run any plain Java exercise
cd Algorithms/01_InventoryManagement
javac *.java && java InventoryTest

# Run any Maven-based test module
cd "JUnit, Mockito and SL4J/JUnit_Basic Testing Exercises/Exercise-1-Setting-Up-JUnit"
mvn test
```
