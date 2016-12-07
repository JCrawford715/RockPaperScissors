//window.onload = function(){
	
	
	
	var user_point = 0;
	var cpu_point = 0;
		
	
	function Reset(){
		user_point = 0;
		cpu_point = 0;
		document.getElementById("user_point").innerHTML = "Your Score: " + user_point;
		document.getElementById("cpu_point").innerHTML = "Computer's Score: " + cpu_point;
		document.getElementById("cpu_hand").value ="";
		document.getElementById("winner").innerHTML ="Get Ready!";
		document.getElementById("None").selected = "true";
	}
	
	
	function btn_click(){
		
		
		
		var user_element = document.getElementById('user_hand');			
		var user_hand = user_element.options[user_element.selectedIndex].value;
		var winner = "";
		

		if(user_hand==='None'){
		alert("You haven't chosen any weapons to fight.")
		return false;
		}
		
		
		var cpu_hand = Math.floor(Math.random() * 3 );
		
		if (cpu_hand === 0){
			cpu_hand = "Rock";
		} else if (cpu_hand === 1){
			cpu_hand = "Paper";
		} else {
			cpu_hand = "Scissors"
		}
		
		
		
		if (user_hand === cpu_hand){
			winner = "It's a tie!";
		} else if (user_hand === 'Rock' && cpu_hand === 'Paper'){
			winner = 'Computer wins!';
			cpu_point++;
		} else if (user_hand === 'Rock' && cpu_hand === 'Scissors'){
			winner = 'You win!';
			user_point++;
		} else if (user_hand === 'Scissors' && cpu_hand === 'Paper'){
			winner = 'You win!';
			user_point++;
		} else if (user_hand === 'Scissors' && cpu_hand === 'Rock'){
			winner = 'Computer wins!'
			cpu_point++;
		} else if (user_hand === 'Paper' && cpu_hand === 'Rock'){
			winner = 'You win!';
			user_point++;
		} else {
			winner = 'Computer wins!';
			cpu_point++;
		}
		
		
		/* console.log("Your Pick: " + user_hand);
		console.log("Computer's Pick: " + cpu_hand);
		console.log(winner);
		console.log("Your Total Point(s): " + user_point);
		console.log("Computer's Total Point(s): " + cpu_point); */
		
		
		document.getElementById("winner").innerHTML = winner;
		document.getElementById("user_point").innerHTML = "Your Score: " + user_point;
		document.getElementById("cpu_point").innerHTML = "Computer's Score: " + cpu_point;
		document.getElementById("cpu_hand").value = cpu_hand;
		
	}
	
	
	
	//var final_button = document.getElementById('fight_btn');
	//final_button.onclick = btn_click();
	
//}