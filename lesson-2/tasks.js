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

// alert(sumSalaries(company));

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

// alert(`Факторіал числа ${userNumber} дорівнює ${factorial(userNumber)}`);

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

//!-----------------OOП---

// **1. Інкапсуляція (Encapsulation)**

// 📌 **Ситуація з реального життя:**
// 🔹 Уяви, що у тебе є **банківський рахунок**.
// 🔹 Ти не можеш просто взяти і змінити баланс рахунку напряму (наприклад, +1 000 000$).
// 🔹 Щоб змінити баланс, ти маєш **зробити транзакцію (покласти/зняти гроші)** через банк.

// **➡ Завдання:**
// 1. Створи **клас `BankAccount`**.
// 2. Додай **приватну змінну `balance`** (баланс).
// 3. Реалізуй методи:
//    - `deposit(amount)` – покласти гроші.
//    - `withdraw(amount)` – зняти гроші (але не більше, ніж є на балансі).
//    - `getBalance()` – переглянути баланс.
// 4. Переконайся, що **змінювати `balance` напряму не можна**.

class BankAccount {
  #balance = 0;

  constructor(initialBalance = 0) {
    if (initialBalance > 0) {
      this.#balance = initialBalance;
    }
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);

console.log(account.getBalance());

account.deposit(50);
console.log(account.getBalance());

account.withdraw(30);
console.log(account.getBalance());

// ### **2. Наслідування (Inheritance)**

// 📌 **Ситуація з реального життя:**
// 🔹 Є **базовий клас `Транспорт` (Vehicle)**, у нього є **марка, модель, рік випуску**.
// 🔹 Від `Транспорт` можна створити **Автомобіль (Car)** і **Мотоцикл (Bike)**.
// 🔹 У `Car` є унікальна властивість `doors` (кількість дверей), у `Bike` – `hasSidecar` (чи є боковий причіп).

// **➡ Завдання:**
// 1. Створи **базовий клас `Vehicle`** (марка, модель, рік).
// 2. Від нього наслідуй:
//    - `Car` (додаємо `doors`)
//    - `Bike` (додаємо `hasSidecar`)
// 3. В кожному класі реалізуй метод `getInfo()`, який повертає інформацію про транспорт.

class Vehicle {
  constructor(марка, модель, рік) {
    this.марка = марка;
    this.модель = модель;
    this.рік = рік;
  }
  getInfo() {
    return `Машина марки ${this.марка} моделі ${this.модель} та ${this.рік} року`;
  }
}

class Car extends Vehicle {
  constructor(марка, модель, рік, doors) {
    super(марка, модель, рік);
    this.doors = doors;
  }
  getInfo() {
    return `Машина марки ${this.марка} моделі ${this.модель} та ${this.рік} року. Машина має ${this.doors} дверей`;
  }
}

class Bike extends Vehicle {
  constructor(марка, модель, рік, hasSidecar) {
    super(марка, модель, рік);
    this.hasSidecar = hasSidecar;
  }
  getInfo() {
    return `Мотоцикл марки ${this.марка} моделі ${this.модель} та ${this.рік} року. ${this.hasSidecar ? "Має боковий причіп" : "Без бокового причепу"}`;
  }
}

const transport = new Vehicle("Generic", "Transport", 2020);
const car = new Car("Toyota", "Camry", 2022, 4);
const bike = new Bike("Harley-Davidson", "Street 750", 2021, true);

console.log(transport.getInfo());
console.log(car.getInfo());
console.log(bike.getInfo());

// ### **3. Поліморфізм (Polymorphism)**

// 📌 **Ситуація з реального життя:**
// 🔹 Є клас `Тварина (Animal)`, у кожної тварини є метод `makeSound()`.
// 🔹 Але **кожна тварина видає свій унікальний звук**:
//    - `Собака` → "Гав!"
//    - `Кіт` → "Мяу!"
//    - `Корова` → "Му!"

// **➡ Завдання:**
// 1. Створи клас `Animal` з методом `makeSound()`, який просто повертає `"Якийсь звук..."`.
// 2. Від нього створи **3 класи**: `Dog`, `Cat`, `Cow`.
// 3. В кожному перевизнач метод `makeSound()`, щоб він повертав відповідний звук.

class Animal {
  makeSound() {
    return `Якийсь звук...`;
  }
}
class Dog extends Animal {
  makeSound() {
    return `Гав`;
  }
}
class Cat extends Animal {
  makeSound() {
    return `Мяу`;
  }
}
class Cow extends Animal {
  makeSound() {
    return `My`;
  }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();
const cow = new Cow();

console.log("Просто тварина:", animal.makeSound());
console.log("Собака:", dog.makeSound());
console.log("Кіт:", cat.makeSound());
console.log("Корова:", cow.makeSound());

// ### **4. Абстракція (Abstraction)**

// 📌 **Ситуація з реального життя:**
// 🔹 Є **спосіб оплати (`Payment`)**, але в реальному житті він буває різним:
//    - **Оплата кредитною карткою (`CreditCardPayment`)**
//    - **Оплата через PayPal (`PayPalPayment`)**
// 🔹 У кожного типу оплати різний процес транзакції.

// **➡ Завдання:**
// 1. Створи **абстрактний клас `Payment`**.
// 2. В ньому додай **метод `processPayment(amount)`, але без реалізації**.
// 3. Від нього створи підкласи:
//    - `CreditCardPayment` (логіка оплати карткою).
//    - `PayPalPayment` (логіка оплати через PayPal).
// 4. Переконайся, що не можна створити об'єкт `Payment`, а лише його підкласи.

class Payment {
  constructor() {
    if (this.constructor === Payment) {
      throw new Error("Не можна створити екземпляр абстрактного класу Payment");
    }
  }

  processPayment(amount) {
    throw new Error("Помилка");
  }
}

class CreditCardPayment extends Payment {
  constructor(cardNumber, cvv, expiryDate) {
    super();
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.expiryDate = expiryDate;
  }

  processPayment(amount) {
    return `Оплата ${amount} грн. карткою ${this.cardNumber.slice(-4)} успішно проведена`;
  }
}

class PayPalPayment extends Payment {
  constructor(email) {
    super();
    this.email = email;
  }

  processPayment(amount) {
    return `Оплата ${amount} грн. через PayPal-акаунт ${this.email} успішно проведена`;
  }
}

const creditCard = new CreditCardPayment("1234567890123456", "123", "12/25");
console.log(creditCard.processPayment(1000));

const paypal = new PayPalPayment("user@example.com");
console.log(paypal.processPayment(500));
