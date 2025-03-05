# JavaScript Classes, Constructors, and Prototypes

## Classes in JavaScript

JavaScript classes, introduced in ECMAScript 2015 (ES6), provide a cleaner and more intuitive syntax for creating objects and implementing inheritance. They are primarily syntactic sugar over JavaScript's existing prototype-based inheritance.

### Class Declaration

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
```

### Class Expression

```javascript
// Unnamed class expression
const Person = class {
  constructor(name) {
    this.name = name;
  }
};

// Named class expression
const Person = class PersonClass {
  constructor(name) {
    this.name = name;
  }
};
```

### Key differences from function constructors:

- Class declarations are not hoisted (unlike function declarations)
- Class code automatically executes in strict mode
- Class methods are non-enumerable
- Class constructors must be called with `new`

## Constructors

The constructor is a special method for creating and initializing objects created with a class:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // Initialize properties here
  }
}

const person = new Person("John", 30);
```

- If you don't provide a constructor, a default constructor is created
- A constructor can use the `super` keyword to call the constructor of the parent class

## Class Methods

### Instance Methods

Methods that are available on instances of the class:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

const person = new Person("John");
person.greet(); // "Hello, I'm John"
```

### Static Methods

Methods that are called on the class itself, not on instances:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  static createAnonymous() {
    return new Person("Anonymous");
  }
}

const anonymous = Person.createAnonymous();
```

### Getter and Setter Methods

```javascript
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(value) {
    const parts = value.split(" ");
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
}

const person = new Person("John", "Doe");
console.log(person.fullName); // "John Doe"
person.fullName = "Jane Smith";
console.log(person.fullName); // "Jane Smith"
```

## Prototypes and Prototype Inheritance

JavaScript objects have a hidden `[[Prototype]]` property (exposed as `__proto__` in most browsers) that references another object. When a property is accessed on an object and the object lacks that property, JavaScript looks for it in the prototype chain.

### How Prototype Inheritance Works

1. Each object has a prototype from which it inherits properties
2. The prototype chain allows objects to inherit properties from their prototype's prototype, and so on
3. The chain ends with `Object.prototype`, whose prototype is `null`

```javascript
// Traditional prototype-based inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  return "Some generic sound";
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Fix the constructor property

// Override the parent method
Dog.prototype.makeSound = function () {
  return "Woof!";
};

const dog = new Dog("Rex", "German Shepherd");
dog.makeSound(); // "Woof!"
```

### Accessing and Modifying Prototypes

```javascript
// Getting the prototype
Object.getPrototypeOf(dog); // Dog.prototype

// Check prototype chain
dog instanceof Dog; // true
dog instanceof Animal; // true

// Setting the prototype (ES6+)
Object.setPrototypeOf(object, prototype);
```

## Class Inheritance

ES6 classes make inheritance cleaner with the `extends` keyword:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }

  makeSound() {
    return "Woof!";
  }

  fetch() {
    return `${this.name} is fetching.`;
  }
}

const dog = new Dog("Rex", "German Shepherd");
```

### Using `super()`

The `super` keyword is used to:

1. Call the parent class constructor: `super(arguments)`
2. Call parent class methods: `super.methodName(arguments)`

Rules for using `super()` in constructors:

- In a derived class, `super()` must be called before accessing `this`
- If a derived class doesn't define a constructor, a default constructor that calls `super()` with all arguments is automatically created
- If you use the constructor in a derived class, you must call `super()` before using `this` or returning from the constructor

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Must call super first!
    this.breed = breed;
  }

  speak() {
    // Call the parent speak method
    return `${super.speak()}, specifically a bark!`;
  }
}
```

## Private Class Features

ES2022 introduced proper private class fields, methods, and accessors using the `#` prefix:

```javascript
class Person {
  #privateField = "I am private";

  constructor(name) {
    this.name = name;
  }

  #privateMethod() {
    return "This is private";
  }

  getPrivateData() {
    return this.#privateField + " and " + this.#privateMethod();
  }
}

const person = new Person("John");
person.getPrivateData(); // "I am private and This is private"
// person.#privateField; // SyntaxError
```

## Practical Examples

### Example 1: Component Inheritance

```javascript
class Component {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  hide() {
    this.element.style.display = "none";
  }

  show() {
    this.element.style.display = "";
  }
}

class Button extends Component {
  constructor(selector) {
    super(selector);
    this.element.addEventListener("click", this.onClick.bind(this));
  }

  onClick() {
    console.log("Button clicked!");
  }
}

const button = new Button("#myButton");
```

### Example 2: Error Hierarchy

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends CustomError {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

try {
  throw new ValidationError("Invalid email", "email");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation error in field: ${error.field}`);
  } else {
    console.log("Unknown error");
  }
}
```
