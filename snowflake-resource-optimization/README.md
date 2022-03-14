# Snowflake Resource Optimization: Setup & Configuration

<p align="center">
<img src="./images/incident-central-demo.gif" alt="Incident Central demo gif" style="width: 600px;">
</p>

## Why you need this
This Retool app extends [Snowflake's Resource Optimization: Setup & Configuration Quickstart Guide](https://quickstarts.snowflake.com/guide/resource_optimization_setup/index.html?index=..%2F..index#0).

The Resource Optimization Quickstart Guides are meant to help customers better monitor and manage their credit consumption. Setup & Configuration queries provide more proactive insight into warehouses that are not utilizing key features that can prevent runaway resource and cost consumption. Leverage these key queries to identify warehouses which should be re-configured to leverage the appropriate features.

Retool builds on the Quickstart Guide by enabling you to take action from right within the tool - set auto-suspend or auto-resume for your warehouses, assign warehouses or users resource monitors, suspend or drop idle warehouses, disable or drop idle users or roles, etc.

## What does Snowflake Resource Optimization: Setup & Configuration do?
Snowflake Resource Optimization: Setup & Configuration is a ready-made app that lets you do these things:
### Warehouses
- Identify warehouses without auto-resume enabled and enable it
- Identify warehouses without auto-suspend enabled and enable it for your chosen duration
- Identify warehouses with long suspension and modify the auto-suspend setting
- Identify warehouses without resource monitors and assign them where needed
- Identify idle warehouses and suspend or drop them
### Users
- Review warehouses used by multiple roles and investigate relevant query metrics
- Identify idle users and disable or drop them
- Identify users who have never logged in and disable or drop them
- Identify idle roles and drop them
### Tasks
- Identify failed tasks and show query history or drop them
- Identify long running tasks and show query history or drop them
### Else
- Review account, warehouse, or user statement timeouts and modify them
- Identify stale table streams and XXX


## Screenshots
<table>
  <tr>
    <td valign="top"><img src="./images/home-page.png"/></td>
    <td valign="top"><img src="./images/incident-details.png"/></td>
  </tr>
  <tr>
    <td valign="top"><img src="./images/report-incident.png"/></td>
    <td valign="top"><img src="./images/report-incident-created.png"/></td>
  </tr>
</table>

### Who is this tool for?
You likely want everyone (or most people) at your company to be able to report an incident. Thus, the Report Incident UI within Incident Central is designed to be used by anyone at your company.

Members of the engineering team will likely use the other functionality: looking up, editing, and reviewing incident data.

### Where does this tool fits into the incident response process?
There are five main steps in an incident management process [0]:
1. Triage
2. Coordinate
3. Mitigate
4. Resolve
5. Follow-Up

In Incident Central, the "Report Incident" UI will help kick off Step 1: "Triage", by alerting the right people. It will also set up a communication channel for people to do Step 2: "Coordinate."

During an incident ("Coordinate"-"Resolve"), people can go to Incident Central to find the link to the incident communication channel and other metadata.

After an incident, you can use Incident Central to look up information about the incident, as part of Step 5: "Follow-Up."


## Technical Details and Setup
### Dependencies - backends
The initial version of Incident Central depends on the following backend services:
* Slack
* PagerDuty
* A database (e.g. PostgreSQL or MySQL)

You are welcome to adapt Incident Central to an alternative backend (for example, perhaps Microsoft Teams instead of Slack). We encourage you to submit your modified version of the app here for others to use. See the **"How to contribute"** section below.

### How to set up Incident Central in your Retool instance
See the detailed setup guides in the [Setup Guides folder](./setup-guides).

As an overview, these guides will take you through:

1. Setting up backend dependencies.
    - Configuring your Slack and PagerDuty instances.
    - Creating a relational database, if you don't have one already.
2. Setting up these backends as Resources in Retool.
3. Downloading and configuring the Retool app files.


## What's next?
### Ideas for extending this app
* Do you use a different chat application instead of Slack? You can swap the Slack REST API calls in this app for calls to your chat application instead.
* Do you want other things to happen when someone reports an incident? (Perhaps, you want a Jira ticket to be created, and a Google Doc to be spun up?) You can extend the Report Incident page to also do these things (e.g. by adding calls to Jira and Google APIs.)

### How to contribute
Please open a Github Issue on this repo, and let us know about your interest in contributing! We encourage you to reach out before you get started building to get early feedback.

## Appendix

### Learn more about incident response process and tooling
As part of the research in building this app, we interviewed an engineer who built incident response tools at Stripe. Check out the blog post: [From checklist to service: scaling Stripe’s incident response](https://retool.com/blog/incident-response-tools-stripe/)

### Citations
[0] Five main steps in an incident management process: [Increment magazine](https://increment.com/on-call/when-the-pager-goes-off/)
