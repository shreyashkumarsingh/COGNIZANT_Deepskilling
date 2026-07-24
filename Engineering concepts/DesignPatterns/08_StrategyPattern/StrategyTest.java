public class StrategyTest {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();

        // Pay with credit card
        context.setPaymentStrategy(new CreditCardPayment("1234567890123456"));
        context.executePayment(99.99);

        // Switch to PayPal at runtime
        context.setPaymentStrategy(new PayPalPayment("user@example.com"));
        context.executePayment(49.99);
    }
}
