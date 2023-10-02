function fetchData(apiUrl, options) {
  return fetch(apiUrl, options)
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

const options = { method: "GET" };
const apiUrl = 'https://holidays.abstractapi.com/v1/?api_key=2701fc2e5d3a4a6e8976c8dc30f05e94&country=US&year=2021&month=12&day=25';

const apiContainer = document.getElementById("apiContainer");

fetchData(apiUrl, options).then((data) => {
  console.log(data);

  data.forEach((holiday) => {
    const { name, country, date, week_day } = holiday;

    const apiItem = document.createElement("div");
    apiItem.className = "apiItem";
    apiItem.innerHTML = `
      <h2>Name: ${name}</h2>
      <p>Country: ${location}</p>
      <p>Date: ${date}</p>
      <p>Week Day: ${week_day}</p>
    `;

    apiContainer.appendChild(apiItem);
  });
});

