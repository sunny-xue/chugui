$(function() {
	var moreBtn = $("#moreLink");
	moreBtn.click(function () {
		if(moreBtn.hasClass('less-nav') === true){
			$('.address-list li').each(function () {
				$(this).hide();
			});

			//TODO把选择的地址显示
			$('button').filter('.button-active').parent().parent().show();
		}else{
			$('.address-list li').each(function () {
				$(this).show();
			});
		}

		moreBtn.toggleClass('less-nav');
	});

	$(".custom-button").click(function (e) {
		$('button').filter('.custom-button').removeClass('button-active');
		$(this).addClass('button-active');
	});

	$('.pay-type button').click(function (){
		$('.pay-type button').removeClass('button-active');
		$(this).addClass('button-active');
	});
});