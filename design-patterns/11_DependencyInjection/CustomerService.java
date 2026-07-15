public class CustomerService {
    private CustomerRepository repository;

    // Constructor injection
    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public void printCustomer(int id) {
        String name = repository.findCustomerById(id);
        System.out.println("Customer [" + id + "]: " + name);
    }
}
