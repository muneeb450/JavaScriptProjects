const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//All Functions
//Function to show error 
function showerror(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Function to show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Function to check if email is valid 
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Function to check if required fields have some data
function checkRequired (inputArray) {
    inputArray.forEach(function(input){
        if (input.value == '') {
            showError(input,'${getField(input)} is required');
        } else{
            showSuccess(input);
        }
    });
}


//Function to check length of input field
function checkLength(input,min,max){
    if (input.value.length < min){
        showError(input    }
}
//Function to get the id of the input field
function getField(input){
    return input.id.charAt(0).toUppercase() + input.id.slice(1);
}


//This is an event listener for the form on submit button
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired ([username,email,password,password2]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    
})