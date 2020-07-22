// login button event listner

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
  const loginArea = document.getElementById("login-area");
  loginArea.style.display="none";
  const transectionArea = document.getElementById("transection-area");
  transectionArea.style.display="block"
})

// deposit button event listner

const addDepositBtn = document.getElementById("addDeposit");
addDepositBtn.addEventListener("click",function(){
  const depositAmount = document.getElementById("depositAmount").value;
  const depositAmountNumber = parseFloat(depositAmount);

  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositNumber =parseFloat(currentDeposit);


  const totalDeposit = depositAmountNumber + currentDepositNumber;
  
  document.getElementById("currentDeposit").innerText=totalDeposit;
  

  // add deposit balance to current balance
  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositAmountNumber + currentBalanceNumber;
  document.getElementById("currentBalance").innerText= totalBalance;

  document.getElementById("depositAmount").value="";
})

  // withdraw balance from current balance

  const addWithdrawBtn =document.getElementById("addWithdraw");
  addWithdrawBtn.addEventListener("click",function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
   
    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);

    const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;
    document.getElementById("currentWithdraw").innerText = totalWithdraw;

    // subtract withdraw from current balance
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber= parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber-withdrawAmountNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("withdrawAmount").value="";
  })