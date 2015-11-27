(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-70762736-1', 'auto');
ga('send', 'pageview');

$(document).ready(function() {

	$("#menu-restart, #menu-recs, #btn-rawtext").hover(function() {
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
