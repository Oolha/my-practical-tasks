## 1

## 🧩 Задача №1: **TaskManager — Керування Асинхронними Завданнями в Черзі**

---

### 🎯 **Мета:**
Реалізувати менеджер асинхронних завдань, який дозволяє додавати функції, що повертають Promise, і виконує їх **по черзі**, незалежно від затримки кожної. Управління має бути контрольованим: `start()`, `pause()`, `resume()`. Усі дії мають логуватися у DOM.

---

### 📋 **Функціональні Вимоги:**

#### 1. **Клас `TaskManager` повинен мати такі методи:**

- `addTask(taskFn)`  
  Приймає функцію `() => Promise`. Додає її в чергу.

- `start()`  
  Починає виконання черги з першого завдання.

- `pause()`  
  Зупиняє виконання після поточного завдання. (Нові не стартують).

- `resume()`  
  Продовжує виконання з того місця, де зупинились.

---

### 🧠 **Обмеження:**

- Завдання виконуються **по одному** (не паралельно).
- Черга може містити будь-яку кількість завдань.
- Черга **автоматично не запускається**, поки не викликано `start()`.

---

### 🖼️ **Інтерфейс (DOM):**

В HTML має бути список:
```html
<ul id="task-log"></ul>
```

У нього додаються `<li>` елементи типу:

- `"🟡 Завдання X додано"`
- `"🟢 Завдання X виконується"`
- `"✅ Завдання X завершено"`
- `"⏸️ Виконання зупинено"`
- `"▶️ Виконання продовжено"`

---

### 🛠️ **Технічні Вимоги:**

- Всі методи мають бути **асинхронобезпечними** — не допускати одночасного запуску декількох завдань.
- Логіка виконання має бути **контрольована** — щоб не можна було випадково запустити одне й те саме двічі.
- Має бути **простий захист** від багів: наприклад, подвійного `start()`.

---

### 🧱 **Рекомендована структура:**
```js
class TaskManager {
  constructor() {
    this.queue = [];
    this.isRunning = false;
    this.isPaused = false;
  }

  addTask(taskFn) { ... }

  async start() { ... }

  pause() { ... }

  resume() { ... }

  async runNextTask() { ... }

  log(message) { 
    // append <li> до #task-log
  }
}
```

---

### 🧪 **Приклад використання:**
```js
const manager = new TaskManager();

manager.addTask(() => new Promise(res => setTimeout(() => res('A'), 2000)));
manager.addTask(() => new Promise(res => setTimeout(() => res('B'), 1000)));
manager.addTask(() => new Promise(res => setTimeout(() => res('C'), 3000)));

manager.start();

setTimeout(() => manager.pause(), 2500); // після A
setTimeout(() => manager.resume(), 5000); // продовжити з B
```

---

### 📚 Що ти прокачаєш, вирішивши цю задачу:

- Глибоке розуміння **event loop** (виконання мікротасків після поточної макротаски).
- Роботу з **Promises**, `async/await`, керування чергою.
- Асинхронне програмування з **управлінням станом**.
- Додавання елементів у DOM з логуванням.


## 🧩 Задача №2: **Accordion — кастомний UI-компонент з OOP і DOM**

---

### 🎯 **Мета:**
Реалізувати клас `Accordion`, який керує блоками-розкривачками (accordion items) на сторінці. При кліку на заголовок — відкривається відповідний контент. Одночасно відкритим може бути тільки один блок. Анімація має бути плавною, а логіка — інкапсульованою.

---

### 📋 **HTML-структура (вхідні дані):**
```html
<div class="accordion" id="my-accordion">
  <div class="item">
    <div class="header">Питання 1</div>
    <div class="body">Відповідь 1</div>
  </div>
  <div class="item">
    <div class="header">Питання 2</div>
    <div class="body">Відповідь 2</div>
  </div>
  <!-- ... -->
</div>
```

---

### 📐 **Функціональні Вимоги:**

- Працює на будь-якому контейнері `.accordion`.
- При кліку на `.header` розкривається відповідна `.body`.
- Якщо відкрито інший блок — він закривається.
- Повторний клік по відкритому `.header` — закриває його.
- Плавна анімація розкриття/закриття (height transition або класами).
- Підтримка відкриття через методи:
  - `open(index)`
  - `close(index)`
  - `toggle(index)`

---

### ⚙️ **Клас має виглядати приблизно так:**

```js
class Accordion {
  constructor(containerSelector, options = {}) {
    // ініціалізація, пошук DOM-вузлів, установка стану
  }

  open(index) { ... }

  close(index) { ... }

  toggle(index) { ... }

  closeAll() { ... }

  _bindEvents() { ... }

  _setActive(index) { ... }

  _clearActive() { ... }
}
```

---

### 🧠 **Складність і Що Прокачується:**

