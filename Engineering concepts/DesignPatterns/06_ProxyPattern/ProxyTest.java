public class ProxyTest {
    public static void main(String[] args) {
        Image image = new ProxyImage("photo.jpg");

        // First call - loads from server
        System.out.println("First display:");
        image.display();

        // Second call - served from cache
        System.out.println("\nSecond display:");
        image.display();
    }
}
