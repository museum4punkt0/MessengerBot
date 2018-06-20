const
  api = require('./api'),
  messages = require('./messages');

const setPersistentMenu = () => {
  api.func.callThreadAPI(messages.data.persistentMenu);
};

const setGreetingText = () => {
  console.log('**Im Greeting Text!**');
  api.func.callThreadAPI(messages.data.greetingText);
};

const setGetStarted = () => {
  console.log('**Letas get sth. started!**');
  api.func.callThreadAPI(messages.data.getStarted);
};

const testThreadSetup = () => {
  console.log("setup Message");
}

exports.func = {
  setPersistentMenu,
  setGetStarted,
  setGreetingText,
  testThreadSetup
}
