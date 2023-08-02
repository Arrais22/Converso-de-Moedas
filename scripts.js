const convertButton = document.querySelector(".convert-button")

function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = documento.querySelector (".currency-value-to-convert") // valor em Real
    const currencyValueConverted = documento.querySelector (".currency-value") // outras moedas

    
    const dolarToday = 5.2

    const  convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = inputCurrencyValue
    currencyValueConverted.innerHTML = convertedValue

    console.log(inputCurrencyValue)
}

convertButton.addEventListener("click", convertValues)

