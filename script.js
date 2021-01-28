
// login button handler
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

// deposit button handler
const depositButton = document.getElementById("deposit");
depositButton.addEventListener("click", function() {

    var depositAmount = document.getElementById("depositAmount").value;
    depositAmount = parseFloat(depositAmount);
    var currentBalance = document.getElementById("currentBalance").innerText;
    currentBalance = parseFloat(currentBalance);
    updateSpanDeposit("currentDeposit", depositAmount);
    updateSpanDeposit("currentBalance", depositAmount);
    document.getElementById("depositAmount").value = "";

});

function updateSpanDeposit(id, amount) {
    var balance = document.getElementById(id).innerText;
    balance = parseFloat(balance);
    const totalBalance = balance + amount;
    document.getElementById(id).innerText = totalBalance;
}

// withdraw button handler
const withdrawButton = document.getElementById("withdraw");
withdrawButton.addEventListener("click", function() {
    var withdrawAmount = document.getElementById("withdrawAmount").value;
    withdrawAmount = parseFloat(withdrawAmount);
    var currentWithdraw = document.getElementById("currentWithdraw").innerText;
    currentWithdraw = parseFloat(currentWithdraw);
    updateSpanDeposit("currentWithdraw", withdrawAmount);
    updateSpanWithdraw("currentBalance", withdrawAmount);
    document.getElementById("withdrawAmount").value = "";
});

function updateSpanWithdraw(id, amount) {
    var balance = document.getElementById(id).innerText;
    balance = parseFloat(balance);
    const totalBalance = balance - amount;
    document.getElementById(id).innerText = totalBalance;


}

