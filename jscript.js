$(document).ready(function() {
	var score = 0;
	$("#increase-5").click(function() {
	score+=5;
	$('#score').html(score+"points");
	});		


$("#decrease-5").click(function() {
	if(score<1) {
		score=0;
		return

	}
	score-=5;
		$('#score').html(score + "points");
			});

		$("#submit-custom-score").on("click",function() {
			var value = parseInt($("#custom-score").val());
			score = value;
			$("#custom-score").html(score + "points")
				$("#score").html(score);
				
			});
		
});