
//var newsSearch = 'news';
var queryURL = 'https://newsapi.org/v2/top-headlines?sources=msnbc&apiKey=fe5d1157918b42018d8a665c5f6b1a06';

$.ajax({
  url: queryURL,
  method: 'GET'})
.done(function(response) {
    console.log(response);
    var data = response.articles;
    console.log("author "  + data[0].author);
});
console.log("test");


// javascript to grab the "search" results and display it to the screen
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAkvjtXklrCEduRMfooP-zLXpsfk0Qm5bM",
    authDomain: "funfacts-newspage.firebaseapp.com",
    databaseURL: "https://funfacts-newspage.firebaseio.com",
    projectId: "funfacts-newspage",
    storageBucket: "funfacts-newspage.appspot.com",
    messagingSenderId: "250612511359"
  };
  firebase.initializeApp(config);
  
  var newsDb = firebase.database();

  //reference message collection
  var messagesRef = firebase.database().ref();

//event listener for form submit
document.getElementById('form-inline').addEventListener ('submit', submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();
  
  //get values
  var userInput = getInputVal('userInput');
  

  //save message
  saveMessage(userInput);

  //show alert
  document.querySelector('.alert').style.display = 'block';

  //hide alert after 3 seconds
  setTimeout(function() {

    //show alert
  document.querySelector('.alert').style.display = 'none';

  },3000);

  //reset form
  document.getElementById('form-inline').reset();

}

//function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

//save the message to firebase
function saveMessage(userInput, /*destination, firstTrain, frequency*/){
  newsDb.ref().push({
    userInput: userInput });


}
  newsDb.ref().on("child_added", function(childSnapshot, prevChildKey) {

  // Log everything that's coming out of snapshot
  console.log("test");
  console.log(childSnapshot);

  console.log(childSnapshot.val().userInput);

 var userInput = childSnapshot.val().userInput;

  // Change the HTML to reflect

  $("#resultTable > tbody").append("<tr><td>" + userInput + "</td></tr>");

// Handle the errors

}, function(errorObject) {

  console.log("Errors handled: " + errorObject.code);

});



