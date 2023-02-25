const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
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
    // console.log(country);
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h3>country name: ${country.name.official}</h3>
    <p>capital : ${country.capital}</p>
    <button onclick="loadCountryDetails('${country.cca2}')">details</button>
    `;
    allCountries.appendChild(div);
  });
};

const loadCountryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/name/${code}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountryDetail(data[0]));
};

const showCountryDetail = (country) => {
  const countryDetail = document.getElementById("country-detail");
  countryDetail.innerHTML = `
  <h3> country name: ${country.name.official}</h3>
  <img src="${country.flags.png}">
  `;
};

loadCountries();
