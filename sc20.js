var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validatename(){
    var name = document.getElementById('contact-name').value ;
    if(name.length ==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="write a full Name";
        return false;

    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatephone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length==0){
        phoneError.innerHTML='phone No. is required';
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML ='phone No. should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='only digits Num';
        return false;
    }
    phoneError.innerHTML ='<li class="fas fa-check-circle"></li>';
    return true;
}
function validateemail(){
    var email = document.getElementById('contact-email').value;
    if(email.length==0){

        emailError.innerHTML='email is required';
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();

        return false;
    }
 
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email invalid';
        return false;
    }
    emailError.innerHTML ='<i class="fas fa-check-circle"></i>';
    return true;
}