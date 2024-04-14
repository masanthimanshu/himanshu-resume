console.log("It's Working!!");

const appData = [
  {
    title: "OTT Mobile App",
    subtitle: "OTT mobile app built using Flutter",
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
    image: "",
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
    title: "OTT Mobile App",
    subtitle: "OTT mobile app built using Flutter",
    image: "",
    details: [
      "Used Flutter to build the front end.",
      "Integrated Rest APIs to get movie data.",
      "Used DIO and interceptors for API requests.",
      "Incorporated Riverpod for Global state management.",
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
        <img
          src="https://raw.githubusercontent.com/masanthimanshu/node-resume/main/public/images/EMICalculator.png"
          alt="Image"
        />
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
        <br /><br />
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
        <img
          src="https://raw.githubusercontent.com/masanthimanshu/node-resume/main/public/images/EMICalculator.png"
          alt="Image"
        />
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
        <br /><br />
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
