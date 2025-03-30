let searchButton = document.getElementById("search-button");
let countryInput = document.getElementById("country-input");

searchButton.addEventListener("click", () => {
    let countryName = countryInput.value;
    let apiURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(apiURL);
    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(Object.values(data[0].languages).toString().split(",").join(", ")
            );
            result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-image">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <p>${data[0].capital[0]}</p>
                <h4>Continent:</h4>
                <p>${data[0].continents[0]}</p>
           <h4>Currency:</h4>
                <p>${data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</p>
                <h4>Language(s):</h4>
                <p>${Object.values(data[0].languages).toString().split(",").join(", ")}</p>
                <h4>Population:</h4>
                <p>${data[0].population.toLocaleString()}</p>
            </div>
        </div>
      `;
        })
        .catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>Enter a valid country</h3>`;
            } else {
                result.innerHTML = `<h3>Enter a valid country</h3>`;
            }
        });
});