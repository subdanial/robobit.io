// AOS //
AOS.init({
	duration: 800,
});

// VERTICAL-SCROLL //
jQuery(document).ready(function ($) {
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function () {
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function (event) {
		event.preventDefault();
		smoothScroll($(this.hash));
	});
	//smooth scroll to second section
	$('.cd-scroll-down').on('click', function (event) {
		event.preventDefault();
		smoothScroll($(this.hash));
	});

	//open-close navigation on touch devices
	$('.touch .cd-nav-trigger').on('click', function () {
		$('.touch #cd-vertical-nav').toggleClass('open');

	});
	//close navigation on touch devices when selectin an elemnt from the list
	$('.touch #cd-vertical-nav a').on('click', function () {
		$('.touch #cd-vertical-nav').removeClass('open');
	});

	function updateNavigation() {
		contentSections.each(function () {
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
			if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
				navigationItems.eq(activeSection).addClass('is-selected');
			} else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
		$('body,html').animate({
				'scrollTop': target.offset().top
			},
			600
		);
	}
});


//APPLICATION

// 0 kharid ya foroosh
// 1 meghdar kharid
// 2 adress wallet 
// 3 meghdar foroosh
// 4 adress wallet
var transactionMethod;
var bitSection = 0;
var tetSection = 0;



$("#bit-buy").click(function () {
	bitSection = 1;
})
$("#bit-sell").click(function () {
	bitSection = 3;
})
$(".bit-back").click(function () {
	if(bitSection == 3)
	{
		bitSection = 0;
	}
	else if(bitSection ==4){
		bitSection = 3;
	}
	else{
		bitSection = bitSection - 1;
	}

})
$("#bit-set-price").click(function () {
	switch (bitSection) {
		case 1:
			bitSection = 2;
			break;
		case 3:
			bitSection = 4;
			break;
	}
});

$(".btn-trade").click(function () {
	switch (bitSection) {
		case 0:
			$(".btrade-s-1").removeClass("d-none");
			$(".btrade-s-2").addClass("d-none");
			$(".bc-2").removeClass("background-orange");
			$(".bct-2").removeClass("text-orange");
			break;
		case 1:
			$(".bit-sub-line").html(" می خواهم بیتکوین <strong class='text-orange'>بخرم</strong>");
			$(".btrade-s-1").addClass("d-none");
			$(".btrade-s-2").removeClass("d-none");
			$(".bc-2").addClass("background-orange");
			$(".bct-2").addClass("text-orange");
			$(".btrade-s-3").addClass("d-none");
			$(".bc-3").removeClass("background-orange");
			$(".bct-3").removeClass("text-orange");
			break;
		case 2:
			$(".btrade-s-2").addClass("d-none");
			$(".btrade-s-3").removeClass("d-none");
			$(".bc-3").addClass("background-orange");
			$(".bct-3").addClass("text-orange");
			transactionMethod = 'buybit';
			break;

		case 3:
			$(".bit-sub-line").html(" می خواهم بیتکوین <strong class='text-orange'>بفروشم</strong>");
			$(".btrade-s-1").addClass("d-none");
			$(".btrade-s-2").addClass("d-none");
			$(".btrade-s-3").addClass("d-none");
			$(".bc-2").addClass("background-orange");
			$(".bct-2").addClass("text-orange");
			$(".btrade-s-2").removeClass("d-none");
			$(".bc-3").removeClass("background-orange");
			$(".bct-3").removeClass("text-orange");
			break;
		case 4:
			$(".btrade-s-2").addClass("d-none");
			$(".btrade-s-3").removeClass("d-none");
			$(".bc-3").addClass("background-orange");
			$(".bct-3").addClass("text-orange");
			transactionMethod = 'sellbit';
			break;
	}

})





$("#tet-buy").click(function () {
	tetSection = 1;

})

$("#tet-sell").click(function () {
	tetSection = 3;
})
$(".tet-back").click(function () {
	if(tetSection == 3)
	{
		tetSection = 0;
	}
	else if(tetSection ==4){
		tetSection = 3;
	}
	else{
		tetSection = tetSection - 1;
	}

})
$("#tet-set-price").click(function () {
	switch (tetSection) {
		case 1:
			tetSection = 2;
			break;
		case 3:
			tetSection = 4;
			break;
	}
});

$(".btn-trade").click(function () {
	switch (tetSection) {
		case 0:
			$(".ttrade-s-1").removeClass("d-none");
			$(".ttrade-s-2").addClass("d-none");
			$(".tc-2").removeClass("background-green");
			$(".tct-2").removeClass("text-green");
			break;
		case 1:
			$(".tet-sub-line").html(" می خواهم تتر <strong class='text-green'>بخرم</strong>");
			$(".ttrade-s-1").addClass("d-none");
			$(".ttrade-s-2").removeClass("d-none");
			$(".tc-2").addClass("background-green");
			$(".tct-2").addClass("text-green");
			$(".ttrade-s-3").addClass("d-none");
			$(".tc-3").removeClass("background-green");
			$(".tct-3").removeClass("text-green");
			break;
		case 2:
			$(".ttrade-s-2").addClass("d-none");
			$(".ttrade-s-3").removeClass("d-none");
			$(".tc-3").addClass("background-green");
			$(".tct-3").addClass("text-green");
			transactionMethod = 'buytet';
			break;

		case 3:
			$(".tet-sub-line").html(" می خواهم تتر <strong class='text-green'>بفروشم</strong>");
			$(".ttrade-s-1").addClass("d-none");
			$(".ttrade-s-2").addClass("d-none");
			$(".ttrade-s-3").addClass("d-none");
			$(".tc-2").addClass("background-green");
			$(".tct-2").addClass("text-green");
			$(".ttrade-s-2").removeClass("d-none");
			$(".tc-3").removeClass("background-green");
			$(".tct-3").removeClass("text-green");
			break;
		case 4:
			$(".ttrade-s-2").addClass("d-none");
			$(".ttrade-s-3").removeClass("d-none");
			$(".tc-3").addClass("background-green");
			$(".tct-3").addClass("text-green");
			transactionMethod = 'selltet';
			break;
	}

})

$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}