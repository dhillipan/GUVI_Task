function fetchData(apiUrl) {
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

const apiUrl = "http://api.citybik.es/v2/networks";

const apiContainer = document.getElementById("apiContainer");

fetchData(apiUrl).then((data) => {
  console.log(data);

  const networks = data.networks;

  networks.forEach((network) => {
    const { company, location, name } = network;

    const apiItem = document.createElement("div");
    apiItem.className = "apiItem";
    apiItem.innerHTML = `
        <h2>Name: ${name}</h2>
        <p>Company: ${Array.isArray(company) ? company.join(", ") : company}</p>
        <p>City: ${location.city}</p>
        <p>Country: ${location.country}</p>
      `;

    apiContainer.appendChild(apiItem);
  });
});
