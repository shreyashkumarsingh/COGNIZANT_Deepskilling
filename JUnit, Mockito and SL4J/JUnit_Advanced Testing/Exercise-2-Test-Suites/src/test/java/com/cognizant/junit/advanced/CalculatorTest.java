package com.cognizant.junit.advanced;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    @Test
    void additionTest() {
        assertEquals(5,2+3);
    }

}
