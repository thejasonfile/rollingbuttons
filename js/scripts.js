var i, idNum;

for (i=0; i<6; i++) {
	$(".container").append("<div class='button smallbutton' id='"+i+"'></div>")
}

$(document).ready(function() {
	$(".button").on('click', function() {
		idNum = parseInt($(this).attr('id'));
		$(".button").css('background-color','blue');
		$(this).css('background-color','red');
		$(this).next().css('background-color','yellow');
		$(this).prev().css('background-color','yellow');
	})
})
