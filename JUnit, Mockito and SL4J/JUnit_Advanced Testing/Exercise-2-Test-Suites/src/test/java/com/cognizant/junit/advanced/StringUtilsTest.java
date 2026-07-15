package com.cognizant.junit.advanced;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class StringUtilsTest {

    @Test
    void uppercaseTest() {

        assertEquals("HELLO","hello".toUpperCase());

    }

}
