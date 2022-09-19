# Retool Setup

Make sure you've completed the steps described in the [Twilio Setup](./twilio-setup.md) documentation before proceeding!

## 1. Create a Retool REST API Resource to retrieve chat tokens

In order for your Retool app to authenticate with Twilio, you'll need to get a valid chat token. To set this up:

1. Navigate to the `/resources` page in your instance and click "Create a new resource." 
2. Select REST API as the resource type.
3. Name the resource “Twilio Conversations Chat Token.”
4. Specify the URL of your `chat_token` function as noted in step six of the Twilio setup.
5. Specify a header with a key of `identity` and a value of `{{current_user.email}}`. This is used to pass the email address of the Retool user to Twilio for use in the token identity.
6. Save your changes.

## 2. Create a Twilio API Resource to get and delete Conversations

Your Twilio app will need to delete previously created Conversations in order to start new Conversations with the same SMS number. To set this up:

1. Navigate to the `/resources` page in your instance and click "Create a new resource." 
2. Select Twilio as the resource type.
3. Name the resource "Twilio Conversations API."
4. Specify the `Account SID` and `Auth Token` you retrieved in Step 2 of the [Twilio Setup](twilio-setup.md).
5. Save your changes.

## 3. Create a Retool REST API resource to add Participants to Conversations

Your Twilio app will need to add SMS Participants to Conversations in order to communicate with an SMS client. This step is necessary as adding Participants is not fully supported in the version of the Twilio OpenAPI spec integrated with Retool. To set this up:

1. Navigate to the `/resources` page in your instance and click "Create a new resource." 
2. Select REST API as the resource type.
3. Name the resource “Twilio Conversations - Participants.”
4. Specify `https://conversations.twilio.com/v1/Conversations/` as the Base URL.
5. Select `Basic Auth` and provide your Twilio Account SID as the `Username` and your Auth Token as the `Password`.
6. Save your changes.

## 4. Download the Retool app code

Download [twilio-conversations-retool-app.json](/applets/twilio-conversations/code/retool/twilio-conversations-retool-app.json) from this repository.

## 5. Import the Retool app code
On the [Retool main page](https://docs.retool.com/docs/protected-applications-getting-started#importing-the-application), click `Create new` and select `Import an app`. Upload the JSON file containing the app code, and name the app.

You may need to connect the Resource Queries in the Retool app with the Resources you created in the previous steps: 

| Folder | Resource Query | Resource |
| --- | --- | --- |
| gets | getConversations | Twilio Conversations API |
| gets | getChatToken | Twilio Conversations Chat Token |
| writes | addParticipant | Twilio Conversations - Participants |
| writes | deleteConversations | Twilio Conversations API |

## 6. Explore the Retool app

If everything is working as expected, you should now be able to send and receive messages between the Retool app and the phone number you registered! Enter your phone number in the "Customer number" field and click Submit to start chatting.

## 7. Learn about how the custom component works

You can read more about [Retool custom components](https://docs.retool.com/docs/custom-components). You can also view the code used in the Twilio Conversations component in Retool, the contents of which are included in [retool-custom-component.html](/applets/twilio-conversations/code/retool/retool-custom-component.html) for easy reading!

Also, take 18 minutes to check out our [video walkthrough]() of how this app is put together!