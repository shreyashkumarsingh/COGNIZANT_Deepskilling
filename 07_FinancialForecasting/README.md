# Exercise 7: Financial Forecasting

## Scenario
A financial tool that predicts future investment value using compound growth, implemented recursively with and without memoization.

## Formula
```
FutureValue(PV, rate, years) =
    PV                                         if years == 0   (base case)
    FutureValue(PV * (1 + rate), rate, years-1) otherwise
```

## Classes
| File | Role |
|------|------|
| `FinancialForecasting.java` | Plain recursive + memoized recursive implementations |
| `ForecastingTest.java` | Compares both approaches and prints a year-by-year table |

## How to Run
```bash
javac *.java
java ForecastingTest
```

## Sample Output
```
Plain Recursion:   $10000.00 invested at 8% for 10 years = $21589.25
Memoized:          $10000.00 invested at 8% for 10 years = $21589.25

Year-by-Year Forecast:
Year   Future Value
--------------------
1      $10800.00
2      $11664.00
...
10     $21589.25
```

## Time Complexity Analysis
| Approach | Time | Space | Notes |
|----------|------|-------|-------|
| Plain recursion | O(n) | O(n) call stack | Simple, clean |
| Memoized recursion | O(n) amortised | O(n) cache + O(n) stack | Avoids duplicate sub-problems |
| Iterative (loop) | O(n) | O(1) | Most efficient — no stack overhead |

## When Memoization Matters
For this linear recurrence, plain recursion is already O(n) so memoization adds little benefit. Memoization shines in **branching recursion** like Fibonacci or dynamic programming problems, where the same sub-problem is computed exponentially many times without it.

## Avoiding Stack Overflow
Deep recursion (e.g. 10,000 years) risks a `StackOverflowError`. Prefer an iterative loop for large `n`:
```java
double fv = presentValue;
for (int i = 0; i < years; i++) fv *= (1 + growthRate);
```
