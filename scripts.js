const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector (".currency-value-to-convert") // valor em Real
    const currencyValueConverted = document.querySelector (".currency-value") // outras moedas

    const dolarToday = 4.8
    const euroToday = 5.2
    }
    if(currencySelect.value == "dolar") { 
        // Se o select estiver selecionado com o valor de dolar, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro") { 
        // Se o select estiver selecionado com o valor de euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }  

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)




convertButton.addEventListener("click", convertValues)