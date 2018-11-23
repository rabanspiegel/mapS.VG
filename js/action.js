
// Set Footer text
var innerHTML = "Copyright &copy; " + String(new Date().getFullYear()) + " Mark Werner & Raban Spiegel. <a href='http://github.com/rabanvs'>Code</a>";
document.getElementById("footer-text").innerHTML = innerHTML;

$(function(){




	$('path:not(.Europe)').hide();
	$('.Europe').css({"fill": "grey"});

	var minX = 5000;
	var minY = 5000;
	var maxX = 0
	var maxY = 0;

	$(".Europe").each(function(){

		var pathLength = this.getTotalLength();

		for (i = 0; i < pathLength; i = i + 0.1){

			pathPoint = this.getPointAtLength(i);
			var x = pathPoint.x;
			var y = pathPoint.y;
			
			if (x < minX){
				minX = x;
			} else if (x > maxX){
				maxX = x;
			}
			if (y < minY){
				minY = y;
			} else if (y > maxY){
				maxY = y;
			}
		}

	});

	var widthEurope = maxX - minX;
	var heightEurope = maxY - minY;

	var x_string = minX.toString();
	var y_string = minY.toString();


	var width_string = widthEurope.toString();
	var height_string = heightEurope.toString();


	document.getElementById("world").setAttribute("viewBox", x_string + " " + y_string + " " + width_string + " " + height_string);

	$('.Europe').on('click', function(){
		$(this).css({"fill": "#ff6666"});
	});


  	// $(".Europe").hide();
  	// $("#DE").toggle();

});
