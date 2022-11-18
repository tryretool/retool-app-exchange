# Retool Setup

Make sure you've completed the steps described in the [Twilio Setup](./twilio-setup.md) documentation before proceeding!

## 1. Create a Retool REST API Resource to retrieve chat tokens

In order for your Retool app to authenticate with Twilio, you'll need to get a valid chat token. To set this up:

1. Navigate to the `/resources` page in your instance and click "Create a new resource." 
2. Select REST API as the resource type.
3. Name the resource “Twilio Conversations Chat Token”.
4. Specify the URL of your `chat_token` function as noted in step six of the Twilio setup.
5. Specify a header with a key of `identity` and a value of `{{current_user.email}}`. This is used to pass the email address of the Retool user to Twilio for use in the token identity.
6. Save your changes.

## 2. Create a Twilio API Resource to manage Conversations and Participants

Your Retool app will need to delete previously created Conversations in order to start new Conversations with the same SMS number, as well as add new participants to the Conversation. To set this up:

1. Navigate to the `/resources` page in your instance and click "Create a new resource". 
2. Select Twilio as the resource type.
3. Name the resource "Twilio Conversations API".
4. Specify your Twilio API Key SID as the value of `Account SID` and your Twilio API Key Secret as the value of `Auth Token`.
    - These credentials were created in Step 2 of the [Twilio Setup](twilio-setup.md).
5. Save your changes.

## 3. Download the Retool app code

Download [twilio-conversations-retool-app.json](/applets/twilio-conversations/code/retool/twilio-conversations-retool-app.json) from this repository.

## 4. Import the Retool app code
On the [Retool main page](https://docs.retool.com/docs/protected-applications-getting-started#importing-the-application), click `Create new` and select `Import an app`. Upload the JSON file containing the app code, and name the app.

You may need to connect the Resource Queries in the Retool app with the Resources you created in the previous steps: 

| Folder | Resource Query | Resource |
| --- | --- | --- |
| gets | getChatToken | Twilio Conversations Chat Token |
| gets | getConversations | Twilio Conversations API |
| writes | addParticipant | Twilio Conversations API |
| writes | deleteConversations | Twilio Conversations API |

## 5. Explore the Retool app

If everything is working as expected, you should now be able to send and receive messages between the Retool app and the phone number you registered! To use the app:

1. When first loading the app, you'll be prompted to enter your Twilio Conversations Service SID. This is the Service SID you retrieved in step 3 of the Twilio setup.
2. Once the app has initialized, fill out the SMS settings:    
    - Enter the phone number you were assigned in step 0 of the Twilio setup as "Twilio Outbound number".
    - Enter the SMS-enabled phone number that you verified in step 1 of the Twilio setup as "Customer number" and click Submit.
4. Enter some text in the chat box and press "enter" to send!

## 6. Learn about how the custom component works

You can read more about [Retool custom components](https://docs.retool.com/docs/custom-components). You can also view the code used in the Twilio Conversations component in Retool, the contents of which are included in [retool-custom-component.html](/applets/twilio-conversations/code/retool/retool-custom-component.html) for easy reading!

Also, check out our in-depth [video walkthrough](https://www.youtube.com/watch?v=NL8liiIYN0o) of how this app is put together!
