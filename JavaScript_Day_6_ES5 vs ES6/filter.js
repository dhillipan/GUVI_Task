fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    //Get all the countries from Asia continent /region using Filter function

    const asianCountries = data.filter((country) => country.region === "Asia");
    console.log("Asian Countries:", asianCountries);
    console.log("-----------------------------------------------------");
    console.log("");
    //Get all the countries with a population of less than 2 lakhs using Filter function

    const smallCountries = data.filter(
      (country) => country.population < 200000
    );
    console.log("Population < 2 Lakhs:", smallCountries);
    console.log("-----------------------------------------------------");
    console.log("");

    //Print the following details name, capital, flag using forEach function

    data.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags[0]);
      console.log("-----------------------------------------------------");
      console.log("");
    });

    //Print the total population of countries using reduce function

    const totalPopulation = data.reduce(
      (accumulator, country) => accumulator + country.population,
      0
    );
    console.log("Total Population:", totalPopulation);
    console.log("-----------------------------------------------------");
    console.log("");

    //Print the country which uses US Dollars as currency.

    const USD = data.find((country) => country.currencies.USD !== undefined);
    console.log("Country with US Dollars:", USD);
    console.log("-----------------------------------------------------");
    console.log("");
  })
  .catch((error) => console.error("Error:", error));
