$(document).ready(function () {

	for (var i = 0; i < 16; i++) {
		$('table').append("<tr></tr>");
	}
	for (var i = 0; i < 16; i++) {
		$('tr').append('<td></td>');
	}
	$('td').append('<div></div>');


	$('div').hover(function() {
		$(this).animate({
			"backgroundColor":"yellow"
		},500);
	}

	,function() {
		$(this).animate({"backgroundColor":"blue"}, 1000)

	});



});

