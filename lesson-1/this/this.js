//!-----------------------this у звичайних функціях
const shoppingCart = {
  items: [],
  totalPrice: 0,

  addItem: function (name, price, quantity) {
    this.items.push({ name, price, quantity });
    this.calculateTotal();
    console.log(`Додано "${name}" до кошика`);
  },

  calculateTotal: function () {
    this.totalPrice = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
  checkout: function () {
    console.log(`Оформлено замовлення на суму ${this.totalPrice} грн`);
    console.log("Товари:", this.items.map((item) => item.name).join(", "));
    this.items = [];
    this.totalPrice = 0;
  },
};

shoppingCart.addItem("Телефон", 8000, 1);
shoppingCart.addItem("Чохол", 500, 2);
shoppingCart.checkout();

//!-----------------------this у стрілкових функціях

const setWorkoutTimer = {
  activity: "Планка",
  minutes: 2,
  start: function () {
    console.log(`Починаємо ${this.activity}, таймер на ${this.minutes} хвилин`);
    setTimeout(() => {
      console.log(`${this.activity} завершено!`);
    }, this.minutes * 1000);
  },
};
setWorkoutTimer.start();

//!-----------------------this у класах

class SimpleRecipe {
  constructor(name) {
    this.name = name;
    this.ingredients = [];
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    console.log(`Додано ${ingredient} до рецепту ${this.name}`);
  }

  cook() {
    console.log(`Готуємо ${this.name}!`);
    console.log(`Інгредієнти: ${this.ingredients.join(", ")}`);

    function traditionalCallback() {
      console.log("callback: this.name =", this.name);
    }

    const boundCallback = traditionalCallback.bind(this);
    boundCallback();
  }
}

const pancake = new SimpleRecipe("Млинець");
pancake.addIngredient("Борошно");
pancake.addIngredient("Молоко");
pancake.addIngredient("Яйце");

pancake.cook();

//!-------------------------------------------

// Створіть калькулятор
// важливість: 5
// Створіть об’єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.

let calculator = {
  read() {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
