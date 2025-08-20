
/* ==================== */
/* Typing Animation (Hero Title + Paragraph) */
/* ==================== */
const typingText = document.querySelector(".typing");
const typingPara = document.querySelector(".typing-para");

const textArray = [
  "Vice-President (Operations) CAUSE Society (SE-Dept CUST)",
  "Software Engineering Student",
  "Frontend Developer",
  "Transport Management Expert",
  "Event Organizer"
];
const paraArray = [
  "Passionate about building modern web and mobile applications.",
  "Dedicated to learning new technologies every day.",
  "Experienced in event management and transport solutions.",
  "Focused on teamwork, leadership, and innovation."
];

let textIndex = 0, charIndex = 0;
let paraIndex = 0, paraCharIndex = 0;

/* Title typing effect */
function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 200);
  }
}

/* Paragraph typing effect */
function typePara() {
  if (paraCharIndex < paraArray[paraIndex].length) {
    typingPara.textContent += paraArray[paraIndex].charAt(paraCharIndex);
    paraCharIndex++;
    setTimeout(typePara, 80);
  } else {
    setTimeout(erasePara, 2500);
  }
}

function erasePara() {
  if (paraCharIndex > 0) {
    typingPara.textContent = paraArray[paraIndex].substring(0, paraCharIndex - 1);
    paraCharIndex--;
    setTimeout(erasePara, 40);
  } else {
    paraIndex = (paraIndex + 1) % paraArray.length;
    setTimeout(typePara, 200);
  }
}

/* Run both animations */
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
  typePara();
});

/* ==================== */
/* Smooth Scroll for Navbar */
/* ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".skill-bar");
const skillCards = document.querySelectorAll(".skill-card");

function showSkills() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bar.style.opacity = "1";
      bar.style.transform = "translateY(0)";
      const progress = bar.querySelector(".progress");
      progress.style.width = bar.getAttribute("data-skill") + "%";
    }
  });

  skillCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", showSkills);

/* ==================== */
/* Dark/Light Mode Toggle */
/* ==================== */
const body = document.body;
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.classList.add("darkmode-toggle");
document.body.appendChild(toggleBtn);

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.innerText = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerText = "🌙";
    localStorage.setItem("theme", "light");
  }
});
=======
/* ==================== */
/* Typing Animation (Hero Title + Paragraph) */
/* ==================== */
const typingText = document.querySelector(".typing");
const typingPara = document.querySelector(".typing-para");

const textArray = [
  "Vice-President (Operations) CAUSE Society (SE-Dept CUST)",
  "Software Engineering Student",
  "Frontend Developer",
  "Transport Management Expert",
  "Event Organizer"
];

const paraArray = [
  "Passionate about building modern web and mobile applications.",
  "Dedicated to learning new technologies every day.",
  "Experienced in event management and transport solutions.",
  "Focused on teamwork, leadership, and innovation."
];

let textIndex = 0, charIndex = 0;
let paraIndex = 0, paraCharIndex = 0;

/* Title typing effect */
function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 200);
  }
}

/* Paragraph typing effect */
function typePara() {
  if (paraCharIndex < paraArray[paraIndex].length) {
    typingPara.textContent += paraArray[paraIndex].charAt(paraCharIndex);
    paraCharIndex++;
    setTimeout(typePara, 80);
  } else {
    setTimeout(erasePara, 2500);
  }
}

function erasePara() {
  if (paraCharIndex > 0) {
    typingPara.textContent = paraArray[paraIndex].substring(0, paraCharIndex - 1);
    paraCharIndex--;
    setTimeout(erasePara, 40);
  } else {
    paraIndex = (paraIndex + 1) % paraArray.length;
    setTimeout(typePara, 200);
  }
}

/* Run both animations */
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
  typePara();
});

/* ==================== */
/* Smooth Scroll for Navbar */
/* ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".skill-bar");
const skillCards = document.querySelectorAll(".skill-card");

function showSkills() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bar.style.opacity = "1";
      bar.style.transform = "translateY(0)";
      const progress = bar.querySelector(".progress");
      progress.style.width = bar.getAttribute("data-skill") + "%";
    }
  });

  skillCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", showSkills);

/* ==================== */
/* Dark/Light Mode Toggle */
/* ==================== */
const body = document.body;
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.classList.add("darkmode-toggle");
document.body.appendChild(toggleBtn);

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.innerText = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerText = "🌙";
    localStorage.setItem("theme", "light");
  }
});

