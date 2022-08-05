var beephover = $("#beephover")[0];
$("#logo a, #menu-about, #menu-gallery").hover(function() {
	beephover.pause();
	beephover.play();
});




paceOptions = {
  restartOnPushState: false
}

//bottle resize

function bottle(){

	var bottleHeight = $('#bottle, #bottle-image, #bottle-shadow').height();
	$('#bottle, #bottle-image, #bottle-shadow').css({width:(bottleHeight/100)*27.22});

};

bottle();

$(window).resize(function(){
	bottle();
});




$(window).load(function () {

	setTimeout(function(){

		$('.menu, #social, #language').addClass('in');

		$('.pace').addClass('in');


		var url = window.location.pathname,
			urlNoBar = url.replace('/', ''),
			urlID = '#'+urlNoBar;



		if(urlNoBar === ''){

			$('#main').addClass('in');
			$('[data-menu-id=main]').addClass('current');
			$('#bottle').addClass('main');
			

			setTimeout(function(){

				//$('.section.in').addClass('no-transition');
				$('#bottle, #main-elipse').addClass('no-transition');

			}, 2000);

		} else {


			$(urlID).addClass('in');
			$('[data-menu-id='+urlNoBar+']').addClass('current');
			$('#bottle, #main-elipse, #header').removeAttr('class').addClass(urlNoBar);

			setTimeout(function(){

				//$('.section.in').addClass('no-transition');
				$('#bottle, #main-elipse').addClass('no-transition');


			}, 2000);
		};

	}, 1500);


});


$(document).ready(function() {




	////hover bottle


	$(".bottle-image").hover(function () {
		$('#main > div').addClass('zoom-in').removeClass('zoom-out');

	}, function () {
		$('#main > div').removeClass('zoom-in').addClass('zoom-out');

	});




	//////// span separate menu


	$('.menu, .arrow-text').each(function (index) {
	    var characters = $(this).text().split("");
	    $this = $(this);
	    $this.empty();
	    $.each(characters, function (i, el) {
	    $this.append("<span>" + el + "</span");
	    });

	});





	


	//function sections

	$('[data-menu-id]').click(function () {

		var menuID = $(this).attr('data-menu-id'),
			current = $(this);

		if (!$(this).hasClass('current')) {

			$('[data-menu-id]').removeClass('current');
			

			$('.section.in').addClass('out');
			$('.section').removeClass('in');

			$('#'+menuID).addClass('in').removeClass('no-transition');

			$('#bottle, #main-elipse, #header').removeAttr('class').addClass(menuID);

			$('.menu, #social, #language').removeClass('in');


			setTimeout(function(){

				current.addClass('current');
				$('.section.out').addClass('no-transition').removeClass('out');
				$('#bottle, #main-elipse').addClass('no-transition');
				$('.menu, #social, #language').addClass('in');


			}, 2000);

			if(menuID != 'presentation-02') {
				window.history.pushState(menuID, menuID, menuID);
			}

			

		};



		

		return false;
	});



	


	// bottle interactions

	$('#bottle').click(function () {
		if ($(this).hasClass('main')) {
			$('#main-elipse').addClass('expand');
			$('.menu').removeClass('current');
			$('#bottle').addClass('state-01').removeClass('no-transition');
			$('#state-01').addClass('in');
		};

		setTimeout(function(){

			$('.section.in').addClass('no-transition');
			$('#bottle').addClass('no-transition');
			$('#main-elipse').removeAttr('class');
			$('#main').removeClass('in');

		}, 2000);
	});


	//about

	$("[data-menu-id='about']").click(function () {

		if (!$(this).hasClass('current')) {
			$('.menu, #social, #language').removeClass('in');

			setTimeout(function(){

				$('.menu, #social, #language').addClass('in');


			}, 2000);
		};

	});


	



	$('#gallery-photo').click(function() {
		$('#gallery-photo').toggleClass('full');
	});
	


	////// GALLERY

	$('.gallery-nav-link, [data-type="gallery-nav-link"]').click(function () {
		var galleryLink = $(this).attr('href'),
			galleryLinkID = galleryLink.replace('#gallery-photo-', 'gallery-nav-position-');
		//console.log(galleryLinkID);

		

		


		if (galleryLink != '#gallery-photo-full') {

			$('#gallery-nav').removeAttr('class').addClass(galleryLinkID);

			$('.gallery-nav-link, .gallery-photo').removeClass('current');
			$(this).addClass('current');
			$(galleryLink).addClass('current');

			$('#gallery .title').removeClass('out');

			$('#gallery-photo-content').removeAttr('class').addClass(galleryLinkID);

		} else {
			$('#gallery-photo').toggleClass('full');
		}


		




		return false;
	});






});














