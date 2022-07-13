exports.handler = function (context, event, callback) {
  
    const IDENTITY = event.request.headers.identity;
  
    const { ACCOUNT_SID } = context;
  
    // set these values in your .env file
    const { TWIML_APPLICATION_SID, API_KEY, API_SECRET } = context;
  
    const { AccessToken } = Twilio.jwt;
    const { VoiceGrant } = AccessToken;
  
    const accessToken = new AccessToken(ACCOUNT_SID, API_KEY, API_SECRET);
    accessToken.identity = IDENTITY;
    const grant = new VoiceGrant({
      outgoingApplicationSid: TWIML_APPLICATION_SID,
      incomingAllow: true,
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
  