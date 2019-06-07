var randomNum1 = Math.floor(Math.random() *  6+1);
var randomNum2 = Math.floor(Math.random() *  6+1);

var randomImages1 =  "dice" +  randomNum1  + ".png";
var randomImages2 =  "dice" +  randomNum2  + ".png";
var source1 = "images/" + randomImages1;
var source2 = "images/" + randomImages2;

var leftImg = document.querySelectorAll("img")[0].setAttribute('src', source1);

var rightImg = document.querySelectorAll("img")[1].setAttribute('src', source2);



if(randomNum1 > randomNum2 ){ 
  document.querySelector("h1").innerHTML = "🚩Player 1 Won!";
}else if(randomNum2 > randomNum1)
{
  document.querySelector("h1").innerHTML = "Player 2 Won🚩";
}
else{
  
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}