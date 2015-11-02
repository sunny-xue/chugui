SlideShow(2000, "#slideContainer", "#slidesImgs", "#slideBar");
SlideShow(2000, "#sliderSmallContainer", "#slidesSmallImgs", "#slideSmallBar");
$(function() {
    var productTypeList = $("#productTypeList li");
    productTypeList.hover(
        function() {
            $(this).children("div.menu").show();
        },
        function() {
            $(this).children("div.menu").hide();
        });
});
