public class MVCTest {
    public static void main(String[] args) {
        Student student = new Student("Alice Johnson", "S101", "A");
        StudentView view = new StudentView();
        StudentController controller = new StudentController(student, view);

        System.out.println("Initial Student Details:");
        controller.updateView();

        // Update student details via controller
        controller.setStudentName("Alice Smith");
        controller.setStudentGrade("A+");

        System.out.println("Updated Student Details:");
        controller.updateView();
    }
}
