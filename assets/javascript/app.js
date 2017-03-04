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
		d: "His cat was named Spot. He wrote a poem about Spot once. It's bad. It's a bad poem."
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
	for (var i = 1; i <= 10; i++) {
		var pushed = false;
		while (!pushed) {
			var rand = Math.floor(Math.random()*data.length);
			if (!(q_set.indexOf(rand) > -1)) {
				q_set.push(rand);
				pushed = true;
			};
		};
	};
	console.log(q_set)
};

// this function prints the question and its answers in the appropriate div
function nextQuestion(){
	$("#question_space").html(' ');
	$("#answers_space").html(' ');
	$("#question_timer").html('<p>Timer : 20 seconds remaining</p>')
	var question = q_set[correct + incorrect + unanswered];
	if (intervalID) {
		clearTimeout(intervalID);
	}
	if ((correct + incorrect + unanswered) === 10) {
		showResults();
	} else {
		intervalID = setInterval("showCountdown(" + question + ")", 1000);
		$("#question_space").html(data[question]["q"]);
		for (var i = 0; i < data[question]["a"].length; i++) {
			$("#answers_space").append('<div id="' + i + '" class="answer">' + data[question]["a"][i] + '</div>');
		};
		$("#answers_space").unbind().on("click", ".answer", function(){
			displayAnswer(this.id, question);
		});
	};
};

// this function displays the correct answer for 5 seconds
function displayAnswer(answer, question) {
	if (answer == data[question]["c"]) {
		console.log("correct " + answer);
		correct++;
		$("#answers_space").html('<h3>' + "Correct!" + '</h3>');
		$("#answers_space").append('<p>' + data[question]["e"] + '</p>');
		console.log("total correct so far is " + correct);
	} else {
		console.log("wrong " + answer);
		incorrect++;
		$("#answers_space").html('<h3>' + "Wrong!" + '</h3>');
		if (answer === "time expired") {
			$("#answers_space").append('<p>Time\'s Up!</p>');
		} else {
			$("#answers_space").append('<p>You answered: ' + data[question]["a"][answer] + '</p>');
		}
		$("#answers_space").append('<p>' + data[question]["e"] + '</p>');
		console.log("total wrong so far is " + incorrect);
	};
	clearTimeout(intervalID);
	$("#question_timer").html(' ')
	time = 20;
	intervalID = setTimeout("nextQuestion()", 8000);
};

function showCountdown(question) {
	if (--time > 0){
		$("#question_timer").html('<p>Timer : ' + time + ' seconds remaining</p>');
	} else {
		unanswered++;
		clearTimeout(intervalID);
		displayAnswer("time expired", question);
	};
};

function showResults() {
	$("#question_space").html(' ');
	$("#question_timer").html(' ');
	$("#answers_space").html('\
		<p>Correct answers: ' + correct + '\
		<p>Inorrect answers: ' + incorrect + '\
		<p>Unanswered questions: ' + unanswered + '\
	');
	$("#other").html('<button id="btn-reset" class="btn btn-info">Play Again!</button>');
};

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
	$("#splash").show()
});

// begin game
$("#btn-begin").click(function(){
	$("#splash").hide()
	makeQuestionSet();
	nextQuestion();
});