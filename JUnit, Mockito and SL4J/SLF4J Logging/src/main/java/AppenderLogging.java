import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AppenderLogging {

    private static final Logger logger =
            LoggerFactory.getLogger(
                    AppenderLogging.class);

    public static void main(String[] args) {

        logger.info("Application Started");

        logger.warn("This is a warning.");

        logger.error("This is an error.");

    }

}
