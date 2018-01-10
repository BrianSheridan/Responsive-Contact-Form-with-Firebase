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

// Reference messages collection
var messageRef = firebase.database().ref('messages');  


// Listen for Form submit
document.getElementById('contactForm').addEventListener('submit', submitForm );


// Submit Form
function submitForm(e){
    e.preventDefault();

    // Get Values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save Message
    saveMessage(name, company, email, phone, message);

    //Show Alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    // clear Form
    document.getElementById('contactForm').reset();
}

// Function to get Form Values
function getInputVal(id){
     return document.getElementById(id).value;
}

// save messages to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}