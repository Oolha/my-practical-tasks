# JavaScript Variable Declarations: var, let, and const

## Overview

JavaScript provides three different ways to declare variables: `var`, `let`, and `const`. Each has different behaviors regarding scope, hoisting, and reassignment capabilities.

## var

- **Scope**: Function-scoped
- **Hoisting**: Variables are hoisted and initialized with `undefined`
- **Reassignment**: Can be reassigned
- **Redeclaration**: Can be redeclared within the same scope

```javascript
function exampleVar() {
  var x = 1;
  if (true) {
    var x = 2; // Same variable!
    console.log(x); // 2
  }
  console.log(x); // 2 (not 1)
}
```

## let

- **Scope**: Block-scoped
- **Hoisting**: Hoisted but not initialized (Temporal Dead Zone)
- **Reassignment**: Can be reassigned
- **Redeclaration**: Cannot be redeclared within the same scope

```javascript
function exampleLet() {
  let x = 1;
  if (true) {
    let x = 2; // Different variable
    console.log(x); // 2
  }
  console.log(x); // 1 (not affected by the inner block)
}
```

## const

- **Scope**: Block-scoped
- **Hoisting**: Hoisted but not initialized (Temporal Dead Zone)
- **Reassignment**: Cannot be reassigned
- **Redeclaration**: Cannot be redeclared within the same scope
- **Important**: While the reference cannot be changed, properties of objects can still be modified

```javascript
function exampleConst() {
  const x = 1;
  // x = 2;  // Error: Assignment to constant variable

  const obj = { prop: 1 };
  obj.prop = 2; // Valid: Modifying properties is allowed
  console.log(obj.prop); // 2

  // obj = {};  // Error: Cannot reassign the reference
}
```

## Best Practices

- Use `const` by default
- Use `let` when you need to reassign a variable
- Avoid `var` in modern JavaScript
- Be aware that objects declared with `const` can still have their properties modified

## When to Use Each

### Use `var`

- When you need function-scoped variables
- For backward compatibility with older browsers
- Inside legacy code bases

### Use `let`

- When you need to reassign a variable
- In loops where the counter changes
- When you need block scoping

### Use `const`

- For values that should not be reassigned
- For most variable declarations (unless you know they need to change)
- When declaring objects whose properties may change but the reference should remain the same
