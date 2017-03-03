var score = 0;
var question_time = 8000;
var data = {
	question1: {
		q: "What was the registration number of the Enterprise from Star Trek (The Original Series)?",
		a: ["NCC-1701A", "NCC-1701D", "NX-01", "2FAST2TREK"],
		c: 0,
		e: "The NCC-1701A was the first iteration of the Enterprise as we know it from Star Trek TOS, TNG, and the movies."
	},
	question2: {
		q: "Who was the captain of the Enterprise in Star Trek: The Next Generation?",
		a: ["Kirk", "Spock", "Picard", "Archer"],
		c: 2,
		e: "Captain Jean-Luc Picard was the captain in TNG."
	},
	question3: {
		q: "Which Star Trek \"Captain\" wasn't actually a Captain when their show started?",
		a: ["Kirk", "Picard", "Sisko", "Janeway"],
		c: 2,
		e: "Sisko was a mere commander when he was put in charge of Deep Space 9. He later achieved rank of Captain."
	},
	question4: {
		q: "Which Star Trek enemy was able to convert Captain Picard to their side for two episodes?",
		a: ["Q", "Borg", "Romulans", "Maquis"],
		c: 1,
		e: "Picard was assimilated to the Borg and given the name Locutus of Borg as a Season 3 cliffhanger. His humanity was restored in Season 4."
	},
	question5: {
		q: "Which long running 90's sitcom had more regulars act as guest starts in Star Trek: The Next Generation than any other show?",
		a: ["Seinfeld", "Roseanne", "Friends", "Cheers"],
		c: 3,
		e: "Rumor is that TNG and Cheers were filmed on the same studio lot, and Cheers actors enjoyed playing bit parts in TNG. Some notable examples are: Kirsty Alley as Lt. Saavik in the first Star Trek movie and Kelsey Grammar as a rogue Starfleet captain in Season 5."
	},
	question6: {
		q: "Which Star Trek series broke from the tradition of having an entirely orchestral theme song to using a pop song?",
		a: ["Star Trek: The Animated Series", "Voyager", "Star Trek: The Next Generation", "Enterprise"],
		c: 3,
		e: "When Enterprise aired in 2001, it broke tradition and had a pop/rock song as its theme. The theme song is almost universally hated amongst Star Trek fans."
	},
	question7: {
		q: "Which of these Star Trek races lives the longest?",
		a: ["Human", "Vulcan", "Q", "Ocampa"],
		c: 2,
		e: "The Q are infinite beings who, unless they are killed by another Q, live forever".
	},
	question8: {
		q: "Vulcans as a race have learned over millenia to suppress their emotions and instead base all of their decisions on...",
		a: ["chance", "logic", "luck", "the Vulcan science directorate"],
		c: 1,
		e: "Logic. They talk a good game, but most Vulcans on the show are actually pretty bad at masking/suppressing emotion."
	},
	question9: {
		q: "Some people critisize Star Trek aliens as looking like \"just humans with stuff glued to their faces\". Which alien race looks like it has the most stuff glued to its face?",
		a: ["Vulcans", "Bajorans", "Klingons (23rd century)", "Klingons (24th century)"],
		c: 3,
		e: "Klingons in TOS were portrayed as rowdy, dark-skinned humans (seriously), but in TNG they were given lots of junk to glue to their face so they are more than just brown humans."
	},
	question10: {
		q: "The hand-held devices that Starfleet personnel use to scan things in their immediate viscinity are called...",
		a: ["tricorders", "hand-scanners", "scantrons", "iScanners"],
		c: 0,
		e: "Tricorders are used for general, all-purpose scanning. Medical tricorders are used by medical personnel to go deeper into anatomical scans."
	},
	question11: {
		q: "Which of these Star Trek characters did NOT appear as a recurring character on more than one Star Trek series?",
		a: ["Data", "Chief O'Brien", "Q", "Worf"],
		c: 0,
		e: "Chief O'Brien was a minor character in TNG, but a primary in DS9. Worf was a primary in both. Q made appearances in TNG, DS9 and also Voyager!"
	},
	question12: {
		q: "Data, like a character in The Wizard of Oz, was an android who lacked one key element of humanity. He lacked...",
		a: ["Sexuality", "Emotions", "A brain", "Courage"],
		c: 1,
		e: "Data was built without emotions or feelings. He did eventually get a hardware upgrade that he could turn on/off depending on the circumstances."
	},
	question13: {
		q: "Data, the android from Star Trek: The Next Generation, had a pet. The pet was...",
		a: ["A cat named Spot", "An android dog named Quark", "A targarian eel named Data Jr.", "A smaller android version of himself named Datum"],
		c: 0,
		d: "His cat was named Spot. He wrote a poem about Spot once. It's bad. It's a bad poem."
	},
	question14: {
		q: "Ferengi are an alien race obsessed with...",
		a: ["Wealth", "Morality", "Scientific knowledge", "Looking pretty"],
		c: 0,
		e: "Ferengi only care about the aquisition of wealth. They're also pretty ugly--but that's just my opinion."
	},
	question15: {
		q: "The crew of Voyager got lost 70,000 years from home in which quadrant of the Milky Way?",
		a: ["Alpha", "Beta", "Delta", "Gamma"],
		c: 2,
		e: "Earth is in the Alpha quadrant, but Voyager got transported against their will to an area of the Delta quadrant in the pilot episode of Voyager. The remaining seven seasons are about their voyage home."
	},
	question16: {
		q: "Which Star Trek character's actress later went on to play a major character in Netflix's Orange Is The New Black?",
		a: ["Major Kira Nerys", "Captain Janeway", "7 of 9", "Deanna Troi"],
		c: 1,
		e: "Kate Mulgrew played Captain Kathryn Janeway on Star Trek Voyager, and also played 'Red', the matronly Russian woman in OitNB."
	},
	question17: {
		q: "Starfleet is the military branch of which governmental organization?",
		a: ["Federation of Planets", "United Solar Systems", "League of Spacefaring Civilizations", "The Republic"],
		c: 0,
		e: "The United Federation of Planets, to be exact. It is a multi-race, multi-planetary peace organization comprised of races including humans. Starfleet headquarters is in the Presidio in San Francisco, Earth."
	},
	question18: {
		q: "Captain Archer, from Enterprise, is an avid watcher of what sport?",
		a: ["Baseball", "Quidditch", "Water Polo", "Klingon Dog Fighting"],
		c: 2,
		e: "Dude likes water polo for some reason. He watches it on his computer all the time. It's strange."
	},
	question19: {
		q: "Which character from Enterprise is often referred to, but never appears on screen?",
		a: ["Ambassador Soval", "Chef", "The Captain's dog, Porthos", "Commander Trip Tucker"],
		c: 1,
		e: "A running joke in Enterprise is that you'll never see the Chef's face, but they're always mentioning him. It's not that funny, honestly. Also, didn't Home Improvement do that? That show wasn't funny either."
	}
};

function displayQuestion(){
	for (var i = 1; i <= 10; i++) {
		$("#question_space").html('<h3>' + + '</h3>')
	};
}

