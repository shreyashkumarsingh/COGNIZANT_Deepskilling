# Spring REST using Spring Boot — Hands-On Exercises
Digital Nurture 5.0 | .NET Full Stack Engineer Track & Java Skilling

This module covers Spring Boot web application creation, XML bean loading, logging configuration, RESTful API development with HTTP GET, POST, PUT, DELETE methods, input validation, global exception handling, MockMVC unit testing, Spring Security, and JWT (JSON Web Token) authentication.

---

## 📚 Theory & Architectural Concepts

### 1. HTTP Request & Response Structure
- **HTTP Request**: Consists of Method (GET, POST, PUT, DELETE), Resource URI (`/countries`), HTTP Version (`HTTP/1.1`), Headers (`User-Agent`, `Authorization`, `Content-Type`), and Body payload.
- **HTTP Response**: Consists of HTTP Version, Status Code (`200 OK`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`), Response Headers (`Content-Type: application/json`), and Body payload.

### 2. RESTful Web Service Resource Naming Guidelines
- Use nouns in plural form to identify resources (`/countries`, `/employees`, `/departments`).
- Use path variables for specific resource IDs (`/countries/IN`, `/employees/1`).
- Map HTTP Verbs to CRUD operations:
  - `GET`: Retrieve resource(s)
  - `POST`: Create a new resource
  - `PUT`: Update an existing resource
  - `DELETE`: Remove a resource

### 3. Global Exception Handling & Input Validation
- Bean validation annotations: `@NotNull`, `@NotBlank`, `@Size`, `@Min`, `@JsonFormat(pattern="dd/MM/yyyy")`.
- Global Exception Handler: Class annotated with `@ControllerAdvice` extending `ResponseEntityExceptionHandler` overriding `handleMethodArgumentNotValid` and `handleHttpMessageNotReadable` to format error responses as standard JSON payloads.

### 4. Securing RESTful Web Services with Spring Security & JWT
- **Spring Security**: Configures authentication (`user`/`pwd`, `admin`/`pwd`), BCrypt password encoding, and role-based URL authorization (`.hasRole("USER")`, `.hasRole("ADMIN")`).
- **JWT Authentication**:
  - `/authenticate` endpoint generates a signed JWT token using JJWT (`HS256`).
  - `JwtAuthorizationFilter` intercepts requests with header `Authorization: Bearer <token>` and sets the `SecurityContextHolder` authentication state.

---

## 🛠️ Project Structure (`spring-learn`)

```
Spring REST using Spring Boot/
└── spring-learn/
    ├── pom.xml
    └── src/
        ├── main/
        │   ├── java/com/cognizant/springlearn/
        │   │   ├── SpringLearnApplication.java        ← Application Entry & XML Bean Loader
        │   │   ├── GlobalExceptionHandler.java        ← Global @ControllerAdvice Validation Handler
        │   │   ├── controller/
        │   │   │   ├── HelloController.java           ← GET /hello
        │   │   │   ├── CountryController.java         ← GET /country, GET /countries, POST /countries
        │   │   │   ├── EmployeeController.java        ← GET /employees, PUT /employees, DELETE /employees/{id}
        │   │   │   ├── DepartmentController.java      ← GET /departments
        │   │   │   └── AuthenticationController.java  ← GET /authenticate (JWT Generation)
        │   │   ├── dao/
        │   │   │   ├── EmployeeDao.java
        │   │   │   └── DepartmentDao.java
        │   │   ├── model/                             ← Domain Models with Validation Annotations
        │   │   │   ├── Country.java
        │   │   │   ├── Department.java
        │   │   │   ├── Employee.java
        │   │   │   └── Skill.java
        │   │   ├── security/                          ← Spring Security & JWT Components
        │   │   │   ├── JwtUtil.java
        │   │   │   ├── JwtAuthorizationFilter.java
        │   │   │   └── SecurityConfig.java
        │   │   └── service/
        │   │       ├── CountryService.java
        │   │       ├── EmployeeService.java
        │   │       ├── DepartmentService.java
        │   │       └── exception/
        │   │           ├── CountryNotFoundException.java
        │   │           └── EmployeeNotFoundException.java
        │   └── resources/
        │       ├── application.properties
        │       ├── date-format.xml
        │       ├── country.xml
        │       └── employee.xml
        └── test/
            └── java/com/cognizant/springlearn/
                └── SpringLearnApplicationTests.java   ← MockMVC Test Suite
```

---

## 🚀 Running the Application & Tests

To start the Spring Boot web application (Port `8083`):

```bash
cd "Spring REST using Spring Boot/spring-learn"
mvn spring-boot:run
```

To run MockMVC unit tests:

```bash
mvn test
```
