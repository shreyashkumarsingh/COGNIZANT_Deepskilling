-- ============================================================
-- Exercise 4: Functions
-- ============================================================

-- ------------------------------------------------------------
-- Scenario 1: CalculateAge - returns age in years from DOB.
-- ------------------------------------------------------------
CREATE OR REPLACE FUNCTION CalculateAge (
    p_dob IN DATE
) RETURN NUMBER IS
    v_age NUMBER;
BEGIN
    v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, p_dob) / 12);
    RETURN v_age;
END CalculateAge;
/

-- Example usage:
-- SELECT CustomerID, Name, CalculateAge(DOB) AS Age FROM Customers;


-- ------------------------------------------------------------
-- Scenario 2: CalculateMonthlyInstallment - standard EMI
-- formula: P * r * (1+r)^n / ((1+r)^n - 1)
-- ------------------------------------------------------------
CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment (
    p_loan_amount   IN NUMBER,
    p_interest_rate IN NUMBER,   -- annual interest rate, e.g. 5 for 5%
    p_years         IN NUMBER
) RETURN NUMBER IS
    v_monthly_rate NUMBER;
    v_num_payments NUMBER;
    v_emi          NUMBER;
BEGIN
    v_monthly_rate := (p_interest_rate / 100) / 12;
    v_num_payments := p_years * 12;

    IF v_monthly_rate = 0 THEN
        v_emi := p_loan_amount / v_num_payments;
    ELSE
        v_emi := p_loan_amount * v_monthly_rate * POWER(1 + v_monthly_rate, v_num_payments)
                 / (POWER(1 + v_monthly_rate, v_num_payments) - 1);
    END IF;

    RETURN ROUND(v_emi, 2);
END CalculateMonthlyInstallment;
/

-- Example usage:
-- SELECT CalculateMonthlyInstallment(5000, 5, 5) FROM dual;


-- ------------------------------------------------------------
-- Scenario 3: HasSufficientBalance - boolean check on account
-- balance. (PL/SQL BOOLEAN cannot be returned directly to SQL,
-- so this is designed to be called from PL/SQL code; a second
-- SQL-callable wrapper returning VARCHAR2/NUMBER is included.)
-- ------------------------------------------------------------
CREATE OR REPLACE FUNCTION HasSufficientBalance (
    p_account_id IN NUMBER,
    p_amount     IN NUMBER
) RETURN BOOLEAN IS
    v_balance Accounts.Balance%TYPE;
BEGIN
    SELECT Balance INTO v_balance
    FROM Accounts
    WHERE AccountID = p_account_id;

    RETURN v_balance >= p_amount;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN FALSE;
END HasSufficientBalance;
/

-- SQL-callable version (BOOLEAN is not a valid SQL type)
CREATE OR REPLACE FUNCTION HasSufficientBalanceSQL (
    p_account_id IN NUMBER,
    p_amount     IN NUMBER
) RETURN VARCHAR2 IS
BEGIN
    IF HasSufficientBalance(p_account_id, p_amount) THEN
        RETURN 'Y';
    ELSE
        RETURN 'N';
    END IF;
END HasSufficientBalanceSQL;
/

-- Example usage:
-- SELECT HasSufficientBalanceSQL(1, 500) FROM dual;
