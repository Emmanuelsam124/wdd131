const mainNavigation = document.querySelector(".navigation");
const hambutton = document.querySelector("#hamburger");

hambutton.addEventListener("click", () => {
  mainNavigation.classList.toggle("show-ham");
  hambutton.classList.toggle("show-ham");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Bacolod Philippines Temple",
    location: "Bacolod Airport Access Road, Philippines",
    dedicated: "2021, December, 11",
    area: 26700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-24089-main.jpg",
  },
  {
    templeName: "Lagos Nigeria Temple",
    location: "Rumens Road and Bourdillon Road Ikoyi Lagos Nigeria",
    dedicated: "2025, May, 10",
    area: 19000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lagos-nigeria-temple/lagos-nigeria-temple-58577-main.jpg",
  },
  // Add more temple objects here...
];

let section = document.querySelector(".fig-section");

function displayTemples(templeList) {
  section.innerHTML = ""; // Clear existing displayed temples
  templeList.forEach((temple) => {
    let figure = document.createElement("figure");
    let injectedCode = `
    <h2>${temple.templeName}</h2>
    <div class="temple-details">
      <p>LOCATION: ${temple.location}</p>
      <p>${temple.dedicated}</p>
      <p>${temple.area} sq ft</p>
    </div>
    <img src="${temple.imageUrl}" width="400" height="250" alt="${temple.templeName}" class="temple-img" loading="lazy">`;

    figure.innerHTML = injectedCode;
    section.appendChild(figure);
  });
}

// Initial display of all temples
displayTemples(temples);

// --- Filtering Logic ---

const filterOldButton = document.querySelector("#filterOld");
const filterNewButton = document.querySelector("#filterNew");
const filterLargeButton = document.querySelector("#filterLarge");
const filterSmallButton = document.querySelector("#filterSmall");
const showAllButton = document.querySelector("#showAll");

if (filterOldButton) {
  filterOldButton.addEventListener("click", () => {
    const oldTemples = temples.filter((temple) => {
      const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
      return dedicatedYear < 1900;
    });
    displayTemples(oldTemples);
  });
}

if (filterNewButton) {
  filterNewButton.addEventListener("click", () => {
    const newTemples = temples.filter((temple) => {
      const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
      return dedicatedYear >= 2000;
    });
    displayTemples(newTemples);
  });
}

if (filterLargeButton) {
  filterLargeButton.addEventListener("click", () => {
    const largeTemples = temples.filter((temple) => {
      return temple.area > 90000;
    });
    displayTemples(largeTemples);
  });
}

if (filterSmallButton) {
  filterSmallButton.addEventListener("click", () => {
    const smallTemples = temples.filter((temple) => {
      return temple.area < 10000;
    });
    displayTemples(smallTemples);
  });
}

if (showAllButton) {
  showAllButton.addEventListener("click", () => {
    displayTemples(temples);
  });
}
