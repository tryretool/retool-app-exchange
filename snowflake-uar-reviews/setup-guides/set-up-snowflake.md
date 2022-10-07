# App Setup - Step 1: Snowflake

## What's Snowflake?
Snowflake provides cloud-based data storage and analytics services, and if you're here, you're likely already using it! The Snowflake User Access Roles Review app is designed to help you conduct regular UAR reviews defined in your Snowflake resources.

## Output
The goal of this section is to:
* Ensure you have a Snowflake user with the ACCOUNTADMIN role
* Ensure you create the necessary tables used in the Create Review Cycle, Manager Review Portal, and Compliance Review Portal Retool applications

## Step 1 - Snowflake user
The Snowflake User Access Roles Review app requires a Snowflake user with the ACCOUNTADMIN role. 

If you would like to create a new Snowflake user for Retool, please follow Snowflake's instructions on [creating a user](https://docs.snowflake.com/en/user-guide/admin-user-management.html#creating-users). Again, please ensure that this user has the [ACCOUNTADMIN](https://docs.snowflake.com/en/user-guide/security-access-control-considerations.html#using-the-accountadmin-role) role.


## Step 2 - Create Schema

Create the 4 tables used across the applications in your database: 
- _ACCESS_REVIEWS_
- _EMPLOYEES_
- _SYSTEM_ROLES_
- _REVIEW_CYCLES_

Please follow Snowflake's instructions on [creating a table](https://docs.snowflake.com/en/sql-reference/sql/create-table.html).

### Access_Reviews
```
create or replace TABLE <your snowflake database>.<your schema>.ACCESS_REVIEWS (
	ID NUMBER(38,0) NOT NULL DEFAULT <your snowflake database>.<your schema>.ACCESS_REVIEWS_SEQ.NEXTVAL,
	STATUS VARCHAR(16777216),
	EMPLOYEE_EMAIL VARCHAR(16777216),
	REVIEW_CYCLE_ID NUMBER(38,0),
	SYSTEMROLE_ID VARCHAR(16777216),
	INITIALDECISIONREASON VARCHAR(16777216),
	UPDATED_AT TIMESTAMP_NTZ(9),
	SUBMITTED_AT TIMESTAMP_NTZ(9),
	ACTION VARCHAR(16777216),
	REASON VARCHAR(16777216),
	CLOSED_BY_EMAIL VARCHAR(16777216),
	CLOSED_AT TIMESTAMP_NTZ(9)
);
```
### Employees

```
create or replace TABLE <your snowflake database>.<your schema>.EMPLOYEES (
	EMPLOYEE_ID NUMBER(38,0),
	EMAIL VARCHAR(16777216),
	NAME VARCHAR(16777216),
	REVIEWER_EMAIL VARCHAR(16777216)
);
```

### System Roles
```
create or replace TABLE <your snowflake database>.<your schema>.SYSTEM_ROLES (
	ID NUMBER(38,0) NOT NULL DEFAULT <your snowflake database>.<your schema>.SYSTEM_ROLES_SEQ.NEXTVAL,
	NAME VARCHAR(16777216)
);
```
### Review Cycles 
```
create or replace TABLE <your snowflake database>.<your schema>.REVIEW_CYCLES (
	ID NUMBER(38,0) NOT NULL DEFAULT <your snowflake database>.<your schema>.REVIEW_CYCLES_SEQ.NEXTVAL,
	NAME VARCHAR(16777216),
	START_DATE DATE,
	END_DATE DATE,
	PREVIOUS_CYCLE_ID NUMBER(38,0)
);
```
## Summary
You now have a Snowflake user with the ACCOUNTADMIN role, which you can plug into the next step. You have also created the tables that will be used in the Retool applications. 

## Next step
[Step-by-step: Set up Retool Resource](./set-up-retool-resource.md)