const
  castArray = require('lodash/castArray'),
  api = require('./api'),
  messages = require('./messages');

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
const sendAllTicketOptionsMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.allTicketOptionsMessage)
};

const sendBuyTicketMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.buyTicketMessage)
};

const sendExhibitionsMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.exhibitionsMessage)
};

const sendFailMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.failMessage)
};

const sendMiTicketMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.miTicketMessage)
};

const sendOpeningHours = (recipientId) => {
  sendMessage(recipientId, messages.data.openingHours)
};

const sendOpeningHoursHolidays = (recipientId) => {
  sendMessage(recipientId, messages.data.openingHoursHolidays)
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

const sendThreeDaysTicketMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.threeDaysTicketMessage)
};

const sendTicketMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.ticketMessage)
};

const sendYearTicketMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.yearTicketMessage)
};

const sendHelloMessage = (recipientId) => {
  sendMessage(recipientId, messages.data.helloMessage)
};

exports.func = {
  sendAllTicketOptionsMessage,
  sendBuyTicketMessage,
  sendExhibitionsMessage,
  sendFailMessage,
  sendMiTicketMessage,
  sendOpeningHours,
  sendOpeningHoursHolidays,
  sendStartMessage,
  sendStartMessageFirst,
  sendThankYouMessage,
  sendThreeDaysTicketMessage,
  sendTicketMessage,
  sendYearTicketMessage,
  sendHelloMessage
}
