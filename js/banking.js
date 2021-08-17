// handle deposite buuuutton even
document.getElementById('deposit-button').addEventListener
('click', function (){
    const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText);
   
//    update deposit total
   const depositTotal = document.getElementById('deposit-total');
   const previosDepositText = depositTotal.innerText;
   const previosDepositAmount = parseFloat(previosDepositText);
   
   const newDepositTotal = previosDepositAmount + newDepositAmount;

   depositTotal.innerText = newDepositTotal;
//  update account balanced
 
 const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previosBalanceTotal = parseFloat(balanceTotalText);
const newbalanceTotal =previosBalanceTotal + newDepositAmount;
balanceTotal.innerText = newbalanceTotal;
// clear the depositinput feild
depositInput.value = '';
})
// handle withdraw event handler
document.getElementById('withdrow-button').addEventListener('click', function(){
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawAmountText = withdrawInput.value;
   const newWithdrawAmount = parseFloat(withdrawAmountText);
   console.log(newWithdrawAmount);

   // set withdraw total
   const withdrawTotal = document.getElementById('withdraw-total');
   const previousWithdrawText = withdrawTotal.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawText);
   const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   withdrawTotal.innerText = newWithdrawTotal;

   // update balance
   const balanceTotal = document.getElementById('balance-total');
   const previosBalanceText = balanceTotal.innerText;
   const previosBalanceTotal = parseFloat(previosBalanceText);
   const newbalanceTotal = previosBalanceTotal - newWithdrawAmount;
   balanceTotal.innerText = newbalanceTotal;
   // clear withdraw total
   withdrawInput.value='';
})
