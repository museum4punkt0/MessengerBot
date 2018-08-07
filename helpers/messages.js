const buttons = require('./buttons');
const links = require('./links');

const startText = "Wie kann ich weiterhelfen!";
const startTextSecondTime = "Kann sonst noch helfen?";
const ticketOptions = "Möchtest du alle weitere Ticket-Optionen erfahren?";

const buyTicketMessage = [
  {
    text: "Vor Ort: An Kasse des Bode-Museums im Eingangsbereich auf der rechten Seite."
  },
    links.func.buildLinks("Online unter:", "https://shop.smb.museum/#/tickets/list?date=2018-02-22&museum_id=27&ticketSelection=%5Bobject%20Object%5D", "Tickets"),
  {
    text: startTextSecondTime,
    quick_replies: buttons.but.qr_standardMenu
  }
];

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
      text:"Hallo {{user_first_name}}! Mit dem Klick auf \"Los geht's\" stimmst du den folgenden Punkten zu:\n- https://www.smb.museum\n- den Datenschutzbestimmungen"
    }
  ]
};

const miTicketMessage = [
  {
    text: "Wenn du am selben Tag mehrere Museen auf der Museuminsel besuchen willst, ist das hier vielleicht interssant für dich!"
  },
  {
    text: "Museumsinsel-Ticket:\nregulär 18€ - ermäßigt 9€"
  },
  {
    text: "Ganztägig Eintritt in folgenden Häusern:\n- Bode-Museum\n- Pergamonmuseum\n- Altes Museum\n- Neues Museum\n- Alte Nationalgalerie"
  },
  {
    text: ticketOptions,
    quick_replies: buttons.but.qr_ticketMenu
  }
];

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
    links.func.buildLinks("Detaillierte Zeiten und Ausnahmen findest Du hier:", "https://www.smb.museum/besuch-planen/sonderoeffnungszeiten-an-feiertagen.html", "Weitere Zeiten"),
  {
    text: startTextSecondTime,
    quick_replies: buttons.but.qr_standardMenu
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
    text: startText,
    quick_replies: buttons.but.qr_standardMenu
  }
];

const startMessageFirst = [
  {
    text: "Hallo!"
  },
  {
    text: startText,
    quick_replies: buttons.but.qr_standardMenu
  }
];

const ticketMessage = [
  {
    text: "Grundsätzlich gilt in den Staatlichen Museen zu Berlin:\n\n- Unter 18 Jahren: Eintritt frei!\n\n- Bezieher von Transferleistungen: Eintritt frei!\n\n- Schüler und Studenten älter als 18 Jahre: ermäßigter Eintritt (50%)"
  },
  {
    text: "Eintritt Bode-Museum:\nregulär 12€ - ermäßigt 6€"
  },
    links.func.buildLinks("Weitere Infos:", "http://www.smb.museum/besuch-planen/ermaessigungen-freier-eintritt.html", "Ermässigungen"),
  {
    text: `Planst du weitere Ausstellungen und Häuser zu besuchen?`,
    quick_replies: buttons.but.qr_tickets
  }
]

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

const threeDaysTicketMessage = [
  {
    text: "Wenn du innerhalb von drei Tagen mehrere Museen in Berlin besuchen willst, ist das hier vielleicht interessant für dich!"
  },
  {
    text: "Museumspass Berlin:\nregulär 29€ - ermäßigt 14,50€"
  },
  {
    text: "Er gilt drei Tage in allen Häusern der Staatlichen Museen und noch weiteren Berliner Museen."
  },
  {
    text: ticketOptions,
    quick_replies: buttons.but.qr_ticketMenu
  }
]

exports.data = {
  buyTicketMessage,
  failMessage,
  getStarted,
  greetingText,
  miTicketMessage,
  openingHours,
  openingHoursHolidays,
  persistentMenu,
  startMessage,
  startMessageFirst,
  thankYouMessage,
  threeDaysTicketMessage,
  ticketMessage
}
