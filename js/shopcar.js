$(function () {
	$.fn.selectedAll = function(selected,dataType){
		var that = $(this),
		checkBoxs = that.find("input[type='checkbox']");
		if(typeof(dataType) != "undefined"){
			$.each(checkBoxs,function (i,e) {
				if($(this).attr('dataType') === dataType){
					if(selected === true){
	        			$(this).prop("checked", true);
	    			}else{
	        			$(this).prop("checked",false);
	    			}
				}
			});
		}else{
			if(selected === true){
	        	checkBoxs.prop("checked", true);
	    	}else{
	        	checkBoxs.prop("checked",false);
	    	}
		}
		
	};

	$('.allCheck').change(function () {
		if($(this).is(':checked')){
			$('#shopList').selectedAll(true);
		}else{
			$('#shopList').selectedAll(false);
		}
	});

	$('#shop-item').find("input[type='checkbox']").change(function () {
		if($(this).is(':checked')){
			$('#shop-item').selectedAll(true,$(this).attr('dataType'));
		}else{
			$('#shop-item').selectedAll(false,$(this).attr('dataType'));
		}
	});
});