-- ============================================================
-- Exercise 5: Triggers
-- ============================================================

-- ------------------------------------------------------------
-- Scenario 1: UpdateCustomerLastModified - stamp LastModified
-- with the current date on every update.
-- ------------------------------------------------------------
CREATE OR REPLACE TRIGGER UpdateCustomerLastModified
BEFORE UPDATE ON Customers
FOR EACH ROW
BEGIN
    :NEW.LastModified := SYSDATE;
END;
/


-- ------------------------------------------------------------
-- Scenario 2: LogTransaction - write an audit row whenever a
-- transaction is inserted. (Uses AuditLog table from 00_schema.sql)
-- ------------------------------------------------------------
CREATE OR REPLACE TRIGGER LogTransaction
AFTER INSERT ON Transactions
FOR EACH ROW
BEGIN
    INSERT INTO AuditLog (TransactionID, AccountID, Amount, TransactionType, LoggedAt)
    VALUES (:NEW.TransactionID, :NEW.AccountID, :NEW.Amount, :NEW.TransactionType, SYSDATE);
END;
/


-- ------------------------------------------------------------
-- Scenario 3: CheckTransactionRules - enforce that withdrawals
-- do not exceed balance and deposits are positive, before the
-- transaction row is inserted.
-- ------------------------------------------------------------
CREATE OR REPLACE TRIGGER CheckTransactionRules
BEFORE INSERT ON Transactions
FOR EACH ROW
DECLARE
    v_balance Accounts.Balance%TYPE;
BEGIN
    SELECT Balance INTO v_balance
    FROM Accounts
    WHERE AccountID = :NEW.AccountID;

    IF :NEW.TransactionType = 'Withdrawal' AND :NEW.Amount > v_balance THEN
        RAISE_APPLICATION_ERROR(-20010, 'Withdrawal amount exceeds account balance');
    END IF;

    IF :NEW.TransactionType = 'Deposit' AND :NEW.Amount <= 0 THEN
        RAISE_APPLICATION_ERROR(-20011, 'Deposit amount must be positive');
    END IF;
END;
/
