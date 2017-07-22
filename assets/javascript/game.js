$(document).ready(function(){
  var randomNumber=Math.floor(Math.random()*100)

  $("#random").text(randomNumber);

  var num1= Math.floor(Math.random()*10)
  var num2= Math.floor(Math.random()*10)
  var num3= Math.floor(Math.random()*10)
  var num4= Math.floor(Math.random()*10)

  var countTotal= 0; 
  var wins= 0;
  var losses = 0;

$("#wins").text(wins);
$("#losses").text(losses);

function gameReset(){
      randomNumber = Math.floor(Math.random()* 100);
      console.log(Random)
      $("#random").text(randomNumber);
      crystalNum1 = Math.floor(Math.random()*10);
      crystalNum2 = Math.floor(Math.random()*10);
      crystalNum3 = Math.floor(Math.random()*10);
      crystalNum4 = Math.floor(Math.random()*10);
      countTotal = 0;
      $("#counter").text(countTotal);
      } 


  $("#Crystal-1").on ('click', function(){
    countTotal = countTotal + crystalNum1;
    $("#counter").text(countTotal); 

        if (countTotal == randomNumber){
          wins++;
          alert("You win!");
        }
        else if ( countTotal > randomNumber){
          losses++;
          alert("You lose! You're a big loser!")
        }   
  })  
  $("#Crystal-2").on ('click', function(){
    countTotal = countTotal + crystalNum2;
    $("#counter").text(countTotal); 
        if (countTotal == randomNumber){
          wins++;
          alert("You win!");
        }
        else if (countTotal > randomNumber){
          losses++;
          alert("You lose! You're a big loser!")
        }   
  })  
  $("#Crystal-3").on ('click', function(){
    countTotal = countTotal + crystalNum3;
    $("#counter").text(countTotal);

         if (countTotal == randomNumber){
          wins++;
          alert("You win!");
        }
        else if (countTotal > randomNumber){
          losses++;
          alert("You lose! You're a big loser!")
        }   
  })  
  $("#Crystal-4").on ('click', function(){
    countTotal = countTotal + crystalNum4;
    $("#counter").text(countTotal); 
      
        if (countTotal == randomNumber){
          wins++;
          alert("You win!");
        }
        else if (countTotal > randomNumber){
          losses++;
          alert("You lose! You're a big loser!")
        }   
  });   
}); 