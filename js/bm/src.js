$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#D3273F");
	},function() {
		$(this).css("background-color", "#7C0919");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#5F151B");
	}, function() {
		$(this).css("background-color", "#000");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