- OOP: робота з приватними методами, полями, інкапсуляція.
- DOM API: `querySelector`, `addEventListener`, `classList`, `style`, `dataset`.
- CSS-перехід: керування висотою блоку вручну.
- Інтерактивність: зміна вигляду у відповідь на події.
- Масштабованість: клас має працювати з будь-яким `.accordion`, не залежати від ID.

---

### 🎨 **CSS (мінімальний приклад):**
```css
.accordion .body {
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}
.accordion .item.active .body {
  height: auto; /* або виставляти вручну через JS */
}
```

---

### ✅ **Бонус-функціонал (необов’язково):**

- Підтримка початково відкритого блоку (через `options.initialIndex`).
- Додавання/видалення блоків динамічно (`addItem()`, `removeItem()`).
- Підтримка одночасного відкриття кількох блоків (режим мультиселекції).




## 🧩 Задача №3: **Чат з Затримкою — Симуляція Чату з "Ефектом Друку"**

---

### 🎯 **Мета:**
Реалізувати чат-симулятор, де кожне повідомлення користувача додається у DOM, а бот відповідає з **запізненням**. Відповіді бота мають з'являтися з "ефектом друку" — по одній букві за раз, і кожне нове повідомлення користувача має очікувати, поки бот не закінчить свою відповідь.

---

### 📋 **Функціональні Вимоги:**

1. **Клас `ChatSimulator`:**
   - **Метод `addUserMessage(message)`** — додає повідомлення користувача у DOM.
   - **Метод `addBotMessage(message)`** — симулює відповідь бота з затримкою.
     - Відповідь має з’являтися по одній літері за раз (ефект друку).
     - Відповідь бота повинна з'являтися через випадкову затримку (наприклад, 1–3 секунди).

2. **Чат має функціонувати так:**
   - Користувач додає повідомлення в чат.
   - Бот відповідає, і кожна літера з'являється поступово з інтервалом.
   - Після того, як бот закінчив відповідь, можна додавати нові повідомлення.

3. **Методи:**
   - `sendMessage()`: відправка повідомлення користувача та запуск відповідної реакції бота.
   - `botTypingEffect()`: ефект поступового друку відповіді бота (використовує setInterval або інший механізм для друку по символах).

4. **DOM:**
   - Для кожного нового повідомлення користувача чи бота виводиться `<div>` або `<li>` в списку повідомлень.

5. **Механізм блокування:**
   - Нове повідомлення користувача не може бути надіслано, поки бот не завершить свою відповідь.

---

### ⚙️ **Структура класу `ChatSimulator`:**
```js
class ChatSimulator {
  constructor(chatContainer) {
    this.chatContainer = chatContainer;
    this.isBotTyping = false;
  }

  addUserMessage(message) {
    // Додає повідомлення користувача в DOM
  }

  addBotMessage(message) {
    // Запускає ефект друку бота
  }

  botTypingEffect(message) {
    // Створює ефект друку
  }

  sendMessage(message) {
    // Відправляє повідомлення користувача та відповідає ботом
  }
}
```

---

### 🧠 **Що прокачує ця задача:**

- **OOP:** Робота з класами, створення методів для виконання різних функцій (додавання повідомлень, ефект друку).
- **Асинхронність:** Використання `setTimeout` або `setInterval` для створення ефекту друку з затримкою.
- **Взаємодія з DOM:** Додавання елементів в DOM при кожному новому повідомленні.
- **Обмеження взаємодії:** Реалізація механізму, що не дозволяє користувачу надіслати нове повідомлення, поки бот не завершить свою відповідь.
- **Психологія інтерфейсу:** Створення чату, який виглядає природно завдяки анімаціям і затримкам.

---

### 🎨 **CSS для базового вигляду чату:**
```css
.chat-container {
  width: 300px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
}

.message {
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  background-color: #e0e0e0;
}

.message.user {
  background-color: #cce5ff;
}

.message.bot {
  background-color: #d4edda;
}
```

---

### 💡 **Бонусний функціонал (необов'язково):**

- Додавання **рандомних відповідей бота** з попередньо заданих варіантів (щоб чат виглядав ще більш реалістично).
- Можливість змінювати швидкість ефекту друку (через параметр).
- Можливість користувачеві "зупиняти" чат або "продовжувати".

---

### 🎮 **Приклад використання:**

```js
const chatContainer = document.getElementById('chat');
const chatSimulator = new ChatSimulator(chatContainer);

// Користувач відправляє повідомлення
chatSimulator.sendMessage('Привіт! Як справи?');
```

---

### 📚 **Висновки:**
Ця задача дозволяє:

- Зрозуміти, як працювати з **асинхронними процесами** в JavaScript.
- Створити реалістичний чат з ботом за допомогою **OOP**.
- Попрактикуватися в роботі з **DOM** та створенні інтерактивних елементів з анімацією.
