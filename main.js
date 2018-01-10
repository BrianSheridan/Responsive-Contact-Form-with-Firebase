// Listen for Form submit
document.getElementById('contactForm').addEventListener('submit', submitForm );


// Test the Fuunction
function submitForm(e){
    e.preventDefault();

    // Get Values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    console.log(name);
}

// Function to get Form Values
function getInputVal(id){
     return document.getElementById(id).value;
}