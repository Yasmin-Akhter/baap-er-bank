//get input value of deposit & withdraw using function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);

    inputField.value = '';
    return inputAmount;

}

//get total value of deposit & withdraw using function
function updatedValue(inputTotalId, inputAmount) {
    var totalField = document.getElementById(inputTotalId);
    const previousAmount = parseFloat(totalField.innerText);
    const newTotal = previousAmount + inputAmount;
    totalField.innerText = newTotal;
    return newTotal;
}

//update balance using function
function balance(inputAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = parseFloat(balanceTotal.innerText);

    balanceTotal.innerText = previousBalanceAmount + inputAmount;
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceAmount + inputAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceAmount - inputAmount;
    }
    return newbalanceTotal;
}

// get the input amount deposited
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = getInputValue('deposit-input');

    if (depositInput > 0) {
        const newDepositTotal = updatedValue('deposit-total', depositInput);
        balance(depositInput, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = getInputValue('withdraw-input');
    if (withdrawInput > 0) {
        const newWithdrawTotal = updatedValue('withdraw-total', withdrawInput);
        balance(withdrawInput, false);
    }
})

