const loadCountries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  //   for (const country of countries) {
  //     console.log(country);
  //   }
  // same looping using forEach
  const allCountries = document.getElementById("all-countries");
  countries.forEach((country) => {
    console.log(country.capital);
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h3>country name: ${country.name}</h3>
    <p>capital : ${country.capital}</p>
    `;
    allCountries.appendChild(div);
  });
};

loadCountries();
