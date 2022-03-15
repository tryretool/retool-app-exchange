# Snowflake Resource Optimization Setup - Step 2: Resources in Retool

## What's a Resource in Retool?
A Resource is a core concept in Retool. A Resource is a config that defines a backend data source that your Retool apps can talk to. Retool supports a variety of different kinds of backends, from databases to REST API calls, to special integrations like Stripe.

You can define a Resource once, then use it again and again in your Retool apps.

Read more about Resources in [the Retool docs](https://docs.retool.com/docs/integrations-overview).

## Output
The goal of this section is to create:
* A Resource called `Snowflake DB`. This will be a reusable way to hit the Snowflake database that you set up in Step 1.

Note: The names here are important! The app code we provide expects the Resources to have these names. (You can choose to rename them, after you've finished setting everything up.)

## Step 3.1 - Create the "Snowflake DB" Resource
1. On the Resources page (`/resources`) in Retool, click "Create New" in the upper right.
2. Select the "Snowflake" resource type.
3. Fill out the resource information as follows. (For more info, see [our docs on Snowflake integration](https://docs.retool.com/docs/snowflake-integration).)

```
Name: Snowflake DB

Account name: <your account name>
Database name: <your database name>
Database schema: <your database schema>
Database warehouse: <your database warehouse>
User role: ACCOUNTADIN (this role is required)

Authentication: Password (you must use password authentication)
Database username: <your database username>
Database password: <your database password>

[X] Disable converting queries to prepared statements (you must check this box)
```

Note: You must check the 'Disable converting queries to prepared statements' box (see more info [here](https://docs.retool.com/docs/sql-in-retool#prepared-statements)).

4. Click "Save changes".

<img src="./images/snowflake-resource.png" alt="Setting up the Snowflake resource" style="height: 500px;">


## Summary
You now have a Snowflake resource defined in Retool, named `Snowflake DB`.

Reminder: The names here are important! The app code we provide expects the Resources to have these names. (You can choose to rename them, after you've finished setting everything up.)

Now, we are ready to import our apps!

## Next step
[Step-by-step: Set up Retool App](./set-up-retool-app.md)