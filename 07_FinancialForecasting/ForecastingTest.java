public class ForecastingTest {
    public static void main(String[] args) {
        double presentValue = 10000.00; // initial investment
        double growthRate   = 0.08;     // 8% annual growth
        int    years        = 10;

        // --- Plain Recursion ---
        double fv = FinancialForecasting.calculateFutureValue(presentValue, growthRate, years);
        System.out.printf("Plain Recursion:   $%.2f invested at %.0f%% for %d years = $%.2f%n",
                presentValue, growthRate * 100, years, fv);

        // --- Memoized Recursion ---
        double fvMemo = FinancialForecasting.calculateFutureValueMemo(presentValue, growthRate, years);
        System.out.printf("Memoized:          $%.2f invested at %.0f%% for %d years = $%.2f%n",
                presentValue, growthRate * 100, years, fvMemo);

        // Year-by-year forecast
        System.out.println("\nYear-by-Year Forecast:");
        System.out.printf("%-6s %-15s%n", "Year", "Future Value");
        System.out.println("--------------------");
        for (int y = 1; y <= years; y++) {
            double value = FinancialForecasting.calculateFutureValue(presentValue, growthRate, y);
            System.out.printf("%-6d $%-14.2f%n", y, value);
        }
    }
}
