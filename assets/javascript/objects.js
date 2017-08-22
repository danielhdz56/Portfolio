var arrProjects = [];

function Project(name, projectImage, type, date, description, takeaways, exceeded, live, githubImage, techUsed, resources, repo, node) {
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
	this.node = node; // is it a node project
	//This pushes each instance of Project into the array arrProjects
	arrProjects.push(this);
}
var liriapp = new Project('BossLiri', 'assets/images/clapperboard.svg', 'Bootcamp Homework', 'Aug 15, 2017 - Aug 22, 2017',
	'A website that uses socket.io to enable real-time bidrectional event-based communication. Clients can load my twitter feed, and search for a song/movie',
	'Refactored my code so it is easier to use and maintain, designed my first client side web application.',
	'In liri 2.0 I used inquirer.js to ease the process of parsing input while improving the user experience. Self taught myself to use express, socket.io, and handlebars!',
	'https://bossliri.herokuapp.com/', 'assets/images/twitter.svg', 'JS, Node.js, express, socket.io, handlebars, heroku, spotify(npm), twitter(npm), omdb(npm), fs, lodash, yargs, axios, request, and Git.',
	'Stack Overflow, NPM Documentation, Udemy, and Google', 'https://github.com/danielhdz56/liri-node-app.git');

var weatherapp = new Project('WeatherApp', 'assets/images/temperature.svg', 'Personal Project', 'Aug 14, 2017 - Aug 15, 2017',
	'A weather application that lets you input an address to retrieve the weather through the terminal.',
	'Understood the benefits of using promises over callbacks when handling asynchronous requests.',
	'Made two versions: using callbacks with the require npm package (app.js), using promises with the axios npm package (app-promise.js).',
	'https://github.com/danielhdz56/weather-app.git', 'assets/images/sun.svg', 'JS, Node.js, fs, lodash, yargs, axios, request, and Git.',
	'Stack Overflow, NPM Documentation, Udemy, and Google.', 'https://github.com/danielhdz56/weather-app.git', true);
var nodepad = new Project('Nodepad', 'assets/images/notepad.svg', 'Personal Project', 'Aug 11, 2017 - Aug 14, 2017',
	'A notes application that lets you list, add, read, and remove notes through the terminal.',
	'Learned the basics of node, arrow vs regular functions, debugging, and how to require commands and options by configuring yargs!',
	'Set my .gitignore globally in order to not have to constantly delete folders when pushing to git.',
	'https://github.com/danielhdz56/notes-node.git', 'assets/images/edit.svg', 'JS, Node.js, lodash, fs, yargs, and Git.',
	'Stack Overflow, NPM Documentation, Udemy, and Google.', 'https://github.com/danielhdz56/notes-node.git', true);
var chalkboard = new Project('Chalkboard', 'assets/images/teacher.svg', 'Bootcamp Project', 'Aug 2, 2017 - Aug 9, 2017',
	'An app that allows teachers to upload files, take attendance, and send messages to students. The app maintains persistence by saving user data to firebase.',
	'Taught myself firebase authentication, and storage to integrate to the app.',
	'The ability to upload, parse, and display a csv file. This allows teachers to upload student information.',
	'https://danielhdz56.github.io/MAD/', 'assets/images/desk.svg', 'HTML5, CSS3, JS, JQuery, Firebase (Authentication, Database, Storage), Bootstrap 4, Git, PapaParse, and Google Developers.',
	'Stack Overflow, Google, PapaParse Documentation, MDN, Firebase Documentation, Whiteboard(the irony), and dry erase markers(again, the irony).', 'https://github.com/danielhdz56/MAD.git');
var rps = new Project('RPS-Game', 'assets/images/scissors.svg', 'Bootcamp Homework', 'Jul 26, 2017 - Jul 31, 2017',
	'Rock Paper Scissors Game that incorporates Firebase to host player data. The app retrieves choices made by the player to calculate the outcome.',
	'Understand the use of keys to host messages sent to firebase.',
	'Used session storage to hold information of players so you only query what is necessary from firebase',
	'https://danielhdz56.github.io/RPS-Multiplayer/', 'assets/images/paper-plane.svg', 'HTML5, CSS3, JS, JQuery, Firebase, Bootstrap 3, and Git.',
	'Stack Overflow, Google, jQuery Documentation, MDN, Firebase Documentation, composition book, and pens.', 'https://github.com/danielhdz56/RPS-Multiplayer.git');
