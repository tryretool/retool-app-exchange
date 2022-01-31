# Incident Central Setup - Step 2: Slack

## What's Slack?
Slack is the tool that Incident Central will use to create a real-time communication channel when an incident is triggered. The channel is meant to be a central place for people to collaborate to solve the incident.

## Output
The goal of this section is to create:
* A Slack account (aka "workspace"), if you don't have one already. (A free trial works.)
* A Slack API key.
* Inside Slack, you should invite (at least) all the people in your organization who may help out in incident response.

## Step 2.1 - Slack workspace
Head on over to [slack.com](https://slack.com/) and sign up, or sign in.

## Step 2.2 - Slack API key
In order to get a Slack API key, you'll first need to create a Slack app. To do this, follow the instructions in [Slack's Basic app setup docs](https://api.slack.com/authentication/basics): in particular the steps "Creating an app", "Requesting scopes", and "Installing the app to a workspace". (You don't need to do the rest.)

For the "Requesting scopes" step, you should specify the following scopes:
```
Bot Token Scopes:
- channels:manage
- users:read
- users:read.email
```

After you install the app to your Slack workspace, you will be able to make API requests using the "Bot User OAuth Token" associated with your new Slack app.

## Step 2.3 - Invite oncalls to Slack
If you already have everyone in Slack, you are all set.

If this is your first time setting up Slack, you'll want to invite ideally your whole team to Slack, but definitely anyone who may help out in incident response (whether or not they are oncall first-responders).

### Important assumption
Incident Central works off the following assumptions about your setup:
* The email address of people in your PagerDuty account matches their email address within your Slack account.

## Summary
You now have the following items that you can plug into a later step:
* Slack API key - this is the "Bot User OAuth Token" associated with your Slack app

You also have a Slack workspace in which a new Slack channel will be opened whenever an incident is triggered through Incident Central. Incident Central will autogenerate a unique, human-readable name for the incident, and give the Slack channel the same name. Incident Central will also add the oncall person (as defined by PagerDuty) and incident reporter to this new channel.
