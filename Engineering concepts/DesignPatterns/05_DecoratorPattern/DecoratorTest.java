public class DecoratorTest {
    public static void main(String[] args) {
        // Email only
        Notifier emailNotifier = new EmailNotifier();
        System.out.println("-- Email only --");
        emailNotifier.send("Server is down!");

        // Email + SMS
        Notifier emailAndSMS = new SMSNotifierDecorator(new EmailNotifier());
        System.out.println("\n-- Email + SMS --");
        emailAndSMS.send("Disk usage at 90%!");

        // Email + SMS + Slack
        Notifier allChannels = new SlackNotifierDecorator(
                                new SMSNotifierDecorator(
                                new EmailNotifier()));
        System.out.println("\n-- Email + SMS + Slack --");
        allChannels.send("Critical: Database connection lost!");
    }
}
