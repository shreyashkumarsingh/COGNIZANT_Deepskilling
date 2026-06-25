import java.util.HashMap;
import java.util.Map;

/**
 * Inventory uses a HashMap<Integer, Product> keyed by productId.
 *
 * Time complexity:
 *   add    -> O(1) average
 *   update -> O(1) average
 *   delete -> O(1) average
 *   search -> O(1) average
 */
public class Inventory {
    private Map<Integer, Product> products = new HashMap<>();

    // Add a new product — O(1) average
    public void addProduct(Product product) {
        if (products.containsKey(product.getProductId())) {
            System.out.println("Product with ID " + product.getProductId() + " already exists.");
            return;
        }
        products.put(product.getProductId(), product);
        System.out.println("Added: " + product);
    }

    // Update name, quantity or price — O(1) average
    public void updateProduct(int productId, String newName, int newQuantity, double newPrice) {
        Product product = products.get(productId);
        if (product == null) {
            System.out.println("Product ID " + productId + " not found.");
            return;
        }
        product.setProductName(newName);
        product.setQuantity(newQuantity);
        product.setPrice(newPrice);
        System.out.println("Updated: " + product);
    }

    // Delete a product — O(1) average
    public void deleteProduct(int productId) {
        Product removed = products.remove(productId);
        if (removed == null) {
            System.out.println("Product ID " + productId + " not found.");
        } else {
            System.out.println("Deleted: " + removed);
        }
    }

    // Display all products — O(n)
    public void displayAll() {
        if (products.isEmpty()) {
            System.out.println("Inventory is empty.");
            return;
        }
        System.out.println("Current Inventory:");
        for (Product p : products.values()) {
            System.out.println("  " + p);
        }
    }
}
