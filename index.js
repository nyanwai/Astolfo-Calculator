const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        let expression = display.value.trim();
        if (expression === "10+9" || expression === "9+10") {
            display.value = "21 :3";
        } else {
            display.value = eval(expression);
        }
    }
    catch{
        display.value = "Error";
    }
}
