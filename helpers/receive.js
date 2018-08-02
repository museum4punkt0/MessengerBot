/* eslint no-console: "log" */

const send = require('./send');
// const threadSetup = require('./threadsetup');

const handleMessage = (id, received_message) => {
  if (received_message.quick_reply) {
    switch (received_message.quick_reply.payload) {
      case "SETUP":
        break;
      case "EXHIBITIONS":
        console.log("Aktuell");
        break;
      case "OPENING_HOURS":
        console.log("Öffnungszeiten");
        send.func.sendOpeningHours(id);
        break;
      case "OPENING_HOURS_HOLIDAYS":
        console.log("Öffnungszeiten");
        send.func.sendOpeningHoursHolidays(id);
        break;
      case "TICKETS":
        console.log("Tickets");
        send.func.sendTicketMessage(id);
        break;
      case "BUY_TICKETS":
        send.func.sendBuyTicketMessage(id);
        break;
      case "MI_TICKET":
        send.func.sendMiTicketMessage(id);
        break;
      case "THREE_DAYS_TICKET":
        send.func.sendThreeDaysTicketMessage(id);
        break;
      case "YEAR_TICKET":
        send.func.sendYearTicketMessage(id);
        break;
      case "ALL_TICKET_OPTIONS":
        send.func.sendAllTicketOptionsMessage(id);
        break;
      case "DONE":
        console.log("User says: done.");
        send.func.sendStartMessage(id);
        break;
      default:
        console.log("None of the above");
        send.func.sendFailMessage(id);
        break;
    }
  } else {
    send.func.sendFailMessage(id);
  }
  return;
};

const handlePostback = (id, postback) => {
  console.log("I'm a POSTBACK! Handle me!")

  if (postback.payload === "GET_STARTED") {
    send.func.sendStartMessageFirst(id);
  } else {
    send.func.sendFailMessage(id);
  }
};

exports.func = {
  handleMessage,
  handlePostback
}
