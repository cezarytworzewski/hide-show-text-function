$(document).ready(function() {
    $('#test').click(function() {
		$('#test').hide(3000).show(3000).text('Cezary Tworzewski').css('color', 'red', 'text-align', 'center', 'font-size', '25px');
	});
	
	$('button').hover(function() {
		$(this).siblings('button').css('opacity', '0.3');
	},function() {
		$('button').css('opacity', '1');	
	});
});

