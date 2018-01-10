// Initialize Firebase
var config = {
    apiKey: "AIzaSyCZ0MnzwN844ryzcseiSKQnkMw2qg704mw",
    authDomain: "contactform-e1c55.firebaseapp.com",
    databaseURL: "https://contactform-e1c55.firebaseio.com",
    projectId: "contactform-e1c55",
    storageBucket: "contactform-e1c55.appspot.com",
    messagingSenderId: "210918288653"
  };
  firebase.initializeApp(config);


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