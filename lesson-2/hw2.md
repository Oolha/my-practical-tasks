## **Завдання для опрацювання ООП в JavaScript**

📌 **Мета:**  
Самостійно розібрати всі чотири принципи ООП:  
- **Інкапсуляція**  
- **Наслідування**  
- **Поліморфізм**  
- **Абстракція**  

**Формат роботи:**  
- Читаєш завдання та приклади реальних ситуацій.  
- Пробуєш **писати код самостійно**.  
- Якщо виникають труднощі – розбираєшся, що не працює, і виправляєш.  

---

### **1. Інкапсуляція (Encapsulation)**  

📌 **Ситуація з реального життя:**  
🔹 Уяви, що у тебе є **банківський рахунок**.  
🔹 Ти не можеш просто взяти і змінити баланс рахунку напряму (наприклад, +1 000 000$).  
🔹 Щоб змінити баланс, ти маєш **зробити транзакцію (покласти/зняти гроші)** через банк.  

**➡ Завдання:**  
1. Створи **клас `BankAccount`**.  
2. Додай **приватну змінну `balance`** (баланс).  
3. Реалізуй методи:  
   - `deposit(amount)` – покласти гроші.  
   - `withdraw(amount)` – зняти гроші (але не більше, ніж є на балансі).  
   - `getBalance()` – переглянути баланс.  
4. Переконайся, що **змінювати `balance` напряму не можна**.  

❓ **Запитання для роздумів:**  
- Що станеться, якщо не зробити баланс приватним?  
- Чому методи – єдиний спосіб змінити баланс?  

---

### **2. Наслідування (Inheritance)**  

📌 **Ситуація з реального життя:**  
🔹 Є **базовий клас `Транспорт` (Vehicle)**, у нього є **марка, модель, рік випуску**.  
🔹 Від `Транспорт` можна створити **Автомобіль (Car)** і **Мотоцикл (Bike)**.  
🔹 У `Car` є унікальна властивість `doors` (кількість дверей), у `Bike` – `hasSidecar` (чи є боковий причіп).  

**➡ Завдання:**  
1. Створи **базовий клас `Vehicle`** (марка, модель, рік).  
2. Від нього наслідуй:  
   - `Car` (додаємо `doors`)  
   - `Bike` (додаємо `hasSidecar`)  
3. В кожному класі реалізуй метод `getInfo()`, який повертає інформацію про транспорт.  

❓ **Запитання для роздумів:**  
- Що буде, якщо створити **ще один підклас** від `Vehicle`?  
- Навіщо використовується `super()`?  

---

### **3. Поліморфізм (Polymorphism)**  

📌 **Ситуація з реального життя:**  
🔹 Є клас `Тварина (Animal)`, у кожної тварини є метод `makeSound()`.  
🔹 Але **кожна тварина видає свій унікальний звук**:  
   - `Собака` → "Гав!"  
   - `Кіт` → "Мяу!"  
   - `Корова` → "Му!"  

**➡ Завдання:**  
1. Створи клас `Animal` з методом `makeSound()`, який просто повертає `"Якийсь звук..."`.  
2. Від нього створи **3 класи**: `Dog`, `Cat`, `Cow`.  
3. В кожному перевизнач метод `makeSound()`, щоб він повертав відповідний звук.  

❓ **Запитання для роздумів:**  
- Чому метод `makeSound()` у `Animal` можна було **перевизначити**?  
- Що станеться, якщо викликати `makeSound()` у `Animal` напряму?  

---

### **4. Абстракція (Abstraction)**  

📌 **Ситуація з реального життя:**  
🔹 Є **спосіб оплати (`Payment`)**, але в реальному житті він буває різним:  
   - **Оплата кредитною карткою (`CreditCardPayment`)**  
   - **Оплата через PayPal (`PayPalPayment`)**  
🔹 У кожного типу оплати різний процес транзакції.  

**➡ Завдання:**  
1. Створи **абстрактний клас `Payment`**.  
2. В ньому додай **метод `processPayment(amount)`, але без реалізації**.  
3. Від нього створи підкласи:  
   - `CreditCardPayment` (логіка оплати карткою).  
   - `PayPalPayment` (логіка оплати через PayPal).  
