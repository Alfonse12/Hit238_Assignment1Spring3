﻿

//Global Variables declaration and initialisation
var usedIndex=new Array(),
	selector = randomize(0),score = 0, position = 1 , countdown = 0, criteria1=0, criteria2=0, player,
	totalnumber=0, game=0, askedQuery=new Array(), givenResponse=new Array(),fontSize = "50",fontFace = "serif",
	textFillColor = "#ff0000",textAlpha = 1, shadowX = 1,shadowY = 1,shadowBlur = 1,shadowColor = "#707070",
	textBaseline = "middle",textAlign = "center",fillOrStroke ="fill",fontWeight = "normal",
	fontStyle = "normal",fillType = "colorFill",textFillColor2 = "#000000",pattern = new Image(),message,
	theCanvas,context;
	
//Welcome text	
function welcome(){
	alert("Welcome !");
	
}

//Modifies the state of the display property
function modifyStyle(idNode,propertyName, propertyValue) {
	var balise = document.getElementById(idNode);
	balise.style[propertyName] = propertyValue;
}

//Show the hidden div which contains Questions and timer
function toggleClassStuffs(){
	className="hidden";
	var _class = document.getElementsByClassName(className);
	var i;
	for(i=0;i<_class.length;i++){
		_class[i].style["display"]="block";
	}
}

//Hide the introduction div and call the previous function to be executed
function begin(){
	modifyStyle("starter","display", "none");
	toggleClassStuffs();
	store();timing();
}


