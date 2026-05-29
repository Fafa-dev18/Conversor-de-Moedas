const convertbutton = document.querySelector(".convertbutton");
const selectorToConvert = document.querySelector(".toSelector");
const valueConverted = document.querySelector(".pConverted");
const valuetoConverted = document.querySelector(".ptoConvert");

const dolarTodayValue = 5.05;
const euroTodayValue = 5.88;
const realTodayValue = 1;
const librasTodayValue = 6.79;

function convertValues() {
  const inputconvertvalue =
    parseFloat(document.querySelector(".convertvalue").value) || 0;

  const rates = {
    real: 1,
    dolar: dolarTodayValue,
    euro: euroTodayValue,
    libra: librasTodayValue,
  };
  const fromSelector = document.querySelector("#fromSelector");
  const valueInBRL = inputconvertvalue * rates[fromSelector.value];

  const formats = {
    dolar: () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(valueInBRL / dolarTodayValue),
    euro: () =>
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(valueInBRL / euroTodayValue),
    libra: () =>
      new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(valueInBRL / librasTodayValue),
    real: () =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(valueInBRL / realTodayValue),
  };

  valueConverted.innerHTML = formats[selectorToConvert.value]();

  valuetoConverted.innerHTML = formats[fromSelector.value]
    ? new Intl.NumberFormat(
        fromSelector.value === "dolar"
          ? "en-US"
          : fromSelector.value === "euro"
            ? "de-DE"
            : fromSelector.value === "libra"
              ? "en-GB"
              : "pt-BR",
        {
          style: "currency",
          currency:
            fromSelector.value === "dolar"
              ? "USD"
              : fromSelector.value === "euro"
                ? "EUR"
                : fromSelector.value === "libra"
                  ? "GBP"
                  : "BRL",
        },
      ).format(inputconvertvalue)
    : inputconvertvalue;
}

const fromSelector = document.querySelector("#fromSelector");
const imgMap = {
  real: { src: "./Assets/brasil 2.png", nome: "Real" },
  dolar: { src: "./Assets/estados-unidos1.png", nome: "Dólar" },
  euro: { src: "./Assets/euro.png", nome: "Euro" },
  libra: { src: "./Assets/libra.png", nome: "Libras Esterlinas" },
};

fromSelector.addEventListener("change", () => {
  const CurrencyImg2 = document.getElementById("real");
  const CurrencyName2 = document.querySelector(".convertedCurrencyName2");
  CurrencyImg2.src = imgMap[fromSelector.value].src;
  CurrencyName2.innerHTML = imgMap[fromSelector.value].nome;
});

function currencyChange() {
  const CurrencyName = document.querySelector(".convertedCurrencyName");
  const CurrencyImg = document.getElementById("dolarimg");

  CurrencyImg.src = imgMap[selectorToConvert.value].src;
  CurrencyName.innerHTML = imgMap[selectorToConvert.value].nome;

  convertValues();
}

selectorToConvert.addEventListener("change", currencyChange);
convertbutton.addEventListener("click", convertValues);
