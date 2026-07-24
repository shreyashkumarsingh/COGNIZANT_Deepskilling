# COGNIZANT Deepskilling — Full Stack & Software Engineering Exercises

A structured collection of hands-on exercises completed as part of the Cognizant Digital Nurture 5.0 Deepskilling Programme, covering Java Fundamentals, Algorithms, Design Patterns, PL/SQL, Spring Core, Spring Boot, Spring Data JPA, Spring REST, Spring Cloud Microservices, Angular (v20), React, Git, and Java Unit Testing with JUnit 5, Mockito, and SLF4J.

---

## 📁 Repository Structure

```
COGNIZANT_Deepskilling/
├── Angular/                           ← Angular (v20.0) Student Course Portal (10 Exercises)
│   └── student-course-portal/
├── Engineering concepts/             ← Data Structures, Algorithms & GoF Design Patterns
│   ├── Algorithms/                    ← 7 Core Algorithm Exercises
│   └── DesignPatterns/                ← 11 GoF Design Pattern Implementations
├── GIT/                               ← Git Client Configuration & Lab Exercises (Tasks 1-5)
│   └── GitDemo/
├── JUnit, Mockito and SL4J/           ← Java Testing & Mocking Suite (7 Maven Projects)
│   ├── JUnit_Basic Testing Exercises/
│   ├── JUnit_Advanced Testing/
│   ├── JUnit_Spring Test/
│   ├── Mockito/
│   ├── Mockito_Advanced/
│   ├── Mockito_Mock Dependencies/
│   └── SLF4J Logging/
├── Microservices/                     ← Spring Boot 3 & Spring Cloud Microservices Architecture
│   ├── eureka-discovery-server/       ← Netflix Eureka Service Registry (Port 8761)
│   ├── account/                       ← Account Microservice (Port 8080)
│   ├── loan/                          ← Loan Microservice (Port 8081)
│   ├── greet-service/                 ← Greet Microservice (Port 8083)
│   ├── api-gateway/                   ← Spring Cloud Gateway (Port 9090)
│   ├── auth-service/                  ← OAuth2 & JWT Security Server (Port 8082)
│   ├── user-service/                  ← Reactive WebClient Service (Port 8084)
│   └── order-service/                 ← Reactive WebClient Order Service (Port 8085)
├── PL_SQL/                            ← Oracle PL/SQL Scripts (00 to 08)
├── React/                             ← React SPA Hands-On Suite (Tasks 1 to 19)
│   ├── myfirstreact/ ... gitclientapp/
├── Spring Core and Maven/             ← Spring IoC, XML DI, AOP & Spring Boot REST API
│   ├── LibraryManagement/
│   └── LibraryManagement-SpringBoot/
├── Spring Data JPA with Hibernate/    ← Spring Data JPA, DML, Query Methods & Relationships
│   └── orm-learn/
└── Spring REST using Spring Boot/     ← Spring REST, Web Validation, Security & JWT
    └── spring-learn/
```

---

## 📊 Module 1 — Engineering Concepts (Algorithms & Data Structures)

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
cd "Engineering concepts/Algorithms/01_InventoryManagement"
javac *.java
java InventoryTest
```

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
cd "Engineering concepts/DesignPatterns/01_SingletonPattern"
javac *.java
java SingletonTest
```

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

---

## 🌱 Module 4 — Spring Core and Maven

Two Maven projects covering Spring IoC, XML bean configuration, Spring AOP, and Spring Boot REST APIs.

```bash
# Spring Core (Exercises 1–8)
cd "Spring Core and Maven/LibraryManagement"
mvn compile exec:java -Dexec.mainClass="com.library.LibraryManagementApplication"

# Spring Boot REST API (Exercise 9)
cd "Spring Core and Maven/LibraryManagement-SpringBoot"
mvn spring-boot:run
```

---

## 🍃 Module 5 — Spring Data JPA with Hibernate

`orm-learn` Maven application implementing Spring Data JPA DML operations, custom Query Methods, and entity relationships (`@ManyToOne`, `@OneToMany`, `@ManyToMany`).

```bash
cd "Spring Data JPA with Hibernate/orm-learn"
mvn spring-boot:run
```

---

## 🌐 Module 6 — Spring REST using Spring Boot

`spring-learn` Maven application covering Spring Boot Web, XML bean loading, validation (`@Valid`), `@ControllerAdvice` global exception handling, Spring Security, and JWT token authentication.

```bash
cd "Spring REST using Spring Boot/spring-learn"
mvn spring-boot:run
```

---

