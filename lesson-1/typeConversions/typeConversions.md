# JavaScript Type Conversions

## Table of Contents

1. [String to Number Conversions](#string-to-number-conversions)
2. [Number to String Conversions](#number-to-string-conversions)
3. [JSON Handling](#json-handling)
4. [Practice Tasks](#practice-tasks)
5. [Resources](#resources)

## String to Number Conversions

JavaScript provides several methods to convert strings to numbers:

### Number()

The `Number()` function converts a string to a number:

```javascript
Number("123"); // 123
Number("123.45"); // 123.45
Number(""); // 0
Number("  "); // 0
Number("abc"); // NaN
Number("123abc"); // NaN
```

Note that `Number()` is strict - if the string contains any non-numeric characters (except leading/trailing whitespace), it returns `NaN` (Not a Number).

### parseInt()

The `parseInt()` function parses a string and returns an integer:

```javascript
parseInt("10"); // 10
parseInt("10.5"); // 10 (decimal part is truncated)
parseInt("10px"); // 10 (stops parsing at the first non-numeric character)
parseInt("abc10"); // NaN (starts with non-numeric)
parseInt("0xFF"); // 255 (recognizes hex numbers)
```

`parseInt()` can take a second parameter specifying the radix (base):

```javascript
parseInt("10", 2); // 2 (binary)
parseInt("10", 8); // 8 (octal)
parseInt("10", 16); // 16 (hexadecimal)
```

### parseFloat()

The `parseFloat()` function parses a string and returns a floating-point number:

```javascript
parseFloat("10.5"); // 10.5
parseFloat("10"); // 10
parseFloat("10.5px"); // 10.5 (stops at the first invalid character)
parseFloat("abc10.5"); // NaN (starts with non-numeric)
```

## Number to String Conversions

There are several ways to convert numbers to strings:

### String()

The `String()` function converts a number to a string:

```javascript
String(100); // "100"
String(100.5); // "100.5"
String(-42); // "-42"
String(NaN); // "NaN"
String(Infinity); // "Infinity"
```

### toString()

The `toString()` method converts a number to a string:

```javascript
(100).toString(); // "100"
(100.5).toString(); // "100.5"
(-42).toString(); // "-42"

// With number literals, use parentheses to call toString()
(100).toString(); // "100" (note the double dot)
(100).toString(); // "100"
```

The `toString()` method can take a radix parameter to convert to different bases:

```javascript
(10).toString(2); // "1010" (binary)
(10).toString(8); // "12" (octal)
(10).toString(16); // "a" (hexadecimal)
```

## JSON Handling

JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.

### JSON.stringify()

The `JSON.stringify()` method converts a JavaScript object or value to a JSON string:

```javascript
const user = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

JSON.stringify(user);
// '{"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}'

// Pretty-printed with indentation
JSON.stringify(user, null, 2);
/* Output:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": [
    "html",
    "css",
    "js"
  ],
  "spouse": null
}
*/
```

Notes on `JSON.stringify()`:

- Converts objects, arrays, strings, numbers, booleans, and null
- Functions, undefined, and symbols are omitted from objects or converted to null in arrays
- Doesn't handle circular references
- Can take a replacer function or array as the second parameter to transform values
- Can take a space parameter as the third argument to control formatting

### JSON.parse()

The `JSON.parse()` method parses a JSON string and returns the JavaScript value or object:

```javascript
const jsonString =
  '{"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}';

const user = JSON.parse(jsonString);
console.log(user.name); // "John"
console.log(user.age); // 30
console.log(user.courses[0]); // "html"
```

Notes on `JSON.parse()`:

- Parses JSON into JavaScript objects, arrays, strings, numbers, booleans, and null
- Throws an error if the JSON string is invalid
- Can take a reviver function as the second parameter to transform values during parsing

Example with reviver function:

```javascript
const jsonString = '{"name":"John","birthDate":"2000-01-01T00:00:00.000Z"}';

const user = JSON.parse(jsonString, (key, value) => {
  if (key === "birthDate") {
    return new Date(value);
  }
  return value;
});

console.log(user.birthDate instanceof Date); // true
```
