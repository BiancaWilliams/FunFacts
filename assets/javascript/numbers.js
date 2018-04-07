//firebase script

//Initialize Firebase
  var config = {
    apiKey: "AIzaSyAucqcZd99zOttZIaerpJzr6C7bSjw57CE",
    authDomain: "funfacts-project1.firebaseapp.com",
    databaseURL: "https://funfacts-project1.firebaseio.com",
    projectId: "funfacts-project1",
    storageBucket: "funfacts-project1.appspot.com",
    messagingSenderId: "551573791560"
  };
  firebase.initializeApp(config);

  
  let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', getFactFetch);

function getFactFetch(){
   let number = numberInput.value;

   fetch('https://crossorigin.me/http://numbersapi.com/'+ number)
    .then(response => response.text())
    .then(data => {
        if(number != '') {
            fact.style.display = 'block';
            factText.innerText = data;
        }
    })
   
   .catch(err => console.log(err));
}
