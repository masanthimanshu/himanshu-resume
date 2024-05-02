console.log("It's Working!!");

const appData = [
  {
    title: "Smart Weather App",
    subtitle: "See weather of any city around the world",
    link: "https://play.google.com/store/apps/details?id=smart_weather.app.smart_weather&hl=en_US",
    github: "https://github.com/masanthimanshu/Smart-Weather",
    image: "smart_weather_app.png",
    details: [
      "Utilized MVC architecture.",
      "Used DIO package for API requests.",
      "Incorporated Riverpod for Global state management.",
      "Integrated OpenWeatherMap Rest APIs to get weather data.",
    ],
  },
  {
    title: "OTT Mobile App",
    subtitle: "OTT mobile app built using Flutter",
    link: "",
    github: "https://github.com/masanthimanshu/ott_app",
    image: "ott_app.png",
    details: [
      "Used Flutter to build the front end.",
      "Integrated Rest APIs to get movie data.",
      "Used DIO and interceptors for API requests.",
      "Incorporated Riverpod for Global state management.",
    ],
  },
  {
    title: "BusTM Application",
    subtitle: "Online bus booking application",
    link: "",
    github: "",
    image: "bus_tm_app.png",
    details: [
      "Utilized MVC architecture.",
      "Built using Flutter and Firebase.",
      "Used DIO and interceptors for API requests.",
      "Incorporated Riverpod for Global state management.",
    ],
  },
  {
    title: "Flap Chat",
    subtitle: "Chat app built using Flutter and Firebase",
    link: "https://apps.apple.com/us/app/flap-chat-voice-video-calls/id1525250781",
    github: "",
    image: "flap_chat_app.png",
    details: [
      "Used Flutter to build the front end.",
      "Used Firebase Auth to manage user authentication.",
      "Used Firebase Cloud Firestore to manage chat data.",
      "Incorporated Riverpod for Global state management.",
    ],
  },
  {
    title: "Billing App",
    subtitle: "POS App made for shopkeepers for billing",
    link: "",
    github: "https://github.com/masanthimanshu/billing_app",
    image: "billing_app.png",
    details: [
      "Used Flutter to Build the Frontend.",
      "Incorporated Riverpod for Global state management.",
      "Used Firebase to store data and manage user authentication.",
      "Used Flutter Barcode Scanner package for adding products in the database.",
    ],
  },
];

