let input = document.querySelector(".bom-input");
let btn = document.getElementById("chap-btn");
console.log(btn);
let outputDiv = document.querySelector("#chap-display");

function displayList() {
  let newEl = document.createElement("div");
  newEl.innerHTML = `<section class="list-flex"><p>${input.value}</p><button class="red-color" onclick="this.parentElement.remove()">X</button></section>`;

  outputDiv.append(newEl);
}

btn.addEventListener("click", () => {
  if (input != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
  }
});

let chaptersArray = gaetChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});
