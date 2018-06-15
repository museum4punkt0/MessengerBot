// Zum entschlacken die 'Retries' rausgeworfen!
//

const
  request = require('request'),
  castArray = require('lodash/castArray'),
  isEmpty = require('lodash/isEmpty');

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

const callAPI = (endPoint, messageDataArray, queryParams = {}) => {
  console.log('Hi! This is callAPI!');
  // Error if developer forgot to specify an endpoint to send our request to
  if (!endPoint) {
    console.error('callAPI requires you specify an endpoint.');
    return;
  }

  // ensure query parameters have a PAGE_ACCESS_TOKEN value
  /* eslint-disable camelcase */
  const query = Object.assign({access_token: PAGE_ACCESS_TOKEN}, queryParams);
  /* eslint-enable camelcase */

  // ready the first message in the array for send.
  const [messageToSend, ...queue] = castArray(messageDataArray);
  console.log('messageToSend:' + messageToSend);

  request({
    uri: `https://graph.facebook.com/v2.6/me/${endPoint}`,
    qs: query,
    method: 'POST',
    json: messageToSend,

  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // Message has been successfully received by Facebook.
      console.log(
        `Successfully sent message to ${endPoint} endpoint: `,
        JSON.stringify(body)
      );

      // Continue sending payloads until queue empty.
      if (!isEmpty(queue)) {
        callAPI(endPoint, queue, queryParams);
      }
    } else {
      // Message has not been successfully received by Facebook.
      console.error(
        `Failed calling Messenger API endpoint ${endPoint}`,
        response.statusCode,
        response.statusMessage,
        body.error,
        queryParams
      );

    }
  });
};

const callMessagesAPI = (messageDataArray, queryParams = {}) => {
  return callAPI('messages', messageDataArray, queryParams);
};

const callThreadAPI = (messageDataArray, queryParams = {}) => {
  return callAPI('messenger_profile', messageDataArray, queryParams);
};

exports.func = {
  callMessagesAPI,
  callThreadAPI
}
