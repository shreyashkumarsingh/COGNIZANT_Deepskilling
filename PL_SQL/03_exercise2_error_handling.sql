-- ============================================================
-- Exercise 2: Error Handling
-- ============================================================

-- ------------------------------------------------------------
-- Scenario 1: SafeTransferFunds - transfer funds between two
-- accounts, roll back and log on any error.
-- ------------------------------------------------------------
CREATE OR REPLACE PROCEDURE SafeTransferFunds (
    p_from_account IN NUMBER,
    p_to_account   IN NUMBER,
    p_amount       IN NUMBER
) IS
    v_from_balance Accounts.Balance%TYPE;
    e_insufficient_funds EXCEPTION;
BEGIN
    SELECT Balance INTO v_from_balance
    FROM Accounts
    WHERE AccountID = p_from_account
    FOR UPDATE;

    IF v_from_balance < p_amount THEN
        RAISE e_insufficient_funds;
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_amount, LastModified = SYSDATE
    WHERE AccountID = p_from_account;

    UPDATE Accounts
    SET Balance = Balance + p_amount, LastModified = SYSDATE
    WHERE AccountID = p_to_account;

    IF SQL%ROWCOUNT = 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Destination account not found: ' || p_to_account);
    END IF;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Transfer successful: ' || p_amount || ' from ' ||
                          p_from_account || ' to ' || p_to_account);

EXCEPTION
    WHEN e_insufficient_funds THEN
        ROLLBACK;
        INSERT INTO ErrorLog (ProcName, ErrorMsg)
        VALUES ('SafeTransferFunds', 'Insufficient funds in account ' || p_from_account);
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds in account ' || p_from_account);

    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        INSERT INTO ErrorLog (ProcName, ErrorMsg)
        VALUES ('SafeTransferFunds', 'Source account not found: ' || p_from_account);
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Error: Source account not found');

    WHEN OTHERS THEN
        ROLLBACK;
        INSERT INTO ErrorLog (ProcName, ErrorMsg)
        VALUES ('SafeTransferFunds', SQLERRM);
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END SafeTransferFunds;
/


-- ------------------------------------------------------------
-- Scenario 2: UpdateSalary - increase salary by a percentage,
-- handle a missing employee ID gracefully.
-- ------------------------------------------------------------
CREATE OR REPLACE PROCEDURE UpdateSalary (
    p_employee_id IN NUMBER,
    p_percentage  IN NUMBER
) IS
    v_exists NUMBER;
BEGIN
    SELECT COUNT(*) INTO v_exists FROM Employees WHERE EmployeeID = p_employee_id;

    IF v_exists = 0 THEN
        RAISE_APPLICATION_ERROR(-20002, 'EmployeeID ' || p_employee_id || ' does not exist');
    END IF;

    UPDATE Employees
    SET Salary = Salary + (Salary * p_percentage / 100)
    WHERE EmployeeID = p_employee_id;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Salary updated for EmployeeID: ' || p_employee_id);

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        INSERT INTO ErrorLog (ProcName, ErrorMsg)
        VALUES ('UpdateSalary', SQLERRM);
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END UpdateSalary;
/


-- ------------------------------------------------------------
-- Scenario 3: AddNewCustomer - insert a new customer, handle
-- duplicate CustomerID.
-- ------------------------------------------------------------
CREATE OR REPLACE PROCEDURE AddNewCustomer (
    p_customer_id IN NUMBER,
    p_name        IN VARCHAR2,
    p_dob         IN DATE,
    p_balance     IN NUMBER
) IS
BEGIN
    INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
    VALUES (p_customer_id, p_name, p_dob, p_balance, SYSDATE);

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Customer added: ' || p_customer_id);

EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        ROLLBACK;
        INSERT INTO ErrorLog (ProcName, ErrorMsg)
        VALUES ('AddNewCustomer', 'Duplicate CustomerID: ' || p_customer_id);
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Error: CustomerID ' || p_customer_id || ' already exists');

    WHEN OTHERS THEN
        ROLLBACK;
        INSERT INTO ErrorLog (ProcName, ErrorMsg)
        VALUES ('AddNewCustomer', SQLERRM);
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END AddNewCustomer;
/
