$(document).ready(function () {
	for (var i = 0; i < 16; i++) {
		$('table').append("<tr></tr>");
	}
	for (var i = 0; i < 16; i++) {
		$('tr').append('<td></td>');
	}
	$('td').append('<div></div>');

	$("div").hover(function () {
		$(this).fadeOut(100);
	},

	function () {
		$(this).fadeIn(500);
	});
});
