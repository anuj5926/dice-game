// for 1st dice
var randomNumber1 = Math.floor (Math.random() * 6)+1;

var randomImageSource1 = "dice" + randomNumber1 +".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

// for 2nd dice 

var randomNumber2 = Math.floor (Math.random() * 6)+1;

var randomImageSource2 = "dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


// winner 

if (randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML=" 🚩Player 1 Wins";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins";
}else {
    document.querySelector("h1").innerHTML="Draw";
}

