var q_set = [];
var a_set = [];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 20;
var intervalID;
var data = [
	{
		q: "What was the registration number of the Enterprise from Star Trek (The Original Series)?",
		a: ["NCC-1701A", "NCC-1701D", "NX-01", "2FAST2TREK"],
		c: 0,
		e: "The NCC-1701A was the first iteration of the Enterprise as we know it from Star Trek TOS, TNG, and the movies."
	},
	{
		q: "Who was the captain of the Enterprise in Star Trek: The Next Generation?",
		a: ["Kirk", "Spock", "Picard", "Archer"],
		c: 2,
		e: "Captain Jean-Luc Picard was the captain in TNG."
	},
	{
		q: "Which Star Trek \"Captain\" wasn't actually a Captain when their show started?",
		a: ["Kirk", "Picard", "Sisko", "Janeway"],
		c: 2,
		e: "Sisko was a mere commander when he was put in charge of Deep Space 9. He later achieved rank of Captain."
	},
	{
		q: "Which Star Trek enemy was able to convert Captain Picard to their side for two episodes?",
		a: ["Q", "Borg", "Romulans", "Maquis"],
		c: 1,
		e: "Picard was assimilated to the Borg and given the name Locutus of Borg as a Season 3 cliffhanger. His humanity was restored in Season 4."
	},
	{
		q: "Which long running 90's sitcom had more regulars act as guest starts in Star Trek: The Next Generation than any other show?",
		a: ["Seinfeld", "Roseanne", "Friends", "Cheers"],
		c: 3,
		e: "Rumor is that TNG and Cheers were filmed on the same studio lot, and Cheers actors enjoyed playing bit parts in TNG. Some notable examples are: Kirsty Alley as Lt. Saavik in the first Star Trek movie and Kelsey Grammar as a rogue Starfleet captain in Season 5."
	},
	{
		q: "Which Star Trek series broke from the tradition of having an entirely orchestral theme song to using a pop song?",
		a: ["Star Trek: The Animated Series", "Voyager", "Star Trek: The Next Generation", "Enterprise"],
		c: 3,
		e: "When Enterprise aired in 2001, it broke tradition and had a pop/rock song as its theme. The theme song is almost universally hated amongst Star Trek fans."
	},
	{
		q: "Which of these Star Trek races lives the longest?",
		a: ["Human", "Vulcan", "Q", "Ocampa"],
		c: 2,
		e: "The Q are infinite beings who, unless they are killed by another Q, live forever."
	},
	{
		q: "Vulcans as a race have learned over millenia to suppress their emotions and instead base all of their decisions on...",
		a: ["chance", "logic", "luck", "the Vulcan science directorate"],
		c: 1,
		e: "Logic. They talk a good game, but most Vulcans on the show are actually pretty bad at masking/suppressing emotion."
	},
	{
		q: "Some people critisize Star Trek aliens as looking like \"just humans with stuff glued to their faces\". Which alien race looks like it has the most stuff glued to its face?",
		a: ["Vulcans", "Bajorans", "Klingons (23rd century)", "Klingons (24th century)"],
		c: 3,
		e: "Klingons in TOS were portrayed as rowdy, dark-skinned humans (seriously), but in TNG they were given lots of junk to glue to their face so they are more than just brown humans."
	},
	{
		q: "The hand-held devices that Starfleet personnel use to scan things in their immediate viscinity are called...",
		a: ["tricorders", "hand-scanners", "scantrons", "iScanners"],
		c: 0,
		e: "Tricorders are used for general, all-purpose scanning. Medical tricorders are used by medical personnel to go deeper into anatomical scans."
	},
	{
		q: "Which of these Star Trek characters did NOT appear as a recurring character on more than one Star Trek series?",
		a: ["Data", "Chief O'Brien", "Q", "Worf"],
		c: 0,
		e: "Chief O'Brien was a minor character in TNG, but a primary in DS9. Worf was a primary in both. Q made appearances in TNG, DS9 and also Voyager!"
	},
	{
		q: "Data, like a character in The Wizard of Oz, was an android who lacked one key element of humanity. He lacked...",
		a: ["Sexuality", "Emotions", "A brain", "Courage"],
		c: 1,
		e: "Data was built without emotions or feelings. He did eventually get a hardware upgrade that he could turn on/off depending on the circumstances."
	},
	{
		q: "Data, the android from Star Trek: The Next Generation, had a pet. The pet was...",
		a: ["A cat named Spot", "An android dog named Quark", "A targarian eel named Data Jr.", "A smaller android version of himself named Datum"],
		c: 0,
		e: "His cat was named Spot. He wrote a poem about Spot once. It's bad. It's a bad poem."
	},
	{
		q: "Ferengi are an alien race obsessed with...",
		a: ["Wealth", "Morality", "Scientific knowledge", "Looking pretty"],
		c: 0,
		e: "Ferengi only care about the aquisition of wealth. They're also pretty ugly--but that's just my opinion."
	},
	{
		q: "The crew of Voyager got lost 70,000 years from home in which quadrant of the Milky Way?",
		a: ["Alpha", "Beta", "Delta", "Gamma"],
		c: 2,
		e: "Earth is in the Alpha quadrant, but Voyager got transported against their will to an area of the Delta quadrant in the pilot episode of Voyager. The remaining seven seasons are about their voyage home."
	},
	{
		q: "Which Star Trek character's actress later went on to play a major character in Netflix's Orange Is The New Black?",
		a: ["Major Kira Nerys", "Captain Janeway", "7 of 9", "Deanna Troi"],
		c: 1,
		e: "Kate Mulgrew played Captain Kathryn Janeway on Star Trek Voyager, and also played 'Red', the matronly Russian woman in OitNB."
	},
	{
		q: "Starfleet is the military branch of which governmental organization?",
		a: ["Federation of Planets", "United Solar Systems", "League of Spacefaring Civilizations", "The Republic"],
		c: 0,
		e: "The United Federation of Planets, to be exact. It is a multi-race, multi-planetary peace organization comprised of races including humans. Starfleet headquarters is in the Presidio in San Francisco, Earth."
	},
	{
		q: "Captain Archer, from Enterprise, is an avid watcher of what sport?",
		a: ["Baseball", "Quidditch", "Water Polo", "Klingon Dog Fighting"],
		c: 2,
		e: "Dude likes water polo for some reason. He watches it on his computer all the time. It's strange."
	},
	{
		q: "Which character from Enterprise is often referred to, but never appears on screen?",
		a: ["Ambassador Soval", "Chef", "The Captain's dog, Porthos", "Commander Trip Tucker"],
		c: 1,
		e: "A running joke in Enterprise is that you'll never see the Chef's face, but they're always mentioning him. It's not that funny, honestly. Also, didn't Home Improvement do that? That show wasn't funny either."
	}
];


