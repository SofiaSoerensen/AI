function displayMealIdea(response) {
  new Typewriter("#meal", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateMealIdea(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2008d7d14b59443btfdod2382a33e32f";
  let prompt = `Generate a meal idea centered on ${instructionsInput.value}`;
  let context =
    "You are a skilled cook with knowledge of many recipes, you provide the recipe for your recommended meal, with a text of instructions and bulletpointed list of ingredients. Use HTML. Use metric system. Please exlude your intro to the dish!";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let mealElement = document.querySelector("#meal");
  mealElement.classList.remove("hidden");
  mealElement.innerHTML = `<div class="generating">⏳ Generating a meal idea with ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayMealIdea);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateMealIdea);
