let btn = document.getElementById("convert-btn");

btn.addEventListener("click", () => {
  let val = document.getElementById("text").value;

  //    Camel Case

  function camelCase(str) {
    let arr = str.split(" ");
    let newArr = [];
    let first = arr[0].toLowerCase();

    for (let i = 1; i < arr.length; i++) {
      newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
    }

    return first + newArr.join("");
  }

  //    Pascal Case

  function pascalCase(str) {
    let newArr = [];
    let arr = str.split(" ");

    arr.forEach((element) => {
      newArr.push(element[0].toUpperCase() + element.slice(1).toLowerCase());
    });

    return newArr.join("");
  }

  //    Snake Case

  function snakeCase(str) {
    let arr = str.split(" ");
    let newArr = [];
    arr.forEach((element) => {
      newArr.push(element.toLowerCase());
    });
    return newArr.join("_");
  }

  //    Screaming Snake Case

  function screamingSnakeCase(str) {
    let arr = str.split(" ");
    let newArr = [];
    arr.forEach((element) => {
      newArr.push(element.toUpperCase());
    });
    return newArr.join("_");
  }

  //    Kebab Case

  function kebabCase(str) {
    let arr = str.split(" ");
    let newArr = [];
    arr.forEach((element) => {
      newArr.push(element.toLowerCase());
    });
    return newArr.join("-");
    console.log("executed");
  }

  // Screaming Kebab Case

  function screamingKebabCase(str) {
    let arr = str.split(" ");
    let newArr = [];
    arr.forEach((element) => {
      newArr.push(element.toUpperCase());
    });
    return newArr.join("-");
  }

  document.getElementById("camel-case").innerText = camelCase(val);

  document.getElementById("pascal-case").innerText = pascalCase(val);

  document.getElementById("snake-case").innerText = snakeCase(val);

  document.getElementById("screaming-snake-case").innerText =
    screamingSnakeCase(val);

  document.getElementById("kebab-case").innerText = kebabCase(val);

  document.getElementById("screaming-kebab-case").innerText =
    screamingKebabCase(val);
});
