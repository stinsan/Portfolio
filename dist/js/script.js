//--------------------------homepage typewriter---------------------------------
const justinsantosText = "justinsantos";
const midNameTypingDelay = 2250;
const onLoadTypingDelay = 1500;
const typingDelay = 125;
const juSpan = document.querySelector(".ju");
const stinsanSpan = document.querySelector(".stinsan");
const tosSpan = document.querySelector(".tos");
const blinkingUnderscoreSpan = document.querySelector(".blinking-underscore");

function typeHomepage(index) {
  let charIndex = index;
  let totalLength = juSpan.textContent.length + stinsanSpan.textContent.length +
    tosSpan.textContent.length;

  if (charIndex < justinsantosText.length) {
    // Currently typing, remove blinking underscore
    if (!blinkingUnderscoreSpan.classList.contains("typing")) {
      blinkingUnderscoreSpan.classList.add("typing");
    }

    charIndex++;
    // Add next character
    if (charIndex < 2) {
      juSpan.textContent += justinsantosText.charAt(charIndex);
    } else if (charIndex >= 2 && charIndex < 9) {
      stinsanSpan.textContent += justinsantosText.charAt(charIndex);
    } else {
      tosSpan.textContent += justinsantosText.charAt(charIndex);
    }

    if (charIndex === 5) { // Add significant delay between first and last name
      setTimeout(function() {
        typeHomepage(charIndex)
      }, midNameTypingDelay);
      blinkingUnderscoreSpan.classList.remove("typing");
    } else { // Else normal delay
      setTimeout(function() {
        typeHomepage(charIndex)
      }, typingDelay);
    }
  } else { // No longer typing, bring back blinking underscore
    blinkingUnderscoreSpan.classList.remove("typing");
    setTimeout(function() {
      stinsanSpan.style.color = "#5284bd";
    }, 500);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    typeHomepage(-1)
  }, onLoadTypingDelay);
});

//-------------------------------modals----------------------------------------
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active")
  overlay.classList.add("active")
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove("active")
  overlay.classList.remove("active")
}
