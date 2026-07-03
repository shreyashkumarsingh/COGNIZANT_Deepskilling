-- ============================================================
-- Exercise 6: Cursors
-- ============================================================

-- ------------------------------------------------------------
-- Scenario 1: GenerateMonthlyStatements - explicit cursor over
-- this month's transactions, printed per customer.
-- ------------------------------------------------------------
DECLARE
    CURSOR GenerateMonthlyStatements IS
        SELECT c.Name, t.TransactionID, t.TransactionDate, t.Amount, t.TransactionType
        FROM Transactions t
        JOIN Accounts a ON a.AccountID = t.AccountID
        JOIN Customers c ON c.CustomerID = a.CustomerID
        WHERE TRUNC(t.TransactionDate, 'MM') = TRUNC(SYSDATE, 'MM')
        ORDER BY c.Name, t.TransactionDate;

    v_current_customer Customers.Name%TYPE := NULL;
BEGIN
    FOR stmt_rec IN GenerateMonthlyStatements LOOP
        IF v_current_customer IS NULL OR v_current_customer != stmt_rec.Name THEN
            v_current_customer := stmt_rec.Name;
            DBMS_OUTPUT.PUT_LINE('--- Statement for ' || v_current_customer || ' ---');
        END IF;

        DBMS_OUTPUT.PUT_LINE('  Txn ' || stmt_rec.TransactionID || ' | ' ||
                              TO_CHAR(stmt_rec.TransactionDate, 'YYYY-MM-DD') || ' | ' ||
                              stmt_rec.TransactionType || ' | ' || stmt_rec.Amount);
    END LOOP;
END;
/


-- ------------------------------------------------------------
-- Scenario 2: ApplyAnnualFee - deduct a fixed annual
-- maintenance fee from every account using an explicit cursor.
-- ------------------------------------------------------------
DECLARE
    CURSOR ApplyAnnualFee IS
        SELECT AccountID, Balance FROM Accounts FOR UPDATE;

    v_fee CONSTANT NUMBER := 25;
BEGIN
    FOR acct_rec IN ApplyAnnualFee LOOP
        UPDATE Accounts
        SET Balance = Balance - v_fee,
            LastModified = SYSDATE
        WHERE CURRENT OF ApplyAnnualFee;

        DBMS_OUTPUT.PUT_LINE('Annual fee of ' || v_fee || ' deducted from account ' || acct_rec.AccountID);
    END LOOP;
    COMMIT;
END;
/


-- ------------------------------------------------------------
-- Scenario 3: UpdateLoanInterestRates - fetch all loans and
-- update rates according to a new policy (e.g. +0.5% for loans
-- above $5000, otherwise +0.25%) using an explicit cursor.
-- ------------------------------------------------------------
DECLARE
    CURSOR UpdateLoanInterestRates IS
        SELECT LoanID, LoanAmount, InterestRate FROM Loans FOR UPDATE;

    v_new_rate Loans.InterestRate%TYPE;
BEGIN
    FOR loan_rec IN UpdateLoanInterestRates LOOP
        IF loan_rec.LoanAmount > 5000 THEN
            v_new_rate := loan_rec.InterestRate + 0.5;
        ELSE
            v_new_rate := loan_rec.InterestRate + 0.25;
        END IF;

        UPDATE Loans
        SET InterestRate = v_new_rate
        WHERE CURRENT OF UpdateLoanInterestRates;

        DBMS_OUTPUT.PUT_LINE('Loan ' || loan_rec.LoanID || ' rate updated to ' || v_new_rate || '%');
    END LOOP;
    COMMIT;
END;
/
