const total = document.querySelector('.display');
const buttons = document.querySelector('.buttons');

function reply_click(clicked_id)
{
    const currentButton = document.getElementById(clicked_id);
    if(currentButton === clear){
        total.textContent = "0";
    }
    printDisplay(currentButton.value);
}

function printDisplay(value){
    if(total.textContent === "0"){
        total.textContent = value;
    }
    else{
        total.textContent += value;
    }
}