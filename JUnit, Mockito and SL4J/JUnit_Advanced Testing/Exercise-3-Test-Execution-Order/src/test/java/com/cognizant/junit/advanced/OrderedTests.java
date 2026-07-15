package com.cognizant.junit.advanced;

import org.junit.jupiter.api.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class OrderedTests {

    @Test
    @Order(1)
    void initializeDatabase() {

        System.out.println("Database initialized");

    }

    @Test
    @Order(2)
    void insertData() {

        System.out.println("Data inserted");

    }

    @Test
    @Order(3)
    void fetchData() {

        System.out.println("Data fetched");

    }

}
