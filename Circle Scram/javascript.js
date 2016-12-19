var circles= document.getElementsByClassName("circle");
var score= document.getElementById("score");
var time_remaining= document.getElementById("time_remaining")
var high_score =document.getElementById("high_score");
var number= 0;
var time=50;

var cheat_code1 = [38,40,38,40,37,39,37,39,66, 65];
var cheat_code2 = [76,79,76];

var cheat_codes=[cheat_code1, cheat_code2];

var user_entered =[];
var valid_cheats=[];


document.addEventListener('keydown', checkCheat);

function checkCheat(event){
	var keycode = event.keyCode;
	
	if(keycode == 27){

	user_entered = [];

	return;
}

	
	user_entered.push(keycode);
	for(var i =0; i < cheat_codes.length; i++){
		var cheat_code = cheat_codes[i];
		valid_cheats[i]= true;
	
	
	
	
		for(var p = 0; p < cheat_code.length; p++){
			var cheat_keycode = cheat_code[p];
			var user_keycode = user_entered[p];
	
			if(cheat_keycode !=user_keycode){
				valid_cheats[i]= false;
			
			}
		}
	}
	if(valid_cheats[0]){
		var single_circle = circles[0];
		var cloned_circle = single.circle.cloneNide();
		
		cloned_circle.addEventListener("click", addPoints);
		
		document.body.appendChild(cloned_circle);
	}
	if(valid_cheats[1]){
		
		
		
	}
}

var countdownIntervalId;

document.onload=start();

function start(){
	
	for(var i =0; i < circles.length; i++){
		var circle = circles[i];
		circle.addEventListener("click", addPoints)
	}
	
	time_remaining.innerHTML=time;
	
	score.innerHTML=number;
	
	move(false);
	
	setInterval(move, 1500,false);
	setInterval(move, 1000,true);

	countdownIntervalId= setInterval(countdown,1000);
}

function move(special){
	for(var i = 0; i< circles.length ;i++){
		var circle=circles[i];
		
		if(special== true){
			if(circle.id =="red"){
				continue;
			}
		}
		var left=Math.floor(Math.random() * 100);
		var top=Math.floor(Math.random() * 100);
		
		console.log(left,top);
		
		
		circle.style.top = top+"%";
		circle.style.left = left +"%";
	}
	
	
	
}
function addPoints(){
	console.log(event);
	
	var id =event.target.id;
	
	if(id == "red"){
		var points = 100;
	}else{
		var points =50;
	}
	number = number + points;
	
	score.innerHTML =number;
	
	var high_score =localStorage.getItem('high_score');
	if(number > high_score){
		localStorage.setItem('high_score', number);
	}
}

function countdown(){
	var new_time = time -1;
	
	time = new_time;
	
	if(time == 0){
		//game over
		
		clearInterval(countdownIntervalId);
	
	
	for(var i = 0; i < circles.length; i++){
		var circle= circles[i]
		
		circle.removeEventListener("click", addPoints);
	}
		
	
	var answer = confirm("Play Again?!?");
		if(answer == true){
			number =0;
		
			time= 50;
		
			start();
			
		
		
		}
	}
	time_remaining.innerHTML= time;
}

