# Twilio Setup
Before you can get this Retool app working, you'll need to do some pre-work in Twilio.

## 0. Sign up for a Twilio account and get a phone number

If you don't already have a Twilio account, you'll need to get one! The good news is that Twilio makes it easy (and free!) to get started. Just head over to https://www.twilio.com/try-twilio and sign up!

As you go through the onboarding flow, indicate that you'll be building a voice app. Once you're logged into Twilio console, you'll be prompted to get a Twilio phone number. Note the phone number you were assigned for later!

## 1. Create a TwiML App

A [TwiML Application](https://www.twilio.com/docs/usage/api/applications) tells Twilio how to handle the calls you'll make from your Retool app. Specify a name for your TwiML app and note the `TwiML App SID` for later. Leave all other settings blank, we'll fill them in later on!

## 2. Create an API key/secret pair

[Create an API key](https://www.twilio.com/docs/iam/keys/api-key-resource) and note the key's `SID` and `Secret` for later.

## 3. Create a Twilio Service

A [Twilio Service](https://www.twilio.com/docs/runtime/functions/create-service) is a container for the server-less functions which make it possible for your Retool app to get a voice access token, and for outbound calls to be routed correctly.

## 4. Set Twilio Service environment variables

In your new Twilio Service, set the following environment variables:

| Key | Value |
| ---- | ----  |
| `TWIML_APPLICATION_SID` | The `TwiML App SID` you noted in step one |
| `API_KEY` | The `SID` you noted in step two |
| `API_SECRET` | The `Secret` you noted in step two |
| `CALLER_ID` | The phone number you noted in step zero. Make sure to include a `+` and the country code at the beginning! |

## 5. Configure Twilio Service dependencies

The server-less functions running in Twilio need access to a few software libraries to function properly. Import the following NPM modules:

| Module | Version |
| --- | --- |
| `lodash` | `4.17.11` |
| `@twilio/runtime-handler` | `1.2.3` |
| `twilio` | `^3.77.3` |
| `xmldom` | `0.1.27` |
| `util` | `0.11.0` |

## 6. Create a function to issue voice tokens

In order for the embedded Twilio dialer to authenticate with Twilio's services, it needs a valid access token. To create a function for issuing voice tokens:

1. Add a function
2. Specify a path `voice-token`
3. Set the function to `Public`. 
    - **Heads up! This means that anyone who can guess the URL of your function can issue valid access tokens. You would need to implement authentication on this endpoint for a production use-case!**
4. Copy and paste the contents of [voice-token.js](/applets/twilio-dialer/code/twilio-functions/voice-token.js) into the function and save
5. Copy the URL for this function for later use

## 7. Create a function to route outbound calls

In order for Twilio to know what to do when it receives a call from your app, you need a call routing app. To create a call routing function:

1. Add a function
2. Specify a path `twiml-app`
3. Set the function to `Protected`
4. Copy and paste the contents of [twiml-app.js](/applets/twilio-dialer/code/twilio-functions/twiml-app.js) into the function and save
5. Copy the URL for this function for later use

## 8. Deploy your Twilio Service!

This finalizes all of the changes you've made.

## 9. Finish configuring your TwiML app

Remember that empty TwiML app we created in step one? Edit the app settings and provide the URL for your `twiml-app` function as the value of the **Voice Configuration Request URL**. Specify a **Request Method** of `HTTP POST` and save your changes.

This step connects inbound requests from your Retool app to the call routing function.

## Next steps
Next, set up the Retool app to make calls using your Twilio service!

[Retool Setup](./retool-setup.md)