// this function picks 10 random questions from the data set and assigns their number
// and the associated answer numbers to the two arrays q_set and a_set, respecitvely.
function makeQuestionSet(){
	// If you don't pass any arguments to `.slice` then it 
	// will create a copy of the array it's being called by.
	// By creating a copy, you can simply remove randomly 
	// selected items from the array without worrying about 
	// whether or not that item's been chosen already.
	// This ends up being considerably more efficient when 
	// selecting a random set from a much larger array of items.
	var dataClone = data.slice()

	for (var i = 1; i <= 10; i++) {
		var rand = Math.floor(Math.random() * dataClone.length);

		// Using `.splice` here to remove the randomly selected element from the cloned data array
		// And since `.splice` returns an array, we have to grab the first (and only) element from that array.
		q_set.push( dataClone.splice(rand, 1)[0] );
		// This is another way to do the same thing using new javascript syntax.
		// It uses the `...` (spread operator) to 'spread' out the contents of an array
		// Which in this case only has one item inside of it so it just returns that.
		// q_set.push( ...dataClone.splice(rand, 1) );
	}
}

// this function prints the question and its answers in the appropriate div
// when any of the answers is clicked on, it calls displayAnswer()
function nextQuestion(){
	// reset all of the divs that hold question related content
	$("#question_space").html(' ');
	$("#answers_space").html(' ');
	$("#question_timer").html('<p>Timer : 20 seconds remaining</p>');
	// set the next question
	// since the q_set is now an array of actual questions instead of indexes, 
	// you no longer need to access the questions with the `data[question]` syntax
	var question = q_set[correct + incorrect + unanswered];
	// if there's an intervalID somehow still running, clear it. This should never run,
	// but it's a precaution to prevent bugs if someone clicks unhumanely fast
	if (intervalID) {
		clearTimeout(intervalID);
	}
	// if we've already answered 10 questions, we're going to show the results instead.
	if ((correct + incorrect + unanswered) >= 10) {
		showResults();
	} else {
		// start a new timer. This calls the showCountdown() function once ever second until
		// intervalID is cleared
		// you want to avoid passing string values to setinterval/setTimeout
		// instead pass a reference to the function you want executed.
		// and if you want to pass arguments, you can use this `.bind` syntax
		// Note that the first arg passed to `.bind` is the context (ie `this`)
		intervalID = setInterval(showCountdown.bind(null, question), 1000);
		// intervalID = setInterval("showCountdown(" + question + ")", 1000);
		// print the question into the appropriate div
		$("#question_space").html('<div class="question"><p>' + question["q"] + '</p></div>');
		// print (append) all the answers to the #answers_space div
		for (var i = 0; i < question["a"].length; i++) {
			$("#answers_space").append('<div id="' + i + '" class="answer"><p>' + question["a"][i] + '</p></div>');
		}
		// wait for one of the answers to be clicked on, then call displayAnswer()
		// this needs the unbind() method tacked on to it, otherwise the button stays in memory
		// and thinks it's being clicked over and over, even after it's "deleted" from the page
		$("#answers_space").unbind().on("click", ".answer", function(){
			// this assignment clearly wanted us to use "this" somewhere, but I couldn't find much
			// use for it outside of this use. It works really well here, though!
			displayAnswer(this.id, question);
		});
	}
}

