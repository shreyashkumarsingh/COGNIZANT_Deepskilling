package com.cognizant.junit.advanced;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class ExceptionThrowerTest {

    @Test
    void shouldThrowIllegalArgumentException() {

        ExceptionThrower thrower = new ExceptionThrower();

        IllegalArgumentException exception =
                assertThrows(
                        IllegalArgumentException.class,
                        thrower::throwException
                );

        assertEquals("Invalid input", exception.getMessage());

    }

}