//Menu Game paused
function menu(action){
	if(game===0){
		alert("You don't have an on going game right now. Start one !");
		
		return 0;
	}
	if(action===0){
		alert("This game is paused !");
	}else{
		window.close();
		alert("This game is paused !");
	}
}
//Displays an alert Regarding the development of the application
function about(){
	alert("I am still working on this please hold on, I will be done soon");
	alert("Thank you so much for beeing patient");
}
//Run after game has been choosen, define the number of questions, the countdown, the level name, and the criteria of adding or removing score after a success or a fail
function initializer(level){
	if(game===0){
		switch(level){
			case 1:
				countdown=150;
				totalnumber=5;
				player="Beginner";
				criteria1=20;
				criteria2=10;
				break;
			case 2:
				countdown=300;
				totalnumber=10;
				player="Beginner";
				criteria1=10;
				criteria2=5;
				break;
			case 3:
				countdown=600;
				totalnumber=25;
				player="Beginner";
				criteria1=4;
				criteria2=2;
				break;
			case 11:
				countdown=75;
				totalnumber=5;
				player="Normal";
				criteria1=20;
				criteria2=20;
				break;
			case 12:
				countdown=150;
				totalnumber=10;
				player="Normal";
				criteria1=10;
				criteria2=10;
				break;
			case 13:
				countdown=300;
				totalnumber=25;
				player="Normal";
				criteria1=4;
				criteria2=4;
				break;
			case 21:
				countdown=15;
				totalnumber=5;
				player="Genius";
				criteria1=20;
				criteria2=40;
				break;
			case 22:
				countdown=30;
				totalnumber=10;
				player="Genius";
				criteria1=10;
				criteria2=20;
				break;
			case 23:
				countdown=60;
				totalnumber=25;
				player="Genius";
				criteria1=4;
				criteria2=10;
				break;
		}
	}else{
		alert("You must end with your ongoing Quiz before to start another one !");
		game++;	
		return 0;
	}
	game++;	
	begin();
}
//Questions store. more coming soon
function store(){
	// Table of Questions
	query = new Array("What is the name of the German airline?", "In which European city can you find the home of Anne Frank?", "How many stars has the American flag got?", "How long is the Great Wall of China?", "Who invented Ferrari?", //5
					"According to the Bible, who was the first murderer?", "In what year did princess diana die?", "Which famous British women murderer of the 19th century was never arrested?", "On which mountain did Jesus take his last supper?", "What is the largest number of five digits?", //10
					"What is the most fractured human bone?", "What is the most famous university of Paris?", "Which animal is on the golden Flemish flag?", "What is the name of the Indian holy river?", "Which South American country is named after Venice?", //15
					"How many stars feature on the flag of New Zealand?", "What colour to do you get when you mix red and white?", "What is both a French wine region and a luxury American automobile?", "For which narrow sea strait is Hellespont the ancient name?", "In what year was the Berlin wall built?", //20
					"Inside which HTML element do we put the JavaScript?", "Who is the first skin-coloured president of the United States?", "What does CSS stand for?", "What is the world s largest office building?",//24
					"Where was built the first subway?"
					);
		//Table of Occurences
	occurence = new Array("&#8220;&#8221;A. Lufthansa &nbsp;&nbsp;&nbsp;&nbsp;B. German Airlines &nbsp;&nbsp;&nbsp;&nbsp;C. Deutsh Air &nbsp;&nbsp;&nbsp;&nbsp;D. BundesLuft", "A. Liege &nbsp;&nbsp;&nbsp;&nbsp;B. Amsterdam &nbsp;&nbsp;&nbsp;&nbsp;C. Munchen &nbsp;&nbsp;&nbsp;&nbsp;D. Prague", "A. 54 &nbsp;&nbsp;&nbsp;&nbsp;B. 32 &nbsp;&nbsp;&nbsp;&nbsp;C. 50 &nbsp;&nbsp;&nbsp;&nbsp;D. 52", "A. 10,000 miles &nbsp;&nbsp;&nbsp;&nbsp;B. 1,000 miles &nbsp;&nbsp;&nbsp;&nbsp;C. 5,000 miels &nbsp;&nbsp;&nbsp;&nbsp;D. 4,000 miles", "A. Enzo Ferrari &nbsp;&nbsp;&nbsp;&nbsp;B. Gaudenzio Ferrari &nbsp;&nbsp;&nbsp;&nbsp;C. Luc Ferrari &nbsp;&nbsp;&nbsp;&nbsp;D. Francesco Ferrari", //5
						"A. Adam &nbsp;&nbsp;&nbsp;&nbsp;B. Cain &nbsp;&nbsp;&nbsp;&nbsp;C. Babel &nbsp;&nbsp;&nbsp;&nbsp;D. Nabuchondonosor", "A. 2007 &nbsp;&nbsp;&nbsp;&nbsp;B. 1967 &nbsp;&nbsp;&nbsp;&nbsp;C. 1997 &nbsp;&nbsp;&nbsp;&nbsp;D. 1987", "A. Jeanne d'Arc &nbsp;&nbsp;&nbsp;&nbsp;B. Jackson Mahalia &nbsp;&nbsp;&nbsp;&nbsp;C. Arne Jacobsen &nbsp;&nbsp;&nbsp;&nbsp;D. Jack the Ripper", "A. Golgotha &nbsp;&nbsp;&nbsp;&nbsp;B. Sinai &nbsp;&nbsp;&nbsp;&nbsp;C. Zion &nbsp;&nbsp;&nbsp;&nbsp;D. Gethsemane", "A. 5 &nbsp;&nbsp;&nbsp;&nbsp;B. 99999 &nbsp;&nbsp;&nbsp;&nbsp;C. -5 &nbsp;&nbsp;&nbsp;&nbsp;D. 55555", //10
						"A. Femur &nbsp;&nbsp;&nbsp;&nbsp;B. Homoplate &nbsp;&nbsp;&nbsp;&nbsp;C. Clavicle &nbsp;&nbsp;&nbsp;&nbsp;D. Ball", "A. Paris &nbsp;&nbsp;&nbsp;&nbsp;B. Sorbon &nbsp;&nbsp;&nbsp;&nbsp;C. Richelieu &nbsp;&nbsp;&nbsp;&nbsp;D. Sorbonne", "A. Lion &nbsp;&nbsp;&nbsp;&nbsp;B. Eagle &nbsp;&nbsp;&nbsp;&nbsp;C. Wolf &nbsp;&nbsp;&nbsp;&nbsp;D. Butterfly", "A. Roupi &nbsp;&nbsp;&nbsp;&nbsp;B. Gange &nbsp;&nbsp;&nbsp;&nbsp;C. Kanpur &nbsp;&nbsp;&nbsp;&nbsp;D. Patna", "A. Vanuatu &nbsp;&nbsp;&nbsp;&nbsp;B. Venetia &nbsp;&nbsp;&nbsp;&nbsp;C. Venezuela &nbsp;&nbsp;&nbsp;&nbsp;D. Vermont", //15
						"A. 1 &nbsp;&nbsp;&nbsp;&nbsp;B. 2 &nbsp;&nbsp;&nbsp;&nbsp;C. 3 &nbsp;&nbsp;&nbsp;&nbsp;D. 4", "A. Pink &nbsp;&nbsp;&nbsp;&nbsp;B. Red &nbsp;&nbsp;&nbsp;&nbsp;C. White &nbsp;&nbsp;&nbsp;&nbsp;D. Brown", "A. Renault &nbsp;&nbsp;&nbsp;&nbsp;B. Cadillac &nbsp;&nbsp;&nbsp;&nbsp;C. Citroen &nbsp;&nbsp;&nbsp;&nbsp;D. Ford", "A. Constantinople &nbsp;&nbsp;&nbsp;&nbsp;B. Bosphore &nbsp;&nbsp;&nbsp;&nbsp;C. Dardanelles &nbsp;&nbsp;&nbsp;&nbsp;D. Darnielles", "A. 1931 &nbsp;&nbsp;&nbsp;&nbsp;B. 1941 &nbsp;&nbsp;&nbsp;&nbsp;C. 1951 &nbsp;&nbsp;&nbsp;&nbsp;D. 1961", //20
						"A. 'script' &nbsp;&nbsp;&nbsp;&nbsp;B. 'javascript' &nbsp;&nbsp;&nbsp;&nbsp;C. 'scripting' &nbsp;&nbsp;&nbsp;&nbsp;D. '<js>'", "A. Martin Luther King &nbsp;&nbsp;&nbsp;&nbsp;B. Michael Jackson &nbsp;&nbsp;&nbsp;&nbsp;C. Barack Hussein Obama &nbsp;&nbsp;&nbsp;&nbsp;D. Condolezza Rice", "A. Cascading Style Sheets &nbsp;&nbsp;&nbsp;&nbsp;B. Colorful Style Sheets &nbsp;&nbsp;&nbsp;&nbsp; C. Computer Style Sheets &nbsp;&nbsp;&nbsp;&nbsp;D. Creative Style Sheets", "A. White House &nbsp;&nbsp;&nbsp;&nbsp;B. Pentagon &nbsp;&nbsp;&nbsp;&nbsp;C. Taj Mahal &nbsp;&nbsp;&nbsp;&nbsp;D. Kremlin",//24
						"A. New York &nbsp;&nbsp;&nbsp;&nbsp;B. Paris &nbsp;&nbsp;&nbsp;&nbsp;C. Tokyo &nbsp;&nbsp;&nbsp;&nbsp;D. London"						
						);
		//Table of answers
	answer = new Array("a", "b", "c", "d", "a",//5
						"b", "c", "d", "a", "b",//10
						"c", "d", "a", "b", "c",//15
						"d", "a", "b", "c", "d", //20
						"a", "c", "a", "b",//24
						"d" );
		//Table of explanations of each answer
	explanation = new Array("Lufthansa Airlines", "In Holland", "The US are more than 50 as well", "It can be seen from the space", "Guess about his nationality ...", //5
					"He killed his brother Abel", "Many of you were just one year old", "Desperate housewives !", "Golgotha or Calvary in Judea",  "Ninety nine thousands and Nine hundreds ninety nine ! Spell it", //10
					"Not mortal", "An educational prestige of France", "The King of the forest", "Gange is the river", "Venetia and Vermont aren't neither countries nor South American", //15
					" * * * * ", "Pink = Rose ; Can't be brown !", "It isn't Ford, but Cadillac; it's also frenchie !", "Dardanelles and Bosphore are even near and called The Detroits", "By the Soviets in 1961 after the WWII. It's the start of the Cold War", //20
					"They don't exist beside <script>", "He studied at Harvard and ruled the US for 8 years", "Have been used to design this Web Application", "The White House and The Kremlin are even smaller than the Pentagon",//24
					"They all started to build after London did"
					);
	i = selector;
	document.getElementById("question").innerHTML = query[i];
	document.getElementById("tip").innerHTML = occurence[i];
}


