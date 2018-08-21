const consts = require('./consts');

const allTicketOptionsCarousel = {
  attachment: {
    type: "template",
    payload: {
      template_type: "generic",
      elements: [
        {
          title: "Eintritt Bode-Museum",
          subtitle:"Dauer- und Sonderausstellungen:\nregulär 12€ - ermäßigt 6€",
          default_action: {
            type: "web_url",
            url:"https://www.smb.museum/besuch-planen/preise-tickets.html",
            webview_height_ratio: consts.value.defaultWebviewHeightRatio,
          },
          buttons: [
            {
              type: "web_url",
              url:"https://www.smb.museum/besuch-planen/preise-tickets.html",
              title: "Infos",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio,
            },
            {
              type: "web_url",
              url: "https://shop.smb.museum/#/tickets/list?date=2018-08-21&museum_id=27&ticketSelection=%5Bobject%20Object%5D",
              title: "Tickets Bode-Museum",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio,
            }
          ]
        },
        {
          title: "Ticket Museumsinsel",
          subtitle:"alle Ausstellungen:\nregulär 18€ - ermäßigt 9€",
          default_action: {
            type: "web_url",
            url:"https://www.smb.museum/besuch-planen/preise-tickets.html",
            webview_height_ratio: consts.value.defaultWebviewHeightRatio,
          },
          buttons: [
            {
              type: "web_url",
              url:"https://www.smb.museum/besuch-planen/preise-tickets.html",
              title: "Infos",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio,
            },
            {
              type: "web_url",
              url: "https://shop.smb.museum/#/tickets/list?date=2018-08-21&museum_id=76&ticketSelection=%5Bobject%20Object%5D",
              title: "Tickets Museumsinsel",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio,
            }
          ]
        },
        {
          title: "Museumspass Berlin",
          subtitle:"1 Ticket - 30 Häuser:\nregulär 29€ - ermäßigt 14,50€",
          default_action: {
            type: "web_url",
            url:"https://www.smb.museum/?id=2951",
            webview_height_ratio: consts.value.defaultWebviewHeightRatio,
          },
          buttons: [
            {
              type: "web_url",
              url:"https://www.smb.museum/?id=2951",
              title: "Infos",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio,
            },
            {
              type: "web_url",
              url: "https://shop.smb.museum/#/tickets/list?date=2018-08-21&ticketSelection=%5Bobject%20Object%5D",
              title: "Museumspass",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio,
            }
          ]
        },
        {
          title: "Jahreskarte",
          subtitle:"CLASSIC: regulär 50€ - ermäßigt 25€\nCLASSIC PLUS: regulär 100€ - ermäßigt 50€",
          default_action: {
            type: "web_url",
            url:"https://www.smb.museum/besuch-planen/jahreskarte.html",
            webview_height_ratio: consts.value.defaultWebviewHeightRatio,
          },
          buttons: [
            {
              type: "web_url",
              url:"https://www.smb.museum/besuch-planen/jahreskarte.html",
              title: "Infos",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio,
            },
            {
              type: "web_url",
              url: "https://jahreskarte.smb.museum/",
              title: "Jahreskarte",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio,
            }
          ]
        }
      ]
    }
  }
}

exports.value = {
  allTicketOptionsCarousel
}
