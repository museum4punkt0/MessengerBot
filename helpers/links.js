const consts = require('./consts');

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
            webview_height_ratio: consts.value.defaultWebviewHeightRatio,
          }
        ]
      }
    }
  }
}

exports.func = {
  buildLinks
}
