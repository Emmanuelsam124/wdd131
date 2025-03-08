const newDate = new Date();
const getYear = newDate.getFullYear();
const lastModifiedDate = document.lastModified;

let footerSpanEl = document.getElementById("currentyear");
footerSpanEl.innerHTML = getYear;

let lastModifiedEl = document.getElementById("lastModified");
lastModifiedEl.innerHTML = lastModifiedDate;
