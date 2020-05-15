// window.addEventListiner('Load',init);
// available level//
const level ={
	easy: 5,
	meduim: 3,
	hard: 2,

}
	

// to change level//
const currentLevel = level.easy;

// global//
let time = currentLevel;
let score =5;
let isPlaying;
// dom element//
const word = document.queryselector('#word');
const currentWord = document.queryselector('#currentword');
const scoreDisplay = document.queryselector('#socre');
const timeDisplay = document.queryselector('#time');
const message = document.queryselector('#message');
const seconds = document.queryselector('#seconds');
const words = ['hat', 
'river',
'siblings',
'invest', 
'lucky',
'statue',
'developer',
'establishment',
'hero', 
'javascript',
'nutrition',
'revolver',
'echo',
'herrendous',
'sympyoms',
'laugther',
'magic',
'master',
'space',
'definition',];

// initialize the game//
function init() {
	// show number of seconds in UI//
	seconds.innerHTML = currentLevel;
	// load word from array//
	showWord(words);
	// start matching on word input//
	wordInput.addEventListiner('input', startmatch);
	// call count down every seconds//
	setInterval(countdown, 1000);
	// check game statues//
	setInterval(checkstatus, 50);

}
// start matching//
function startmatch()  {
	if (matchWords()) {
		isPlaying = true;
		 time = currentLevel +1;
		// time = 6;
		showWord(words);
		wordInput.value = '';
		score++;
  }
  // if score = -1//
  if (score === -1) {
  	scoreDisplay.innerHTML = 0;

  }
  else{
   scoreDisplay.innerHTML = score;
  }
  
}
// match the currentword wordinput//
function matchWord(){
	if (wordInput.value === currentWord.innerHTML) {
	 	message.innerHTML = 'correct!!!!!';
	 	return true;

	}
	else{
		message,innerHTML = '';
		return false;
	}
}
// pick and show random words//
function showWord(words){
// generate random array index//
const randIndex =math.floor(math.random() * words.length);
// output random words//
currentWord.innerHTML = words[randIndex];
}
// count down time//
function countdown(){
	// make sure time is not run out//
	if (time>0) {
		// decrement//
		time--;
	}
	else if (time==0) {
		// game is over
		isPlaying=false
	}
	// show time//
	timeDisplay.innerHTML = time;
}
// check statues//
function checkstatus(){
	if (!isPlaying && time ===0) {
		message.innerHTML = 'game!!!!!!';
		score = -1;
	}


};