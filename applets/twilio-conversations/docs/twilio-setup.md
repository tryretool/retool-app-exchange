# Twilio Setup
Before you can get this Retool app working, you'll need to do some pre-work in Twilio.

## 0. Sign up for a Twilio account and get a phone number

If you don't already have a Twilio account, you'll need to get one! The good news is that Twilio makes it easy (and free!) to get started. Just head over to https://www.twilio.com/try-twilio and sign up!

As you go through the onboarding flow, indicate that you'll be building a messaging app. Once you're logged into Twilio console, you'll be prompted to get a Twilio phone number. Note the phone number you were assigned for later!

## 1. Verify your SMS-enabled phone number
[Verify your phone number](https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-Verified-Phone-Number-or-Caller-ID-with-Twilio) to enable outbound SMS to that number. Note that this is only necessary with trial Twilio accounts.

## 2. Create an API key/secret pair

[Create an API key](https://www.twilio.com/docs/iam/keys/api-key-resource) and note the key's `SID` and `Secret` for later.

## 3. Create a Twilio Conversations Service
[Create a Conversations Service](https://www.twilio.com/docs/conversations/api/service-resource) and note the `SID` for later. A Conversations Service is a top-level container for other resources in the Twilio Conversations REST API.

Note: you must create a new Conversations Service for use exclusively with this demo! The demo deletes all Conversations inside of this service during initialization, so using an existing Conversations Service is unsafe!

## 4. Create a Twilio Functions Service
A [Twilio Service](https://www.twilio.com/docs/runtime/functions/create-service) is a container for the server-less functions which make it possible for your Retool app to get a chat access token.

## 5. Set Twilio Service environment variables

In your new Twilio Service, set the following environment variables:

| Key | Value |
| ---- | ----  |
| `CONVERSATIONS_SID` | The `Conversations SID` you noted in step three |
| `API_KEY_SID` | The `SID` you noted in step one |
| `API_KEY_SECRET` | The `Secret` you noted in step one |

## 6. Configure Twilio Service dependencies

The server-less functions running in Twilio need access to a few software libraries to function properly. Import the following NPM modules:

| Module | Version |
| --- | --- |
| `lodash` | `4.17.11` |
| `@twilio/runtime-handler` | `1.2.1` |
| `twilio` | `3.29.2` |
| `xmldom` | `0.1.27` |
| `util` | `0.11.0` |

## 7. Create a function to issue chat tokens

In order for the embedded Twilio Conversations client to authenticate with Twilio's services, it needs a valid access token. To create a function for issuing chat tokens:

1. Add a function
2. Specify a path `chat_token`
3. Set the function to `Public` 
    - **Heads up! This means that anyone who can guess the URL of your function can issue valid access tokens. You would need to implement authentication on this endpoint for a production use-case!**
4. Copy and paste the contents of [chat_token.js](/applets/twilio-conversations/code/twilio-functions/chat_token.js) into the function and save
5. Copy the URL for this function for later use

## 8. Deploy your Twilio Service!

This finalizes all of the changes you've made.

## Next steps
Next, set up the Retool app to make calls using your Twilio service!

[Retool Setup](./retool-setup.md)
