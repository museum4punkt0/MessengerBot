const buttons = require('./buttons');

const failMessage = [
  {
    text: "Tut mir leid, aber deine Eingabe kann ich nicht verarbeiten"
  },
  {
    text: "Bitte nutze die folgenden Buttons oder das Menu am unteren Rand deines Displays",
    quick_replies: buttons.but.qr_standardMenu
  }
];

const getStarted = {
  get_started: {
    payload: 'GET_STARTED'
  }
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

const openingHours = [
  {
    text: `Heute geöffnet bis 18:00 Uhr`
  },
  {
    text: `Montag geschlossen\nDienstag-Sonntag 10:00-18:00 Uhr\nDonnertag bis 20:00 Uhr`
  },
  {
    text: `30 Minuten vor Schließung ist letzter Einlass`
  },
  {
    text: `Für Feiertage gibt es abweichende Zeiten.`
  },
  {
    text: `Möchtest du sie wissen?`,
    quick_replies: buttons.but.qr_openingHours
  }
];

const openingHoursHolidays = [
  {
    text: `An Feiertagen sind die Häuser der Staatlichen Museen zu Berlin in der Regel wie an Sonntagen (10-18 Uhr) geöffnet.`
  },
  {
    attachment:
      type: "template",
      payload: {
        template_type: "button",
        text: "Detaillierte Zeiten und Ausnahmen findest Du hier:"
        buttons: [
          {
            "type":"web_url",
            "url":"https://www.smb.museum/besuch-planen/sonderoeffnungszeiten-an-feiertagen.html",
            "title":"sonderoeffnungszeiten",
            "webview_height_ratio": "full>",
            "messenger_extensions": "false>",
          }
        ]
      }
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

const startMessage = [
  {
    text: "Wie kann ich weiterhelfen!",
    quick_replies: buttons.but.qr_standardMenu
  }
];

const startMessageFirst = [
  {
    text: "Hallo!"
  },
  {
    text: "Wie kann ich weiterhelfen!",
    quick_replies: buttons.but.qr_standardMenu
  }
];

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

exports.data = {
  failMessage,
  getStarted,
  greetingText,
  openingHours,
  openingHoursHolidays,
  persistentMenu,
  startMessage,
  startMessageFirst,
  thankYouMessage
}
