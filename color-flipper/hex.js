const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',()=>{
    let hexColor = "#";
    // loop run 6 times
    for (let i = 0; i <= 5; i++) {
        const random = getRandomNumber();
        hexColor += hex[random];        
    }
    console.log(hexColor);

    // changing body color
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}