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
