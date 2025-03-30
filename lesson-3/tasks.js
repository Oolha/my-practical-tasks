//!---1
class TaskManager {
  constructor() {
    this.queue = [];
    this.isRunning = false;
    this.isPaused = false;
  }

  addTask(taskFn) {
    this.queue.push(taskFn);
    this.log(`🟡 Завдання ${taskFn.name} додано`);
  }

  async start() {
    if (this.isRunning) return;
    this.isRunning = true;
    await this.runNextTask();
  }

  pause() {
    this.isPaused = true;
    this.log("⏸️ Виконання зупинено");
  }

  resume() {
    if (this.isPaused) {
      this.isPaused = false;
      this.log("▶️ Виконання продовжено");
      if (!this.isRunning) this.runNextTask();
    }
  }

  async runNextTask() {
    if (this.queue.length === 0) {
      this.isRunning = false;
      return;
    }

    const taskFn = this.queue.shift();
    this.log(`🟢 Завдання ${taskFn.name} виконується`);
    await taskFn();
    this.log(`✅ Завдання ${taskFn.name} завершено`);

    if (this.isPaused) {
      this.isRunning = false;
      return;
    }

    this.runNextTask();
  }

  log(message) {
    const list = document.getElementById("task-log");
    const li = document.createElement("li");
    li.textContent = message;
    list.appendChild(li);
  }
}
//приклад використання

const manager = new TaskManager();

manager.addTask(function taskA() {
  return new Promise((res) => setTimeout(() => res("A виконано"), 2000));
});
manager.addTask(function taskB() {
  return new Promise((res) => setTimeout(() => res("B виконано"), 1000));
});
manager.addTask(function taskC() {
  return new Promise((res) => setTimeout(() => res("C виконано"), 3000));
});

manager.start();

setTimeout(() => manager.pause(), 2500); // після A
setTimeout(() => manager.resume(), 5000); // продовжити з B

//!---2

class Accordion {
  constructor(containerSelector, options = {}) {
    // ініціалізація, пошук DOM-вузлів, установка стану
    this.container = document.querySelector(containerSelector);
    this.items = this.container.querySelectorAll(".item");
    this.headers = this.container.querySelectorAll(".header");
    this.bodies = this.container.querySelectorAll(".body");

    this.activeIndex = null;

    this.options = {
      animationDuration: 300,
      ...options,
    };
    this._bindEvents();
  }

  open(index) {
    if (index >= 0 && index < this.items.length) {
      this._clearActive();
      this.activeIndex = index;
      const item = this.items[index];
      item.classList.add("active");

      const body = this.bodies[index];
      body.style.height = body.scrollHeight + "px";
    }
  }

  close(index) {
    if (index >= 0 && index < this.items.length) {
      const item = this.items[index];
      item.classList.remove("active");

      const body = this.bodies[index];
      body.style.height = "0px";

      //скидаємо активний індекс
      if (this.activeIndex === index) {
        this.activeIndex = null;
      }
    }
  }

  toggle(index) {
    if (index >= 0 && index < this.items.length) {
      if (this.activeIndex === index) {
        this.close(index);
      } else {
        this.open(index);
      }
    }
  }

  closeAll() {
    this._clearActive();
  }

  _bindEvents() {
    this.headers.forEach((header, index) =>
      header.addEventListener("click", () => {
        this.toggle(index);
      })
    );
  }

  _setActive(index) {
    this.activeIndex = index;

    const item = this.items[index];
    item.classList.add("active");

    const body = this.bodies[index];
    body.style.height = body.scrollHeight + "px";
  }

  _clearActive() {
    this.items.forEach((item, index) => {
      item.classList.remove("active");

      const body = this.bodies[index];
      body.style.height = "0px";
    });

    this.activeIndex = null;
  }
}

const accordion = new Accordion("#my-accordion");

//!---3

class ChatSimulator {
  constructor(chatContainer) {
    this.chatContainer = chatContainer;
    this.isBotTyping = false;

    this.messageInput = document.getElementById("message-input");
    this.sendButton = document.getElementById("send-button");

    this.sendButton.addEventListener("click", () => {
      const message = this.messageInput.value;
      if (message) {
        this.sendMessage(message);
        this.messageInput.value = "";
      }
    });
  }

  addUserMessage(message) {
    const div = document.createElement("div");
    div.className = "message user";
    div.textContent = message;
    this.chatContainer.appendChild(div);
    this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
  }

  // Додає повідомлення бота з ефектом друку
  addBotMessage(message) {
    this.isBotTyping = true;
    this.sendButton.disabled = true;

    // Додаємо повідомлення бота
    const div = document.createElement("div");
    div.className = "message bot";
    this.chatContainer.appendChild(div);

    // Випадкова затримка перед початком друку
    setTimeout(() => {
      let i = 0;

      // Додаємо по одній букві
      const interval = setInterval(() => {
        if (i < message.length) {
          div.textContent += message[i];
          i++;
          this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
        } else {
          clearInterval(interval);
          this.isBotTyping = false;
          this.sendButton.disabled = false;
        }
      }, 100);
    }, 1000);
  }

  sendMessage(message) {
    if (this.isBotTyping) return;

    this.addUserMessage(message);

    const answers = [
      "Привіт!",
      "Цікаво...",
      "Я не зовсім зрозумів",
      "Дякую за повідомлення",
      "Ок",
    ];

    // випадкова відповідь
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    this.addBotMessage(randomAnswer);
  }
}

window.onload = function () {
  const chatContainer = document.getElementById("chat-container");
  const chat = new ChatSimulator(chatContainer);
};
