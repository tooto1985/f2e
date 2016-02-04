$(function() {
	function random($dice) {
		function applyClass() {
			$dice.removeClass().addClass("d"+Math.ceil(Math.random()*6));
		}
		var i=1000;
		while (i>=10) {
		    setTimeout(applyClass,i);
			i = i/1.1;
		}
	}
	
});