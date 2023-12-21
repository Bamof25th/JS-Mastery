import axios from "axios";

//

const FIXER_API_KEY = "ffb94472b064ece62f638cecca8c4e9e";

const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

const REST_COUNTRIES_API = `https://restcountries.com/v3.1/currency`;

// ASYNC/AWAIT

// fetch data About currencies
const getExchangedRate = async (fromCurrency, toCurrency) => {
  const {
    data: { rates },
  } = await axios.get(FIXER_API);

  const euro = 1 / rates[fromCurrency];
  console.log(euro);
  const excangeRate = euro * rates[toCurrency];
  console.log(excangeRate);
};

// getExchangedRate("USD", "EUR");
// fetch data About countries

const getCountries = async (currencyCode) => {
  const { data } = await axios.get(`${REST_COUNTRIES_API}/${currencyCode}`);
  return data.map(({ name }) => name);
};

// getCountries("usd");

const convertCurrencies = async (fromCurrency, toCurrency, amount) => {
  fromCurrency = fromCurrency.toUpperCase();
  toCurrency = toCurrency.toUpperCase();

  const countries = await getCountries(toCurrency);
  const exchangedRate = await getExchangedRate(fromCurrency,toCurrency);
  console.log(countries);
  console.log(exchangedRate);
};

console.log(
    
convertCurrencies('AUD','USD',20)
)
// Output Data
