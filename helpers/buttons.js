const qr_exhibitionMenu = [
   {
    content_type: "text",
    title: "nächste Veranstaltung",
    payload: "NEXT_EVENT"
  },
  {
    content_type: "text",
    title: "Angebote für Kinder",
    payload: "EVENTS_KIDS"
  },
  {
    content_type: "text",
    title: "Angebote für Erwachsene",
    payload: "EVENTS_ADULTS"
  },
  {
    content_type: "text",
    title: "Nein, danke.",
    payload: "DONE"
  }
];

const qr_exhibitionMenu_whNextEvent = [
  {
    content_type: "text",
    title: "Angebote für Kinder",
    payload: "EVENTS_KIDS"
  },
  {
    content_type: "text",
    title: "Angebote für Erwachsene",
    payload: "EVENTS_ADULTS"
  },
  {
    content_type: "text",
    title: "Nein, danke.",
    payload: "DONE"
  }
];

const qr_exhibitionMenu_whEventKids = [
   {
    content_type: "text",
    title: "nächste Veranstaltung",
    payload: "NEXT_EVENT"
  },
  {
    content_type: "text",
    title: "Angebote für Erwachsene",
    payload: "EVENTS_ADULTS"
  },
  {
    content_type: "text",
    title: "Nein, danke.",
    payload: "DONE"
  }
];

const qr_exhibitionMenu_whEventsAdults = [
   {
    content_type: "text",
    title: "nächste Veranstaltung",
    payload: "NEXT_EVENT"
  },
  {
    content_type: "text",
    title: "Angebote für Kinder",
    payload: "EVENTS_KIDS"
  },
  {
    content_type: "text",
    title: "Nein, danke.",
    payload: "DONE"
  }
];

const qr_openingHours = [
  {
    content_type: "text",
    title: "Ja, bitte",
    payload: "OPENING_HOURS_HOLIDAYS"
  },
   {
    content_type: "text",
    title: "Nein",
    payload: "DONE"
  }
]


const qr_standardMenu = [
  {
    content_type: "text",
    title: "Aktuell",
    payload: "EXHIBITIONS"
  },
  {
    content_type: "text",
    title: "Öffnungszeiten",
    payload: "OPENING_HOURS"
  },
  {
    content_type: "text",
    title: "Tickets",
    payload: "TICKETS"
  }
];

const qr_tickets = [
   {
    content_type: "text",
    title: "Nein, Tickets kaufen",
    payload: "BUY_TICKETS"
  },
  {
    content_type: "text",
    title: "alle Optionen",
    payload: "ALL_TICKET_OPTIONS"
  },
  {
    content_type: "text",
    title: "Am selben Tag",
    payload: "MI_TICKET"
  },
  {
    content_type: "text",
    title: "Drei Tage lang",
    payload: "THREE_DAYS_TICKET"
  },
  {
    content_type: "text",
    title: "über das Jahr",
    payload: "YEAR_TICKET"
  }
];

const qr_ticketMenu = [
  {
    content_type:"text",
    title:"Ja, bitte!",
    payload:"ALL_TICKET_OPTIONS"
  },
  {
    content_type:"text",
    title:"Nein, Tickets kaufen",
    payload:"BUY_TICKETS"
  },
  {
    content_type:"text",
    title:"Nein, nichts weiter",
    payload:"DONE"
  }
];

exports.but = {
  qr_exhibitionMenu,
  qr_exhibitionMenu_whNextEvent,
  qr_exhibitionMenu_whEventKids,
  qr_exhibitionMenu_whEventsAdults,
  qr_openingHours,
  qr_standardMenu,
  qr_tickets,
  qr_ticketMenu
}
