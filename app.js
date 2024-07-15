let BASE_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;  //from currency

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".From select");
const toCurr = document.querySelector(".To select");

for(let select of dropdowns){
    for(let currcode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if (select.name === "from" && currcode==="USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currcode==="PKR") {
            newOption.selected = "selected";
        };
        select.append(newOption);
    };
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
};

const updateFlag = (element)=>{
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let source = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = source;
};

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let input = document.querySelector(".amount input");
    let amtValue = input.value;
    if (amtValue==="" || amtValue<1) {
        amtValue = 1;
        input.value = 1;
    };
    console.log(fromCurr.value,toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let message = `${amtValue} ${fromCurr.value} = ${(amtValue*rate).toFixed(2)} ${toCurr.value}`;
    let result = document.querySelector(".msg");
    result.innerText = message;
});