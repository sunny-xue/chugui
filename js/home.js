$(function() {
    SlideShow(2000, "#slideContainer", "#slidesImgs", "#banner-large-slideBar");

    var productTypeList = $("#productTypeList li");

    productTypeList.hover(
        function() {
            $(this).children("div.menu").show();
        }, function() {
            $(this).children("div.menu").hide();
        }
    );
});
