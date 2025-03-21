let input = document.querySelector(".bom-input");
let btn = document.getElementById("chap-btn");
console.log(btn);
let outputDiv = document.querySelector("#chap-display");

btn.addEventListener("click", () => {
  let newEl = document.createElement("div");
  newEl.innerHTML = `<section class="list-flex"><p>${input.value}</p><button class="red-color" onclick="this.parentElement.remove()">X</button></section>`;

  outputDiv.append(newEl);
});
