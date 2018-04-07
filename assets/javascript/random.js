
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAucqcZd99zOttZIaerpJzr6C7bSjw57CE",
    authDomain: "funfacts-project1.firebaseapp.com",
    databaseURL: "https://funfacts-project1.firebaseio.com",
    projectId: "funfacts-project1",
    storageBucket: "funfacts-project1.appspot.com",
    messagingSenderId: "551573791560"
};
firebase.initializeApp(config);
var FFactsdb = firebase.database();

// RANDOMJS
//   Select Trivia, Vintage or Languages
//   TRIVIA plays a video,
//   VINTAGE displays a carousel of images
//   LANGUAGES translates text into Gungan, Minion or Morse Code


<!--  <link src="assets/images/ffrandom/trivia">   -->
<!--  <link src="assets/images/ffrandom/vintage">   -->
// <link src="assets/images/ffrandom/languages">


var triviaPath = "assets/images/ffrandom/trivia/";
var animePath = "assets/images/ffrandom/trivia/anime";
var vintgePath = "assets/images/ffrandom/vintage";
var lngKey =  "";
var lngURL = "http://api.funtranslations.com/translate/";

// animeAry = [
//     "RedJellyfishCrop.jpg", "PeacockFanRich.jpeg", "BangkokWarriorsTwo.jpg",
//     "BirdFlightCrop.jpg", "AnimeGirlCrop.jpeg", "JellyfiahSchool.jpg"
//     "PeacockPeerLeft.jpeg", "JellyfishCropOne.jpeg", "BangkokWarriorStanding.jpg"];

animeAry = ["PaisleyElephant.jpg", "BangkokWarriorCrouching.jpg", "BangkokWarriorStanding.jpg",
            "BirdFlight.jpg", "BirdFlightFlip.jpg"];

//  DO NOT DELETE, NEEDED FOR LIVE DEMO
// var aAryLen = animeAry.length;


//=================   FUNCTIONS  ================

function trivShow() {

        console.log("executing trivShow Bubbles");

        (".vidmp4").attr("src", triviaPath + "bubbles/RainDrops_Medium.mp4");
        (".vidwebm").attr("src", triviaPath + "bubbles/RainDrops_Medium.webm");


        ("#vuRandm").append('.homepage-hero-module');
        ("#bvidPlay").on("click", function() {
            ("#vuRandm").play();
        });
        ("#vuRandm").pause();

        // var sAryLen = sweetAry.length;
        // console.log("in trivShow running Sweet");

    // }
        console.log("executing trivShow Anime");

             // use anime Array to display random images and animate it

        // var aAryLen = animeAry.length;
        // choseRandm(aAryLen);

         choseRandm();

    // }
}

// function choseRandm(aAryLen) {
function choseRandm() {
    for (i = 0; i < 5; i++) {
        // var aAryName = Math.floor(Math.random() * aAryLen) + 1;
        // var imToGet =  animePath + animeAry[aAryName];

        var imToGet = animePath + animeAry[i];
        ("animeHere").attr("src", imToGet);
        ("#shoStuff").append("animeHere");
        ("#vuRandm").append("#shoStuff");
    }

    function vintCarousel() {

        console.log("executing vintCarousel");
        slidepics = "";
    }

// function  lanConv() {

    console.log("executing lanConv");
    // lanToConv = "";
    // var txtkey = ;
    // http://api.funtranslations.com/translate/gungan.json

// }


    // $(document).ready(function() {

    $("body").on("click", "#bTriv", function () {
        console.log("calling trivShow");
        trivShow();
    }).on("click", "#Vint", function () {
        onsole.log("calling vintCarousel");
        vintCarousel();
    }).on("click", "#bLang", function () {
        console.log("calling lanConv");
        lanConv();
    });
}