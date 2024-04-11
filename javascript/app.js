console.log("It's Working!!");

const data = [
  {
    title: "BusTM Application",
    subtitle: "Online bus booking application",
    image: "",
    details: [
      "Built using Flutter and Firebase.",
      "Utilized MVC architecture.",
      "Incorporated Riverpod for Global state management.",
    ],
  },
  {
    title: "BusTM Application",
    subtitle: "Online bus booking application",
    image: "",
    details: [
      "Built using Flutter and Firebase.",
      "Utilized MVC architecture.",
      "Incorporated Riverpod for Global state management.",
    ],
  },
  {
    title: "BusTM Application",
    subtitle: "Online bus booking application",
    image: "",
    details: [
      "Built using Flutter and Firebase.",
      "Utilized MVC architecture.",
      "Incorporated Riverpod for Global state management.",
    ],
  },
];

const root = document.getElementById("projects");

data.forEach((e) => {
  root.insertAdjacentHTML(
    "beforeEnd",
    `<section class="project_sec">
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
        </ul>
        <br />
        <br />
        <button class="light_btn">Live Preview</button>
        <button class="dark_btn">Github</button>
      </div>
    </section>`
  );
});
