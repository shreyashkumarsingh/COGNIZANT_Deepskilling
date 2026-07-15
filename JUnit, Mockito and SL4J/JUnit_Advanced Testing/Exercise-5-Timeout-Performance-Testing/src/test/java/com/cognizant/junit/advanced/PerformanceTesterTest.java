package com.cognizant.junit.advanced;

import org.junit.jupiter.api.Test;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTimeout;

public class PerformanceTesterTest {

    @Test
    void shouldCompleteWithinOneSecond() {

        PerformanceTester tester = new PerformanceTester();

        assertTimeout(Duration.ofSeconds(1), tester::performTask);

    }

}
