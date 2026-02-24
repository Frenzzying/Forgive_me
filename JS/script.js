let noClickCount = 0;

const mainText = document.getElementById("mainText");
const forgiveBtn = document.getElementById("forgiveBtn");
const noForgiveBtn = document.getElementById("noForgiveBtn");
const teddy = document.querySelector(".teddy");
const container = document.querySelector(".container");

/* ================= TEXT ================= */
//🥺 😞 😭 💔 💖
const messages = [
    "oh come on, jast natak nako karu ata chal <3",
    "BS NA.. EVDHI MOTHI GOSHT PAN NAVTI YRR 😞",
    "BS AAG BS NA, KITI NAKHRE AHE TUZE, SANGU KA MUMMY LA 😠",
    "OKAY LAST CHANCE... ha mhan nahitar mayuri kade chocolate deil tula denya sathi <3 💖",
    "OKAY LAST CHANCE... ha mhan nahitar mayur ikade chocolate deil tula denya sathi <3 💖"
];

/* ================= INITIAL POSITION ================= */

moveNoForgiveButton();

/* ================= BUTTON LOGIC ================= */

noForgiveBtn.addEventListener("click", () => {
    noClickCount++;

    if (noClickCount <= 5) {
        mainText.innerText = messages[noClickCount - 1];
        teddy.innerText = "🧸💔";

        const shrinkScale = 1 - noClickCount * 0.15;
        noForgiveBtn.style.transform = `scale(${shrinkScale})`;

        const growScale = 1 + noClickCount * 0.18;
        forgiveBtn.style.transform = `translate(-50%, -50%) scale(${growScale})`;

        moveNoForgiveButton();
    }

    if (noClickCount === 5) {
        noForgiveBtn.style.display = "none";
        mainText.innerText = "my code my rules <3.... 💕";
        teddy.innerText = "🧸💖";
    }
});

forgiveBtn.addEventListener("click", () => {
    mainText.innerText = "Aww, tech mhantal mazya var kaskay koni chidu shakat <3..";
    teddy.innerText = "🥰";
});

/* ================= MOVE BUTTON ================= */

function moveNoForgiveButton() {
    const containerRect = container.getBoundingClientRect();
    const btnRect = noForgiveBtn.getBoundingClientRect();

    const padding = 30;

    const maxX = containerRect.width - btnRect.width - padding;
    const maxY = containerRect.height - btnRect.height - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noForgiveBtn.style.left = `${x}px`;
    noForgiveBtn.style.top = `${y}px`;
}

/* ================= HEART GENERATOR ================= */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = Math.random() > 0.5 ? "💖" : "💕";

    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * 18 + 14}px`;
    heart.style.animationDuration = `${Math.random() * 4 + 6}s`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}


setInterval(createHeart, 700);