const webData = [
  {
    title: "OTT Website",
    subtitle: "OTT Website build using ReactJS",
    link: "https://ott-website.pages.dev/category/home",
    github: "https://github.com/masanthimanshu/ott-website",
    image: "ott_website.png",
    details: [
      "Used Cypress for automation testing.",
      "Integrated Rest APIs to get movie data.",
      "Used ReactJS and Material UI to Build the frontend.",
      "Incorporated React Context API for Global state management.",
    ],
  },
  {
    title: "BUS-TM Dashboard",
    subtitle: "ReactJS web app for Managing Mobile app",
    link: "https://bustm-dashboard.pages.dev",
    github: "",
    image: "bus_tm_dashboard.png",
    details: [
      "Used ReactJS and Material UI to Build the frontend.",
      "Used ChartJS to show the data Visually on the dashboard.",
      "Incorporated React Context API for Global state management.",
      "Used Firebase as a backend for this application to manage data.",
    ],
  },
  {
    title: "Pokemon Game",
    subtitle: "A fun game for Pokemon fans",
    link: "https://masanthimanshu.github.io/pokemon",
    github: "https://github.com/masanthimanshu/pokemon",
    image: "pokemon_game.png",
    details: [
      "Deployed with ❤️ on Github Pages.",
      "Used HTML5 and CSS3 to Build the frontend.",
      "Incorporated 2D arrays to display questions.",
      "Used JavaScript along with JQuery for it's functionality.",
    ],
  },
  {
    title: "Happiness Valley",
    subtitle: "NodeJS Handlebars based website",
    link: "https://happiness-valley.onrender.com",
    github: "https://github.com/masanthimanshu/happiness-valley",
    image: "happiness_valley.png",
    details: [
      "Used HTML and CSS to develope the frontend.",
      "Used NodeJS Handlebars to Build the website.",
      "Utilized MVC Architecture to develop the Source Code.",
      "Utilized ES-Lint and Google style guide to enforce for code architecture.",
    ],
  },
  {
    title: "Accounting Bunny Website",
    subtitle: "SAAS landing page built using Tailwind CSS and Tailblocks",
    link: "https://accountingbunny.pages.dev",
    github: "https://github.com/masanthimanshu/accounting_bunny_tailblocks",
    image: "accounting_bunny.png",
    details: [
      "Utilized Tailblocks to build a better looking UI faster.",
      "Used HTML and Tailwind CSS to develope the frontend.",
      "Used doodles to make the UI look more attractive and lively.",
      "Deployed on Cloudflare Pages with CI/CD and Github actions.",
    ],
  },
  {
    title: "EMI Calculator",
    subtitle: "SAAS landing page built using Tailwind CSS and Tailblocks",
    link: "https://masanthimanshu.github.io/emi",
    github: "https://github.com/masanthimanshu/emi",
    image: "emi_calculator.png",
    details: [
      "Utilized Tailblocks to build a better looking UI faster.",
      "Used HTML and Tailwind CSS to develope the frontend.",
      "Used doodles to make the UI look more attractive and lively.",
      "Deployed on Cloudflare Pages with CI/CD and Github actions.",
    ],
  },
];

const appRoot = document.getElementById("app_projects");
const webRoot = document.getElementById("web_projects");

// App Projects Loop

appData.forEach((e) => {
  appRoot.insertAdjacentHTML(
    "beforeEnd",
    `<section class="grid_sec">
      <a href=${e.link}>
        <div class="image_sec mobile_img">
          <img src="/images/apps/${e.image}" alt="Image" />
        </div>
      </a>
      <div class="text_sec">
        <h2>${e.title}</h2>
        <h3>${e.subtitle}</h3>
        <br />
        <hr />
        <br />
        <ul>
          <li><p>${e.details[0]}</p></li>
          <li><p>${e.details[1]}</p></li>
          <li><p>${e.details[2]}</p></li>
          <li><p>${e.details[3]}</p></li>
        </ul>
        <br />
        <a href=${e.link}>
          <button class="light_btn">
            Live Preview &nbsp; &nbsp; <i class="fa-solid fa-globe"></i>
          </button>
        </a>
        <a href=${e.github}>
          <button class="dark_btn">
            Github &nbsp; &nbsp; <i class="fa-brands fa-github"></i>
          </button>
        </a>
      </div>
    </section>`
  );
});

// Web Projects Loop

webData.forEach((e) => {
  webRoot.insertAdjacentHTML(
    "beforeEnd",
    `<section class="grid_sec">
      <a href=${e.link}>
        <div class="image_sec web_img">
          <img src="/images/websites/${e.image}" alt="Image" />
        </div>
      </a>
      <div class="text_sec">
        <h2>${e.title}</h2>
        <h3>${e.subtitle}</h3>
        <br />
        <hr />
        <br />
        <ul>
          <li><p>${e.details[0]}</p></li>
          <li><p>${e.details[1]}</p></li>
          <li><p>${e.details[2]}</p></li>
          <li><p>${e.details[3]}</p></li>
        </ul>
        <br />
        <a href=${e.link}>
          <button class="light_btn">
            Live Preview &nbsp; &nbsp; <i class="fa-solid fa-globe"></i>
          </button>
        </a>
        <a href=${e.github}>
          <button class="dark_btn">
            Github &nbsp; &nbsp; <i class="fa-brands fa-github"></i>
          </button>
        </a>
      </div>
    </section>`
  );
});
