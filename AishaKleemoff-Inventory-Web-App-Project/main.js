console.log("Aisha is a Software Developer");

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const price = document.querySelector("#price");
  console.log(price.value);

  const author = document.querySelector("#author");
  console.log(author.value);
});
