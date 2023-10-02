function fetchData(apiUrl, callback) {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

const apiUrls = [
  "http://api.citybik.es/v2/networks",
  "https://holidays.abstractapi.com/v1/?api_key=2701fc2e5d3a4a6e8976c8dc30f05e94&country=US&year=2020&month=12&day=25",
  "https://v6.exchangerate-api.com/v6/aec85bd5341f2cc0b1e09592/latest/USD",
];

const apiDataContainers = document.querySelectorAll(".api-data");

apiUrls.forEach((url, index) => {
  fetchData(url, (data) => {
    console.log(data);

    const apiItem = document.createElement("div");
    apiItem.innerHTML = `<h2>Data from API ${index + 1}</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;

    apiDataContainers[index].appendChild(apiItem);
  });
});
