package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Exercise 1  — BookService class
 * Exercise 2  — Setter method for BookRepository (DI)
 * Exercise 6  — Annotated with @Service for component scanning
 * Exercise 7  — Constructor injection + Setter injection
 */
@Service
public class BookService {

    private BookRepository bookRepository;

    // Exercise 7 — Constructor Injection
    public BookService() {
    }

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("[BookService] Constructor injection applied.");
    }

    // Exercise 2, 5, 7 — Setter Injection
    @Autowired
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("[BookService] Setter injection applied.");
    }

    public void addBook(String book) {
        System.out.println("[BookService] addBook() called.");
        bookRepository.save(book);
    }

    public String getBookById(int id) {
        System.out.println("[BookService] getBookById() called.");
        return bookRepository.findById(id);
    }

}