// this function displays the correct answer for 5 seconds, then calls nextQuestion()
function displayAnswer(answer, question) {
	// compare the answer argument to the answer value in the object.
	// Best practice to always use strict equality checking
	if (answer === question["c"]) {
		correct++;
		$("#answers_space").html('<h3>' + "Correct!" + '</h3>');
		$("#answers_space").append('<p>' + question["e"] + '</p>');
	} else {
		$("#answers_space").html('<h3>' + "Wrong!" + '</h3>');
		if (answer === "time expired") {
			$("#answers_space").append('<p>Time\'s Up!</p>');
			unanswered++;
		} else {
			$("#answers_space").append('<p>You answered: ' + question["a"][answer] + '</p>');
			incorrect++;
		}
		$("#answers_space").append('<p>' + question["e"] + '</p>');
	}
	// cancel the timer and reset back to 20
	clearTimeout(intervalID);
	time = 20;
	// clear the question from the screen
	$("#question_timer").html(' ');
	// only show the answer for 8 seconds, then move on to the next question
	intervalID = setTimeout(nextQuestion, 8000);
}

// this function is called by assigning it to the variable intervalID in the nextQuestion
// function. That assignment calls this function repeatedly every 1 second until
// it is cleared, which happens after 20 calls.
// As global variable timer decreases from 20, this function displays the number of
// remaining seconds on screen. If tje timer reaches 0, call displayAnswer() with a
// special argument to signify that the time expired and also clear the variable that calls it.
function showCountdown(question) {
	// I saw this on stack overflow. You can decrement the value while also doing a comparison!
	if (--time > 0){
		$("#question_timer").html('<p>Timer : ' + time + ' seconds remaining</p>');
	} else {
		clearTimeout(intervalID);
		displayAnswer("time expired", question);
	}
}

// display results in #answers_space div
function showResults() {
	$("#question_space").html(' ');
	$("#question_timer").html(' ');
	// this totally works, but you might consider having spans with specific ids like so
	// <p>Correct answers: <span id="correct-answers"></span></p>
	// then you can update each using the following convention
	// $('correct-answers').html(correct)
	$("#answers_space").html('\
		<div id="score">\
		<p>Correct answers: ' + correct + '\
		<p>Incorrect answers: ' + incorrect + '\
		<p>Unanswered questions: ' + unanswered + '\
		</div>\
	');
	$("#other").html('<button id="btn-reset" class="btn btn-info">Play Again!</button>');
}

// reset back to square one
$("#other").unbind().on("click", "#btn-reset", function(){
	$("#question_space").html(' ');
	$("#question_timer").html(' ');
	$("#answers_space").html(' ');
	$("#other").html(' ');
	q_set = [];
	a_set = [];
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	$("#splash").show();
});

// This starts the game. No need for an on document ready wrapper around this since
// it only runs when the begin button is clicked.
$("#btn-begin").click(function(){
	$("#splash").hide();
	makeQuestionSet();
	nextQuestion();
});