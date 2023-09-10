var form  = document.querySelector("form");
var nameError = document.getElementById('name_error');
var mobileError = document.getElementById('mobile_error');
var emailError = document.getElementById('email_error');
var password1Error = document.getElementById('password1_error');
var password2Error = document.getElementById('password2_error');
var formError = document.getElementById('form_element-error');

function validateName(){
    var name = document.getElementById('u_name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required!';
        nameError.style.color='red';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Enter full name!';
        nameError.style.color='red';
        return false;
    }
    nameError.innerHTML = 'valid';
    nameError.style.color='green';
    return true;
};

function validatePhone(){
    var phone = document.getElementById('MobileNumber').value;

    if(phone.length == 0){
        mobileError.innerHTML = 'Mobile Number is required!';
        mobileError.style.color = 'red';
        return false;
    }

    if(!(phone.match(/^[0-9]{10}$/))){
        mobileError.innerHTML = 'Ensure field contains only digits!';
        mobileError.style.color = 'red';
        return false;
    }

    if(phone.length < 10){
        mobileError.innerHTML = '10 digits required!';
        mobileError.style.color = 'red';
        return false;
    }
    
    
    
    if(phone.length > 10){
        mobileError.innerHTML = 'cannot exceed 10 digits!';
        mobileError.style.color = 'red';
        return false;
    }
    
    mobileError.innerHTML = 'valid';
    mobileError.style.color = 'green';
    return true;
}

function validateEmail(){
    var email = document.getElementById('InputEmail').value;

    if(email.length == 0){
        emailError.innerHTML = 'email is required!';
        emailError.style.color = 'red'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'enter valid email id!';
        emailError.style.color = 'red'
        return false;
    }
    emailError.innerHTML = 'valid';
    emailError.style.color = 'green'
    return true;
}

function validatePassword(){
    var password1 = document.getElementById('password1').value;

    if(password1 == ''){
        password1Error.innerHTML = 'password is required!';
        password1Error.style.color = 'red'
        return false;
    }
    else if(password1.length < 8){
        password1Error.innerHTML = 'minimum 8 characters required!';
        password1Error.style.color = 'red'
        return false;
    }
    password1Error.innerHTML = 'valid';
    password1Error.style.color = 'green'
    return true;
    
}

function validatePassword2(){
    var password2 = document.getElementById('password2').value;
    var password1 = document.getElementById('password1').value;

    if(password1 != password2){
        password2Error.innerHTML = 'passwords does not match!';
        password2Error.style.color = 'red';
        return false;
    }
    else{
        password2Error.innerHTML = 'valid';
        password2Error.style.color = 'green';
        return true;
    }
    
}


form.addEventListener("submit",(e) => {
    
    if((validateName()&&validatePhone()&&validateEmail()&&validatePassword()&&validatePassword2()) == false){
        e.preventDefault();
        formError.innerHTML = 'enter valid data!';

        return false;
    }
    else{
        formError.innerHTML =  'form validated !'
        formError.style.color = 'green';
        return true;
    }
    
})

function myFunction() {
    var x = document.getElementById("password1")
    
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    var y = document.getElementById("password2");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }

  }
