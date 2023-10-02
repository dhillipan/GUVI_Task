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

const apiUrl = "https://v6.exchangerate-api.com/v6/aec85bd5341f2cc0b1e09592/latest/USD";

const currencySelect = document.getElementById("currencySelect");
const exchangeRatesContainer = document.getElementById("exchangeRates");

fetchData(apiUrl).then((data) => {
  console.log(data);

  const conversionRates = data.conversion_rates;

  Object.keys(conversionRates).forEach((currencyCode) => {
    const option = document.createElement("option");
    option.value = currencyCode;
    option.textContent = currencyCode;
    currencySelect.appendChild(option);
  });

  currencySelect.addEventListener("change", () => {
    const selectedCurrency = currencySelect.value;
    const exchangeRate = conversionRates[selectedCurrency];

    exchangeRatesContainer.innerHTML = `
      <h2>Exchange Rate for 1 USD to ${selectedCurrency}:</h2>
      <p>${exchangeRate} -- ${selectedCurrency}</p>
    `;
  });


  currencySelect.dispatchEvent(new Event("change"));
});
