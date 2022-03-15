# Snowflake Resource Optimization Setup - Step 3: Apps in Retool

## What's an App in Retool?
As the name suggests, an App is a single "view" (or "page") that you can build in Retool. An App is built from a combination of Components to construct the UI, and Queries that define calls to your Resources. Queries can do reads or writes.

## Output
The goal of this section is:
* To get Snowflake Resource Optimization: Setup & Configuration into your Retool instance. 🚀


## Step 3.1 - Download the app "code"
In this step, you will obtain the code file in the `/code` directory in this Github repo.

To do this, clone this Github repo:
`git clone https://github.com/tryretool/snowflake-resource-optimization.git`

(Alternatively, you can manually click-to-download the file in the [`code/`](./code) directory.)

You will have the following file: `Snowflake-Resource-Optimization-Setup-Configuration.json`.

## Step 3.2 - Import the app "code"
First, let's create a folder to put all of this code into, to keep things organized.
1. On your Retool home page, click "Create new" → "Create a new folder". Give this folder a name you like, e.g. "Snowflake Resource Optimization".

2. Now, let's import the app.
   * Click "Create new" → "Import an app".
   * Upload the `Snowflake-Resource-Optimization-Setup-Configuration.json` file, and select the folder you just created ("Snowflake Resource Optimization") as the destination.

## Step 3.3 - Test it out
In this section, we're going to test out the functionality in your new app. Please be aware that you can use this app to make irreversible changes (e.g. drop a warehouse or user).

Navigate to your "Snowflake Resource Optimization" folder, and click on the "Snowflake Resource Optimization: Setup & Configuration" app. Toggle through the application tabs (Warehouses, Users, Tasks, Else), review query results, and try out a couple of actions, e.g.: 
- Set auto-resume for a warehouse without it
- Suspend an idle warehouse
- Disable a user who has never logged in
- etc.

## Summary

You should now have Snowflake Resource Optimization: Setup & Configuration within your Retool instance! 🥳

**Next steps:** You can choose to extend or adjust this app in any way.

Please consider contributing back to this Github repo if you make something you think other people would like to use! Get in touch by opening a Github Issue if you have an idea you want to run by us.

**Questions, comments, feedback?** Please open a Github Issue and let us know!