## 🏗️ Module 7 — Microservices (Spring Boot 3 & Spring Cloud)

A complete 8-module microservice ecosystem featuring Netflix Eureka Service Discovery, Spring Cloud Gateway, Dynamic Load Balancing, Resilience4j Circuit Breakers, WebFlux `WebClient`, and OAuth2/JWT Security Server.

| Service Module | Port | Architecture Role |
| :--- | :--- | :--- |
| `eureka-discovery-server` | `8761` | Netflix Eureka Service Registry |
| `api-gateway` | `9090` | Edge Routing, Custom Logging Filter, Circuit Breaker Fallbacks |
| `account` | `8080` | Account Service registered with Eureka |
| `loan` | `8081` | Loan Service registered with Eureka |
| `greet-service` | `8083` | Service registered with Eureka |
| `auth-service` | `8082` | OAuth2 & JWT Security Server |
| `user-service` | `8084` | Inter-service communications via WebFlux `WebClient` |
| `order-service` | `8085` | Inter-service reactive client |

```bash
cd Microservices
mvn clean package
```

---

## 🅰️ Module 8 — Angular (v20.0) Student Course Portal

A single, feature-rich Angular v20 Web Application (`student-course-portal`) covering 10 Hands-On Exercises:
- Standalone components, dynamic routing, route guards (`AuthGuard`, `AdminGuard`).
- Reactive forms, custom validators, pipes (`FilterPipe`, `CurrencyFormatterPipe`), directives (`HighlightDirective`).
- Service layer, HTTP interceptors (`AuthInterceptor`, `LoggingInterceptor`, `ErrorInterceptor`).
- NgRx Store (`actions`, `reducers`, `selectors`, `effects`) & Jasmine test suite (25/25 passing).

```bash
cd "Angular/student-course-portal"
npm start
npm test
```

---

## ⚛️ Module 9 — React Hands-On Suite (Tasks 1 to 19)

A suite of 19 React projects covering SPA fundamentals, React Router v6, Context API (`ThemeContext`), ES6 features, controlled forms, validation, REST API fetching, and Jest unit tests with Axios mocking.

| Directory | Key Tech / Features |
| :--- | :--- |
| `myfirstreact` | Functional Component & `createRoot` |
| `StudentApp` | Class Components for Portal Pages |
| `scorecalculatorapp` | Props & Stylesheets |
| `blogapp` | REST API Fetch & Error Boundary |
| `cohortsdashboard` | CSS Modules & Dynamic Status Styling |
| `TrainersApp` | React Router v6 (`useParams`, `Routes`) |
| `shoppingapp` | Shopping Cart Item Management |
| `counterapp` | Entry/Exit Visitor Counter |
| `cricketapp` | ES6 Map, Filter, Destructuring, Spread |
| `officespacerentalapp` | Dynamic Inline Rental Formatting |
| `eventexamplesapp` | Synthetic Events & Currency Converter |
| `ticketbookingapp` | Conditional User Rendering |
| `bloggerapp` | Multi-pattern Conditional Rendering |
| `employeethemeapp` | React Context API Theme Provider |
| `ticketraisingapp` | Controlled Complaint Form |
| `mailregisterapp` | Form Input Validation |
| `fetchuserapp` | Random Profile REST Fetcher |
| `cohortdetailsapp_testing` | Jest & React Testing Library |
| `gitclientapp` | GitHub Search API & Jest Axios Mocking |

---

## 🛠️ Module 10 — Git Lab Exercises (Tasks 1 to 5)

Complete Git workflow hands-on covering `git init`, user level configuration, Notepad++ integration, branch management, merge conflicts resolution, and commit histories.

---

## 🧪 Module 11 — JUnit, Mockito & SLF4J Testing Suite

Seven Maven projects covering Java unit testing, mocking, Spring Boot testing, and logging:
- `JUnit_Basic Testing Exercises`
- `JUnit_Advanced Testing`
- `Mockito`
- `Mockito_Advanced`
- `JUnit_Spring Test`
- `Mockito_Mock Dependencies`
- `SLF4J Logging`

---

## ⚙️ Tech Stack

| Technology | Version |
|------------|---------|
| Java | 8 / 17 / 20 |
| Node.js | v24.4.0 |
| npm | 11.4.2 |
| Spring Boot | 3.2.5 / 3.4.1 |
| Spring Cloud | 2023.0.1 |
| Angular CLI | 20.3.32 |
| React | 18.x |
| Maven | 3.9.1 |
| H2 Database / MySQL | Embedded / 8.0 |
| JUnit / Mockito | 5.10.2 / 5.12.0 |
