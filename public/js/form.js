function validation(){
  const email = document.getElementById('Email').value;

  const password = document.getElementById('password').value;
  const cpassword = document.getElementById('cpassword').value;

if (email == "" ){
  document.getElementById('useremail').innerHTML ="**Please enter the required field";
  return false;
}

if (password == "" ){
  document.getElementById('userpassword').innerHTML ="**Please enter the required field";
  return false;
}

if(password.length<=7){
  document.getElementById('userpassword').innerHTML ="**Password length should be greater than 7";
  return false;
}

if (password.search(/[0-9]/) == -1){
  document.getElementById('userpassword').innerHTML ="**Password should contain atleast one numeric value";
  return false;
}


if (password.search(/[A-Z]/) == -1){
  document.getElementById('userpassword').innerHTML ="**Password should contain atleast one upper case character";
  return false;
}

if (password.search(/[a-z]/) == -1){
  document.getElementById('userpassword').innerHTML ="**Password should contain atleast one lower case character";
  return false;
}

if (password.search(/[&,$,#,@]/) == -1){
  document.getElementById('userpassword').innerHTML ="**Password should contain atleast one special case character";
  return false;

}

if (cpassword == "" ){
  document.getElementById('confirmpass').innerHTML ="**Please enter the required field";
  return false;
}
if (password != cpassword){
  document.getElementById('confirmpass').innerHTML ="**Passwords dosen't match";
  return false;
}
if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)))
{
document.getElementById('useremail').innerHTML ="**Email must contain a . and an @";
return false;
}

if (email.search(/^[A-za-z_]{3,}@[A-za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/) == -1){
  document.getElementById('useremail').innerHTML ="**Enter a valid email";
  return false;
}

}
