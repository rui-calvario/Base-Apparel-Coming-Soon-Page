// Variables
const form = document.getElementById('form');
const email = document.getElementById('email');


//Functions

//Show Input Error Function
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const smallError = formControl.querySelector('.error-message');
    smallError.innerText = message;
}

//Show Input Success Function
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const smallSuccess = formControl.querySelector('.success-message');
    smallSuccess.innerText = message;
}


//Check Email is Valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}





// Event Listener
form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    if(email.value=== '') {
        showError(email, 'Email is required.');
    } else if(!isValidEmail(email.value)) {
        showError(email, 'Please provide a valid email.');
    } else {
        showSuccess(email, "Thank You for Signing Up!");
    }

});