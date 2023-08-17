const total = document.querySelector('.display');
const buttons = document.querySelector('.buttons');

function reply_click(clicked_id)
{
    const currentButton = document.getElementById(clicked_id);
    if(currentButton === clear){
        total.textContent = clear.value;
    }
    if(currentButton === dlte){
        let result = total.textContent;
        if(result.length <= 1) return total.textContent = "0";
        result = result.substring(1);
        total.textContent = result;
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