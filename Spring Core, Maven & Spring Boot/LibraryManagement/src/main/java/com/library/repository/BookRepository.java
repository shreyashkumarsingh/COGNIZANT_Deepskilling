package com.library.repository;

import org.springframework.stereotype.Repository;

/**
 * Exercise 1 — BookRepository class
 * Exercise 6 — Annotated with @Repository for component scanning
 */
@Repository
public class BookRepository {

    public void save(String book) {
        System.out.println("[Repository] Saving book: " + book);
    }

    public String findById(int id) {
        System.out.println("[Repository] Finding book with id: " + id);
        return "Book-" + id;
    }

}
