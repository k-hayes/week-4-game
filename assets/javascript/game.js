$( document ).ready(function(){
	
	var randomNumber = Math.floor(Math.random() * 100);
		$("#random").text(number);

	var crystalNumber1 = Math.floor(Math.random() * 10);
		$("#Crystal-1").on("click" function(){
			counter = counter + crystalNumber1;
			console.log("New counter= " + counter)
		})
	var crystalNumber2 = Math.floor(Math.random() * 10);
		$("#Crystal-2").on("click" function(){
			counter = counter + crystalNumber2;
			console.log("New counter= " + counter)
		})	
	var crystalNumber3 = Math.floor(Math.random() * 10);
		$("#Crystal-3").on("click" function(){
			counter = counter + crystalNumber3;
			console.log("New counter= " + counter)
		})
	var crystalNumber4 = Math.floor(Math.random() * 10);
		$("#Crystal-4").on("click" function(){
			counter = counter + crystalNumber4;
			console.log("New counter= " + counter)
		})

	var wins = 0;
	var losses = 0;
	var counter = 0;


	$("#wins").text(wins);
	$("#losses").text(losses);


	if(counter === randomNumber){
		wins++;
		counter = [];
		randomNumber = Math.floor(Math.random() * 100);
		crystalNumber = Math.floor(Math.random() * 10);
	}
	
	else if(counter > randomNumber)
		losses++;
		counter = [];
		randomNumber = Math.floor(Math.random() * 100);
		crystalNumber = Math.floor(Math.random() * 10);
	}

}