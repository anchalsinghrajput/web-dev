let randomNum1 = Math.floor(Math.random()*6) + 1;
let randomNum2 = Math.floor(Math.random()*6) + 1;

let location1 = "diceImages/dice" + randomNum1 +".png";
let location2 = "diceImages/dice" + randomNum2 +".png";

document.querySelector(".img1").setAttribute("src",location1);
document.querySelector(".img2").setAttribute("src",location2);

randomNum1>randomNum2? document.querySelector(".container h1").innerText =  " Player 1 wins!!" :
randomNum2>randomNum1? document.querySelector(".container h1").innerText = " Player 2 wins!!" : document.querySelector(".container h1").innerText = " Draw";

// if(randomNum1 === 1){
//     document.querySelector(".img1").setAttribute("src","diceImages/dice1.png");
// } else if(randomNum1 === 2){
//     document.querySelector(".img1").setAttribute("src","diceImages/dice2.png");
// } else if(randomNum1 === 3){
//     document.querySelector(".img1").setAttribute("src","diceImages/dice3.png");
// } else if(randomNum1 === 4){
//     document.querySelector(".img1").setAttribute("src","diceImages/dice4.png");
// } else if(randomNum1 === 5){
//     document.querySelector(".img1").setAttribute("src","diceImages/dice5.png");
// } else if(randomNum1 === 6){
//     document.querySelector(".img1").setAttribute("src","diceImages/dice6.png");
// }

// switch(randomNum2){
//     case 1: document.querySelector(".img2").setAttribute("src","diceImages/dice1.png");
//     break;
//     case 2: document.querySelector(".img2").setAttribute("src","diceImages/dice2.png");
//     break;
//     case 3: document.querySelector(".img2").setAttribute("src","diceImages/dice3.png");
//     break;
//     case 4: document.querySelector(".img2").setAttribute("src","diceImages/dice4.png");
//     break;
//     case 5: document.querySelector(".img2").setAttribute("src","diceImages/dice5.png");
//     break;
//     case 6: document.querySelector(".img2").setAttribute("src","diceImages/dice6.png");
//     break;
// }

// if(randomNum1>randomNum2)
// {
//     document.querySelector(".container h1").innerText =  " Player 1 wins!!";
// } 
// else if(randomNum2>randomNum1){
//     document.querySelector(".container h1").innerText = " Player 2 wins!!";
// }
// else
// document.querySelector(".container h1").innerText = " Draw";