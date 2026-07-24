# Angular (v20.0) Student Course Portal — Hands-On Exercises
Digital Nurture 5.0 | .NET Full Stack Engineer Track & Web Skilling

This directory contains the single, comprehensive Angular v20 application — **Student Course Portal** — covering setup, components, routing, forms, HTTP integration, custom pipes & directives, NgRx state management, and unit testing.

---

## 📚 Exercise Overview (Exercises 1 to 10)

| Exercise | Module / Topic | Key Features & Implementation |
| :--- | :--- | :--- |
| **Exercise 1** | Project Setup & CLI | Initialized Angular v20 project `student-course-portal` using standalone components. |
| **Exercise 2** | Components & Directives | `HeaderComponent`, `FooterComponent`, `CourseListComponent`, `CourseCardComponent`, `CourseDetailComponent`, `AddCourseComponent`, `EditCourseComponent`, `EnrollmentComponent`, `StudentProfileComponent`, `LoginComponent`. Custom directive `HighlightDirective`. |
| **Exercise 3** | Data Binding & Pipes | Property binding, event binding, two-way binding (`ngModel`), custom pipe `FilterPipe` (filtering courses by title/category) and `CurrencyFormatterPipe`. |
| **Exercise 4** | Component Communication | `@Input()` and `@Output()` EventEmitters for parent-child interaction (e.g. `CourseCardComponent` to `CourseListComponent`). |
| **Exercise 5** | Angular Services & DI | `CourseService`, `AuthService`, `EnrollmentService`, `StudentService` using RxJS `BehaviorSubject` and Observables. |
| **Exercise 6** | Angular Routing & Guards | App routes (`/courses`, `/courses/:id`, `/add-course`, `/edit-course/:id`, `/enrollments`, `/profile`, `/login`). Route guards `AuthGuard` and `AdminGuard`. |
| **Exercise 7** | Template & Reactive Forms | `AddCourseComponent` and `EditCourseComponent` built with `ReactiveFormsModule`, custom validators, and dynamic error messages. |
| **Exercise 8** | HTTP Client & Interceptors | `HttpClientModule` communicating with REST backend / JSON Server (`db.json`), `AuthInterceptor`, `LoggingInterceptor`, and `ErrorInterceptor`. |
| **Exercise 9** | NgRx State Management | NgRx Store (`actions`, `reducers`, `selectors`, `effects`) managing course catalog and enrollment state. |
| **Exercise 10** | Unit Testing | Jasmine & Karma unit test suite covering components, services, pipes, directives, and guards (25/25 passing). |

---

## 🚀 Running the Application & Tests

```bash
cd "Angular/student-course-portal"

# Start Development Server (http://localhost:4200)
npm start

# Run JSON Server mock backend (http://localhost:3000)
npx json-server --watch db.json --port 3000

# Run Jasmine Unit Tests
npm test
```
