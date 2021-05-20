{


  const calculateResult = (amount, currency) => {

    const rateEUR = 4.5562;
    const rateUSD = 3.7579;
    const rateAUD = 2.9323;
    const rateCHF = 4.1502;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;


      case "USD":
        return amount / rateUSD;

      case "AUD":
        return amount / rateAUD;

      case "CHF":
        return amount / rateCHF;

    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `You get: ${amount.toFixed(2)}PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;
  }


  const onFormSubmit = (event) => {
    event.preventDefault();



    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);


    updateResultText(amount, result, currency);

  };

  const init = () => {

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);

  };
  init();



}