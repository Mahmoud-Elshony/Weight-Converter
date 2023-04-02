let weightInput = document.querySelector('.weight-input');
let kilo = document.querySelector('.kilo-result');
let grams = document.querySelector('.grams-result');
let ounces = document.querySelector('.ounces-result');
let resultDiv = document.querySelector('.result');
weightInput.addEventListener('input',(e)=>{
    resultDiv.classList.remove('hiddin');
    grams.innerHTML = e.target.value * 453.5970244351987;
    kilo.innerHTML = e.target.value * .4535970244351987;
    ounces.innerHTML = e.target.value * 16;
})