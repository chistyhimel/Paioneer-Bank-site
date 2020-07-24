// login button event listner

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
  const loginArea = document.getElementById("login-area");
  loginArea.style.display="none";
  const transectionArea = document.getElementById("transection-area");
  transectionArea.style.display="block"

})

// Deoposit Section 

const addDepositBtn = document.getElementById('addDeposit');
addDepositBtn.addEventListener('click',function(){

  const depositeAmount = parseFloat(document.getElementById('depositAmount').value);
  const currentDeposit = parseFloat(document.getElementById('currentDeposit').innerText);
  const totalDeposit = depositeAmount + currentDeposit;
  document.getElementById('currentDeposit').innerText = totalDeposit;
 // Adding Deposit amount to Balance
  const currentBalance = parseFloat(document.getElementById('currentBalance').innerText);
  const totalBalance = depositeAmount + currentBalance;
  document.getElementById('currentBalance').innerText = totalBalance;
  document.getElementById('depositAmount').value='';
})


// Withdraw Section

const addWithdrawBtn = document.getElementById('addWithdraw');
addWithdrawBtn.addEventListener('click',function(){
  const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
  const currentWithdraw = parseFloat(document.getElementById('currentWithdraw').innerText);
  const totalWithdraw = withdrawAmount + currentWithdraw;
  document.getElementById('currentWithdraw').innerText = totalWithdraw;
    // Removing withdraw amount from Balance
  const currentBalance = parseFloat(document.getElementById('currentBalance').innerText);
  const totalBalance = currentBalance-withdrawAmount;
  document.getElementById('currentBalance').innerText = totalBalance;
  document.getElementById('withdrawAmount').value='';
})