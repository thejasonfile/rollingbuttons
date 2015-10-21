var i, idNum;

for (i=0; i<16; i++) {
	$(".container").append("<div class='button smallbutton' id='"+i+"'></div>")
}

$(document).ready(function() {
	$(".button").on('click', function() {
		idNum = parseInt($(this).attr('id'));
		$(".button").css('background-color','blue');
		$(this).css('background-color','red');
		$($(".button")[idNum-4]).css('background-color','yellow');
		$($(".button")[idNum+4]).css('background-color','yellow');

		if (idNum === 3 || idNum === 7 || idNum === 11 || idNum === 15) {
			$(this).prev().css('background-color','yellow');
		}

		else if (idNum === 0 || idNum === 4 || idNum === 8 || idNum === 12) {
			$(this).next().css('background-color','yellow');
		}

		else {
			$(this).prev().css('background-color','yellow');
			$(this).next().css('background-color','yellow');
		}

	})
})
