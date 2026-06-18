const sky = document.querySelector(".sky");
const starsContainer = document.getElementById("stars");
const moon = document.getElementById("moon");
const plane = document.getElementById("plane");

let night = false;

/* ESTRELAS */

for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");

  star.classList.add("star");

  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * (window.innerHeight / 2) + "px";

  starsContainer.appendChild(star);
}

starsContainer.style.opacity = "0";

/* DIA E NOITE */

setInterval(() => {
  if (night) {
    sky.style.background = `
      radial-gradient(
        circle closest-corner at 15% 15%,
        #ffcf33,
        #ffcf33 20%,
        #ffff66 21%,
        #bbeeff 100%
      )
    `;

    starsContainer.style.opacity = "0";
    moon.style.opacity = "0";
  } else {
    sky.style.background = `
      radial-gradient(
        circle closest-corner at 15% 15%,
        #ccc,
        #ccc 20%,
        #445 21%,
        #223 100%
      )
    `;

    starsContainer.style.opacity = "1";
    moon.style.opacity = "1";
  }

  night = !night;
}, 8000);

/* AVIÃO */

let planeX = -100;

setInterval(() => {
  planeX += 2;

  if (planeX > window.innerWidth + 100) {
    planeX = -100;
  }

  plane.style.left = planeX + "px";
}, 10);

/* JANELAS PISCANDO */

const windows = document.querySelectorAll(
  ".bb1-window, .bb4-window, .fb2-window, .fb3-window, .fb4-window"
);

setInterval(() => {
  const randomWindow =
    windows[Math.floor(Math.random() * windows.length)];

  randomWindow.style.opacity =
    randomWindow.style.opacity === "0.2" ? "1" : "0.2";
}, 250);

/* CHUVA */

for (let i = 0; i < 150; i++) {
  const drop = document.createElement("div");

  drop.classList.add("raindrop");

  drop.style.left = Math.random() * window.innerWidth + "px";

  let y = Math.random() * window.innerHeight;

  document.body.appendChild(drop);

  setInterval(() => {
    y += 10;

    if (y > window.innerHeight) {
      y = -20;
    }

    drop.style.top = y + "px";
  }, 20);
}
