// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: '',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'おはようございます',
  greetingAfternoon: 'こんにちは',
  greetingEvening: 'こんばんは',
  greetingNight: 'おやすみ',

  // Weather
  weatherKey: '202076dbf11c6eb358e88adeabe77119',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '43.073',
  defaultLongitude: '89.401',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Google',
      icon: 'chrome',
      link: 'https://www.google.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/',
    },
    {
      id: '3',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '4',
      name: 'Facebook',
      icon: 'facebook',
      link: 'https://www.facebook.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Twitch',
      icon: 'twitch',
      link: 'https://www.twitch.tv/ninjacookiexy',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'compass',
  secondListIcon: 'shopping-bag',

  // Links
  lists: {
    firstList: [
      {
        name: 'GitHub',
        link: 'https://github.com/',
      },
      {
        name: 'Drive',
        link: 'https://drive.google.com/drive/u/0/',
      },
      {
        name: 'Outlook',
        link: 'https://outlook.office.com/mail/inbox',
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/jobs/',
      },
    ],
    secondList: [
      {
        name: 'Amazon',
        link: 'https://www.amazon.com',
      },
      {
        name: 'eBay',
        link: 'https://www.ebay.com',
      },
      {
        name: 'BuildAPCSales',
        link: 'https://www.reddit.com/r/buildapcsales',
      },
      {
        name: 'HardwareSwap',
        link: 'https://www.reddit.com/r/hardwareswap',
      },
    ],
  },
};
