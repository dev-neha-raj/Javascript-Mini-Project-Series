var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0 || phone.length !== 10 || !phone.match(/^[0-9]{10}$/) ){
        phoneError.innerHTML = "enter the valid number";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length ==0){
        emailError.innerHTML ="Email is requred"
        return false;
    }

    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(message.length ==0){
        messageError.innerHTML = "message is required";
        return false;
    }

    if(left>0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    if(left < 0){
        messageError.innerHTML = 'You have reached your limit';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML ="Please fix the error to submit";
        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
}