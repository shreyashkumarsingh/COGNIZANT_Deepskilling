public class InventoryTest {
    public static void main(String[] args) {
        Inventory inventory = new Inventory();

        // Add products
        inventory.addProduct(new Product(1, "Laptop",    50,  999.99));
        inventory.addProduct(new Product(2, "Mouse",    200,   25.99));
        inventory.addProduct(new Product(3, "Keyboard", 150,   49.99));

        System.out.println();
        inventory.displayAll();

        // Update product
        System.out.println("\nUpdating product 2...");
        inventory.updateProduct(2, "Wireless Mouse", 180, 34.99);

        // Delete product
        System.out.println("\nDeleting product 3...");
        inventory.deleteProduct(3);

        // Try deleting a non-existent product
        System.out.println("\nDeleting product 99...");
        inventory.deleteProduct(99);

        System.out.println();
        inventory.displayAll();
    }
}
