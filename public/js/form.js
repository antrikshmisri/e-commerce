function validateEmail(elem)
{
  if (elem.value == "" ){
    document.getElementById('useremail').innerHTML ="**Please enter the required field";
    return false;
  }
  else{
    document.getElementById('useremail').innerHTML ="";
  }
}

function validatePass(elem)
{
  if (elem.value == "" ){
    document.getElementById('userpassword').innerHTML ="**Please enter the required field";
    return false;
  }
  else
  {
    document.getElementById('userpassword').innerHTML ="";
  }
  if(elem.value.length<=7){
    document.getElementById('userpassword').innerHTML ="**Password length should be greater than 7";
    return false;
  }
  else{document.getElementById('userpassword').innerHTML ="";}
  if (elem.value.search(/[0-9]/) == -1){
    document.getElementById('userpassword').innerHTML ="**Password should contain atleast one numeric value";
    return false;
  }
  else{document.getElementById('userpassword').innerHTML ="";}
  
  if (elem.value.search(/[A-Z]/) == -1){
    document.getElementById('userpassword').innerHTML ="**Password should contain atleast one upper case character";
    return false;
  }
  else{document.getElementById('userpassword').innerHTML ="";}
  if (elem.value.search(/[a-z]/) == -1){
    document.getElementById('userpassword').innerHTML ="**Password should contain atleast one lower case character";
    return false;
  }
  else{document.getElementById('userpassword').innerHTML ="";}
  if (elem.value.search(/[&,$,#,@]/) == -1){
    document.getElementById('userpassword').innerHTML ="**Password should contain atleast one special case character";
    return false;
  
  }
}


function validatecPass(elem){

const password = document.getElementById('password').value;

if (elem.value == "" ){
  document.getElementById('confirmpass').innerHTML ="**Please enter the required field";
  return false;
}
else{document.getElementById('confirmpass').innerHTML ="";}
if (password != elem.value){
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
