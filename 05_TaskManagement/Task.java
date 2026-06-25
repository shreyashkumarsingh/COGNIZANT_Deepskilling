public class Task {
    int taskId;
    String taskName;
    String status;
    Task next; // pointer to next node (singly linked)

    public Task(int taskId, String taskName, String status) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.status = status;
        this.next = null;
    }

    @Override
    public String toString() {
        return String.format("Task{id=%d, name='%s', status='%s'}",
                taskId, taskName, status);
    }
}
