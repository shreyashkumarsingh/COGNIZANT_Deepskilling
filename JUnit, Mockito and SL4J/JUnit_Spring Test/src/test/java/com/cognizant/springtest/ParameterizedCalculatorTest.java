package com.cognizant.springtest;

import com.cognizant.springtest.service.CalculatorService;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ParameterizedCalculatorTest {

    CalculatorService service = new CalculatorService();

    @ParameterizedTest
    @CsvSource({
            "2,3,5",
            "10,20,30",
            "100,200,300"
    })
    void parameterizedTest(
            int a,
            int b,
            int result) {

        assertEquals(
                result,
                service.add(a, b));

    }

}
