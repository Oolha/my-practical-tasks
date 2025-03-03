function useVariables() {
  var a = 100;

  let b = 200;

  const c = 300;

  console.log("Початкові значення:");
  console.log("var x =", a);
  console.log("let y =", b);
  console.log("const z =", c);

  if (true) {
    var a = 10;

    let b = 20;

    const c = 30;

    console.log("Всередині блоку:");
    console.log("var x =", a);
    console.log("let y =", b);
    console.log("const z =", c);
  }
  a = a + 1;
  b = b + 1;
  //   c = c + 1; - отримала TypeError

  const obj = { value: 5 };
  obj.value = 15;
  //   obj = { value: 15 }; - отримала TypeError

  console.log("Результат:");
  console.log("var x =", a);
  console.log("let y =", b);
  console.log("const z =", c);
  console.log("const obj.value =", obj.value);
}

useVariables();
