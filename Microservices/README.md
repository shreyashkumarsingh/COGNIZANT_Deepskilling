# Spring Boot 3 & Spring Cloud Microservices Suite
Digital Nurture 5.0 | .NET Full Stack Engineer Track

This directory contains the complete implementation of Spring Boot 3.2+ & Spring Cloud 2023.0+ Microservices covering Edge Services, API Gateway, Load Balancing, Circuit Breakers, OAuth 2.1/OIDC/JWT Authentication, Eureka Service Discovery, and Bank Services (Account & Loan).

---

## Service Architecture & Endpoints

| Microservice Module | Port | Technology Stack | Key Endpoints / Features |
| :--- | :--- | :--- | :--- |
| `eureka-discovery-server` | `8761` | Spring Cloud Netflix Eureka Server | Eureka Web Dashboard (`http://localhost:8761`) |
| `account` | `8080` | Spring Web, Eureka Client | `GET /accounts/{number}` |
| `loan` | `8081` | Spring Web, Eureka Client | `GET /loans/{number}` |
| `auth-service` | `8082` | Spring Security, OAuth2 Client/Server, JWT | `POST /api/auth/token`, `GET /user`, `GET /secure` |
| `greet-service` | `8083` | Spring Web, Eureka Client | `GET /greet` |
| `user-service` | `8084` | Spring Web | `GET /users/{id}`, `POST /users` |
| `order-service` | `8085` | Spring WebFlux (`WebClient`) | `GET /orders/{orderId}/user/{userId}` |
| `api-gateway` | `9090` | Spring Cloud Gateway, Resilience4j, LoadBalancer | Global `LoggingFilter`, `RandomLoadBalancer`, `ReactiveResilience4JCircuitBreakerFactory`, `/greet-service/**` |

---

## Tasks Overview

### Task 1: Edge Services, API Gateway, Load Balancing & Resilience
- **Module**: `api-gateway` (Port `9090`)
- **Global Filter**: `LoggingFilter` implementing `GlobalFilter` logging all request URIs (`System.out.println("Request: " + exchange.getRequest().getURI())`).
- **Load Balancing**: Custom `LoadBalancerConfiguration` returning `RandomLoadBalancer`.
- **Resilience**: Custom `ResilienceConfiguration` bean customizing `ReactiveResilience4JCircuitBreakerFactory`.

### Task 2: Centralized Authentication, OAuth 2.1 & JWT
- **Module**: `auth-service` (Port `8082`)
- **OAuth2 Login**: `SecurityConfig` with `oauth2Login()`.
- **JWT Authentication**: `JwtConfig`, `JwtTokenProvider`, `JwtTokenFilter` intercepting requests before `UsernamePasswordAuthenticationFilter`.
- **Endpoints**: `UserController` (`GET /user`), `SecureController` (`GET /secure`), `AuthController` (`POST /api/auth/token`).

### Task 3: Microservices Scenarios
- **User & Order System**: `user-service` (Port `8084`) and `order-service` (Port `8085`) communicating using WebFlux `WebClient`.
- **Circuit Breaker**: Resilience4j reactive circuit breaker with fallback mechanism.

### Task 4 & 5: Bank Microservices & Eureka Discovery
- **Eureka Server**: `eureka-discovery-server` (Port `8761`) annotated with `@EnableEurekaServer`.
- **Account Service**: `account` (Port `8080`) returning `{ "number": "00987987973432", "type": "savings", "balance": 234343 }`.
- **Loan Service**: `loan` (Port `8081`) returning `{ "number": "H00987987972342", "type": "car", "loan": 400000, "emi": 3258, "tenure": 18 }`.
- **Greet Service**: `greet-service` (Port `8083`) returning `"Hello World"`.

---

## Building and Running

### Build All Modules
```bash
mvn clean package -DskipTests
```

### Run Order of Microservices
1. Start `eureka-discovery-server` (`java -jar eureka-discovery-server/target/eureka-discovery-server-0.0.1-SNAPSHOT.jar`)
2. Start `account` (`java -jar account/target/account-0.0.1-SNAPSHOT.jar`)
3. Start `loan` (`java -jar loan/target/loan-0.0.1-SNAPSHOT.jar`)
4. Start `greet-service` (`java -jar greet-service/target/greet-service-0.0.1-SNAPSHOT.jar`)
5. Start `api-gateway` (`java -jar api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar`)
