$(document).ready(function() {
	var l=String(window.location);
	var u=l.substr(l.indexOf('#')+1);
	$('#blockedURL').html(u);
	$('#clickHere').attr('href', u);
});