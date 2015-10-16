var maxHeight = 400;
$(function() {
    $(".nav-menu > li").hover(function() {
        var $container = $(this);
        $container.find("ul").show();
    }, function() {
        var $el = $(this);
        $el.find("ul").hide();
    });
});
