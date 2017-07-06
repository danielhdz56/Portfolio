var handler = function() {
	if ($(this).attr('id') === 'next') {
		//Pagination
		$('#next').unbind('click', handler);
		$(this).parent().find('.active').bind('click', handler);
		$(this).parent().find('.active').next().unbind('click', handler);
		$(this).parent().find('.active').next().addClass('active');
		$(this).parent().find('.active').eq(0).removeClass('active');
		//Pages
		$('.pages').addClass('collapse');
		$('.page' + $(this).parent().find('.active').attr('id')).removeClass('collapse');
		console.log("hello");
	}
	else if ($(this).attr('id') === 'previous') {
		//Pagination
		$(this).parent().find('.active').bind('click', handler);
		$(this).parent().find('.active').prev().unbind('click', handler);
		$(this).parent().find('.active').prev().addClass('active');
		$(this).parent().find('.active').eq(1).removeClass('active');
		//Pages
		$('.pages').addClass('collapse');
		$('.page' + $(this).parent().find('.active').attr('id')).removeClass('collapse');
		console.log("helloagain");
	}
	else {
		//Pagination
  		$(this).parent().find('.active').bind('click', handler);
  		$(this).addClass('active');
  		$(this).unbind('click', handler);
  		$(this).siblings().removeClass('active');
  		//Pages
  		$('.pages').addClass('collapse');
  		$('.page' + $(this).attr('id')).removeClass('collapse');
  		console.log("helloagainafas");

	}
	if($(this).parent().find('.active').attr('id') === '1') {
		$('#previous').addClass('disabled');
		$('#previous').unbind('click', handler);
		console.log("helloagainafas");

	}
	else {
		$('#previous').removeClass('disabled');
		$('#previous').bind('click', handler);
		console.log("hellodddagainafas");

	}
	if($(this).parent().find('.active').attr('id') === '3') {
		$('#next').addClass('disabled');
		$('#next').unbind('click', handler);
		console.log("hellodddddddagainafas");

	}
	else {
		$('#next').removeClass('disabled');
		$('#next').bind('click', handler);
		console.log("hellodddddddagainafas");

	}
};
$('.page-item').bind('click', handler );
$('.disabled').unbind('click', handler );
$('.active').unbind('click', handler );

