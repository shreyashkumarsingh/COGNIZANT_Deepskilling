-- ============================================================
-- Exercise 1: Control Structures
-- ============================================================

-- ------------------------------------------------------------
-- Scenario 1: Apply a 1% discount to loan interest rates for
-- customers above 60 years old.
-- ------------------------------------------------------------
DECLARE
    v_age NUMBER;
BEGIN
    FOR cust_rec IN (SELECT CustomerID, DOB FROM Customers) LOOP
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, cust_rec.DOB) / 12);

        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - (InterestRate * 0.01)
            WHERE CustomerID = cust_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Applied 1% discount for CustomerID: ' || cust_rec.CustomerID
                                  || ' (Age: ' || v_age || ')');
        END IF;
    END LOOP;
    COMMIT;
END;
/


-- ------------------------------------------------------------
-- Scenario 2: Set IsVIP flag to TRUE for customers with a
-- balance over $10,000.
-- (Requires the IsVIP column added in 00_schema.sql)
-- ------------------------------------------------------------
BEGIN
    FOR cust_rec IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF cust_rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'Y'
            WHERE CustomerID = cust_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE('CustomerID ' || cust_rec.CustomerID || ' promoted to VIP');
        END IF;
    END LOOP;
    COMMIT;
END;
/


-- ------------------------------------------------------------
-- Scenario 3: Send reminders for loans due within the next 30 days.
-- ------------------------------------------------------------
BEGIN
    FOR loan_rec IN (
        SELECT l.LoanID, l.CustomerID, l.EndDate, c.Name
        FROM Loans l
        JOIN Customers c ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ' || loan_rec.LoanID || ' for ' || loan_rec.Name ||
                              ' is due on ' || TO_CHAR(loan_rec.EndDate, 'YYYY-MM-DD'));
    END LOOP;
END;
/
