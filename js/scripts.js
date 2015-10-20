var i, idNum;

for (i=0; i<16; i++) {
	$(".container").append("<div class='button' id='"+i+"'></div>")
}

$(document).ready(function() {
	$(".button").on('click', function() {
		idNum = parseInt($(this).attr('id'));
		$(".button").css('background-color','blue');
		$(this).css('background-color','red');
		$(this).next().css('background-color','yellow');
		$(this).prev().css('background-color','yellow');
		$($(".button")[idNum-4]).css('background-color','yellow');
		$($(".button")[idNum+4]).css('background-color','yellow');
	})
})
