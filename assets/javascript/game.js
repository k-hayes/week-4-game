
var wins = 0;
var losses = 0;
var counter = [];

function randomNumber(){
	var number = Math.floor(Math.random() * 100);
	$("#random").text(number)
}

function crystalNumber(){
	var clickNumber = Math.floor(Math.random() * 10);
	$(".Crystal-Button").on("click", function(){
	counter = counter + parseInt($(this).data("num"))	
}










if(counter === randomNumber){
		wins++;
		counter = [];
		randomNumber = Math.floor(Math.random() * 100);
		crystalNumber = Math.floor(Math.random() * 10);
	}
if(counter > randomNumber)
		losses++;
		counter = [];
		randomNumber = Math.floor(Math.random() * 100);
		crystalNumber = Math.floor(Math.random() * 10);
	}