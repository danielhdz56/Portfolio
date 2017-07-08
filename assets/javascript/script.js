//Email Form
//Protects against spambots
$('#contactform').attr('action', 'h' + 't' + 't' + 'p' + 's' + ':' + '/' + '/' + 'f' + 'o' + 'r' + 'm' + 's' + 'p' + 'r' + 'e' + 'e' + '.' + 'i' + 'o' + '/' + 'd' + 'a' + 'n' + 'i' + 'e' + 'l' + '5' + '6' + 'h' + 'd' + 'z' + '@' + 'g' + 'm' + 'a' + 'i' + 'l' + '.' + 'c' + 'o' + 'm');
$('#next').attr('value', window.location.pathname);
//Pagination
var handler = function() {
	//Handles the numbers in Pagination
	if ($(this).hasClass('items')) {
		if (!$(this).hasClass('active')) {
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');
			//Handles the pages when pagination is clicked. 
			$('.pages').addClass('collapse');
			$('.page' + $(this).attr('id')).removeClass('collapse');
		}
		if ($(this).attr('id') !== '1') {
			$('#previous').removeClass('disabled');
		}
		else {
			$('#previous').addClass('disabled');
		}
		if ($(this).attr('id') !== '3') {
			$('#next').removeClass('disabled');
		}
		else {
			$('#next').addClass('disabled');
		}
	}
	//Handles the next in pagination
	else if ($(this).attr('id') === 'next') {
		$(this).parent().find('.active').next().addClass('active');
		$(this).parent().find('.active').eq(0).removeClass('active');
		//Handles the pages when pagination is clicked. 
		$('.pages').addClass('collapse');
		$('.page' + $(this).parent().find('.active').attr('id')).removeClass('collapse');
		//Handles the situation in which the next pagination makes the id 2 have an active class
		if ($(this).parent().find('.active').attr('id') === '2') {
			$('#previous').removeClass('disabled');
		}
		//Handles the situation in which the next pagination makes the id 3 have an active class
		else if ($(this).parent().find('.active').attr('id') === '3') {
			$(this).addClass('disabled');
		}
	}
	//Handles the previous in pagination
	else if ($(this).attr('id') === 'previous') {
		$(this).parent().find('.active').prev().addClass('active');
		$(this).parent().find('.active').eq(1).removeClass('active');
		//Handles the pages when pagination is clicked. 
		$('.pages').addClass('collapse');
		$('.page' + $(this).parent().find('.active').attr('id')).removeClass('collapse');
		//Handles the situation in which the previous pagination makes the id 2 have an active class
		if ($(this).parent().find('.active').attr('id') === '2') {
			$('#next').removeClass('disabled');
		}
		//Handles the situation in which the previous pagination makes the id 1 have an active class
		else if ($(this).parent().find('.active').attr('id') === '1') {
			$(this).addClass('disabled');
		}
	}
	//This ensures that active and disabled classes are not bind on click
	$('.page-item').unbind('click', handler);
	$('.page-item').bind('click', handler);
	$('.active').unbind('click', handler);
	$('.disabled').unbind('click', handler);
};
//This adds the binding to all page items excluding the previous and active buttons
$('.page-item').bind('click', handler);
$('.active').unbind('click', handler);
$('.disabled').unbind('click', handler);