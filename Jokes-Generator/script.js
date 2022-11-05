let jokeValue = document.getElementById("jokes");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-RapidAPI-Key": "83fba97fcbmsh17c016fc6fb1ac4p16fbabjsndb419ef1ae96",
      "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    },
  };

  fetch(
    "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
    options
  )
    .then((response) => response.json())
    .then((response) => (jokeValue.innerText = response.value))
    .catch((err) => console.error(err));
});
