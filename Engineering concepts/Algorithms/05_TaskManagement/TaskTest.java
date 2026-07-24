public class TaskTest {
    public static void main(String[] args) {
        TaskLinkedList taskList = new TaskLinkedList();

        taskList.addTask(new Task(1, "Design UI",      "Pending"));
        taskList.addTask(new Task(2, "Write Tests",    "In Progress"));
        taskList.addTask(new Task(3, "Deploy to Prod", "Pending"));
        taskList.addTask(new Task(4, "Code Review",    "Done"));

        System.out.println();
        taskList.traverseTasks();

        System.out.println("\nSearching for task ID 3:");
        Task found = taskList.searchTask(3);
        System.out.println(found != null ? "Found: " + found : "Not found");

        System.out.println("\nDeleting task ID 2:");
        taskList.deleteTask(2);

        System.out.println("\nDeleting task ID 99:");
        taskList.deleteTask(99);

        System.out.println();
        taskList.traverseTasks();
    }
}
