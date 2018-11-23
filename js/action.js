
// Set Footer text
var innerHTML = "Copyright &copy; " + String(new Date().getFullYear()) + " Mark Werner & Raban Spiegel. <a href='http://github.com/rabanvs'>Code</a>";
document.getElementById("footer-text").innerHTML = innerHTML;


// Dict with coordinates for continents

var continentCoordinates = {
	"Europe": "387.104 175.249 229.130 207.369",
	"Africa": "403.775 350.463 233.306 261.321",
	"SouthAmerica": "167.773 427.982 233.421 237.499",
	"NorthAmerica": "0.358 0.251 442.470 442.488",
	"Asia": "529.937 39.136 478.940 454.385",
	"Australia": "791.775 431.591 212.278 214.788"
};

$(function(){

	$('.continentBtn').on('click', function(){

		var continent = this.id;
		document.getElementById("world").setAttribute("viewBox", continentCoordinates[continent]);

		if (continent == "SouthAmerica"){
			continent = "South.America";
		} else if (continent == "NorthAmerica"){
			continent = "North.America";
		}

		$('.Country').hide();
		$("." + continent).show();

	});


	// 	// var x_string = minX.toString();
	// 	// var y_string = minY.toString();


	// 	// var width_string = widthEurope.toString();
	// 	// var height_string = heightEurope.toString();


	// 	document.getElementById("world").setAttribute("viewBox", "387.104095 175.2494049 332.86166 207.3694305");

		

	// });

	// $('.Europe').on('click', function(){
	// 	$(this).css({"fill": "#ff6666"});
	// });

 //  	// $(".Europe").hide();
 //  	// $("#DE").toggle();

});

// Method to find Min + Max  / Width + Height of Continent

// var minX = 5000;
// 	var minY = 5000;
// 	var maxX = 0;
// 	var maxY = 0;

// 	$(".Europe").each(function(){

// 		var pathLength = this.getTotalLength();

// 		for (i = 0; i < pathLength; i = i + 0.1){

// 			pathPoint = this.getPointAtLength(i);
// 			var x = pathPoint.x;
// 			var y = pathPoint.y;
			
// 			if (x < minX){
// 				minX = x;
// 			} else if (x > maxX){
// 				maxX = x;
// 			}
// 			if (y < minY){
// 				minY = y;
// 			} else if (y > maxY){
// 				maxY = y;
// 			}
// 		}
// 	});

// 	var width = maxX - minX;
// 	var height = maxY - minY;

// 	console.log(minX);
// 	console.log(minY);
// 	console.log(width);
// 	console.log(height);
