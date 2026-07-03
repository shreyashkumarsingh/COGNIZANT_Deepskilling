public class CustomerRepositoryImpl implements CustomerRepository {
    @Override
    public String findCustomerById(int id) {
        // Simulated data store
        if (id == 1) return "Alice Johnson";
        if (id == 2) return "Bob Smith";
        return "Customer not found";
    }
}
