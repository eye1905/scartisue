$(document).ready(function() {
	// when ready on load
	if ($(window).width() < 1024) {
		$("#navbar-1").hide();
		$("#navbar-2").show();
	}
	else {
		$("#navbar-1").show();
		$("#navbar-2").hide();
	}

	$(window).resize(function() {
		if ($(window).width() < 1024) {
			$("#navbar-1").hide();
			$("#navbar-2").show();
		}
		else {
			$("#navbar-1").show();
			$("#navbar-2").hide();
		}
	});
});