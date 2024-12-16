function generateMealIdea(event) {
  event.preventDefault();

  new Typewriter("#meal", {
    strings: "Chicken Ceasar Salad",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateMealIdea);
