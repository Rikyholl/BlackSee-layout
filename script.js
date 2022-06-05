$(function(){

	let header = $('.header');
	let intro = $('.intro');

	let introHeight;
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function(){

		introHeight = intro.innerHeight(); //получает текущее вычисленное значение 
										//внутренней высоты (включая внутренние отступы - padding
		scrollPos = $(this).scrollTop(); //устанавливает 
										//вертикальную позицию прокрутки
										// всем выбранным элементам в наборе

		if(scrollPos > introHeight){
			header.addClass("header_fixed"); // Добавляет класс
		} else {
			header.removeClass("header_fixed");
		}
	});





})