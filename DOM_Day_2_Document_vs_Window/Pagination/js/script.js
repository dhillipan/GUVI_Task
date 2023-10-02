async function createHtml(data) {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const itemsPerPage = 18;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  for (let i = 0; i < totalPages; i++) {
    const container = document.createElement("div");
    container.className = "container containerGrid";
    if (i !== 0) {
      container.style.display = "none";
    }

    for (let j = i * itemsPerPage; j < (i + 1) * itemsPerPage; j++) {
      if (j >= data.length) {
        break;
      }

      const country = data[j];
      const div = document.createElement("div");
      div.className = "card cardstyle cardWrapper";

      const countryName = country.name.common;
      const nativeName = country.population;

      div.innerHTML = `
                <div class="card-body">
                    <h3 class="card-title">${countryName}</h3>
                    <h6 class="card-text"><strong>Population:</strong> ${nativeName}</h6>
                </div>
            `;

      container.appendChild(div);
    }

    root.appendChild(container);
  }

  // Create pagination buttons
  const pagination = document.getElementById("pagination");
  pagination.className = "paginationFlex";
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.className = "page-link";
    button.textContent = i;
    button.addEventListener("click", () => showPage(i));
    pagination.appendChild(button);
  }
}

function showPage(pageNumber) {
  const containers = document.querySelectorAll(".containerGrid");
  containers.forEach((container, index) => {
    if (index === pageNumber - 1) {
      container.style.display = "";
    } else {
      container.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => createHtml(data))
    .catch((error) => console.error("Error:", error));
});
