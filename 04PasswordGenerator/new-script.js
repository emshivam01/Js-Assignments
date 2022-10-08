const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = lowerCase.toUpperCase();
let symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  navigator.clipboard.writeText(resultEl.innerText);
});

generateEl.addEventListener("click", () => {
  generatePassword(
    lowercaseEl,
    uppercaseEl,
    numbersEl,
    symbolsEl,
    lengthEl.value
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let pass = "";

  let superArr = [];

  if (uppercaseEl.checked === true) {
    superArr.push(getRandomUpper());
  }
  if (lowercaseEl.checked === true) {
    superArr.push(getRandomLower());
  }
  if (numbersEl.checked === true) {
    superArr.push(getRandomNumber());
  }
  if (symbolsEl.checked === true) {
    superArr.push(getRandomSymbol());
  }

  let superStr = superArr.join("");

  for (let i = 0; i < lengthEl.value; i++) {
    pass += superStr[Math.floor(Math.random() * superStr.length)];
  }

  resultEl.textContent = pass;
}

function getRandomLower() {
  let val = "";

  for (let i = 0; i < lowerCase.length; i++) {
    val += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }

  return val;
}

function getRandomUpper() {
  let val = "";

  for (let i = 0; i < lowerCase.length; i++) {
    val +=
      lowerCase[Math.floor(Math.random() * lowerCase.length)].toUpperCase();
  }

  return val;
}

function getRandomNumber() {
  let val = "";

  for (let i = 0; i < 10; i++) {
    val += Math.floor(Math.random() * 10);
  }

  return val;
}

function getRandomSymbol() {
  let val = "";

  for (let i = 0; i < symbols.length; i++) {
    val += symbols[Math.floor(Math.random() * symbols.length)];
  }

  return val;
}
