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
	$(".outbox>div").on("click.first",function() {
        random($("#box1"));
    });
	$(".outbox>div").on("click.second",function() {
        random($("#box2"));
    });
	$(".outbox>div").on("click.third",function() {
        random($("#box3"));
    });
	$("#offSecond").click(function() {
		$(".outbox>div").off("click.second");
		alert("已取消第2顆骰子");
	});
	$("#onlyThird").click(function() {
		$(".outbox>div").trigger("click.third");
	});
});