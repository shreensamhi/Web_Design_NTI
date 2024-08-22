var form = document.getElementById('form1');

form.addEventListener('input', function(e) {
    if (e.target.id === 'name') {
        checkName(e.target);
    } else if (e.target.id === 'userEmail') {
        emailCheck(e.target);
    } else if (e.target.id === 'subject') {
        checkSubject(e.target);
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    var isValidName = checkName(document.getElementById('name'));
    var isValidEmail = emailCheck(document.getElementById('userEmail'));
    var isValidSubject = checkSubject(document.getElementById('subject'));
    
    if (isValidName && isValidEmail && isValidSubject) {
        alert('Form submitted successfully!');
        
    } else {
        alert('Please fill out the form correctly.');
    }
});

function emailCheck(input) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var inputValue = input.value;
    if (emailRegex.test(inputValue)) {
        input.nextElementSibling.innerText = "";
        return true; 
    } else {
        input.nextElementSibling.innerText = "Enter a valid email";
        return false;
    }
}


function checkName(input) {
    var nameValue = input.value;
    if (nameValue.length < 3) {
        input.nextElementSibling.innerText = "Please enter more than 3 characters";
        return false; 
    } else {
        input.nextElementSibling.innerText = "";
        return true; 
    }
}


function checkSubject(input) {
    var subjectValue = input.value.trim(); 
    if (subjectValue === "") {
        input.nextElementSibling.innerText = "Subject cannot be empty";
        return false; 
    } else {
        input.nextElementSibling.innerText = "";
        return true; 
    }
}
