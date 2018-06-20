const send = require('./send');
const threadSetup = require('./threadsetup');

const handleMessage = (id, received_message) => {
  console.log("I'm a MESSAGE! Handle me!");
  send.func.sendThankYouMessage(id);

  if (received_message.quick_reply) {
    switch (received_message.quick_reply.payload) {
      case "SETUP":
        break;
      case "aktuell-Ausstellungen":
        console.log("Aktuell");
        break;
      case "opening hours":
        console.log("Öffnungszeiten");
        break;
      case "tickets":
        console.log("Tickets");
        break;
    }
  }

  return;
};

const handlePostback = (id, postback) => {
  console.log("I'm a POSTBACK! Handle me!")
  
  if (postback.payload === "GET_STARTED") {
    send.func.sendHelloMessage(id);
  }
};

exports.func = {
  handleMessage,
  handlePostback
}
