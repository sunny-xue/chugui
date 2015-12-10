$(function() {
    var moreBtn = $("#moreLink");
    moreBtn.click(function() {
        if (moreBtn.hasClass('less-nav') === true) {
            $('.address-list li').each(function() {
                $(this).hide();
            });

            //TODO把选择的地址显示
            $('button').filter('.button-active').parent().parent().show();
        } else {
            $('.address-list li').each(function() {
                $(this).show();
            });
        }

        moreBtn.toggleClass('less-nav');
    });

    $(".custom-button").click(function(e) {
        $('button').filter('.custom-button').removeClass('button-active');
        $(this).addClass('button-active');
    });

    $('.send-type button').click(function(e) {
        $(e.target).siblings().removeClass('button-active');
        $(this).addClass('button-active');
    });

    $('.pay-type button').click(function() {
        $('.pay-type button').removeClass('button-active');
        $(this).addClass('button-active');
    });

    $('#defaultRecipt').click(function() {
        $('.newinfo').hide();
    });
    $('#newReceipt').click(function() {
        $('.newinfo').show();
    });


    $('#personType').click(function() {
        $('.companyInfo').hide();
    });
    $('#companyType').click(function() {
        $('.companyInfo').show();
    });

    $('.update-btn').click(function() {
    	$('.receipt-div').hide();
        $('.update-receipt').show();
    });
});
