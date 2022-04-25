// firebase Copied Script Code

// unique Firebase objects

const firebaseConfig = {
  apiKey: "AIzaSyAgXwRRRoa07Jzphl2mfQ75X-ZyUMrTT8w",
  authDomain: "cloudform-f9b59.firebaseapp.com",
  projectId: "cloudform-f9b59",
  storageBucket: "cloudform-f9b59.appspot.com",
  messagingSenderId: "1079037810695",
  appId: "1:1079037810695:web:f8491e2a4076ce760b32a2"
};


// Initialoze the firebase

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()


// Variable to access the database

const db = firestore.collection("formdata");

// get submit form
let submitButton = document.getElementById('submit');

// create event Listener to allow Form Submisiion

submitButton.addEventListener("click", (e) => {
  // prevent the Default Form Submisson by add.
  e.preventDefault()

  // get form values
  let firstname = document.getElementById('fName').value;
  let lastName = document.getElementById('lName').value;
  let country = document.getElementById('country').value;

  // save form data.
  db.doc().set({
    fname: firstname,
    lname: lastName,
    country: country
  }).then(() => {
    console.log("Data Saved.");
  }).catch((error) => {
    console.log(error);
  });

  // alert

  alert("Form Has Been Submitted Succesfully.");

});