4. Переконайся, що не можна створити об'єкт `Payment`, а лише його підкласи.  

❓ **Запитання для роздумів:**  
- Чому не можна створювати об'єкт `Payment` напряму?  
- Що буде, якщо в підкласах не реалізувати `processPayment()`?  

---

## **Як перевірити розуміння?**  
📌 **Тестуємо себе:**  
✅ Я можу пояснити, що таке **інкапсуляція, наслідування, поліморфізм, абстракція**?  
✅ Я можу самостійно створити **новий клас, який наслідує інший**?  
✅ Я знаю, чому **не можна змінювати приватні змінні напряму**?  
✅ Я можу пояснити, чому **поліморфізм робить код гнучким**?  

---

## **Що робити, якщо важко?**  
1. Спробуй **написати код самостійно** – навіть якщо спочатку виходить неправильно.  
2. Якщо не працює – розберися, **чому саме** (яка помилка?).  
3. Якщо не зрозуміло – поясни своїми словами, **що саме незрозуміло**.  

⚡ **Головне:** не дивися готовий код одразу – спробуй самостійно **писати і виправляти помилки**! Це допоможе навчитися швидше. 🚀




### Завдання 2 

### **Глибоке розуміння конструкторів та прототипів у JavaScript**  

📌 **Проблема:**  
складно зрозуміти, як працюють **конструктори** та **прототипи**. Тому зараз розберемо це **максимально просто** та з прикладами з реального життя.

---

## **1. Конструктори в JavaScript**  

### **🔹 Що таке конструктор?**  
📌 Уяви, що ти хочеш створювати багато однакових об'єктів, наприклад, **автомобілі**.  
🔹 Без конструктора довелося б вручну писати кожен об’єкт:  

```javascript
const car1 = { brand: "Toyota", model: "Camry", year: 2022 };
const car2 = { brand: "Honda", model: "Civic", year: 2023 };
```
📌 Якщо потрібно **100 машин** – це буде **дуже незручно**!  
🔹 Тому в JavaScript є **конструктори**, які допомагають **створювати однакові об'єкти автоматично**.  

---

### **🔹 Як створити конструктор?**  
**Конструктор – це просто функція, яка створює об’єкт!**  

```javascript
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
```
📌 Використання:  
```javascript
const car1 = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "Civic", 2023);

console.log(car1); // { brand: "Toyota", model: "Camry", year: 2022 }
console.log(car2); // { brand: "Honda", model: "Civic", year: 2023 }
```
🛠 **Що тут відбувається?**  
1. Коли ми пишемо `new Car(...)`, створюється **новий об'єкт**.  
2. `this.brand = brand` означає, що у **нового об’єкта** буде власна властивість `brand`.  
3. **Тепер кожен автомобіль має свою марку, модель і рік!**  

---

## **2. Прототипи в JavaScript**  

📌 **Проблема:**  
Зараз кожен `Car` має **свої власні методи**, що займає багато пам'яті.  

---

### **🔹 Як працюють прототипи?**  
Уяви, що **всі машини мають одну загальну функцію** – наприклад, `getInfo()`.  
🔹 **Без прототипів кожен об'єкт мав би свою копію цього методу:**  
```javascript
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getInfo = function () {
        return `${this.brand} ${this.model} (${this.year})`;
    };
}

const car1 = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "Civic", 2023);

console.log(car1.getInfo()); // Toyota Camry (2022)
console.log(car2.getInfo()); // Honda Civic (2023)
```
🔴 **Проблема:** кожен об’єкт має **свою окрему копію** `getInfo()`, що **займає багато пам'яті**.  

---

### **🔹 Використовуємо прототипи!**  
Щоб **не дублювати методи**, їх можна додати в **прототип**.  

```javascript
Car.prototype.getInfo = function () {
    return `${this.brand} ${this.model} (${this.year})`;
};
```
📌 Використання:
```javascript
console.log(car1.getInfo()); // Toyota Camry (2022)
console.log(car2.getInfo()); // Honda Civic (2023)
```
✅ **Тепер метод `getInfo()` зберігається в прототипі, а не у кожному об'єкті!**  

