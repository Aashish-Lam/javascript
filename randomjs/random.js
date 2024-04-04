let a = document.getElementById("generate");
let result = document.getElementById("ResultText");
let er
let b;
function Generaterandom() {
     b = Math.floor(Math.random() * 100) + 1;
    console.log(b);
    er=b
}
Generaterandom();
function guess() {
    let userInput = parseInt(a.value);
    console.log(userInput)
    if (userInput <er) {
        result.textContent = "The value you gave is lower";

    } else if (userInput === er) {
        result.textContent = "Correct guess! The value is " + b;
    } else { 
        result.textContent= "The value gave is higher";

    }
}
function refresh(){
    Generaterandom();
    result.textContent= " ";
    
}

