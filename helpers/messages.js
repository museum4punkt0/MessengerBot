const thankYouMessage = [
  {
    text: "Thanks for stopping by!"
  },
  {
    text: "Man I'm so thankful!",
    quick_replies:[
      {
        content_type: 'text',
        title: 'Thank you, bot!',
        payload: 'THANK_YOU'
      },
      {
        content_type: 'text',
        title: 'Thank you, bot!',
        payload: 'THANK_YOU'
      }
    ]
  }
];

const persistentMenu = {

};

const greetingText = {
  greeting: [
    {
      locale:"default",
      text:"Hi {{user_first_name}}! I'm Refactored. How can I help you?"
    }, {
      locale:"de_DE",
      text:"Hallo {{user_first_name}}! Ich bin Refactored!\nWie kann ich dir weiterhelfen?"
    }
  ]
};

const getStarted = {
  get_started: {
    payload: 'GET_STARTED'
  }
};

exports.data = {
  thankYouMessage,
  persistentMenu,
  greetingText,
  getStarted
}
