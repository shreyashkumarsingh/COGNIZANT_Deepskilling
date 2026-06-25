public class DependencyInjectionTest {
    public static void main(String[] args) {
        CustomerRepository repository = new CustomerRepositoryImpl();
        CustomerService service = new CustomerService(repository);

        service.printCustomer(1);
        service.printCustomer(2);
        service.printCustomer(99);
    }
}
