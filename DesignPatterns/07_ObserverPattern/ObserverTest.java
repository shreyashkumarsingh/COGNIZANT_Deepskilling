public class ObserverTest {
    public static void main(String[] args) {
        StockMarket apple = new StockMarket("AAPL", 175.00);

        Observer mobileApp = new MobileApp("StockTracker");
        Observer webApp = new WebApp("InvestDash");

        apple.registerObserver(mobileApp);
        apple.registerObserver(webApp);

        apple.setPrice(180.50);
        apple.setPrice(178.25);

        System.out.println("\nDeregistering WebApp...");
        apple.deregisterObserver(webApp);

        apple.setPrice(182.00);
    }
}
