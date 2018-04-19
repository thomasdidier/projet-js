var on = false;
var off = true;



document.getElementById('btn').addEventListener("click", function(event){
		if (off == true) {
		document.getElementById('rotating').id = "rotating";
		document.getElementById('rotating').className = "animated bounce";
		return off == false
		}else{
		document.getElementById('rotating').id = "rotating";
		document.getElementById('rotating').className = "rien";
		return off == true

		}

})







