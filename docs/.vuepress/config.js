module.exports = {
  title: "webDevWorld",
  description:
    "be master in web development and learn with very simple explanation",
  themeConfig: {
    nav: [
      { text: "home", link: "/" },
      { text: "blogs", link: "/tutorials/" },
      { text: "about me", link: "https://ctwbt.com" },
    ],
    sidebar: {
      "/tutorials/": ["webpack", "git-github"],
    },
  },
  head: [
    [
      "script",
      { src: "https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js" },
    ],
    [
      "script",
      {
        src: "https://www.gstatic.com/firebasejs/7.19.1/firebase-analytics.js",
      },
    ],
    [
      "script",
      {},
      `var firebaseConfig = {
        apiKey: "AIzaSyBcC0qE25VVos6JR6vezd4f1_dV_xslpK4",
        authDomain: "vue-press-9a58d.firebaseapp.com",
        databaseURL: "https://vue-press-9a58d.firebaseio.com",
        projectId: "vue-press-9a58d",
        storageBucket: "vue-press-9a58d.appspot.com",
        messagingSenderId: "800367852667",
        appId: "1:800367852667:web:f63b429662bda9f41df6de",
        measurementId: "G-YEDXZM3Q61"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();`,
    ],
  ],
};
//console.log('bum')
