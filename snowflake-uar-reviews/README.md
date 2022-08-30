# User Access Reviews by Snowflake

## Why you need this
This Retool app makes it easy to perform periodic reviews of employee access rights. Navigate the process of preparing data, reviewing access rights, and remediating within an easy-to-use GUI. 



## What does the User Access Review app do?
Provides an interface to re-evaluate user roles, access privileges, and credentials to mitigate insider threats, prevent insider mistakes, reduce excessive access, and meet compliance requirements such as HIPAA, FedRAMP, SOX, and more. Take actions such as approving or revoking privileges and enter your reasons for doing so. Submit individual changes or update multiple records in bulk. 

This repo includes all code needed to source user roles within your Snowflake instance and generate the table schemas that the application attaches to. Once you load this application, you have the ability to modify the source code as you need to align to your own organization’s processes. This repo: 

* Provides a schema to use on Snowflake
* Provides a manager review application that implements filtering at the manager level
* An admin application to get started with user and role entry
* A review application to audit manager submissions for super-users and compliance teams

## Caveats
* If you need row-level security reads and writes, talk to your Retool account team
* The template assumes a simple hierarchy (reviewer to employee), however you can customize this by modifying the schema
* These applications are meant to be configurable to meet your needs 
## Screenshots
Manager Review Portal
<p align="center">
<img src="./images/manager_review_landing.png" alt="Manager Review Portal" style="width: 600px;">
</p>
Compliance Review Portal
<p align="center">
<img src="./images/compliance_review.png" alt="Manager Review Portal" style="width: 600px;">
</p>
Create Review Cycle Admin Application
<p align="center">
<img src="./images/create_cycle_name_cycle.png" alt="Manager Review Portal" style="width: 600px;">
</p>
<p align="center">
<img src="./images/create_cycle_employees.png" alt="Manager Review Portal" style="width: 600px;">
</p>
<p align="center">
<img src="./images/create_cycle_system_roles.png" alt="Manager Review Portal" style="width: 600px;">
</p>

## Technical Details + Setup
1. Source the 3 applications from the retool/app-exchange repository: 
    * Manager_Review_Portal.json
    * Compliance_Review_Portal.json
    * Create_Review_Cycle.json

2. Import the app "code" in Retool
On your Retool home page, click "Create new" → "Create a new folder". Give this folder a name you like, e.g. "Snowflake User Access Reviews". Now, let's import the app. Click "Create new" → "Import an app". Upload the application .json files from step 1. 



3. Create the 4 tables used across the applications in your database: 
    * _ACCESS_REVIEWS_
    * _EMPLOYEES_
    * _SYSTEM_ROLES_
    * _REVIEW_CYCLES_
4. Identify the employees and system roles for which we want to review:  
    * The Create_Review_Cycle Retool application will allow you to manually input all the _EMPLOYEE_ and _SYSTEM_ROLES_ data required to generate the _ACCESS_REVIEWS_ table
    * If this is your first time using the app, create a couple example employees, system roles, and then create a review cycle. Make sure that you're email address used to login to Retool is one of the employees and you are listed as the reviewer email in the employees tab of the Create_Review_Cycle application. 
    * Alternatively, you can replace the _EMPLOYEE_ and _SYSTEM_ROLE_ tables with records from your existing ETL or database processes. Simply modify the createAccessReviews SQL in the Create_Review_Cycle application to point to the correct tables. 
5. In the Create_Review_Cycle admin application, define a new review cycle
    * This will first save a new record in the _REVIEW_CYCLE_ table and then create the _ACCESS_REVIEWS_ table that will be used in the Manager_Review_Portal and Compliance_Review_Portal applications. 
6. Customize the application by introducing any necessary automations to the Compliance_Review_Portal  application. Examples include:
    * Making an API request to create/update JIRA tickets 
    * Making an API request to send a Slack notification in the compliance channel that the data is ready to be reviewed. 


## How to contribute
Please open a Github Issue on this repo, and let us know about your interest in contributing! We encourage you to reach out before you get started building to get early feedback.