---

## **3. Як перевірити, що метод належить прототипу?**
```javascript
console.log(car1.hasOwnProperty("brand")); // true (є власна властивість)
console.log(car1.hasOwnProperty("getInfo")); // false (метод у прототипі)
```
💡 **Висновок:**  
✅ Властивості (`brand`, `model`) **належать об'єкту**.  
✅ Методи (`getInfo`) **належать прототипу**.  

---

## **4. Завдання (самостійна робота)**  

📌 **Завдання:** Створи конструктор `User`, який створює об’єкти з іменем (`name`) і email.  
📌 Додай у прототип метод `sayHello()`, який виводить `Привіт, мене звати ІМ'Я!`.  

❓ **Питання для роздумів:**  
1. Що станеться, якщо додати `sayHello()` всередині конструктора, а не в прототип?  
2. Як можна перевірити, чи належить метод до прототипу чи до самого об'єкта?  

---

💡 **Підсумок:**  
✅ **Конструктори** допомагають створювати багато схожих об'єктів.  
✅ **Прототипи** допомагають не дублювати методи для кожного об'єкта.  
✅ Використання `new` автоматично прив’язує об’єкт до прототипу.  



## **Завдання для розуміння промісів та `try...catch` в JavaScript**  

📌 **Мета:**  
Розібрати **Promise** (асинхронність) та **обробку помилок (`try...catch`)** через самостійне написання коду.

---

## **1. Завдання на розуміння `Promise`**
📌 **Ситуація з реального життя:**  
🔹 Уяви, що ти замовляєш **їжу в ресторані** через онлайн-застосунок.  
🔹 Після оформлення замовлення його потрібно **готувати** (асинхронна операція).  
🔹 Якщо все добре – ти отримаєш **готову страву**.  
🔹 Якщо щось піде не так (наприклад, **закінчилися інгредієнти**) – отримаєш повідомлення про помилку.

---

### **➡ Завдання: Створи функцію `orderFood()`**  
📌 **Що потрібно зробити?**  
1. Функція `orderFood(dish)` повинна повертати **Promise**.  
2. Використай `setTimeout`, щоб симулювати **час приготування їжі (3 секунди)**.  
3. З **50% ймовірністю** замовлення буде виконано (`resolve("Страва готова!")`).  
4. З **50% ймовірністю** буде помилка (`reject("Помилка: немає інгредієнтів.")`).  
5. Використай `.then()` та `.catch()` для обробки результату.  

---

### **🔹 Приклад роботи**
```javascript
orderFood("Піца")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
```
✅ **Може вивести:**  
```
Страва готова!
```
або  
```
Помилка: немає інгредієнтів.
```

❓ **Питання для роздумів:**  
1. Що станеться, якщо не викликати `.catch()`?  
2. Як можна змінити код, щоб перевірити кілька замовлень одночасно?  
3. Як можна додати очікування (`await`) для більш зручного коду?  

---

## **2. Завдання на `try...catch`**
📌 **Ситуація з реального життя:**  
🔹 Уяви, що ти **зчитуєш файл** з даними користувачів.  
🔹 Якщо файл існує – повертаєш список користувачів.  
🔹 Якщо файл не знайдено – потрібно **обробити помилку** і сказати, що його немає.

---

### **➡ Завдання: Створи функцію `readUserFile()`**  
📌 **Що потрібно зробити?**  
1. Використай **`try...catch`** для обробки помилки.  
2. Якщо файл є – поверни масив користувачів `["Анна", "Іван", "Марія"]`.  
3. Якщо файлу немає – викинь помилку `"Файл не знайдено"` і оброби її.  
4. Використай `setTimeout`, щоб **симулювати затримку читання файлу (2 секунди)**.  
5. Перевір роботу `try...catch`, викликавши функцію.

---

### **🔹 Приклад роботи**
```javascript
readUserFile();
```
✅ **Може вивести:**  
```
Завантажуємо дані...
[ "Анна", "Іван", "Марія" ]
```
або  
```
Файл не знайдено
```

