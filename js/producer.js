$(function() {
    var firstBtn = $("#firstBtn");
    var secondBtn = $("#secondBtn");
    var returnBtn = $("#returnBtn");
    var firstStepDiv = $("#firstStep");
    var secondStepDiv = $("#secondStep");
    var lastStepDiv = $("#lastStep");
    firstBtn.click(function() {
        secondStepDiv.removeClass();
        firstStepDiv.addClass('non-display');
    });

    secondBtn.click(function() {
        lastStepDiv.removeClass();
        secondStepDiv.addClass('non-display');
    });

    returnBtn.click(function() {
        secondStepDiv.removeClass();
        lastStepDiv.addClass('non-display');
    });
});
