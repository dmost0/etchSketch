$(document).ready(function () {

for (var i = 0; i < 16; i++) {
$('table').append("<tr></tr>");
}
for (var i = 0; i < 16; i++) {
$('tr').append('<td></td>');
}
$('td').append('<div></div>');


$('div').addClass('blue');

$("div").hover(function () {
	$(this).toggleClass('blue');
	$(this).toggleClass('yellow');
	}

,

function () {
	$(this).toggleClass('yellow');
	$(this).toggleClass('blue');
});

});