❓ **Питання для роздумів:**  
1. Що станеться, якщо не використати `try...catch`?  
2. Як можна використати `Promise` разом із `try...catch`?  
3. Як можна зробити, щоб у разі помилки користувач міг спробувати ще раз?  

---

## **🎯 Підсумок**
✅ `Promise` – допомагають працювати з **асинхронним кодом**.  
✅ `.then()` – використовується для **успішного виконання**.  
✅ `.catch()` – використовується для **обробки помилок**.  
✅ `try...catch` – допомагає **ловити помилки у коді** та уникати його аварійного завершення.  

📌 **Наступні кроки:**  
1. **Напиши код самостійно** для обох завдань.  
2. **Тестуй різні варіанти**, щоб зрозуміти, як обробляються помилки.  
3. **Якщо щось не виходить – запитай!** 🚀


## **Чому `try...catch` не є асинхронним, а `.then()`, `.catch()`, `finally()` – є?**

📌 **Основна різниця** між `try...catch` і `.then()/.catch()` полягає у тому, **коли вони виконуються** та **як обробляють помилки**.

---

## **1. Як працює `try...catch`?**
### 🔹 `try...catch` обробляє **тільки синхронний код**!
Якщо в `try` блоці є **асинхронний код**, `catch` його не зловить.

### **Приклад:**
```javascript
try {
    setTimeout(() => {
        throw new Error("Помилка в setTimeout!");
    }, 1000);
} catch (error) {
    console.log("Помилку зловлено: ", error.message);
}
```
📌 **Що станеться?**  
- Через **1 секунду** всередині `setTimeout()` кидається помилка.  
- Але `catch` **її не зловить**, і буде **"Uncaught Error"** в консолі.

🔴 **Чому?**  
- `setTimeout()` виконується **асинхронно**, а `try...catch` вже закінчив роботу.  
- Помилка з’являється **пізніше**, коли `try...catch` уже неактивний.

✅ **Правильний варіант – використання `try...catch` разом із `async/await`**:
```javascript
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Помилка при отриманні даних:", error.message);
    }
}

fetchData();
```
📌 **Тепер `catch` зловить помилку, бо ми використовуємо `await` в `try...catch`.**

---

## **2. Як працює `.then()/.catch()`?**
✅ **Обробляє помилки в асинхронному коді**!  
В Promise-підході `.catch()` **ловить всі помилки**, навіть якщо вони виникають пізніше.

### **Приклад:**
```javascript
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Помилка в промісі!");
    }, 1000);
})
.catch(error => console.log("Помилку зловлено: ", error));
```
📌 **Що станеться?**  
- Через 1 секунду відбудеться **`reject()`**.  
- `.catch()` чекає на це і **зловить помилку**!  

✅ **Отже, `.catch()` обробляє асинхронні помилки, а `try...catch` – ні.**  

---

## **3. Порівняння `try...catch` vs. `.catch()`**

| Особливість | `try...catch` | `.catch()` |
|------------|--------------|------------|
| Ловить помилки у синхронному коді | ✅ Так | ✅ Так |
| Ловить помилки у асинхронному коді | ❌ Ні (без `await`) | ✅ Так |
| Виконується одразу | ✅ Так | ❌ Чекає виконання промісу |
| Потрібен для `async/await` | ✅ Так | ❌ Ні |

---

## **4. Висновок**
- `try...catch` працює **лише для синхронного коду**, якщо не використовується з `await`.  
- `.then().catch()` **очікує виконання промісу** і ловить **асинхронні помилки**.  
- Якщо ти працюєш з **`async/await`**, використовуй `try...catch`.  
- Якщо ти працюєш з **`Promise`**, використовуй `.catch()`.  

📌 **Правило:**  
- Якщо код **асинхронний** → `try...catch` без `await` **не спрацює**!  
- Якщо використовуєш **проміси** → лови помилки `.catch()`.  

🚀 **Практика:**  
Спробуй змінювати `await` у `try...catch` і `.catch()`, щоб побачити різницю в реальному коді!