console.log("It's Working!!");

const appData = [
  {
    title: "OTT Mobile App",
    subtitle: "OTT mobile app built using Flutter",
    link: "",
    image: "",
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
    image: "bus_tm_app.png",
    details: [
      "Utilized MVC architecture.",
      "Built using Flutter and Firebase.",
      "Used DIO and interceptors for API requests.",
      "Incorporated Riverpod for Global state management.",
    ],
  },
  {
    title: "Flutter Firebase Chat App",
    subtitle: "Chat app built using Flutter and Firebase",
    link: "",
    image: "",
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
    image: "",
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
    link: "",
    image: "",
    details: [
      "Used Axios for API requests.",
      "Integrated Rest APIs to get movie data.",
      "Used ReactJS and Material UI to Build the frontend.",
      "Incorporated React Context API for Global state management.",
    ],
  },
  {
    title: "BUS-TM Dashboard",
    subtitle: "ReactJS web app for Managing Mobile app",
    link: "",
    image: "bus_tm_dashboard.png",
    details: [
      "Used ReactJS and Material UI to Build the frontend.",
      "Used ChartJS to show the data Visually on the dashboard.",
      "Incorporated React Context API for Global state management.",
      "Used Firebase as a backend for this application to manage data.",
    ],
  },
  {
    title: "Happiness Valley",
    subtitle: "NodeJS Handlebars based website",
    link: "",
    image: "",
    details: [
      "Used HTML and CSS to develope the frontend.",
      "Used NodeJS Handlebars to Build the website.",
      "Utilized MVC Architecture to develop the Source Code.",
      "Utilized ES-Lint with Google's Style guide as a reference for code architecture.",
    ],
  },
  {
    title: "Accounting Bunny Website",
    subtitle: "SAAS landing page built using Tailwind CSS and Tailblocks",
    link: "",
    image: "",
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
    link: "",
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
      <div class="image_sec">
        <img src="/images/apps/${e.image}" alt="Image" />
      </div>
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
        <button class="light_btn">
          Live Preview &nbsp; &nbsp; <i class="fa-solid fa-globe"></i>
        </button>
        <button class="dark_btn">
          Github &nbsp; &nbsp; <i class="fa-brands fa-github"></i>
        </button>
      </div>
    </section>`
  );
});

// Web Projects Loop

webData.forEach((e) => {
  webRoot.insertAdjacentHTML(
    "beforeEnd",
    `<section class="grid_sec">
      <div class="image_sec">
        <img src="/images/websites/${e.image}" alt="Image" />
      </div>
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
        <button class="light_btn">
          Live Preview &nbsp; &nbsp; <i class="fa-solid fa-globe"></i>
        </button>
        <button class="dark_btn">
          Github &nbsp; &nbsp; <i class="fa-brands fa-github"></i>
        </button>
      </div>
    </section>`
  );
});
