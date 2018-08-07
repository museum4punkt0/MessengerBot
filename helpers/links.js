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

exports.func = {
  buildLinks
}
