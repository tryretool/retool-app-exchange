# Incident Central Setup - Step 1: PagerDuty

## What's PagerDuty?
PagerDuty is the tool that Incident Central will use to trigger incidents for your services. PagerDuty will handle alerting the oncall staff you have configured within it.

Note, you can define "services" however you like—this is just the terminology in PagerDuty for a thing that an oncall supports.

## Output
The goal of this section is to create:
* A PagerDuty account, if you don't have one already. (A free trial works.)
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

If you are feeling fun, create at least 2 services! This will be more realistic.

Note: It's possible to define an oncall schedules—a rotation that consists of multiple people—in PagerDuty as well. You can then define an escalation policy that triggers a specific oncall schedule. To find out how to set up an oncall schedule, see [PagerDuty's Schedule Basics docs](https://support.pagerduty.com/docs/schedule-basics).

## Summary
You now have the following items that you can plug into a later step:
* PagerDuty API key

You also have a "service" within PagerDuty that you want to be able to trigger an incident on, and this service has an "escalation policy" that defines who will get notified when an incident starts.
