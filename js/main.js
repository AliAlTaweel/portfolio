// Select Main Section
let mainSec = document.querySelector(".main-sec");

// Get Array of Imges
let imgArray = ["/imges/01.jpg","/imges/02.jpg", "/imges/03.jpg", "/imges/04.jpg", "/imges/05.jpg" ];

//Get Random Number
let randomNum = Math.floor(Math.random() * imgArray.length);

setInterval(function(){

//Get Random Number
let randomNum = Math.floor(Math.random() * imgArray.length);

// Change Background Image Url
mainSec.style.backgroundImage = `url("${imgArray[randomNum]}")`;

},10000);