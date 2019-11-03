const justinsantosText = "justinsantos";
const midNameTypingDelay = 2250;
const onLoadTypingDelay = 1500;
const typingDelay = 125;
const juSpan = document.querySelector(".ju");
const stinsanSpan = document.querySelector(".stinsan");
const tosSpan = document.querySelector(".tos");
const blinkingUnderscoreSpan = document.querySelector(".blinking-underscore");
let charIndex = -1;

function typeHomepage() {
  if (charIndex < justinsantosText.length) {
    // Currently typing, remove blinking underscore
    if (!blinkingUnderscoreSpan.classList.contains("typing")) {
      blinkingUnderscoreSpan.classList.add("typing");
    }

    charIndex++;

    // Add next character
    if (charIndex < 2) {
      juSpan.textContent += justinsantosText.charAt(charIndex);
    }
    else if (charIndex >= 2 && charIndex < 9) {
      stinsanSpan.textContent += justinsantosText.charAt(charIndex);
    }
    else {
      tosSpan.textContent += justinsantosText.charAt(charIndex);
    }

    if (charIndex === 5) { // Add significant delay between first and last name
      setTimeout(typeHomepage, midNameTypingDelay);
      blinkingUnderscoreSpan.classList.remove("typing");
    }
    else { // Else normal delay
      setTimeout(typeHomepage, typingDelay);
    }
  }
  else { // No longer typing, bring back blinking underscore
    blinkingUnderscoreSpan.classList.remove("typing");
    setTimeout(stinsanRecolor, 500);
  }
}

function stinsanRecolor() {
  stinsanSpan.style.color = "#FF756D";
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(typeHomepage, onLoadTypingDelay);
});
