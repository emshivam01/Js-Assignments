function makeHex() {
  let str = "0123456789abcdef";
  let c = "#";

  for (let i = 0; i < 6; i++) {
    c = c + str[Math.floor(Math.random() * str.length)];
  }

  return c;
}

let btn = document.querySelector("#button");
let block = document.querySelector("div");

btn.addEventListener("click", () => {
  block.style.backgroundColor = makeHex();
});
