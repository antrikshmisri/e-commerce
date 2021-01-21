function validation(){
  const email = document.getElementById('Email').value;

  const password = document.getElementById('password').value;
  const cpassword = document.getElementById('cpassword').value;

if (email == "" ){
  document.getElementById('useremail').innerHTML ="**Please enter the required field";
  return false;
}
else{
  document.getElementById('useremail').innerHTML ="";
}
if (password == "" ){
  document.getElementById('userpassword').innerHTML ="**Please enter the required field";
  return false;
}
else
{
  document.getElementById('userpassword').innerHTML ="";
}
if(password.length<=7){
  document.getElementById('userpassword').innerHTML ="**Password length should be greater than 7";
  return false;
}
else{document.getElementById('userpassword').innerHTML ="";}
if (password.search(/[0-9]/) == -1){
  document.getElementById('userpassword').innerHTML ="**Password should contain atleast one numeric value";
  return false;
}
else{document.getElementById('userpassword').innerHTML ="";}

if (password.search(/[A-Z]/) == -1){
  document.getElementById('userpassword').innerHTML ="**Password should contain atleast one upper case character";
  return false;
}
else{document.getElementById('userpassword').innerHTML ="";}
if (password.search(/[a-z]/) == -1){
  document.getElementById('userpassword').innerHTML ="**Password should contain atleast one lower case character";
  return false;
}
else{document.getElementById('userpassword').innerHTML ="";}
if (password.search(/[&,$,#,@]/) == -1){
  document.getElementById('userpassword').innerHTML ="**Password should contain atleast one special case character";
  return false;

}
else{document.getElementById('userpassword').innerHTML ="";}
if (cpassword == "" ){
  document.getElementById('confirmpass').innerHTML ="**Please enter the required field";
  return false;
}
else{document.getElementById('confirmpass').innerHTML ="";}
if (password != cpassword){
  document.getElementById('confirmpass').innerHTML ="**Passwords dosen't match";
  return false;
}
else{document.getElementById('confirmpass').innerHTML ="";}
if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)))
{
document.getElementById('confirmpass').innerHTML ="**Passwords dosen't match";
return false;
}
else{document.getElementById('confirmpass').innerHTML ="";}
}
