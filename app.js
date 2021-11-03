const billAmount=document.querySelector("#bill-amount");
const checkButton=document.querySelector("#check-button");
const cashGiven=document.querySelector("#cash-given");
const message=document.querySelector("#error-message");
const availableNotes=[2000,500,200,100,50,20,10,5,2,1];
const noOfNotes=document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", function validateBillAmount() {
    hideMessage();
    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else{
            showMessage("The cash provided should be more than or equal to the bill.");
              }
    }     else{
            showMessage("Invalid Bill Amount");
              }
});
function calculateChange(amountToBeReturned){
    for(let i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display="none";
}

function showMessage(msg){
    message.style.display="block";
    message.innerText = msg;
}