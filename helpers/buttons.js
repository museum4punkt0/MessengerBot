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
    payload: "EXHIBITIONSs"
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
    title: "Nein, Tickets kaufen!",
    payload: "BUY_TICKETS"
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
  },
  {
    content_type: "text",
    title: "alle Optionen",
    payload: "ALL_TICKET_OPTIONS"
  }
];

exports.but = {
  qr_openingHours,
  qr_standardMenu,
  qr_tickets
}
