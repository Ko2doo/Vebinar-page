$(document).ready(function(){
	//скрытие чата
	$('.show-btn').click(function(hideChat){
		hideChat.preventDefault();
		$('.show-btn').removeClass('close').addClass('active');
		$('.chat-footer').slideDown().removeClass('close').addClass('active');
	});

	$('.hide-btn').click(function(hideChat){
		$('.show-btn').removeClass('active').addClass('show-btn');
		$('.chat-footer.active').slideUp().removeClass('active').addClass('close');
	});



});