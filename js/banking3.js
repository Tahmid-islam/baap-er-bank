//functions
//for get the input balance
function getInputBalance(inputId) {
  // input filed work
  const inputBalance = parseFloat(document.getElementById(inputId).value);
  document.getElementById(inputId).value = "";
  return inputBalance;
}

//update Balance
function updateBalance(inputId, inputBalance) {
  // showing value in the screen
  const previousValue = parseFloat(document.getElementById(inputId).innerText);
  return (document.getElementById(inputId).innerText =
    inputBalance + previousValue);
}

// deposit button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const inputBalance = getInputBalance("deposit-input");
    //update deposit balance
    updateBalance("deposit-total", inputBalance);
    //update total balance
    updateBalance("balance-total", inputBalance);
  });

// withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const inputBalance = getInputBalance("withdraw-input");
    //update withdraw balance
    updateBalance("withdraw-total", inputBalance);
    //update total balance
    updateBalance("balance-total", -inputBalance);
  });
