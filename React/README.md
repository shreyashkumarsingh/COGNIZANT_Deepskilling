# React Hands-On Exercise Book (Tasks 1 to 19)
Digital Nurture 5.0 | .NET Full Stack Engineer Track

This directory contains the complete solution codebase for all 19 React Hands-On Tasks covering SPA fundamentals, React components, state, props, lifecycle hooks, CSS Modules, React Router v6, ES6 features, event handling, conditional rendering, React Context API, forms & validation, REST API integration, and Jest unit testing with Axios mocking.

---

## React Projects Directory Summary

| Task | Project Name | Description | Key Tech / Features |
| :--- | :--- | :--- | :--- |
| **Task 1** | `myfirstreact` | Basic React SPA printing welcome heading | Functional Component, `ReactDOM.createRoot` |
| **Task 2** | `StudentApp` | Student Portal with Home, About, Contact components | Class Components, Modular Component Architecture |
| **Task 3** | `scorecalculatorapp` | CalculateScore functional component with CSS stylesheet | Props (`Name`, `School`, `Total`, `goal`), `mystyle.css` |
| **Task 4** | `blogapp` | Post model and Posts list with JSONPlaceholder REST API | `componentDidMount()`, `loadPosts()`, `componentDidCatch()` |
| **Task 5** | `cohortsdashboard` | Academy Cohort details dashboard | CSS Module (`CohortDetails.module.css`), Dynamic Status Styling |
| **Task 6** | `TrainersApp` | Trainers management portal | React Router v6 (`BrowserRouter`, `Routes`, `Route`, `Link`, `useParams`) |
| **Task 7** | `shoppingapp` | Online Shopping Cart with item list | Class Components `OnlineShopping` and `Cart` |
| **Task 8** | `counterapp` | Mall Entry and Exit counter tracker | `CountPeople` Component, Constructor State, `UpdateEntry`/`UpdateExit` |
| **Task 9** | `cricketapp` | Indian Cricket Team player stats viewer | ES6 `map()`, `filter()`, Arrow functions, Destructuring, Spread operator |
| **Task 10** | `officespacerentalapp` | Office Space Rental listing portal | JSX Expressions, Dynamic Inline CSS for Rent Thresholds |
| **Task 11** | `eventexamplesapp` | Form elements event handling & Currency Converter | Synthetic Events (`OnPress`), Multi-method invocation, INR → EUR |
| **Task 12** | `ticketbookingapp` | Flight ticket booking portal | Conditional Rendering for Guest vs Logged-in User |
| **Task 13** | `bloggerapp` | Book, Blog, and Course details viewer | Multiple Conditional Rendering Patterns (if-else, ternary, `&&`) |
| **Task 14** | `employeethemeapp` | Employee management theme provider | React Context API (`ThemeContext`), `useContext()` hook |
| **Task 15** | `ticketraisingapp` | Complaint registration form generating Ref Numbers | Controlled Form Components, `handleSubmit` Event Handler |
| **Task 16** | `mailregisterapp` | User mail registration form with validation | Form Input Validation (Name >= 5, Email `@` & `.`, Password >= 8) |
| **Task 17** | `fetchuserapp` | Random user profile fetcher | `componentDidMount()`, `https://api.randomuser.me/` REST API |
| **Task 18** | `cohortdetailsapp_testing` | Unit testing CohortDetails component | Jest & React Testing Library (`screen`, `render`, Snapshot testing) |
| **Task 19** | `gitclientapp` | GitHub repository search client with mock unit tests | Axios GitHub API integration, Jest Axios Mock Testing |

---

## Quick Start / Running Any Application

Navigate to any task directory and run:

```bash
npm start
```

To run unit tests for Task 18 or Task 19:

```bash
# In React/cohortdetailsapp_testing or React/gitclientapp
npm test
```
