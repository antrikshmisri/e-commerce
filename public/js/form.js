const name = document.getElementById('name');
const email = document.getElementById('Email');
const num = document.getElementById('pnum');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const form = document.getElementById('form');
const err =document.getElementById('error');


form.addEventListener('submit' , submission);

function submission(e){

let messages = [];

if (num.value.length > 10 || num.value.length < 10){
  messages.push("Please enter 10 digit number only");
}

if(isNaN(num.value)){
  messages.push("please enter the numeric value for the Phone Number");
}

if(password.value.length < 7){
  messages.push("Password should be of more than 7 characters ");
}

if (password.value.search(/[0-9]/) == -1){
  messages.push("Password should contain atleast one numeric value");
}
if (password.value.search(/[A-Z]/) == -1){
  messages.push("Password should contain atleast one upper case character");
}
if (password.value.search(/[a-z]/) == -1){
  messages.push("Password should contain atleast one lower case character");
}
if (password.value.search(/[&,$,#,@]/) == -1){
  messages.push("Password should contain atleast one special case character");
}
if (password.value !== cpassword.value){
  messages.push("Passwords should match");
}
if (email.value.search(/^[A-za-z_]{3,}@[A-za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/) == -1){
  messages.push("Enter  valid email address");
}

if (messages.length>0){
  e.preventDefault();
  err.innerText = messages.join(',')
}
if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(username.value)))
  {
      username.insertAdjacentHTML('afterend' , '<p class="error">email must contain a . and an @</p>')
  }
}
