                // *********JS for first dice******
var randomNumber1 =Math.floor(Math.random()*6)+1; // random number between 1-6.
// using concatenation to get required src.
var randomDiceImage1="dice"+randomNumber1+".png"; // dice1.png - dice6.png
var randomImagesource1="images/"+randomDiceImage1; // images/dice1.png - images/dice6.png
var image1=document.querySelectorAll("img")[0]; // selecting the image
image1.setAttribute("src",randomImagesource1); // changing src attribute of the image

                //*****JS for second dice********
var randomNumber2 =Math.floor(Math.random()*6)+1; // random number between 1-6.
// using concatenation to get required src.
var randomDiceImage2="dice"+randomNumber2+".png"; // dice1.png - dice6.png
var randomImagesource2="images/"+randomDiceImage2; // images/dice1.png - images/dice6.png
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesource2);


                // ****** Deciding the winners
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!!!";
}