//Random question from the sore and check if the questions has been pop up
function randomize(dim){
	var j;
	usedIndex[0]=0;
	usedIndex.push(dim);
	dim=Math.floor(25*Math.random());
	
	for(var j=0;j<usedIndex.length;j++){
		if(dim===usedIndex[j]){
			dim=Math.floor(25*Math.random());
			j=0;
		}
		if(usedIndex.length>=25){
			break;
		}
	}
	return dim;
}


//Checks if the submitted answer is the correct one. Check the score and watches over the total progress of the ongoing game
function check(factor){
	
	document.getElementById("endreport").innerHTML=query[i]+" <br/> "+occurence[i]+" <br/> The answer is: "+answer[i]+" | "+explanation[i]+" <br/> You replied "+factor;
	
	askedQuery.push(query[i]+" : "+occurence[i]);
	givenResponse.push("The answer is: "+answer[i]+" || Your answer was: "+factor);
	
	if((position >= (query.length)) || (position >= totalnumber)){
		if(score<=50){
			report(" You suck >:( Second chance ? ");
		}else if(score<=80){
			report(" Good for a beginner B) Try again?");
		}else if(score>80){
			report(" Congratulations ;) Play again ? ");
		}  
	}else{
		if(factor===answer[i]){
			score+=criteria1 ; position++ ; document.getElementById("score").innerHTML =position+"/"+totalnumber+" Questions. Your score is " +score+" %" ;
			document.getElementById("notice").innerHTML =" Correct answer !  " + answer[i] ;
		}
		if(factor!==answer[i]){
			score-=criteria2 ; position++ ; document.getElementById("notice").innerHTML =" Wrong ! " + explanation[i];
			document.getElementById("score").innerHTML =position+"/"+totalnumber+" Questions. Your score is " +score+" %" ;
		}
		
	 	selector=randomize(i);
		store();
	}
}

