


$(document).ready(function() {
	var x = 88;
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show().finish().show()
		.animate(
		{'left': '800px'}, 500, function() {
		$(this).hide();
		$(this).css('left', '518px');
		}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
	.keyDown(function(event) {
			if(event.keyCode == 88) {
		$('.ryu-still').hide();
		$('.ryu-cool').show();
		}
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.7;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}