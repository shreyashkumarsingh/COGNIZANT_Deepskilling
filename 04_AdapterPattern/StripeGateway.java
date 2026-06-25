// Adaptee: third-party Stripe gateway with its own interface
public class StripeGateway {
    public void charge(double amount) {
        System.out.println("Charging $" + amount + " through Stripe.");
    }
}
