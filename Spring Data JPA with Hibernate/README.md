# Spring Data JPA with Hibernate — Hands-On Exercises
Digital Nurture 5.0 | .NET Full Stack Engineer Track & Java Skilling

This module covers Object-Relational Mapping (ORM) fundamentals, Hibernate architecture and configuration (XML & Annotations), the comparison between JPA, Hibernate, and Spring Data JPA, DML operations, Query Methods, and Entity Relationships (`@ManyToOne`, `@OneToMany`, `@ManyToMany`).

---

## 📚 Theory & Architectural Concepts

### 1. What is ORM and Why Use It?
Object-Relational Mapping (ORM) is a technique for converting data between incompatible type systems in object-oriented programming languages and relational databases.
- **Benefits**:
  - Abstracts SQL queries into Java object operations.
  - Eliminates JDBC boilerplate code (Connections, Statements, ResultSets).
  - Provides transaction management, caching, and database independence.

### 2. Core Objects of Hibernate Framework
- **`SessionFactory`**: Thread-safe, immutable cache of compiled mappings for a single database.
- **`Session`**: Single-threaded, short-lived object representing a conversation between the application and database.
- **`Transaction`**: Single-threaded, short-lived object used by the application to specify atomic units of work.
- **`ConnectionProvider`**: Factory for JDBC connections.

### 3. XML Configuration vs. Annotation Configuration
- **XML Configuration**: Mappings are defined in `.hbm.xml` files and configured in `hibernate.cfg.xml`.
- **Annotation Configuration**: Uses JPA annotations (`@Entity`, `@Table`, `@Id`, `@Column`, `@GeneratedValue`, `@ManyToOne`, `@ManyToMany`) directly on domain classes.

### 4. Difference between JPA, Hibernate, and Spring Data JPA
- **JPA (Java Persistence API)**: A Java specification (JSR 338) defining standard persistence interfaces.
- **Hibernate**: An ORM framework that provides a concrete implementation of the JPA specification.
- **Spring Data JPA**: An abstraction layer built on top of JPA providers (like Hibernate) that eliminates DAO boilerplate using standard interface repository methods and dynamic query creation.

---

## 🛠️ Project Structure (`orm-learn`)

```
Spring Data JPA with Hibernate/
└── orm-learn/
    ├── pom.xml
    └── src/
        ├── main/
        │   ├── java/com/cognizant/ormlearn/
        │   │   ├── OrmLearnApplication.java           ← Application Entry & Test Runner
        │   │   ├── model/                             ← Domain Entities
        │   │   │   ├── Country.java
        │   │   │   ├── Stock.java
        │   │   │   ├── Department.java
        │   │   │   ├── Employee.java
        │   │   │   └── Skill.java
        │   │   ├── repository/                        ← Spring Data JPA Repositories
        │   │   │   ├── CountryRepository.java
        │   │   │   ├── StockRepository.java
        │   │   │   ├── DepartmentRepository.java
        │   │   │   ├── EmployeeRepository.java
        │   │   │   └── SkillRepository.java
        │   │   └── service/                           ← Business Service Layer
        │   │       ├── CountryService.java
        │   │       ├── StockService.java
        │   │       ├── DepartmentService.java
        │   │       ├── EmployeeService.java
        │   │       ├── SkillService.java
        │   │       └── exception/
        │   │           └── CountryNotFoundException.java
        │   └── resources/
        │       ├── application.properties
        │       ├── schema.sql
        │       └── data.sql
        └── test/
            └── java/com/cognizant/ormlearn/
                └── OrmLearnApplicationTests.java
```

---

## 🚀 Running the Application

To compile and run the Spring Data JPA application:

```bash
cd "Spring Data JPA with Hibernate/orm-learn"
mvn spring-boot:run
```

To run unit tests:

```bash
mvn test
```
