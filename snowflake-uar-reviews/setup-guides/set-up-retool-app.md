# App Setup - Step 3: Apps in Retool

## What's an App in Retool?
As the name suggests, an App is a single "view" (or "page") that you can build in Retool. An App is built from a combination of Components to construct the UI, and Queries that define calls to your Resources. Queries can do reads or writes.

## Output
The goal of this section is:
* To get the 3 applications that make up Snowflake User Access Roles Review into your Retool instance. 🚀


## Step 3.1 - Download the app "code"
In this step, you will obtain the code file in the `/code` directory in this Github repo.

To do this, clone this Github repo:
`git clone https://github.com/tryretool/retool-app-exchange.git`

(Alternatively, you can manually click-to-download the file in the [`/code`](../code) directory.)

You will have the following 3 files: 
- `Compliance_Review_Portal.json`
- `Create_Review_Cycle.json`
- `Manager_Review_Portal.json`

## Step 3.2 - Import the app "code"
First, let's create a folder to put this code into, to keep things organized.
1. On your Retool home page, click "Create new" → "Create a new folder". Give this folder a name you like, e.g. "Snowflake User Access Roles Review".

2. Now, let's import the app.
   * Click "Create new" → "Import an app".
   * Upload the `Compliance_Review_Portal.json`, `Create_Review_Cycle.json`, `Manager_Review_Portal.json` files, and select the folder you just created ("Snowflake User Access Roles Review") as the destination.

## Step 3.3 - Test it out
In this section, we're going to test out the functionality in your new app. 

1. Identify the employees and system roles for which we want to review:
    * The Create_Review_Cycle Retool application will allow you to manually input all the _EMPLOYEE_ and _SYSTEM_ROLES_ data required to generate the _ACCESS_REVIEWS_ table
    * If this is your first time using the app, create a couple example employees, system roles, and then create a review cycle. Make sure that you're email address used to login to Retool is one of the employees and you are listed as the reviewer email in the employees tab of the Create_Review_Cycle application. 
    * Alternatively, you can replace the _EMPLOYEE_ and _SYSTEM_ROLE_ tables with records from your existing ETL or database processes. Simply modify the createAccessReviews SQL in the Create_Review_Cycle application to point to the correct tables. 
2. In the Create_Review_Cycle admin application, define a new review cycle
    * This will first save a new record in the _REVIEW_CYCLE_ table and then create the _ACCESS_REVIEWS_ table that will be used in the Manager_Review_Portal and Compliance_Review_Portal applications. 


## Summary

You should now have Snowflake User Access Roles Review app suite within your Retool instance! 🥳

**Next steps:** You can choose to customize or extend the application any way you like. Introduce any necessary automations to the Compliance_Review_Portal  application. Examples include:
    * Making an API request to create/update JIRA tickets 
    * Making an API request to send a Slack notification in the compliance channel that the data is ready to be reviewed. 

Please consider contributing back to this Github repo if you make something you think other people would like to use! Get in touch by opening a Github Issue if you have an idea you want to run by us.

**Questions, comments, feedback?** Please open a Github Issue and let us know!
