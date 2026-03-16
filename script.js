/* TIME + GREETING */

function updateTime() {
  const now = new Date();
  const hour = now.getHours();

  let greeting = "Good evening 🌙";

  if (hour < 12) {
    greeting = "Good morning 🌅";
  } else if (hour < 18) {
    greeting = "Good afternoon ☀️";
  }

  const timeText = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });

  const dateText = now.toLocaleDateString([], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  document.getElementById("greeting").textContent = greeting;
  document.getElementById("time").textContent = timeText;
  document.getElementById("date").textContent = dateText;
}

updateTime();
setInterval(updateTime, 1000);


/* COUNTDOWN */

function updateCountdown() {
  const target = new Date("June 16, 2026").getTime();
  const now = new Date().getTime();
  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("countdownDays").textContent = days + " days";
}

updateCountdown();
setInterval(updateCountdown, 60000);


/* ROTATING QUOTES */

const quotes = [
  "Everything is fine. Suspiciously fine.",
  "Drink your coffee before you start questioning your life choices.",
  "Do it now, because later-you is already annoyed.",
  "You don't need perfection. You need momentum.",
  "If it takes five minutes, quit staring at it and do it.",
  "One thing at a time. You are not an octopus.",
  "Half the stress is from putting it off.",
  "Get up, fix the thing, and then be dramatic.",
  "You are tired, not incapable.",
  "Make the list. Pick one. Start there."
];

function showQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteBox").textContent = quotes[random];
}

showQuote();
setInterval(showQuote, 120000);