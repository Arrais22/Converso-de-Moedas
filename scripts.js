const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect1 = document.querySelector(".currency-select1")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector (".currency-value-to-convert") // valor em Real
    const currencyValueConverted = document.querySelector (".currency-value") // outras moedas
    

    const dolarToday = 4.8
    const euroToday = 5.2
    const libraToday = 6.2
    const bitcoinToday = 128.77807
    

    if(currencySelect.value == "dolar" && currencySelect1.value == "real"){ 
        // Se o select estiver selecionado com o valor de dolar, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect1.value == "dolar" && currencySelect.value == "real") { 
        // Se o select estiver selecionado com o valor de euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 4.87)
    } 

    if(currencySelect.value == "euro" && currencySelect1.value == "real") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
           style: "currency",
           currency: "EUR"
       }).format(inputCurrencyValue / euroToday)
    }
    
    if(currencySelect1.value == "euro" && currencySelect.value == "real"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 5.2)
    }

    if(currencySelect.value == "libra" && currencySelect1.value == "real"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN",{
            style: "currency",
            currency: "GPB"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect1.value == "libra" && currencySelect.value == "real"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 6.2)
    }

    if(currencySelect.value == "bitcoin" && currencySelect1.value == "real"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ed-ED",{
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if(currencySelect1.value == "bitcoin" && currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 128.77807)
    }
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
   const currencyName2 = document.getElementById("nome-moeda-select-2")
   const currencyName1 = document.getElementById("nome-moeda-select-1")
   const currencyImage = document.querySelector(".currency-img")
   const imagemPrimeiroSelect = document.querySelector(".imagem-primeiro-select")
   
   console.log(currencyName1.value)
    
   if(currencySelect.value == "real"){
        currencyName2.innerHTML = "Real Brasileiro"
        currencyImage.src ="./assets/real.png"
   }

   if(currencySelect1.value == "real"){
        currencyName1.innerHTML = "Real Brasileiro"
        imagemPrimeiroSelect.src ="./assets/real.png"
   }
   if(currencySelect.value == "dolar"){
        currencyName2.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dollar.png"
   }

   if(currencySelect1.value == "dolar"){
        currencyName1.innerHTML = "Dólar americano"
        imagemPrimeiroSelect.src = "./assets/dollar.png"
    }

   if(currencySelect.value == "euro"){
        currencyName2.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    
    if(currencySelect1.value == "euro"){
        currencyName1.innerHTML = "Euro"
        imagemPrimeiroSelect.src = "./assets/euro.png"
    }
    
    if(currencySelect.value == "libra"){
        currencyName2.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect1.value == "libra"){
        currencyName1.innerHTML = "Libra"
        imagemPrimeiroSelect.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName2.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    if(currencySelect1.value == "bitcoin"){
        currencyName1.innerHTML = "Bitcoin"
        imagemPrimeiroSelect.src = "./assets/bitcoin 1.png"
    }

    convertValues ()
}

currencySelect1.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)