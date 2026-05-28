const convertbutton = document.querySelector(".convertbutton");
const selectorToConvert = document.querySelector(".toSelector");

function convertValues() {
  const inputconvertvalue = document.querySelector(".convertvalue").value;
  const dolarTodayValue = 5.05;
  const euroTodayValue = 5.88;
  const valueToConvert = document.querySelector(".ptoConvert");
  const valueConverted = document.querySelector(".pConverted");

  if (selectorToConvert.value == "dolar") {
    valueConverted.innerHTML = new Intl.NumberFormat("us", {
      style: "currency",
      currency: "USD",
    }).format(inputconvertvalue / dolarTodayValue);
  }

  if (selectorToConvert.value == "euro") {
    valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputconvertvalue / euroTodayValue);
  }

  valueToConvert.innerHTML = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(inputconvertvalue);
}

function currencyChange() {
  const CurrencyName = document.querySelector(".convertedCurrencyName");
  const CurrencyImg = document.getElementById("dolarimg")


  if (selectorToConvert.value == "dolar") {
    CurrencyImg.src = "./Assets/estados-unidos1.png"
    CurrencyName.innerHTML = "Dólar"
  }

  if (selectorToConvert.value == "euro") {
    CurrencyImg.src = "./Assets/euro.png";
    CurrencyName.innerHTML = "Euro"
  }
  convertValues()
}

selectorToConvert.addEventListener("change", currencyChange);
convertbutton.addEventListener("click", convertValues);
