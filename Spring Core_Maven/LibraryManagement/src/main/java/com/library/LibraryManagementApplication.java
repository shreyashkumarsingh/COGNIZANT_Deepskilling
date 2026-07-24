package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Exercise 1, 2, 3, 5, 6, 7, 8
 * Main class to load the Spring context and test all configurations.
 */
public class LibraryManagementApplication {

    public static void main(String[] args) {

        System.out.println("=== Loading Spring Application Context ===");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("\n=== Testing BookService ===");

        BookService bookService =
                context.getBean("bookService", BookService.class);

        bookService.addBook("Spring in Action");

        String book = bookService.getBookById(1);
        System.out.println("Retrieved: " + book);

        System.out.println("\n=== Closing Context ===");
        ((ClassPathXmlApplicationContext) context).close();

    }

}
