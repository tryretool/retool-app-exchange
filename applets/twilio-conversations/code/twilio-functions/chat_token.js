exports.handler = function (context, event, callback) {
  
    const IDENTITY = event.request.headers.identity;
  
    const { ACCOUNT_SID } = context;
  
    // set these values in your .env file
    const { API_KEY_SID, API_KEY_SECRET, CONVERSATIONS_SID } = context;
  
    const { AccessToken } = Twilio.jwt;
    const { ChatGrant } = AccessToken;
  
    const accessToken = new AccessToken(ACCOUNT_SID, API_KEY_SID, API_KEY_SECRET);
    accessToken.identity = IDENTITY;
    const grant = new ChatGrant({
      serviceSid: CONVERSATIONS_SID
    });
    accessToken.addGrant(grant);
  
    const response = new Twilio.Response();
  
    response.appendHeader('Content-Type', 'application/json');
    response.setBody({
      identity: IDENTITY,
      token: accessToken.toJwt(),
    });
    callback(null, response);
  };