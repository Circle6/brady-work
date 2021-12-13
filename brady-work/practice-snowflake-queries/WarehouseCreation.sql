// Create warehouse
CREATE WAREHOUSE cool
    WAREHOUSE_SIZE = XSMALL;
    
// Create DB
CREATE DATABASE PARTS_DB;

// Create Schema
CREATE SCHEMA PARTS_SCHEMA;

// Create Table
CREATE TABLE PARTS_TBL (
//    id integer PRIMARY KEY AUTOINCREMENT NOT NULL, -- auto incrementing IDs   
    brand varchar (100),  -- variable string column
    model varchar (100),  -- variable string column
    release_date string,
    sensor varchar (100),  -- variable string column
    dpi integer,  -- variable string column
    button integer,  -- variable string column
    "connection" varchar (20),  -- variable string column
    rgb boolean,  -- variable string column
    length float,  -- variable string column
    width float,  -- variable string column
    height float,  -- variable string column
    weight string,  -- variable string column
    price_usd string  -- variable string column
);

// Insert row into table
INSERT INTO LINK_TBL (name, preferences) 
VALUES ('scott', 'blue');

// Read from table
SELECT * 
FROM LINK_TBL
WHERE PREFERENCES = 'blue'
ORDER BY CREATED_AT desc
LIMIT 1
;

// Delete table
DROP TABLE PARTS_TBL;