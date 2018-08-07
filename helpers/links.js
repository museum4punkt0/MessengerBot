const buildLinks = (linkText, linkUrl, linkTitle) => {
  return {
    attachment:{
      type: "template",
      payload: {
        template_type: "button",
        text: linkText,
        buttons: [
          {
            type:"web_url",
            url: linkUrl,
            title: linkTitle,
            webview_height_ratio: "tall",
            messenger_extensions: "false",
          }
        ]
      }
    }
  }
}

const buyTicketLink = buildLinks("Online unter:", "https://shop.smb.museum/#/tickets/list?date=2018-02-22&museum_id=27&ticketSelection=%5Bobject%20Object%5D", "Tickets");


exports.link = {
  buyTicketLink
}
