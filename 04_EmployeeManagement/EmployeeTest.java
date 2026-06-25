public class EmployeeTest {
    public static void main(String[] args) {
        EmployeeArray empArray = new EmployeeArray(5);

        empArray.addEmployee(new Employee(1, "Alice",   "Engineer",  85000));
        empArray.addEmployee(new Employee(2, "Bob",     "Manager",  110000));
        empArray.addEmployee(new Employee(3, "Charlie", "Designer",  72000));
        empArray.addEmployee(new Employee(4, "Diana",   "Analyst",   78000));

        System.out.println();
        empArray.traverseEmployees();

        System.out.println("\nSearching for ID 3:");
        Employee found = empArray.searchEmployee(3);
        System.out.println(found != null ? "Found: " + found : "Not found");

        System.out.println("\nSearching for ID 99:");
        found = empArray.searchEmployee(99);
        System.out.println(found != null ? "Found: " + found : "Not found");

        System.out.println("\nDeleting employee ID 2:");
        empArray.deleteEmployee(2);

        System.out.println();
        empArray.traverseEmployees();
    }
}
