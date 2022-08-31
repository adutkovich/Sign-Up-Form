let password = document.getElementById('password').value;
let passwordConfirm = document.getElementById('passwordConfirm').value;
let createAccount = document.getElementById('submitButton');
let noMatch = document.getElementById('noMatch');

createAccount.addEventListener('click', function(){
    if(typeof password != passwordConfirm){
        noMatch.textContent= ("*Please be sure the passwords match");
    }
})