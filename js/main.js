$(document).ready(function(){
	makething();
});

 function makething() {
 	for(var i = 0; i < 2500; i++)
		$('#container').append("<div class='thing'></div>");


$('.thing').mouseenter(function(){
	$(this).css('opacity', 0);
})

};