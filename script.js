const convertbutton = document.querySelector(".convertbutton");
const selectorToConvert = document.querySelector(".toSelector");
const valueConverted = document.querySelector(".pConverted");
const valuetoConverted = document.querySelector(".ptoConvert");

  const dolarTodayValue = 5.05;
  const euroTodayValue = 5.88;
  const realTodayValue = 1;
  const librasTodayValue = 6.79;



function convertValues() {

const inputconvertvalue = document.querySelector(".convertvalue").value;

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

  if (selectorToConvert.value == "libra") {
    valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputconvertvalue / librasTodayValue);
    }

  if (selectorToConvert.value == "real") {  
    valueConverted.innerHTML = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
    }).format(inputconvertvalue / realTodayValue);
    }

    valuetoConverted.innerHTML = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
    }).format(inputconvertvalue)
}

function currencyChange() {
const CurrencyName = document.querySelector(".convertedCurrencyName");
const CurrencyImg = document.getElementById("dolarimg");


  if (selectorToConvert.value == "dolar") {
    CurrencyImg.src = "./Assets/estados-unidos1.png"
    CurrencyName.innerHTML = "Dólar"
  }

  if (selectorToConvert.value == "euro") {
    CurrencyImg.src = "./Assets/euro.png";
    CurrencyName.innerHTML = "Euro"
  }

  if (selectorToConvert.value == "libra") {
    CurrencyImg.src = "./Assets/libra.png";
    CurrencyName.innerHTML = "Libras Esterlinas"
  }

  if (selectorToConvert.value == "real") {
    CurrencyImg.src = "./Assets/brasil 2.png";
    CurrencyName.innerHTML = "Real"
  }

  convertValues()
}




selectorToConvert.addEventListener("change", currencyChange);
convertbutton.addEventListener("click", convertValues);

