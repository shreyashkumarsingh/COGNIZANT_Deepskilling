/**
 * Array-backed employee store with a fixed maximum capacity.
 *
 * Memory layout: elements stored contiguously — O(1) index access.
 *
 * Time complexity:
 *   add      -> O(1) if appending to end; O(n) if full (resize)
 *   search   -> O(n) linear scan
 *   traverse -> O(n)
 *   delete   -> O(n) (must shift elements left to fill the gap)
 */
public class EmployeeArray {
    private Employee[] employees;
    private int size;

    public EmployeeArray(int capacity) {
        employees = new Employee[capacity];
        size = 0;
    }

    // Add to the next free slot — O(1)
    public void addEmployee(Employee emp) {
        if (size == employees.length) {
            System.out.println("Array is full. Cannot add " + emp.getName());
            return;
        }
        employees[size++] = emp;
        System.out.println("Added: " + emp);
    }

    // Linear search by employeeId — O(n)
    public Employee searchEmployee(int employeeId) {
        for (int i = 0; i < size; i++) {
            if (employees[i].getEmployeeId() == employeeId) {
                return employees[i];
            }
        }
        return null;
    }

    // Print all employees — O(n)
    public void traverseEmployees() {
        System.out.println("All Employees (" + size + "):");
        for (int i = 0; i < size; i++) {
            System.out.println("  [" + i + "] " + employees[i]);
        }
    }

    // Delete by employeeId; shift remaining elements left — O(n)
    public boolean deleteEmployee(int employeeId) {
        for (int i = 0; i < size; i++) {
            if (employees[i].getEmployeeId() == employeeId) {
                System.out.println("Deleted: " + employees[i]);
                // Shift elements left
                for (int j = i; j < size - 1; j++) {
                    employees[j] = employees[j + 1];
                }
                employees[--size] = null;
                return true;
            }
        }
        System.out.println("Employee ID " + employeeId + " not found.");
        return false;
    }
}
