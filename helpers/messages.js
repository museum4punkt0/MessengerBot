const thankYouMessage = [
  {
    text: "Thanks for stopping by!"
  },
  {
    text: "Man I'm so thankful!",
    quick_replies:[
      {
        content_type: 'text',
        title: 'Thank you, bot!',
        payload: 'THANK_YOU'
      },
      {
        content_type: 'text',
        title: 'Thank you, bot!',
        payload: 'THANK_YOU'
      }
    ]
  }
];

exports.data = {
  thankYouMessage
}
