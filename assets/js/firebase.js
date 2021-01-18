// ------- Firebase --------
var firebaseConfig = {
    apiKey: "AIzaSyCzFPP7jok1V-rNDIusIBEtWsrUYJ8WdZk",
    authDomain: "targeting-landingpage.firebaseapp.com",
    databaseURL: "https://targeting-landingpage-default-rtdb.firebaseio.com",
    projectId: "targeting-landingpage",
    storageBucket: "targeting-landingpage.appspot.com",
    messagingSenderId: "40151610327",
    appId: "1:40151610327:web:74f6cf4c64e69e0afa5192",
    measurementId: "G-N30TT08S2P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Database Reference
const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');

// Push
const addUserInputsUI = document.getElementsByClassName("user-input");

// this object will hold the new user information
let newuser = {};

// loop through View to get the data for the model 
for (let i = 0, len = addUserInputsUI.length; i < len; i++) {
    let key = addUserInputsUI[i].getAttribute('data-key');
    let value = addUserInputsUI[i].value;
    newuser[key] = value;
}

usersRef.push(newuser);

console.log(newuser);


// ------- End Firebase --------