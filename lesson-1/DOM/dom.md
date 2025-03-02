# Document Object Model (DOM)

## What is DOM?

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of objects. Each object corresponds to a part of the document, such as an element, attribute, or text. The DOM provides methods and properties to access, modify, add, or delete elements and content.

The DOM is not part of JavaScript; it's a Web API used by JavaScript to interact with HTML documents.

## DOM Tree Structure

When a browser loads a web page, it creates a DOM tree:

- The topmost object is document
- HTML elements become element nodes
- Text within elements becomes text nodes
- Attributes become attribute nodes

document
└── html
├── head
│ ├── title
│ │ └── text: "My Page"
│ └── meta
└── body
├── h1
│ └── text: "Hello World"
└── p
└── text: "This is a paragraph"

## Finding Elements

By ID

// Returns a single element with the specified ID

const element = document.getElementById("myElement");

## By CSS Selector

// Returns the first element that matches the selector
const element = document.querySelector(".class-name");
const element = document.querySelector("#id");
const element = document.querySelector("div p");

// Returns all elements that match the selector (NodeList)
const elements = document.querySelectorAll("p");

// Iteration: elements.forEach(el => { ... });

Other Selection Methods

// By tag name
const elements = document.getElementsByTagName("p");

// By class name
const elements = document.getElementsByClassName("my-class");

// By name attribute
const elements = document.getElementsByName("username");

## Traversing the DOM

// Parent node
const parent = element.parentNode;
const parent = element.parentElement;

// Child nodes
const children = element.childNodes; // All child nodes including text nodes
const children = element.children; // Only element nodes

// First and last child
const firstChild = element.firstChild; // First node (can be text node)
const firstElement = element.firstElementChild; // First element node
const lastChild = element.lastChild; // Last node
const lastElement = element.lastElementChild; // Last element node

// Siblings
const prevSibling = element.previousSibling; // Previous node
const prevElement = element.previousElementSibling; // Previous element node
const nextSibling = element.nextSibling; // Next node
const nextElement = element.nextElementSibling; // Next element node

## Manipulating Elements

### Element Content

// Text content (visible text)
element.innerText = "Text";
const text = element.innerText;

// Text content (all text including hidden)
element.textContent = "Text";
const allText = element.textContent;

// HTML content
element.innerHTML = "<strong>HTML content</strong>";
const html = element.innerHTML;

// Outer HTML (including the element itself)
element.outerHTML = "<div>Replaces the element</div>";
const outerHtml = element.outerHTML;

### Creating and Modifying Elements

// Creating a new element
const newElement = document.createElement("div");
newElement.innerText = "New element";

// Append child (at the end)
parentElement.appendChild(newElement);

// Insert before another element
parentElement.insertBefore(newElement, referenceElement);

// Insert adjacent element
element.insertAdjacentElement("beforebegin", newElement); // Before the element
element.insertAdjacentElement("afterbegin", newElement); // Inside the element, before first child
element.insertAdjacentElement("beforeend", newElement); // Inside the element, after last child
element.insertAdjacentElement("afterend", newElement); // After the element

// Removing an element
element.remove();
// Or
parentElement.removeChild(element);

// Replacing an element
parentElement.replaceChild(newElement, oldElement);

// Cloning an element
const clone = element.cloneNode(true); // true = deep clone (with children)

### CSS Classes

// Adding a class
element.classList.add("active");
element.classList.add("primary", "visible"); // Multiple classes

// Removing a class
element.classList.remove("active");

// Toggling a class (adds if absent, removes if present)
element.classList.toggle("active");
element.classList.toggle("active", true); // Force add
element.classList.toggle("active", false); // Force remove

// Checking if a class exists
const hasClass = element.classList.contains("active");

// Replacing a class
element.classList.replace("old-class", "new-class");

// Alternative (legacy) approach
element.className = "class1 class2"; // Overwrites all classes

## Event Handling

Events are actions or occurrences that happen in the browser, such as user interactions or system events. JavaScript can react to these events by executing code.

### Adding Event Listeners

// Basic syntax
element.addEventListener(eventType, handlerFunction, options);

// Example
element.addEventListener("click", function(event) {
console.log("Element clicked!");

// Prevent default behavior
event.preventDefault();

// Stop propagation to parent elements
event.stopPropagation();

// Target element (where the event occurred)
console.log(event.target);

// Current element (where the listener is attached)
console.log(event.currentTarget);
});

// Using an arrow function
element.addEventListener("click", (event) => {
console.log("Clicked!");
});

// Using a named function
function handleClick(event) {
console.log("Clicked!");
}
element.addEventListener("click", handleClick);

// With options
element.addEventListener("click", handleClick, {
once: true, // Execute only once
capture: true, // Use capture phase
passive: true // Never call preventDefault()
});

### Removing Event Listeners

// Must use the same function reference
element.removeEventListener("click", handleClick);

// Anonymous functions can't be removed this way
element.addEventListener("click", function() { ... }); // Can't remove this

## Common Event Types

### Mouse Events

click - Mouse click
dblclick - Double click
mousedown - Mouse button pressed
mouseup - Mouse button released
mousemove - Mouse movement
mouseover - Mouse enters an element
mouseout - Mouse leaves an element
mouseenter - Mouse enters an element (no bubbling)
mouseleave - Mouse leaves an element (no bubbling)
contextmenu - Right-click

Keyboard Events

keydown - Key pressed down
keyup - Key released
keypress - Key pressed (character keys only)

Form Events

submit - Form submitted
reset - Form reset
change - Form control value changed (after losing focus)
input - Form control value changed (immediately)
focus - Element received focus
blur - Element lost focus
select - Text selected in an input or textarea

Document/Window Events

load - Resource loaded
DOMContentLoaded - HTML loaded and parsed
resize - Window resized
scroll - Element scrolled
error - Resource failed to load
