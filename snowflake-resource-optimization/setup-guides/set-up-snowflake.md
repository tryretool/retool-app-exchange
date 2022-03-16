# Snowflake Resource Optimization Setup - Step 1: Snowflake

## What's Snowflake?
Snowflake provides cloud-based data storage and analytics services, and if you're here, you're likely already using it! The Snowflake Resource Optimization: Setup & Configuration app will read from Snowflake to populate its queries, and write back to Snowflake as users take actions (e.g. setting up auto-resume for a warehouse).

## Output
The goal of this section is to create:
* A Snowflake account, if you don't have one already. (A free trial works.)
* A PagerDuty API key.
* Inside PagerDuty, you should configure at least 1 service, and configure its "escalation policy" to alert the people who are oncall for that service.

## Step 1.1 - PagerDuty account
Head on over to [pagerduty.com](https://pagerduty.com/) and sign up, or sign in.

## Step 1.2 - PagerDuty API key
Follow the instructions in the [PagerDuty API Access Keys docs](https://support.pagerduty.com/docs/api-access-keys) to create a "General Access REST API key."

Note: We want this key to have "write" access so that we can create incidents. So, do not make the key "read-only".

## Step 1.3 - Invite oncalls to PagerDuty
If you already have existing oncall people/rotations in PagerDuty, you are all set.

If this is your first time setting up PagerDuty, you'll want to invite the people you want to be oncall. To do this, follow the instructions in [PagerDuty's Manage Users docs](https://support.pagerduty.com/docs/users), under "Add a User". (You may also consider grouping people onto [Teams](https://support.pagerduty.com/docs/teams).)

### Important assumption
Incident Central works off the following assumptions about your setup:
* The email address of people in your PagerDuty account matches their email address within your Slack account.

## Step 1.4 - PagerDuty service with escalation policy
If you already have existing services and escalation policies defined in PagerDuty, you are all set.

If you don't, follow the instructions in the [PagerDuty Services and Integrations docs](https://support.pagerduty.com/docs/services-and-integrations) under "Create a Service". This will take you through creating a service along with its "escalation policy." The escalation policy is the set of rules that defines who to notify, in what order, when the service has an incident.


## Summary
You now have the following items that you can plug into a later step:
* PagerDuty API key

You also have a "service" within PagerDuty that you want to be able to trigger an incident on, and this service has an "escalation policy" that defines who will get notified when an incident starts.

## Next step
[Step-by-step: Set up Retool Resource](./set-up-retool-resource.md)