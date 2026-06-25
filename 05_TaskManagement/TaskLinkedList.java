/**
 * Singly linked list of Task nodes.
 *
 * Time complexity:
 *   add (head)   -> O(1)
 *   add (tail)   -> O(n)
 *   search       -> O(n)
 *   traverse     -> O(n)
 *   delete       -> O(n)
 */
public class TaskLinkedList {
    private Task head;

    // Add task at the end of the list — O(n)
    public void addTask(Task task) {
        if (head == null) {
            head = task;
        } else {
            Task current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = task;
        }
        System.out.println("Added: " + task);
    }

    // Search by taskId — O(n)
    public Task searchTask(int taskId) {
        Task current = head;
        while (current != null) {
            if (current.taskId == taskId) return current;
            current = current.next;
        }
        return null;
    }

    // Print all tasks — O(n)
    public void traverseTasks() {
        if (head == null) {
            System.out.println("No tasks.");
            return;
        }
        System.out.println("Task List:");
        Task current = head;
        while (current != null) {
            System.out.println("  -> " + current);
            current = current.next;
        }
    }

    // Delete by taskId — O(n)
    public boolean deleteTask(int taskId) {
        if (head == null) return false;

        // Head is the target
        if (head.taskId == taskId) {
            System.out.println("Deleted: " + head);
            head = head.next;
            return true;
        }

        Task current = head;
        while (current.next != null) {
            if (current.next.taskId == taskId) {
                System.out.println("Deleted: " + current.next);
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        System.out.println("Task ID " + taskId + " not found.");
        return false;
    }
}