var train = new Project('Train-Schedule', 'assets/images/train.svg', 'Bootcamp Homework', 'Jul 23, 2017 - Jul 31, 2017',
	'Train Schedule Application that incorporates Firebase to host arrival and departure data. The app retrieves and manipulates this information and renders it on the page.',
	'Able to communicate with Firebase to read and write data from the client side.',
	'Used a timer to update the "Minutes to Arrival" and "Next Train Time" every minute. Added update and remove buttons to every train, giving clients the ability to edit the row\'s elements.',
	'https://danielhdz56.github.io/TrainSchedule/', 'assets/images/trainMap.svg', 'HTML5, CSS3, JS, JQuery, Firebase, Bootstrap 3, and Git.',
	'Stack Overflow, Google, jQuery Documentation, MDN, Firebase Documentation, composition book, and pens.', 'https://github.com/danielhdz56/TrainSchedule.git');
var trivia = new Project('Trivia-Game', 'assets/images/questions.svg', 'Bootcamp Homework', 'Jul 11, 2017 - Jul 17, 2017',
	'Interactive Trivia Game that dynamically updates the page using the Flickr and OpenTDB API\'s.',
	'Used responses from players to retrieve specific questions from the API based on the difficulty level, number of questions, and category that the player chose.',
	'Taught myself how to use AJAX and implemented it into my app. Also used the correct answer to render an Image from Flickr using Flickr\'s most popular algorithm.',
	'https://danielhdz56.github.io/TriviaGame/', 'assets/images/faq.svg', 'HTML5, CSS3, JS, JQuery, AJAX, API\'s, Bootstrap 3, and Git.',
	'Stack Overflow, Google, jQuery Documentation, MDN, OpenTDB, Flickr, composition book, and pens.', 'https://github.com/danielhdz56/TriviaGame.git');
var concert = new Project('Mini-Concert-App', 'assets/images/rock-and-roll.svg', 'Personal Challenge', 'Jul 18, 2017',
	'Mini Concert APP that retrieves upcoming concert information using the BandsInTown API, and takes you to an external website to buy tickets if they\'re available.',
	'Search bar that allows users to search upcoming concerts by inputing an artist',
	'App was made in under 3 hours.',
	'https://danielhdz56.github.io/MiniConcertApp/music.html', 'assets/images/concert.svg', 'HTML5, JS, JQuery, AJAX, API\'s Bootstrap 3, and Git.',
	'BandsInTown', 'https://github.com/danielhdz56/MiniConcertApp.git');
var pokemon = new Project('Pokemon-RPG', 'assets/images/insignia.svg', 'Bootcamp Homework', 'Jun 27, 2017 - Jul 10, 2017',
	'Interactive game that dynamically updates the HTML page using the jQuery library.',
	'Dynamically updated HTML page by looping through an array that contained objects. Applied the remove and empty methods to manipulate the DOM on reset.',
	'Adding music, user-bar/computer-bar, hover effects on player, and what I consider a killer UI.',
	'https://danielhdz56.github.io/week-4-game/', 'assets/images/map.svg', 'HTML5, CSS3, JS, JQuery, Bootstrap 4, and Git.',
	'Stack Overflow, Google, Bulbapedia, khinsider, Roundicons-freebies, jQuery Documentation, MDN, composition book, and pens.', 'https://github.com/danielhdz56/week-4-game.git');
var hangman = new Project('Hangman-Game', 'assets/images/world.svg', 'Bootcamp Homework', 'Jun 21, 2017 - Jun 27, 2017',
	'Interactive game that dynamically updates the HTML page using JavaScript code.',
	'Manipulated array in order to match, and replace data. Used vanilla Javascript to make dynamic transitions.',
	'Making sure to account for countries that contained spaces, punctuation, prepositions, and conjunctions. Dynamically adding elements on incorrect guesses.',
	'https://danielhdz56.github.io/Hangman-Game/', 'assets/images/magnifyingGlass.svg', 'HTML5, CSS3, JS, Bootstrap 3, and Git.',
	'Stack Overflow, Google, MDN, composition book, and pens.', 'https://github.com/danielhdz56/Hangman-Game.git');
