// script.js
const plush = document.getElementById("plush");
const speechBubble = document.getElementById("speech-bubble");
const giftButton = document.getElementById("gift-button");
const giftBox = document.getElementById("gift-box");

const messages = [
  "Ur doing amazing 💖 ",
  "Embe siu nhân 🦸‍♂️",
  "Tặng chú cái pudding 🍮",
  "Sending a bear hug 🐻💨",
];

const gifts = [
  "🎵 Bài nì hay hay: <a href='https://music.youtube.com/watch?v=Bl0Gtp5FMd4&si=S4KRwehmF-9YXIt2' target='_blank'> đây nha chú 🎶</a>"
];

plush.addEventListener("click", () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  speechBubble.textContent = msg;
});

giftButton.addEventListener("click", () => {
  giftBox.style.display = "block";
  const todayGift = gifts[new Date().getDate() % gifts.length];
  giftBox.innerHTML = todayGift;
});
