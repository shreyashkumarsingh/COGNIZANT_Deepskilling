// Adaptee: third-party PayPal gateway with its own interface
public class PayPalGateway {
    public void makePayment(double amount) {
        System.out.println("Processing $" + amount + " via PayPal.");
    }
}
