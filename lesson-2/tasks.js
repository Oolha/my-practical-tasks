//!--1--
// 1. DOM - це представлення HTML документів у вигляді дерева тегів, де кожен елемент є обʼєктом(вузлом).
// Ця структура дозволяє JavaScript взаємодіяти з HTML елементами та маніпулювати ними.

//!--Завдання-1.1-

// Реализовать функцию, которая будет получать массив элементов и выводить их на страницу в виде списка.

const showListOfElements = (array) => {
  if (!Array.isArray(array)) return;

  const listItems = array.map((arr) => `<li>${arr}</li>`);

  const list = `<ul>${listItems.join("")}</ul>`;

  document.body.innerHTML += list;
};

const firstArray = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
const secondArray = ["1", "2", "3", "sea", "user", 23];

//!--Завдання-1.2-

// - ??? Очистить страницу через 10 секунд. Показывать таймер обратного отсчета (только секунды) перед очищением страницы.
// - Если внутри массива одним из элементов будет еще один массив или объект, выводить его как вложенный список.

let seconds = 0;

const timer = document.createElement("button");
timer.textContent = `Очистити`;

timer.addEventListener("click", () => {
  seconds = 5;

  timer.textContent = `очищення за ${seconds}`;

  const timeInterval = setInterval(() => {
    seconds--;
    timer.textContent = `Очищення за ${seconds} сек`;

    if (seconds <= 0) {
      clearInterval(timeInterval);
      document.body.innerHTML = "";
    }
  }, 1000);
});

showListOfElements(firstArray);
showListOfElements(secondArray);

document.body.appendChild(timer);

//!--Завдання-2.1-

// Написать реализацию кнопки "Показать пароль".

const form = document.getElementById("form");
const passwordBtns = document.querySelectorAll(".toggle-password");
const errorMessage = document.getElementById("passwordError");
errorMessage.style.display = "none";

passwordBtns.forEach((button) =>
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const passwordField = document.getElementById(targetId);

    if (passwordField.type === "password") {
      passwordField.type = "text";

      this.querySelector(".eye-icon").style.display = "none";
      this.querySelector(".eye-slash-icon").style.display = "block";
    } else {
      passwordField.type = "password";
      this.querySelector(".eye-icon").style.display = "block";
      this.querySelector(".eye-slash-icon").style.display = "none";
    }
  })
);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;

  if (password1 === password2) {
    errorMessage.style.display = "none";
    alert("You are welcome");
  } else {
    errorMessage.style.display = "block";
  }
});
