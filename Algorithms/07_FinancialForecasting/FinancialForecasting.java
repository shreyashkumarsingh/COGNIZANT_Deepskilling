import java.util.HashMap;
import java.util.Map;

/**
 * Predicts future value using compound growth recursively.
 *
 * Formula: FV = PV * (1 + growthRate)^years
 *
 * Plain recursion    — O(n) time, O(n) call stack space
 * Memoized recursion — O(n) time, O(n) space (cache), avoids redundant calls
 */
public class FinancialForecasting {

    // ----------------------------------------------------------------
    // Plain recursive approach
    // Each call reduces years by 1 until the base case (years == 0).
    // Time: O(n)  Space: O(n) call stack
    // ----------------------------------------------------------------
    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return calculateFutureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    // ----------------------------------------------------------------
    // Memoized recursive approach
    // Stores already-computed year results to avoid recomputation.
    // Useful when the same sub-problem (year count) is called multiple times.
    // Time: O(n) amortised  Space: O(n) cache + O(n) call stack
    // ----------------------------------------------------------------
    private static Map<Integer, Double> memo = new HashMap<>();

    public static double calculateFutureValueMemo(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        if (memo.containsKey(years)) {
            return memo.get(years);
        }
        double result = calculateFutureValueMemo(presentValue * (1 + growthRate), growthRate, years - 1);
        memo.put(years, result);
        return result;
    }
}
