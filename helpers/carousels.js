const consts = require('./consts');

const allTicketOptionsCarousel = {
  attachment: {
    type: "template",
    payload: {
      template_type: "generic",
      elements: [
        {
          title: "Eintritt Bode-Museum",
          subtitle: "Dauer- und Sonderausstellungen:\nregulär 12€ - ermäßigt 6€",
          default_action: {
            type: "web_url",
            url: "https://www.smb.museum/besuch-planen/preise-tickets.html",
            webview_height_ratio: consts.value.defaultWebviewHeightRatio,
          },
          buttons: [
            {
              type: "web_url",
              url: "https://www.smb.museum/besuch-planen/preise-tickets.html",
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
          subtitle: "alle Ausstellungen:\nregulär 18€ - ermäßigt 9€",
          default_action: {
            type: "web_url",
            url: "https://www.smb.museum/besuch-planen/preise-tickets.html",
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
          subtitle: "1 Ticket - 30 Häuser:\nregulär 29€ - ermäßigt 14,50€",
          default_action: {
            type: "web_url",
            url: "https://www.smb.museum/?id=2951",
            webview_height_ratio: consts.value.defaultWebviewHeightRatio,
          },
          buttons: [
            {
              type: "web_url",
              url: "https://www.smb.museum/?id=2951",
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
          subtitle: "CLASSIC: regulär 50€ - ermäßigt 25€\nCLASSIC PLUS: regulär 100€ - ermäßigt 50€",
          default_action: {
            type: "web_url",
            url: "https://www.smb.museum/besuch-planen/jahreskarte.html",
            webview_height_ratio: consts.value.defaultWebviewHeightRatio,
          },
          buttons: [
            {
              type: "web_url",
              url: "https://www.smb.museum/besuch-planen/jahreskarte.html",
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

const exhibitionsCarousel = {
  attachment: {
    type: "template",
    payload: {
      template_type: "generic",
      elements: [
        {
          title: "Unvergleichlich: Kunst aus Afrika im Bode-Museum",
          image_url: "https://www.smb.museum/typo3temp/_processed_/b/6/csm_BM_13_Unvergleichlich_xl_64cb3410c5.jpg",
          subtitle: "27.10.2017 bis auf Weiteres",
          default_action: {
            type: "web_url",
            url: "http://www.smb.museum/ausstellungen/detail/unvergleichlich-kunst-aus-afrika-im-bode-museum.html",
            webview_height_ratio: "tall"
          },
          buttons:[consts.value.buttonTicketsBode]
        },
        {
          title: "Münzen und Medaillen",
          image_url: "https://smb.gomus.de/production/exhibitions/64/original/muenzen.jpg?1509026217",
          subtitle: "Bis auf Weiteres",
          default_action: {
            type: "web_url",
            url: "http://www.smb.museum/museen-und-einrichtungen/bode-museum/ausstellungen/detail/muenzen-und-medaillen.html",
            webview_height_ratio: "tall"
          },
            buttons:[consts.value.buttonTicketsBode]
        },
        {
          title: "Skulptur und Malerei 13.-18. Jh.",
          image_url: "https://smb.gomus.de/production/exhibitions/66/original/BM_skulptur.jpg?1469184001",
          subtitle: "Bis auf Weiteres",
          default_action: {
            type: "web_url",
            url: "http://www.smb.museum/museen-und-einrichtungen/bode-museum/ausstellungen/detail/skulptur-und-malerei-13-18-jh.html",
            webview_height_ratio: "tall"
          },
            buttons:[consts.value.buttonTicketsBode]
        },
        {
          title: "Spätantike und Byzantinische Kunst",
          image_url: "https://smb.gomus.de/production/exhibitions/65/original/BM_byzan.jpg?1469184291",
          subtitle: "Bis auf Weiteres",
          default_action: {
            type: "web_url",
            url: "http://www.smb.museum/museen-und-einrichtungen/bode-museum/ausstellungen/detail/spaetantike-und-byzantinische-kunst.html",
            webview_height_ratio: "tall"
          },
            buttons:[consts.value.buttonTicketsBode]
        }
      ]
    }
  }
}

exports.value = {
  allTicketOptionsCarousel,
  exhibitionsCarousel
}
