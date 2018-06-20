const buttons = require('./buttons');

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
      },
      {
        content_type: 'text',
        title: 'Setup!',
        payload: "SETUP"
      }
    ]
  }
];

const helloMessage = [
  {
    text: "Hi! Let's"
  },
  {
    text:"get"
  },
  {
    text: "started!",
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
      },
      {
        content_type: 'text',
        title: 'Setup!',
        payload: "SETUP"
      }
    ]
  }
];

const startMessage = [
  {
    text: "Wie kann ich weiterhelfen!",
    buttons.but.qr_standardMenu;
  }
];

const persistentMenu = {
  persistent_menu: [
    {
      locale: "default",
      composer_input_disabled: true,
      call_to_actions: [
        {
          title: "My Account",
          type: "nested",
          call_to_actions: [
            {
              title: "Pay Bill",
              type: "postback",
              payload:"PAYBILL_PAYLOAD"
            },
            {
              title: "History",
              type: "postback",
              payload: "HISTORY_PAYLOAD"
            },
            {
              title: "Contact Info",
              type: "postback",
              payload: "CONTACT_INFO_PAYLOAD"
            }
          ]
        },
        {
          type: "web_url",
          title: "Latest News",
          url: "http://www.messenger.com/",
          webview_height_ratio: "full"
        }
      ]
    }
  ]
};

const greetingText = {
  greeting: [
    {
      locale:"default",
      text:"Hi {{user_first_name}}! I'm Refactored. How can I help you?"
    }, {
      locale:"de_DE",
      text:"Hallo {{user_first_name}}! Mit dem Klick auf \"Los geht\'s\" stimmst du den folgenden Punkten zu:\n- https://www.smb.museum\n- den Datenschutzbestimmungen"
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
  helloMessage,
  persistentMenu,
  greetingText,
  getStarted
}
