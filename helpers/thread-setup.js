const
  api = require('./api'),
  messages = require('./messages');

const setPersistentMenu = () => {
  api.func.callThreadAPI(messages.data.persistentMenu);
};

const setGreetingText = () => {
  api.func.callThreadAPI(messages.data.greetingText);
};

const setGetStarted = () => {
  api.func.callThreadAPI(messages.data.getStarted);
};

exports.func = {
//  setPersistentMenu,
  setGetStarted
}
