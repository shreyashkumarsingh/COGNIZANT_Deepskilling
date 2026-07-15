package com.cognizant.junit;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BankAccountTest {

    private BankAccount account;

    @BeforeEach
    void setUp() {

        account = new BankAccount(1000);

    }

    @AfterEach
    void tearDown() {

        account = null;

    }

    @Test
    void testDeposit() {

        // Arrange

        double amount = 500;

        // Act

        account.deposit(amount);

        // Assert

        assertEquals(1500, account.getBalance());

    }

}
