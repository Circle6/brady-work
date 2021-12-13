// Create User
create or replace user Node
    PASSWORD                = 'password'
    LOGIN_NAME              = Node
    MUST_CHANGE_PASSWORD    = false
    DEFAULT_ROLE            = 'ACCOUNTADMIN';
    
// Add role to user
GRANT ROLE USERADMIN TO USER Node;

// Show Users
SHOW USERS;
// Show Roles
SHOW ROLES;

// Check Current Account
SELECT CURRENT_ACCOUNT();