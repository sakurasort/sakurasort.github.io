$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#1b1b79");
	},function() {
		$(this).css("background-color", "#000038");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#F0027E");
	}, function() {
		$(this).css("background-color", "#fff");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
