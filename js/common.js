$(document).ready(function(){
	var printPage = $(".container .print-container");
	for (var i = 0; i < printPage.length; i++) {
		printPage.eq(i).css("margin-top", i * 38 * 0.62 + "px");
	}
})
