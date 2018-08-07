const buyTicketLink = [
  {
    attachment:{
      type: "template",
      payload: {
        template_type: "button",
        text: "Online unter:",
        buttons: [
          {
            type:"web_url",
            url:"https://shop.smb.museum/#/tickets/list?date=2018-02-22&museum_id=27&ticketSelection=%5Bobject%20Object%5D",
            title:"Tickets",
            webview_height_ratio: "tall",
            messenger_extensions: "false",
          }
        ]
      }
    }
  }
];

exports.link = {
  buyTicketLink
}
