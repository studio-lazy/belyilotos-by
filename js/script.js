$(document).ready(function () {
        $('button').on('click', function() {
              yaCounter38789485.reachGoal('CLICK');
        });

	$(window).scroll(function () {
		var windowpos = $(window).scrollTop(),
			screenHeight = $(window).height() * 1.5,
			nav = $("#navigation");
		if (windowpos > screenHeight) {
			nav.queue(function () {
				$('header').css('padding-top', nav.outerHeight());
				$(this).addClass("navbar-fixed-top");
				$(this).fadeIn(600);
				$(this).dequeue();
			});
		} else {
			nav.queue(function () {
				$('header').css('padding-top', 0);
				$(this).removeClass("navbar-fixed-top");
				$(this).dequeue();
			});


		}
	});



	$("#navigation a").click(function () {

		$("html, body").animate(

			{
				scrollTop: $($(this).attr("href")).offset().top - 40 + "px"
			},

			{
				duration: 500
			}

		);

		return false;

	});

	var lastId,

		topMenu = $("#navigation"),

		topMenuHeight = topMenu.outerHeight() + 480,

		menuItems = topMenu.find("a"),

		scrollItems = menuItems.map(function () {

			var item = $($(this).attr("href"));

			if (item.length) {
				return item;
			}

		});

	$(window).scroll(function () {

		var fromTop = $(this).scrollTop() + topMenuHeight;

		var cur = scrollItems.map(function () {

			if ($(this).offset().top < fromTop)

				return this;

		});

		cur = cur[cur.length - 1];

		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {

			lastId = id;

			menuItems

			$("#navigation a").removeClass('active');

			$("#navigation a").filter("[href=#" + id + "]").addClass("active");

		}

	});

	$('#about .comments').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		autoplay: true
	});

	$('.modal-window').click(function () {
		$("#modal-window").modal();
	});

	//$(window).load(function () {
		//animate.css
		//$('.cause.left').viewportChecker({
			//classToAdd: 'visible animated bounceInLeft',
			//offset: 50
		//});
		//$('.cause.right').viewportChecker({
			//classToAdd: 'visible animated bounceInRight',
			//offset: 50
		//});
	//});

	$("form").submit(function () {
		var form = $(this),
			button = form.find('button'),
			error = false,
			data = form.serialize();
		$.ajax({
			type: "POST",
			url: "inq.php",
			dataType: 'json',
			data: data,
			beforeSend: function (data) {
				button.addClass('disabled');
			},
			success: function (data) {
				$("#modal-window").modal("hide");
				$("#modal-success-window").modal("show");
				button.removeClass('disabled');
				form[0].reset();
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(ajaxOptions);
				$("#modal-window").modal("hide");
				$("#modal-error-window").modal("show");
				button.removeClass('disabled');
			},
			complete: function (data) {

			}
		});
		return false;
	});
});


var ScrollY1 = window.pageYOffset;
window.onscroll = function() {
  var ScrollY2 = window.pageYOffset;
  if (ScrollY1 > ScrollY2) {
    document.getElementById("top-nav").style.top = "0";
  } else {
    document.getElementById("top-nav").style.top = "-68px";
  }
  ScrollY1 = ScrollY2;
}
