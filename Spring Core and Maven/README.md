# Spring Core and Maven — Hands-On Exercises
Digital Nurture 5.0 | .NET Full Stack Engineer Track & Java Skilling

This directory contains two Maven projects covering the Spring journey from XML-based IoC and AOP to Spring Boot 3.x REST APIs.

---

## 🛠️ Projects Overview

### 1. `LibraryManagement` — Spring Core (Exercises 1–8)

All eight exercises build on a single Maven project using Spring 5.x with XML configuration.

| Exercise | Topic | Key Concepts |
|----------|-------|-------------|
| Exercise 1 | Configuring a Basic Spring Application | `ApplicationContext`, XML bean definitions |
| Exercise 2 | Implementing Dependency Injection | Setter DI, `<property>` wiring |
| Exercise 3 | Logging with Spring AOP | `@Around` advice, execution time tracking |
| Exercise 4 | Creating & Configuring a Maven Project | `pom.xml`, Maven Compiler Plugin, Java 1.8 |
| Exercise 5 | Configuring the Spring IoC Container | `ClassPathXmlApplicationContext`, bean lifecycle |
| Exercise 6 | Configuring Beans with Annotations | `@Service`, `@Repository`, `<context:component-scan>` |
| Exercise 7 | Constructor & Setter Injection | `<constructor-arg>`, `<property>` |
| Exercise 8 | Implementing Basic AOP with Spring | `@Before`, `@After`, `<aop:aspectj-autoproxy/>` |

**Run:**
```bash
cd "Spring Core and Maven/LibraryManagement"
mvn compile exec:java -Dexec.mainClass="com.library.LibraryManagementApplication"
```

---

### 2. `LibraryManagement-SpringBoot` — Spring Boot (Exercise 9)

A standalone Spring Boot 3.x application with a full CRUD REST API backed by an H2 in-memory database.

| Component | Description |
|-----------|-------------|
| `Book.java` | JPA Entity — `id`, `title`, `author` |
| `BookRepository.java` | `JpaRepository<Book, Long>` |
| `BookController.java` | REST endpoints — GET, POST, PUT, DELETE `/books` |
| `application.properties` | H2 in-memory datasource, DDL auto, H2 console |

**Run:**
```bash
cd "Spring Core and Maven/LibraryManagement-SpringBoot"
mvn spring-boot:run
```
