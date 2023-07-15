function validateForm() {
    //clear all error messages
    clearErrors();

    //get form field values
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;

    //Regular Expressions for form validation
    var nameRegex = /^[A-Za-z\s]+$/; //$ means end of string, ^ means start of string
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; //email
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;   //8 characters, 1 uppercase, 1 lowercase, 1 number (a!1Aaaaa)
    var phoneRegex = /^\d{3}-\d{3}-\d{4}$/; //123-456-7890
    var birthdayRegex = /^\d{2}\/\d{2}\/\d{4}$/; //mm/dd/yyyy



    var isValid = true;

    //validate name
    if (!nameRegex.test(name)) {
        document.getElementById("nameError").innerHTML = "*Please enter a valid name";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i=0; i < errorElements.length; i++) {
        errorElements[i].innerHTML = "";
    }
}