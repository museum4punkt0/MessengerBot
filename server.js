// Ich hab aktuell handleMessage & handlePostback eingeügt über receive. Jetzt ist es wieder
// nur message[0], also nur der erste
//
// ===== MODULES ===============================================================
const
  request = require('request'),
  express = require('express'),
  bodyParser = require('body-parser'),
  messageEvent = require('./helpers/messageEvent'),
  receive = require('./helpers/receive'),
  threadSetup = require('./helpers/threadsetup');

// ===== ROUTES ================================================================
const app = express();

app.use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => {console.log('webhook is listening');});
threadSetup.func.testThreadSetup(); // Immer mit () NATÜRLICH!!!!
threadSetup.func.setGetStarted();
threadSetup.func.setGreetingText();
threadSetup.func.setPersistentMenu();

// ===== MESSENGER =============================================================
app.get('/webhook', (req, res) => {

  /** UPDATE YOUR VERIFY TOKEN **/
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  // Parse params from the webhook verification request
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Check if a token and mode were sent
  if (mode && token) {

    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Respond with 200 OK and challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});


app.post('/webhook', (req, res) => {

  // Parse the request body from the POST
  const data = req.body;

  // Check the webhook event is from a Page subscription
  if (data.object === 'page') {

    // Iterate over each entry
    //there may be multiple if batched
    data.entry.forEach((pageEntry) => {
      // Iterate over each messaging event and handle accordingly
      let messagingEvent = pageEntry.messaging[0];

      messageEvent.logging(messagingEvent);

      let sender_psid = messagingEvent.sender.id;

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (messagingEvent.message) {
        receive.func.handleMessage(sender_psid, messagingEvent.message);
      } else if (messagingEvent.postback) {
        receive.func.handlePostback(sender_psid, messagingEvent.postback);
      }
    });

    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
});
