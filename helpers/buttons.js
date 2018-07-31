/* const buildQuickReplies = (qrParameter) => {
} */

const qr_openingHours = [
  {
    content_type:"text",
    title:"Ja, bitte",
    payload:"OPENING_HOURS_HOLIDAYS"
  },
   {
    content_type:"text",
    title:"Nein",
    payload:"DONE"
  }
]

const qr_standardMenu = [
  {
    content_type:"text",
    title:"Aktuell",
    payload:"EXHIBITIONSs"
  },
  {
    content_type:"text",
    title:"Öffnungszeiten",
    payload:"OPENING_HOURS"
  },
  {
    content_type:"text",
    title:"Tickets",
    payload:"TICKETS"
  }
];

exports.but = {
  qr_openingHours,
  qr_standardMenu
}
