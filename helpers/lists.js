const consts = require('./consts');

const eventsAdultsList = {
  attachment: {
    type: "template",
    payload: {
      template_type: "list",
      top_element_style: "large",
      elements: [
        {
          title: "Gegenüberstellungen - Zwei Experten unterschiedlicher Disziplinen führen durch die Ausstellung",
          subtitle: "Tandemführung am Samstag, den 07.04.2018 um 15:00 Uhr",
          image_url: "https://www.smb.museum/typo3temp/_processed_/9/9/csm_J_csm_SLIDER5_GREY_xl_e9ec32c40b_xl_7a8cadda3d.jpg",
          buttons: [
            {
              title: "Details",
              type: "web_url",
              url: "https://www.smb.museum/veranstaltungen/detail/gegenueberstellungenzwei-experten-unterschiedlicher-disziplinen-fuehren-durch-die-ausstellung-1.html?tx_smb_pi1%5Blocation%5D=28&tx_smb_pi1%5Btarget%5D=197&tx_smb_pi1%5BbackPid%5D=52&cHash=5b35dacba7e1a0be6ac86d6b3782c981",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio
            }
          ]
        },
        {
          title: "Museumskonzert Staatsoper",
          subtitle: "Öffentliche Führung und Konzert am Sonntag, den 08.04.2018 um 11:00 Uhr",
          image_url: "https://www.smb.museum/typo3temp/_processed_/d/4/csm_museumskonzert_thomas_bartilla_xl_xl_a27d3999bb.jpg",
          buttons: [
            {
              title: "Details",
              type: "web_url",
              url: "https://www.smb.museum/veranstaltungen/detail/museumskonzert-staatsoper.html?tx_smb_pi1%5Blocation%5D=28&tx_smb_pi1%5Btarget%5D=197&tx_smb_pi1%5BbackPid%5D=52&cHash=c04631f2dd4dcb6c9eada82fcb41b627",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio
            }
          ]
        },
        {
          title: "Afrikanische und europäische Skulpturen",
          subtitle: "Kuratorenführung | Tandemführung am Donnerstag, den 12.04.2018 um 18:00 Uhr",
          image_url: "https://www.smb.museum/typo3temp/_processed_/f/e/csm_SLIDER3_GREY_xl_xl_4f3639ae74.jpg",
          buttons: [
            {
              title: "Details",
              type: "web_url",
              url: "https://www.smb.museum/veranstaltungen/detail/afrikanische-und-europaeische-skulpturen-1.html?tx_smb_pi1%5Blocation%5D=28&tx_smb_pi1%5Btarget%5D=197&tx_smb_pi1%5BbackPid%5D=52&cHash=79f5830b4e457c857b7129d903c9c8c5",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio
            }
          ]
        },
        {
          title: "Unvergleichlich - Ausstellungsgespräch (mit Deutscher Gebärdensprache)",
          subtitle: "Tandemführung für Erwachsene mit und ohne Hörbeeinträchtigung am Samstag, den 14.04.2018 um 15:00 Uhr",
          image_url: "https://www.smb.museum/typo3temp/_processed_/1/b/csm_Afrika-fuer-web-4_xl_xl_d0ab642cad.jpg",
          buttons: [
            {
              title: "Details",
              type: "web_url",
              url: "https://www.smb.museum/veranstaltungen/detail/unvergleichlichausstellungsgespraech-fuer-gehoerlose-und-hoerende-erwachsene-mit-deutscher-gebae.html?tx_smb_pi1%5Blocation%5D=28&tx_smb_pi1%5Btarget%5D=197&tx_smb_pi1%5BbackPid%5D=52&cHash=a7ce88e8fad36b55d2f975d175445fce",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio
            }
          ]
        }
      ],
       buttons: [
        {
          title: "Weitere Angebote",
          type: "web_url",
          url: "https://www.smb.museum/veranstaltungen.html?tx_smb_pi1%5Blocation%5D=28&tx_smb_pi1%5Btarget%5D=197&cHash=32ca302ffac30da19944c1f27092af9a",
          webview_height_ratio: consts.value.defaultWebviewHeightRatio
        }
      ]
    }
  }
};


const eventsKidsList = {
  attachment: {
    type: "template",
    payload: {
      template_type: "list",
      top_element_style: "large",
      elements: [
        {
          title: "Erzähl mal",
          subtitle: "Workshop (eintägig) am Samstag, den 07.04.2018 um 14:00 Uhr",
          image_url: "https://smb.gomus.de/production/products/102575/detail/J_SMB_Kunst_aus_Afrika_FWS_Paarweise_01_11_17_AS_18_xl.jpg.jpg?1521795404",
          buttons: [
            {
              title: "Details",
              type: "web_url",
              url: "https://www.smb.museum/veranstaltungen/detail/erzaehl-mal-1.html?tx_smb_pi1%5Btarget%5D=224&tx_smb_pi1%5Blocation%5D=28&tx_smb_pi1%5BbackPid%5D=52&cHash=e60eacef607b68f7c3f1535d4de60dc5",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio
            }
          ]
        },
        {
          title: "Patchwork und Co.",
          subtitle: "Öffentliche Workshop (120min.) am Mittwoch, den 34.14.2018 um 25:00 Uhr",
          image_url: "https://smb.gomus.de/production/exhibitions/66/detail/BM_skulptur.jpg?1469184001",
          buttons: [
            {
              title: "Details",
              type: "web_url",
              url: "https://www.smb.museum/veranstaltungen/detail/museumskonzert-staatsoper.html?tx_smb_pi1%5Blocation%5D=28&tx_smb_pi1%5Btarget%5D=197&tx_smb_pi1%5BbackPid%5D=52&cHash=c04631f2dd4dcb6c9eada82fcb41b627",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio
            }
          ]
        },
        {
          title: "Paarweise (dreitägig / 27.-29.03. / 10-13 Uhr)",
          subtitle: "Workshop ab Dienstag, den 27.03.2018 um 10:00 Uhr",
          image_url: "https://www.smb.museum/typo3temp/_processed_/f/e/csm_SLIDER3_GREY_xl_xl_4f3639ae74.jpg",
          buttons: [
            {
              title: "Details",
              type: "web_url",
              url: "https://www.smb.museum/veranstaltungen/detail/afrikanische-und-europaeische-skulpturen-1.html?tx_smb_pi1%5Blocation%5D=28&tx_smb_pi1%5Btarget%5D=197&tx_smb_pi1%5BbackPid%5D=52&cHash=79f5830b4e457c857b7129d903c9c8c5",
              webview_height_ratio: consts.value.defaultWebviewHeightRatio
            }
          ]
        }
      ],
       buttons: [
        {
          title: "Weitere Angebote",
          type: "web_url",
          url: "https://www.smb.museum/veranstaltungen.html?tx_smb_pi1%5Blocation%5D=28&tx_smb_pi1%5Btarget%5D=197&cHash=32ca302ffac30da19944c1f27092af9a",
          webview_height_ratio: consts.value.defaultWebviewHeightRatio
        }
      ]
    }
  }
}

exports.value = {
  eventsAdultsList,
  eventsKidsList
}
