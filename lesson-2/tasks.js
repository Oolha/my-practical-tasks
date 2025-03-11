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

//!--3--

// Рекурсія - це термін в програмуванні, який означає, що функція викликає саму себе.
// Рекурсія корисна в тих випадках, коли завдання може бути розділене на декілька того ж роду завдань, але простіших.

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// Функція для підрахунку суми зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // випадок (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сума масиву
  } else {
    // випадок (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно викликається для підвідділів, суммуючи результат
    }
    return sum;
  }
}

alert(sumSalaries(company)); // 7700

//!--завдання-3.1--
// Реализовать функцию подсчета факториала числа.

// Технические требования:

// - Считать с помощью модального окна браузера число, которое введет пользователь.
// - С помощью функции посчитать факториал числа, которое ввел пользователь, и вывести его на экран.
// - Использовать синтаксис ES6 для работы с перемеными и функциями.

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

const userNumber = parseInt(prompt("Введіть число для обчислення факторіалу:"));

alert(`Факторіал числа ${userNumber} дорівнює ${factorial(userNumber)}`);

//!--завдання-4.1--

// Реализовать универсальный фильтр массива объектов

// #### Технические требования:

// - Написать функцию `filterCollection()`, которая позволит отфильтровать любой массив по заданным ключевым словам.
// - Функция должна принимать на вход три основных аргумента:
//   - массив, который надо отфильтровать
//   - строку с ключевыми словами, которые надо найти внутри массива (одно слово или несколько слов, разделеных пробелом)
//   - boolean флаг, который будет говорить, надо ли найти все ключевые слова (`true`), либо же достаточно совпадения одного из них (`false`)
//   - четвертый и последующие аргументы будут являться именами полей, внутри которых надо искать совпадение. Если поле находится не на первом уровне объекта, к нему надо указать полный путь через `.`. Уровень вложенности полей может быть любой.
// - Пример вызова функции:

// ```javascript
// filterCollection(
//   vehicles,
//   "en_US Toyota",
//   true,
//   "name",
//   "description",
//   "contentType.name",
//   "locales.name",
//   "locales.description"
// );
// ```

const filterCollection = (arr, keyWords, boolean, ...fields) => {
  const keywords = keyWords.split(" ");

  const getNestedValue = (obj, path) => {
    const keys = path.split(".");
    let value = obj;

    for (const key of keys) {
      if (value === null || value === undefined) return undefined;
      value = value[key];
    }
    return value;
  };

  return arr.filter((el) => {
    const keywordsMatches = keywords.map((word) => {
      for (const field of fields) {
        const value = getNestedValue(el, field);

        if (value !== undefined && value !== null) {
          const stringValue = String(value).toLowerCase();

          if (stringValue.includes(word.toLowerCase())) {
            return true;
          }
        }
      }
      return false;
    });
    if (boolean) {
      return keywordsMatches.every((match) => match === true);
    } else {
      return keywordsMatches.some((match) => match === true);
    }
  });
};

const vehicles = [
  {
    id: 1,
    name: "Toyota Corolla",
    description: "Економічний седан",
    contentType: {
      name: "car",
    },
    locales: {
      name: "Toyota Corolla en_US",
      description: "Economic sedan for US market",
    },
  },
  {
    id: 2,
    name: "Honda Civic",
    description: "Сучасний міський автомобіль",
    contentType: {
      name: "car",
    },
    locales: {
      name: "Honda Civic en_US",
      description: "Modern city car for US market",
    },
  },
];

const toyotaCars = filterCollection(
  vehicles,
  "Toyota",
  true,
  "name",
  "description"
);
console.log(toyotaCars.map((car) => car.name));
