//----Burger Menu------------------------

$(function(){
	
	$('.menu__icon').on('click', function(){
		
		$('.menu__burger').slideToggle(800, function(){
			
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
		}
		
	});
	
 });
	
});

//==== Closing menu =====================================

 $(function(){
 	$('.close__icon').on('click', function(){
 		$('.menu__burger').hide(800);
 	});
 });


//------ Thanks for order---------------------------------

document.querySelector('#send-btn').onclick = function(event) {
	event = event || window.event;
	document.querySelector('.order-popup').style.display = 'flex';
};

document.querySelector('#ok-btn').onclick = function(event) {
	event = event || window.event;
	document.querySelector('.order-popup').style.display = 'none';
};
