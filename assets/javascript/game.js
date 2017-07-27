$(document).ready(function(){
  var randomNumber=Math.floor(Math.random()* 50)

  $("#random").text(randomNumber);

  var crystalNum1= Math.floor(Math.random()*10)
  var crystalNum2= Math.floor(Math.random()*10)
  var crystalNum3= Math.floor(Math.random()*10)
  var crystalNum4= Math.floor(Math.random()*10)

  var countTotal= 0; 
  var wins= 0;
  var losses = 0;

$("#wins").text(wins);
$("#losses").text(losses);

function gameReset(){
      randomNumber = Math.floor(Math.random()* 50);
        $("#random").text(randomNumber);
      crystalNum1 = Math.floor(Math.random()*10);
      crystalNum2 = Math.floor(Math.random()*10);
      crystalNum3 = Math.floor(Math.random()*10);
      crystalNum4 = Math.floor(Math.random()*10);
      countTotal = 0;
      $("#counter").html(countTotal);
      } 


  $("#Crystal-1").on ('click', function(){
    countTotal = countTotal + crystalNum1;
    $("#counter").text(countTotal); 

        if (countTotal === randomNumber){
          wins++;
          alert("You win!");
          gameReset();
        }
        else if ( countTotal > randomNumber){
          losses++;
          alert("You lose! You're a big loser!");
          gameReset();
        }   
  })  
  $("#Crystal-2").on ('click', function(){
    countTotal = countTotal + crystalNum2;
    $("#counter").text(countTotal); 
        if (countTotal === randomNumber){
          wins++;
          alert("You win!");
          gameReset();
        }
        else if (countTotal > randomNumber){
          losses++;
          alert("You lose! You're a big loser!");
          gameReset();
        }   
  })  
  $("#Crystal-3").on ('click', function(){
    countTotal = countTotal + crystalNum3;
    $("#counter").text(countTotal);

         if (countTotal === randomNumber){
          wins++;
          alert("You win!");
          gameReset();
        }
        else if (countTotal > randomNumber){
          losses++;
          alert("You lose! You're a big loser!");
          gameReset();
        }   
  })  
  $("#Crystal-4").on ('click', function(){
    countTotal = countTotal + crystalNum4;
    $("#counter").text(countTotal); 
      
        if (countTotal === randomNumber){
          wins++;
          alert("You win!");
          gameReset();
        }
        else if (countTotal > randomNumber){
          losses++;
          alert("You lose! You're a big loser!");
          gameReset();
        }   
  });   
}); 