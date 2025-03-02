const button = document.querySelector(".button");

const originalText = button.innerText;
let isChanged = false;

button.addEventListener("click", function (event) {
  if (isChanged) {
    button.innerText = originalText;
    button.style.backgroundColor = "";
    button.style.color = "";
  } else {
    button.innerText = "Hi there! 😎";
    button.style.backgroundColor = "#3498db";
    button.style.color = "white";
  }
  isChanged = !isChanged;

  //animation
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rect = button.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});
