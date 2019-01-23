
let Play = false;

let Name;

let playerHealth = 40;
let cpuHealth    = 10;

let playerWins = 0;
let cpuWins    = 0;

let Damage = 0;

Play = prompt("Do you wanna play??");

if(Play == "yes"){
	
	Name = prompt("Enter your name");
	
	while(playerWins < 3 && cpuWins < 1){
		
		while(true){
			
			Damage = Math.floor(Math.random()*2 + 1);
			
			cpuHealth = cpuHealth - Damage;
			console.log("You, " + Name + " just dealt " + Damage + " on The Almighty Grant!!!   He has " + (cpuHealth >= 0 ? cpuHealth : 0) + " remaining");
			
				if(cpuHealth <= 0){
					playerWins++;
					cpuHealth = 10;
					console.log("YOU WIN!!!");
					break;
				}
			
			Damage = Math.floor(Math.random()*2 + 1);
			
			playerHealth = playerHealth - Damage;
			console.log("The Almighty Grant just dealt " + Damage + " on you!!!  You have " + (playerHealth >= 0 ? playerHealth : 0) + " health remaining");
			
				if(playerHealth <= 0){
					cpuWins++;
					console.log("YOU DIED!!!");
					break;
				}
				
				
			
		}
		
	}
	
	if(playerWins == 3){
		
		console.log("YOU ARE VICTORIOUS!!!");
		
	}else{
		
		console.log("YOU HAVE BEEN DEFEATED!!!");
		
	}
	
}else{
	
	console.log("Ok, bye Felicia");
	
}