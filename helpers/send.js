const
  castArray = require('lodash/castArray'),
  api = require('./api'),
  messages = require('./messages'),
  test = require('./test');

// Turns typing indicator on.
const typingOn = (recipientId) => {
  return {
    recipient: {
      id: recipientId,
    },
    sender_action: 'typing_on', // eslint-disable-line camelcase
  };
};

// Turns typing indicator off.
const typingOff = (recipientId) => {
  return {
    recipient: {
      id: recipientId,
    },
    sender_action: 'typing_off', // eslint-disable-line camelcase
  };
};

// Wraps a message JSON object with recipient information.
const messageToJSON = (recipientId, messagePayload) => {
  return {
    recipient: {
      id: recipientId,
    },
    message: messagePayload,
  };
};

// Send one or more messages using the Send API.
const sendMessage = (recipientId, messagePayloads) => {
  const messagePayloadArray = castArray(messagePayloads)
    .map((messagePayload) => messageToJSON(recipientId, messagePayload));

  api.func.callMessagesAPI([
    typingOn(recipientId),
    ...messagePayloadArray,
    typingOff(recipientId),
  ]);
};


// Hier Nachrichten aufrufen, die Inhalte sind in messages.js definiert!
const sendFailMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.failMessage)
};

const sendStartMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.startMessage)
};

const sendStartMessageFirst = (recipientId) => {
  sendMessage(recipientId, messages.data.startMessageFirst)
};

const sendThankYouMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.thankYouMessage)
};

const sendHelloMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.helloMessage)
};

exports.func = {
  sendFailMessage,
  sendStartMessage,
  sendStartMessageFirst,
  sendThankYouMessage,
  sendHelloMessage
}
