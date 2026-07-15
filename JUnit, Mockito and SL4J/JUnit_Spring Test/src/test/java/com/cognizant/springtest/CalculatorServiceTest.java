package com.cognizant.springtest;

import com.cognizant.springtest.service.CalculatorService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CalculatorServiceTest {

    @Autowired
    CalculatorService calculatorService;

    @Test
    void testAddition() {

        assertEquals(30,
                calculatorService.add(10, 20));

    }

}
