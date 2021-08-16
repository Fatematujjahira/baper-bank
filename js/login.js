document.getElementById('login').addEventListener('click', function() {
  const emailFeild = document.getElementById('user-email');
  const userEmail = emailFeild.value;
 

  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  if(userEmail == 'fatema357@gmail.com' && userPassword == 'bismillah'){
   window.location.href = "banking.html";

  }
})

