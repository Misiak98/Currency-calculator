let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");


formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let rateEUR = 4.5562;
  let rateUSD = 3.7579;
  let rateAUD = 2.9323;	
  let rateCHF = 4.1502;

  let amount = +amountElement.value;
  let currency = currencyElement.value;

  switch (currency) {
    case "EUR":
      result = amount / rateEUR;
      break;

    case "USD":
      result = amount / rateUSD;
      break;

    case "AUD":
      result = amount / rateAUD;
      break;
    
    case "CHF":
      result = amount / rateCHF;
      break;
  }
  resultElement.innerHTML = `You get: ${amount.toFixed(
    2
  )}PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;
});