var psychic = new Project('Psychic-Game', 'assets/images/magic-wand.svg', 'Bootcamp Homework', 'Jun 20, 2017 - Jun 21, 2017',
	'Interactive game that dynamically updates the HTML page using JavaScript code.',
	'Created Random letters using the JavaScript Math object. Manipulated the DOM using the getElementByID Method.',
	'Doing both homeworks (this one and the hangman). Finishing the psychic game in two days (before covering the topics in class). Google Fu!',
	'https://danielhdz56.github.io/Psychic-Game/index.html', 'assets/images/magic-trick.svg', 'HTML5, JS, and Git.',
	'Stack Overflow, Google, and MDN', 'https://github.com/danielhdz56/Psychic-Game.git');
var bootstrap = new Project('Bootstrap-Portfolio', 'assets/images/bootstrap.svg', 'Bootcamp Homework', 'Jun 16, 2017 - Jun 20, 2017',
	'Recreated my first Portfolio using the Bootstrap CSS Framework.',
	'How Bootstrap relies on the concept of a Grid to order and make responsive content.',
	'Adding a sticky footer. Having to redo the assignment because I finsihed it before we were taught how to do it in Bootstrap 4m then being told we have to use Bootstrap 3. Life. LOL.',
	'https://danielhdz56.github.io/Bootstrap-Portfolio/', 'assets/images/bootstrap-code.svg', 'HTML5, CSS3, Bootstrap 4, Bootstrap 3, and Git.',
	'Stack Overflow, Google, composition book, and pens.', 'https://github.com/danielhdz56/Bootstrap-Portfolio.git');
var responsive = new Project('Responsive-Portfolio', 'assets/images/smartphone.svg', 'Bootcamp Homework', 'Jun 16, 2017 - Jun 20, 2017',
	'Made first portfolio responsive by using Media Queries',
	'Learned that issues will arise if there is no meta tag that handles the viewport.',
	'Not Applicable',
	'https://danielhdz56.github.io/Responsive-Portfolio/', 'assets/images/css.svg', 'HTML5, CSS3, and Git.',
	'Stack Overflow, Google, composition book, and pens.', 'https://github.com/danielhdz56/Responsive-Portfolio.git');
var basicPortfolio = new Project('Basic-Portfolio', 'assets/images/css-3.svg', 'Bootcamp Homework', 'Jun 7, 2017 - Jun 13, 2017',
	'Made a basic Portfolio given an image.',
	'Understood when to use classes vs id\'s when styling elements. The amazing use of one styling sheet for multiple HTML files.',
	'Doing both the basic Portfolio and Wireframe for Homework',
	'https://danielhdz56.github.io/Basic-Portfolio/', 'assets/images/html-5.svg', 'HTML5, CSS3, and Git.',
	'Stack Overflow, Google, composition book, and pens.', 'https://github.com/danielhdz56/Basic-Portfolio.git');
var wireframe = new Project('Wireframe', 'assets/images/mill.svg', 'Bootcamp Homework', 'Jun 7, 2017',
	'Made a Wireframe given an image.',
	'The relationship between Float and Clear, and the difference between margin and padding.',
	'Finishing the assignment in a couple of hours. This seemed so impressive at the time. Trust me, I\'m way faster now.',
	'https://danielhdz56.github.io/HW-Wireframe/', 'assets/images/engineer.svg', 'HTML5, CSS3, and Git.',
	'Stack Overflow, Google, composition book, and pens.', 'https://github.com/danielhdz56/HW-Wireframe.git');

