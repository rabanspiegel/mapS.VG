
// Set Footer text
var innerHTML = "Copyright &copy; " + String(new Date().getFullYear()) + " Mark Werner & Raban Spiegel. <a href='http://github.com/rabanvs'>Code</a>";
document.getElementById("footer-text").innerHTML = innerHTML;


// Dict with coordinates for continents

var continentCoordinates = {
	"World": "0 0 1009 665",
	"Europe": "387.104 175.249 229.130 207.369",
	"Africa": "403.775 350.463 233.306 261.321",
	"SouthAmerica": "167.773 427.982 233.421 237.499",
	"NorthAmerica": "0.358 0.251 442.470 442.488",
	"Asia": "529.937 39.136 478.940 454.385",
	"Australia": "791.775 431.591 212.278 214.788"
};

var colors = {
	'1': "#ffffff",
	'2': "#bfbfbf",
	'3': "#4d4d4d",
	'4': "#000000"
};

var currentFill = "#4d4d4d"; 
var currentBackground = "#ffffff";
var currentBorder;


$(function(){

	$('#worldBtn').on('click', function(){

		$('.Country').show();
		document.getElementById("world").setAttribute("viewBox", continentCoordinates["World"]);

	})

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

	$('.backgroundBtn').on('click', function(){

		var color = $(this).attr("color").toString();

		$('#world').css({"backgroundColor": color});
		currentBackground = color;

	});

	$('.fillBtn').on('click', function(){

		var color = $(this).attr("color").toString();

		$('#world').css({"fill": color});
		currentFill = color;

	});

	$('.borderBtn').on('click', function(){

		var color = $(this).attr("color").toString();

		$('#world').css({"stroke": color});
		currentBorder = color;
	});

	$('.thickBtn').on('click', function(){

		var strokeWidth = $(this).attr('thickness').toString();
		$('#world').css({'strokeWidth': strokeWidth});

	});

	$('#highlight').on('click', highlight);
	$('#hide').on('click', hide);
	$('#none').on('click', noneMode);

	$('#backgroundInput').change(function(){

		var color = $("#backgroundInput").val();

		$('#world').css({"backgroundColor": color});
		currentBackground = color;
	})

	$('#fillInput').change(function(){

		var color = $("#fillInput").val();
		
		$('#world').css({"fill": color});
		currentFill = color;
	})

	$('#borderInput').change(function(){

		var color = $("#borderInput").val();
		
		$('#world').css({"stroke": color});
		currentBorder = color;
	})

});

function highlight (){

	$('.Country').off();

	$('.Country').on('click', function(){

		var color = $(this).css('fill').toString();
		var colorHex = rgb2hex(color);

		if (colorHex == '#ff6666'){
			$(this).css({"fill": currentFill});
		} else {
			$(this).css({"fill": "#ff6666"});
		}

	});
}

function hide (){

	$('.Country').off();
	
	$('.Country').on('click', function(){
		$(this).hide();
	});
	
}

function noneMode(){
	$('.Country').off();
}

var hexDigits = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

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
