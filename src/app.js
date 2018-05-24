 // ===== MODULES ===============================================================
import request from 'request';
import express from 'express';
import bodyParser from 'body-parser';

// ===== ROUTES ================================================================
import webhook from './webhook';

const app = express();

app.use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));


app.post('/webhook', (req, res) => {
  // HACK! Um ohne 'curl' auf dem Bürorechner Messenger Profile API anzusteuern!
  //setProfileAPI();

  // Parse the request body from the POST
  let body = req.body;

  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the body of the webhook event.
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);

      // Gets the PSID
      let sender_psid = webhook_event.sender.id;
      console.log('Sender PSID: '+ sender_psid);
    });

    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});
