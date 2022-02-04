# Incident Central Setup - Step 3: Database

## What's this database for?
Incident Central will write each new triggered incident to a database table. This table will be the one place where you keep track of all the different metadata associated with each incident. For example, each incident has a name, a start time, a PagerDuty profile, a Slack channel, and so on.

In the future, you may choose to add some other information (e.g. a Google doc, or a Jira ticket) to each incident, in which case you can add additional columns to this database table, and modify Incident Central to write this additional information.

## Output
The goal of this section is to create:
* A database, if you don't already have one
* A database table called `incidents` with the schema that Incident Central expects

## Step 3.1 - Create a database instance
If you already have a database that you want to use for Incident Central, you are all set. (The example code we provide will specifically be suited for PostgreSQL, but you can adapt it to whatever database you are using, including a non-relational database if you want.)

Otherwise, you can spin up a PostgreSQL database on a variety of platforms. [Heroku's managed PostgreSQL offering](https://www.heroku.com/postgres) is one example, and it has a free tier.

## Step 3.2 - Create a database table called `incidents` and define its schema
Run the following command on your database:
```
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

Then run:
```
CREATE TABLE IF NOT EXISTS incidents (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),

  pagerduty_id TEXT,
  pagerduty_url TEXT,

  slack_channel_id TEXT,
  slack_channel_name TEXT,
  slack_channel_url TEXT,

  reporter_email TEXT,
  incident_commander_email TEXT
);

CREATE TRIGGER set_updated_at_on_incidents
BEFORE UPDATE ON incidents
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
```
### Optional way to run these commands
An easy way to run these commands on your database is to connect your database to Retool first, and then run the command through Retool.

If you would like to do this:
* First, go through Step 4: Retool Resources to get this database connected to Retool (as the "Incident Database" resource).
* Upload the `Database-Setup` Retool app provided in [the `code/extras` subdirectory](./code/extras/) into your Retool instance. To do this, download the code, and go to the homepage of Retool and click "Create new"  → "Import an app".
* Open the `Database-Setup` app in **_Edit_** mode, and manually click to run the two Queries (shown in the bottom panel of the Editor view) in the app.

## Summary
You now have a database with an `incidents` table that Incident Central can write to.

## Next step
[Step-by-step: Set up Retool Resources](./set-up-retool-resources.md)
