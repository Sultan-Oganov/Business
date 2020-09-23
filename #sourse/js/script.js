$('.wrapper').addClass('loaded');

$('.menu-header__icon').click(function(event) {
	$(this).toggleClass('active');
	$('.menu-header__menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});

//ФИЛЬТРАЦИЯ КАРТИНОК

$('.filter__item').click(function(event) {
		var i=$(this).data('filter');
	//console.log(i);
	if (i==1) {
		$('.item-newsmedia__column').show();
	}else{
		$('.item-newsmedia__column').hide();
		$('.item-newsmedia__column.f_'+i).show();
		// $('.item-newsmedia__column').css('margin', '0 auto');
	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active');

	return false;
});