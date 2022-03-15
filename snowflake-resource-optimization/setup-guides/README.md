# Snowflake Resource Optimization: Setup & Configuration - Setup guide

This guide helps you set up Snowflake Resource Optimization: Setup & Configuration inside your Retool instance. (If you're wondering "What's Snowflake Resource Optimization: Setup & Configuration?", see [the main README](../README.md).)

## Overview
As an overview, we'll go through the following steps:

* Set up backend dependencies. (Steps 1-3)
    - Configuring your Slack and PagerDuty instances.
    - Creating a relational database, if you don't have one already.
* Set up these backends as Resources in Retool. (Step 4)
* Download and configure the Retool app files in Retool. (Step 5)

## Important assumptions
Incident Central works off the following assumptions about your setup:
* The email address of people in your PagerDuty account matches their email address within your Slack account.

## Step 1 - Set up PagerDuty
[Step-by-step: Set up PagerDuty](./set-up-pagerduty.md)

## Step 2 - Set up Slack
[Step-by-step: Set up Slack](./set-up-slack.md)

## Step 3 - Set up a relational database for incident data
[Step-by-step: Set up a database](./set-up-database.md)

## Step 4 - Set up these backends as Resources in Retool
[Step-by-step: Set up Retool Resources](./set-up-retool-resources.md)

## Step 5 - Set up the Retool app files
[Step-by-step: Set up Retool Apps](./set-up-retool-apps.md)
