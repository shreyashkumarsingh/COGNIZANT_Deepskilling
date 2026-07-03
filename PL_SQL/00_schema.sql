-- ============================================================
-- 00_schema.sql
-- Base schema for the Cognizant Deepskilling PL/SQL exercises
-- ============================================================

CREATE TABLE Customers (
    CustomerID    NUMBER PRIMARY KEY,
    Name          VARCHAR2(100),
    DOB           DATE,
    Balance       NUMBER,
    LastModified  DATE,
    IsVIP         VARCHAR2(1) DEFAULT 'N'   -- added for Exercise 1, Scenario 2
);

CREATE TABLE Accounts (
    AccountID     NUMBER PRIMARY KEY,
    CustomerID    NUMBER,
    AccountType   VARCHAR2(20),
    Balance       NUMBER,
    LastModified  DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Transactions (
    TransactionID     NUMBER PRIMARY KEY,
    AccountID         NUMBER,
    TransactionDate   DATE,
    Amount            NUMBER,
    TransactionType   VARCHAR2(10),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

CREATE TABLE Loans (
    LoanID        NUMBER PRIMARY KEY,
    CustomerID    NUMBER,
    LoanAmount    NUMBER,
    InterestRate  NUMBER,
    StartDate     DATE,
    EndDate       DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID  NUMBER PRIMARY KEY,
    Name        VARCHAR2(100),
    Position    VARCHAR2(50),
    Salary      NUMBER,
    Department  VARCHAR2(50),
    HireDate    DATE
);

-- Supporting table used by Exercise 2 (error logging) and Exercise 5 (audit trigger)
CREATE TABLE ErrorLog (
    LogID       NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    LogDate     DATE DEFAULT SYSDATE,
    ProcName    VARCHAR2(100),
    ErrorMsg    VARCHAR2(4000)
);

CREATE TABLE AuditLog (
    AuditID          NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    TransactionID    NUMBER,
    AccountID        NUMBER,
    Amount           NUMBER,
    TransactionType  VARCHAR2(10),
    LoggedAt         DATE DEFAULT SYSDATE
);
