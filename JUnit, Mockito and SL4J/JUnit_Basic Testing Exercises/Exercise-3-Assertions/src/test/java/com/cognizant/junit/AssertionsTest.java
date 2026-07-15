package com.cognizant.junit;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTest {

    @Test
    void testAssertions() {

        assertEquals(5,2+3);

        assertTrue(5>3);

        assertFalse(5<3);

        assertNull(null);

        assertNotNull(new Object());

        assertArrayEquals(
                new int[]{1,2,3},
                new int[]{1,2,3}
        );

        assertThrows(ArithmeticException.class, ()->{

            int x=10/0;

        });

    }

}
