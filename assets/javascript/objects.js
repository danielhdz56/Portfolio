var arrProjects = [];
function Project(name, projectImage, type, date, description, takeaways, exceeded, live, githubImage, techUsed, resources, repo, page) {
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
var trivia = new Project('Trivia-Game', 'assets/images/questions.svg', 'Bootcamp Homework', 'Jul 11, 2017 - Jul 17, 2017',
	'Interactive Trivia Game that dynamically updates the page using the Flickr and OpenTDB API\'s.',
	'Used responses from players to retrieve specific questions from the API based on the difficulty level, number of questions, and category that the player chose.',
	'Taught myself how to use AJAX and implemented it into my app. Also used the correct answer to render an Image from Flickr using Flickr\'s most popular algorithm.',
	'https://danielhdz56.github.io/TriviaGame/', 'assets/images/faq.svg', 'HTML5, CSS3, JS, JQuery, AJAX, API\'s Bootstrap 3, and Git.',
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
var wireframe = new Project('Wireframe', 'assets/images/magic-wand.svg', 'Bootcamp Homework', 'Jun 7, 2017',
	'Made a Wireframe given an image.',
	'The relationship between Float and Clear, and the difference between margin and padding.',
	'Finishing the assignment in a couple of hours. This seemed so impressive at the time. Trust me, I\'m way faster now.',
	'https://danielhdz56.github.io/HW-Wireframe/', 'assets/images/magic-trick.svg', 'HTML5, CSS3, and Git.',
	'Stack Overflow, Google, composition book, and pens.', 'https://github.com/danielhdz56/HW-Wireframe.git');
//Dynamically add cards to html
var arrSwitchCards = [];
for (j=1; j<arrProjects.length; j++) {
	arrSwitchCards.push(arrProjects[j])
}
var k,l,temparray,chunk = 2;
var counter = 1;
for (k=0,l=arrSwitchCards.length; k<l; k+=chunk) {
    temparray = arrSwitchCards.slice(k,k+chunk);
    temparray[0].page = counter;
    temparray[1].page = counter;
    counter++;
}

Project.prototype.makeCard = function(group, split) {
	var column = $('<div>');
	if(split){
		column.addClass('col-lg-6')
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
	linkCode.addClass('nav-link').attr('data-toggle', 'tab').attr('href', '#' + this.name + 'Code').attr('role', 'tab').append('Github');
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
	typeText.addClass('card-text').append(this.type);
	var dateText = $('<p>');
	dateText.addClass('card-text').append(this.date);
	var descriptionText = $('<p>');
	descriptionText.addClass('card-text').append(this.description);
	var takeawaysText = $('<p>');
	takeawaysText.addClass('card-text').append(this.takeaways);
	var exceededText = $('<p>');
	exceededText.addClass('card-text').append(this.exceeded);
	var liveLink = $('<a>');
	liveLink.attr('href', this.live).attr('target', '_blank').addClass('btn btn-primary').append('Go Live!');
	$(cardBlockDescription).append(cardTitle, typeText, dateText, descriptionText, takeawaysText, exceededText, liveLink);
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
	techUsedText.addClass('card-text').append(this.techUsed);
	var resourcesText = $('<p>');
	resourcesText.addClass('card-text').append(this.resources);
	var repoLink = $('<a>');
	repoLink.attr('href', this.repo).attr('target', '_blank').addClass('btn btn-primary').append('View the Code!');
	$(cardBlockCode).append(cardCodeTitle, techUsedText, resourcesText, repoLink);
}
function pagination(pages) {
	var column = $('<div>');
	column.addClass('col-12 mt-5');
	$('#mainRow').append(column);
	var nav = $('<nav>');
	$(column).append(nav);
	var uList = $('<ul>');
	uList.addClass('pagination pagination-lg justify-content-end');
	$(nav).append(uList);
	var previousListItem = $('<li>');
	previousListItem.attr('previous');
	previousListItem.addClass('page-item disabled');
	$(uList).append(previousListItem);
	var previousListLink = $('<button>');
	previousListLink.addClass('page-link').attr('id', 'prev').attr('tabindex', '-1').append('Prev.');
	$(previousListItem).append(previousListLink);
	for (i = 1; i <= pages; i++){
		var listItem = $('<li>');
		listItem.addClass('page-item items');
		var listLink = $('<button>');
		listLink.addClass('page-link').attr('id', i).append(i);
		if(i === 1){
			listItem.addClass('active');
		}
		$(listItem).append(listLink)
		$(uList).append(listItem);
	}
	var nextListItem = $('<li>');
	nextListItem.attr('next');
	nextListItem.addClass('page-item');
	$(uList).append(nextListItem);
	var nextListLink = $('<button>');
	nextListLink.addClass('page-link').attr('id', 'next').append('Next');
	$(nextListItem).append(nextListLink);
}
for (f=0; f<arrProjects.length; f++) {
	if(f===0) {
		arrProjects[f].makeCard('displayCard', false);
		numberOfPages = (arrProjects.length-1)/2;
		pagination(numberOfPages);		
	}
	else {
		if(arrProjects[f].page === 1){
			arrProjects[f].makeCard('switchCard', true);
		}
	}
}
$(document).on('click', '.page-link', function(){
	$('.switchCard').remove()


	if ($(this).parent().hasClass('items')){
		for(h=1; h<arrProjects.length; h++){
			if(arrProjects[h].page === Number($(this).attr('id'))){
				arrProjects[h].makeCard('switchCard', true);
			}
		}
		if (!$(this).parent().hasClass('active')) {
			$(this).parent().parent().find('.active').removeClass('active');
			$(this).parent().addClass('active');
		}
		if ($(this).attr('id') !== '1') {
			$('#prev').parent().removeClass('disabled');
		}
		else {
			$('#prev').parent().addClass('disabled');
		}
		if ($(this).attr('id') !== '3') {
			$('#next').parent().removeClass('disabled');
		}
		else {
			$('#next').parent().addClass('disabled');
		}
	}
	else if ($(this).attr('id') === 'next') {
		$(this).parent().parent().find('.active').next().addClass('active');
		$(this).parent().parent().find('.active').eq(0).removeClass('active');
		//Handles the pages when pagination is clicked. 
		for(h=1; h<arrProjects.length; h++){
			if(arrProjects[h].page === Number($(this).parent().parent().find('.active').children().attr('id'))){
				arrProjects[h].makeCard('switchCard', true);
			}
		}
		//Handles the situation in which the next pagination makes the id 2 have an active class
		if ($(this).parent().parent().find('.active').children().attr('id') === '2') {
			$('#prev').parent().removeClass('disabled');
		}
		//Handles the situation in which the next pagination makes the last id have an active class
		else if (Number($(this).parent().parent().find('.active').children().attr('id')) === counter-1) {
			$(this).parent().addClass('disabled');
		}
	}
	//Handles the previous in pagination
	else if ($(this).attr('id') === 'prev') {
		$(this).parent().parent().find('.active').prev().addClass('active');
		$(this).parent().parent().find('.active').eq(1).removeClass('active');
		//Handles the pages when pagination is clicked. 
		for(h=1; h<arrProjects.length; h++){
			if(arrProjects[h].page === Number($(this).parent().parent().find('.active').children().attr('id'))){
				arrProjects[h].makeCard('switchCard', true);
			}
		}
		//Handles the situation in which the previous pagination makes the id 2 have an active class
		if (Number($(this).parent().parent().find('.active').children().attr('id'))===counter-2) {
			$('#next').parent().removeClass('disabled');
		}
		//Handles the situation in which the previous pagination makes the id 1 have an active class
		else if ($(this).parent().parent().find('.active').children().attr('id') === '1') {
			$(this).parent().addClass('disabled');
		}
	}
});


		
		
		
		
		