Project.prototype.makeCard = function (group, split) {
	var column = $('<div>');
	if (split) {
		column.addClass('col-lg-6');
	} else {
		column.addClass('col-lg-12');
	}
	column.addClass('col-12 ' + group).attr('data-page', this.page);
	$('#mainRow').append(column);
	var projectName = $('<div>');
	projectName.attr('id', this.name).addClass('card text-center h-100');
	$(column).append(projectName);
	//Card Header
	var cardHeader = $('<div>');
	cardHeader.addClass('card-header');
	var navTabs = $('<ul>');
	navTabs.addClass('nav nav-tabs nav-fill card-header-tabs').attr('role', 'tablist');
	$(cardHeader).append(navTabs);
	var navItemDescription = $('<li>');
	navItemDescription.addClass('nav-item');
	var linkDescription = $('<a>');
	linkDescription.addClass('nav-link active').attr('data-toggle', 'tab').attr('href', '#' + this.name + 'Description').attr('role', 'tab').append('Project');
	$(navItemDescription).append(linkDescription);
	var navItemCode = $('<li>');
	navItemCode.addClass('nav-item');
	$(navTabs).append(navItemDescription, navItemCode);
	var linkCode = $('<a>');
	linkCode.addClass('nav-link').attr('data-toggle', 'tab').attr('href', '#' + this.name + 'Code').attr('role', 'tab').append('Tech Stack');
	$(navItemCode).append(linkCode);
	//Tab Content
	var tabContent = $('<div>');
	tabContent.addClass('tab-content');
	$(projectName).append(cardHeader, tabContent);
	//Tab Pane Description
	var tabPaneDescription = $('<div>');
	tabPaneDescription.addClass('tab-pane active').attr('id', this.name + 'Description').attr('role', 'tabpanel');
	var imgPaneDescription = $('<img>');
	imgPaneDescription.addClass('card-img-top mx-auto mt-4').attr('src', this.projectImage).attr('alt', 'Card image cap').attr('width', '200px');
	var cardBlockDescription = $('<div>');
	cardBlockDescription.addClass('card-block');
	$(tabPaneDescription).append(imgPaneDescription, cardBlockDescription);
	var cardTitle = $('<h4>');
	cardTitle.addClass('card-title').append(this.name);
	var typeText = $('<p>');
	typeText.addClass('card-text').append('<strong>Type: </strong>' + this.type);
	var dateText = $('<p>');
	dateText.addClass('card-text').append('<strong>Date: </strong>' + this.date);
	var descriptionText = $('<p>');
	descriptionText.addClass('card-text').append('<strong>Description: </strong>' + this.description);
	var takeawaysText = $('<p>');
	takeawaysText.addClass('card-text').append('<strong>Takeaways: </strong>' + this.takeaways);
	var exceededText = $('<p>');
	exceededText.addClass('card-text').append('<strong>Exceeded: </strong>' + this.exceeded);
	var liveLink = $('<a>');
	liveLink.attr('href', this.live).attr('target', '_blank').addClass('btn btn-primary');
	if (this.node) {
		liveLink.append('View the Code!');
	} else {
		liveLink.append('Go Live!');
	}
	$(cardBlockDescription).append(cardTitle, liveLink, typeText, dateText, descriptionText, takeawaysText, exceededText);
	//Tab Pane
	var tabPaneCode = $('<div>');
	tabPaneCode.addClass('tab-pane').attr('id', this.name + 'Code').attr('role', 'tabpanel');
	$(tabContent).append(tabPaneDescription, tabPaneCode);
	var imgPaneCode = $('<img>');
	imgPaneCode.addClass('card-img-top mx-auto mt-4').attr('src', this.githubImage).attr('alt', 'Card image cap').attr('width', '200px');
	var cardBlockCode = $('<div>');
	cardBlockCode.addClass('card-block');
	$(tabPaneCode).append(imgPaneCode, cardBlockCode);
	var cardCodeTitle = $('<h4>');
	cardCodeTitle.addClass('card-title').append(this.name);
	var techUsedText = $('<p>');
	techUsedText.addClass('card-text').append('<strong>Tech Used: </strong>' + this.techUsed);
	var resourcesText = $('<p>');
	resourcesText.addClass('card-text').append('<strong>Resources: </strong>' + this.resources);
	var repoLink = $('<a>');
	repoLink.attr('href', this.repo).attr('target', '_blank').addClass('btn btn-primary').append('View the Code!');
	$(cardBlockCode).append(cardCodeTitle, repoLink, techUsedText, resourcesText);
}
for (f = 0; f < arrProjects.length; f++) {
	if (arrProjects.length % 2 === 1) {
		if (f === 0) {
			arrProjects[f].makeCard('displayCard', false);
		} else {
			arrProjects[f].makeCard('switchCard', true);
		}
	} else {
		arrProjects[f].makeCard('switchCard', true);
	}
}