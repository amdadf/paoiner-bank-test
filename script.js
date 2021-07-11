
//// chick with email and password
const hideshowbtn = document.getElementById('hideshowbtn').addEventListener("click",function(){
/// id  section strat
const showdataOP = document.getElementById('showdata');
const hideOP = document.getElementById('login-area');
const textinnner = document.getElementById('textinnner');
const emailInput = document.getElementById('emailInput').value;
const passwordInput= document.getElementById('passwordInput').value;
const currentPassward =parseFloat(passwordInput);
/// id  section end

if (emailInput == "amdad@gmail.com" && passwordInput == 1234 ) {
  hideOP.style.display = "none";
  showdataOP.style.display = "block";
}else{
  textinnner.innerText ="don't mathcing ?";
}

//
document.getElementById('emailInput').value="";
document.getElementById('passwordInput').value="";
})///// chick with email and password end

  //// Deposit and withdraw  and Balance  programming strat
  // deposit and Balance strat
  const depositBtn = document.getElementById('DepoBtn').addEventListener("click",function(){
    const currentInputNumber = getInputNum("DepoInput");
    // deposit to deposit value
    const currentdeposit = document.getElementById('Deposit').innerText;
    const currentdepositNumber = parseFloat(currentdeposit);
    const totalNumber = currentdepositNumber + currentInputNumber;
    document.getElementById('Deposit').innerText =  totalNumber;
    //deposit to balance
    updatsText("Balance",currentInputNumber);
  //
  document.getElementById("DepoInput").value ="";
})  // deposit and Balance eand

  ///////withdraw and balance strat///////
  const widthdrawBtn = document.getElementById('withrawBtn').addEventListener("click",function(){
  const currenwidthrawNumber = getInputNum("withdrawInput");
  updatsText("Withdraw",currenwidthrawNumber);
  updatsText("Balance",-1*currenwidthrawNumber);
  //
document.getElementById("withdrawInput").value ="";
});

  ///////withdraw and balance strat///////

  function getInputNum(id){
    const inputId = document.getElementById(id).value;
    const inputNum = parseFloat(inputId);
    return inputNum;
  }
  function updatsText(id,currentInputNumber){
    const myBalance = document.getElementById(id).innerText;
    const myBalanceNumber = parseFloat(myBalance);
    const mybalancetotal = currentInputNumber + myBalanceNumber;
    document.getElementById(id).innerText = mybalancetotal;
  }








  //// Deposit and withdraw  and Balance  programming eand
