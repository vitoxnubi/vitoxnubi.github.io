const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatMessages = document.querySelector("#chat-messages");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = chatInput.value.trim();
  if (!message) return;

  const messageElement = document.createElement("p");
  const userElement = document.createElement("strong");

  userElement.className = "chat-user blue";
  userElement.textContent = "Tú: ";

  messageElement.append(userElement, document.createTextNode(message));
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  chatInput.value = "";
  chatInput.focus();
});