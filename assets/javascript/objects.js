var arrProjects = [];
function Project(name, projectImage, type, date, description, takeaways, exceeded, live, githubImage, techUsed, resources, repo) {
	this.name = name;
	this.projectImage = projectImage;
	this.type = type;
	this.date = date;
	this.description = description;
	this.takeaways = takeaways;
	this.exceeded = exceeded;
	this.live = live;
	this.githubImage = githubImage;
	this.techUsed = techUsed;
	this.resources = resources;
	this.repo = repo;
	//This pushes each instance of Project into the array arrProjects
	arrProjects.push(this);
}
var pokemon = new Project('Pokemon', 'assets/images/insignia.svg', 'Bootcamp Homework', 'Jun 27, 2017 - Jul 10, 2017',
	'Interactive game that dynamically updates the HTML page using the jQuery library.',
	'Dynamically updated HTML page by looping through an array that contained objects. Applied the remove and empty methods to manipulate the DOM on reset.',
	'Adding music, user-bar/computer-bar, hover effects on player, and what I consider a killer UI.',
	'https://danielhdz56.github.io/week-4-game/', 'assets/images/map.svg', 'HTML5, CSS3, JS, JQuery, Bootstrap 4, and Git.',
	'Stack Overflow, Google, Bulbapedia, khinsider, Roundicons-freebies, jQuery Documentation, MDN, composition book, and pens.', 'https://github.com/danielhdz56/week-4-game.git');
var hangman = new Project('Hangman', 'assets/images/world.svg', 'Bootcamp Homework', 'Jun 21, 2017 - Jun 27, 2017',
	'Interactive game that dynamically updates the HTML page using JavaScript code.',
	'Manipulated array in order to match, and replace data. Used vanilla Javascript to make dynamic transitions.',
	'Making sure to account for countries that contained spaces, punctuation, prepositions, and conjunctions. Dynamically adding elements on incorrect guesses.',
	'https://danielhdz56.github.io/Hangman-Game/', 'assets/images/magnifyingGlass.svg', 'HTML5, CSS3, JS, Bootstrap 3, and Git.',
	'Stack Overflow, Google, MDN, composition book, and pens.', 'https://github.com/danielhdz56/Hangman-Game.git');
var psychic = new Project('Psychic', 'assets/images/magic-wand.svg', 'Bootcamp Homework', 'Jun 20, 2017 - Jun 21, 2017',
	'Interactive game that dynamically updates the HTML page using JavaScript code.',
	'Created Random letters using the JavaScript Math object. Manipulated the DOM using the getElementByID Method.',
	'Doing both homeworks (this one and the hangman). Finishing the psychic game in two days (before covering the topics in class). Google Fu!',
	'https://danielhdz56.github.io/Psychic-Game/index.html', 'assets/images/magic-trick.svg', 'HTML5, JS, and Git.',
	'Stack Overflow, Google, and MDN', 'https://github.com/danielhdz56/Psychic-Game.git');
var bootstrap = new Project('Bootstrap', 'assets/images/bootstrap.svg', 'Bootcamp Homework', 'Jun 16, 2017 - Jun 20, 2017',
	'Recreated my first Portfolio using the Bootstrap CSS Framework.',
	'How Bootstrap relies on the concept of a Grid to order and make responsive content.',
	'Adding a sticky footer. Having to redo the assignment because I finsihed it before we were taught how to do it in Bootstrap 4m then being told we have to use Bootstrap 3. Life. LOL.',
	'https://danielhdz56.github.io/Bootstrap-Portfolio/', 'assets/images/bootstrap-code.svg', 'HTML5, CSS3, Bootstrap 4, Bootstrap 3, and Git.',
	'Stack Overflow, Google, composition book, and pens.', 'https://github.com/danielhdz56/Bootstrap-Portfolio.git');
var responsive = new Project('Responsive', 'assets/images/smartphone.svg', 'Bootcamp Homework', 'Jun 16, 2017 - Jun 20, 2017',
	'Made first portfolio responsive by using Media Queries',
	'Learned that issues will arise if there is no meta tag that handles the viewport.',
	'Not Applicable',
	'https://danielhdz56.github.io/Responsive-Portfolio/', 'assets/images/css.svg', 'HTML5, CSS3, and Git.',
	'Stack Overflow, Google, composition book, and pens.', 'https://github.com/danielhdz56/Responsive-Portfolio.git');
var basicPortfolio = new Project('Basic Portfolio', 'assets/images/css-3.svg', 'Bootcamp Homework', 'Jun 7, 2017 - Jun 13, 2017',
	'Made a basic Portfolio given an image.',
	'Understood when to use classes vs id\'s when styling elements. The amazing use of one styling sheet for multiple HTML files.',
	'Doing both the basic Portfolio and Wireframe for Homework',
	'https://danielhdz56.github.io/Basic-Portfolio/', 'assets/images/html-5.svg', 'HTML5, CSS3, and Git.',
	'Stack Overflow, Google, composition book, and pens.', 'https://github.com/danielhdz56/Basic-Portfolio.git');
var wireframe = new Project('Wireframe', 'assets/images/magic-wand.svg', 'Bootcamp Homework', 'Jun 7, 2017',
	'Made a Wireframe given an image.',
	'The relationship between Float and Clear, and the difference between margin and padding.',
	'Finishing the assignment in a couple of hours. This seemed so impressive at the time. Trust me, I\'m way faster now.',
	'https://danielhdz56.github.io/HW-Wireframe/', 'assets/images/magic-trick.svg', 'HTML5, CSS3, and Git.',
	'Stack Overflow, Google, composition book, and pens.', 'https://github.com/danielhdz56/HW-Wireframe.git');























