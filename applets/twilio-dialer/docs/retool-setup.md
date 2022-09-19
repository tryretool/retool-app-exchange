# Retool Setup

Make sure you've completed the steps described in the [Twilio Setup](./twilio-setup.md) documentation before proceeding!

## 1. Create a Retool REST API Resource to retrieve voice tokens

In order for your Retool app to authenticate with Twilio, you'll need to get a valid voice token. To set this up:

1. Navigate to the `/resources` page in your instance and click "Create a new resource." 
2. Select REST API as the resource type.
3. Name the resource “Twilio Voice Token.”
4. Specify the URL of your `voice-token` function as noted in step six of the Twilio setup.
5. Specify a header with a key of `identity` and a value of `{{current_user.email}}`. This is used to pass the email address of the Retool user to Twilio for use in the token identity.
6. Save your changes.

## 2. Download the Retool app code

Download [twilio-dialer-retool-app.json](/applets/twilio-dialer/code/retool/twilio-dialer-retool-app.json) from this repository.

## 3. Import the Retool app code
On the [Retool main page](https://docs.retool.com/docs/protected-applications-getting-started#importing-the-application), click `Create new` and select `Import an app`. Upload the JSON file containing the app code, and name the app.

You may need to connect the `getVoiceToken` Resource Query to the REST API Resource you created previously.

## 4. Explore the Retool app

If everything is working as expected, you should now be able to place outbound calls from the Retool app! The app is set up with a hardcoded table of "leads" to simulate a simple call center app. You can edit the contents of the leads table directly, or simply type your phone number in the field to try calling yourself.

## 5. Learn about how the custom component works

You can read more about [Retool custom components](https://docs.retool.com/docs/custom-components). You can also view the code used in the Twilio Dialer component in Retool, the contents of which are included in [retool-custom-component.html](./code/retool/retool-custom-component.html) for easy reading!

Also, take 18 minutes to check out our [video walkthrough](https://youtu.be/xPSS3kp3XEI) of how this app is put together!