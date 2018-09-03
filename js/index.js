function resetDots(){
	document.getElementById("dot1").classList.remove("dot-selected");
	document.getElementById("dot2").classList.remove("dot-selected");
	document.getElementById("dot3").classList.remove("dot-selected");
	document.getElementById("dot4").classList.remove("dot-selected");
}

new fullpage("#fullpage", {
	licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
	fixedElements: "#nav-bar",
	scrollingSpeed: 500,
	onLeave: function(origin, destination, direction){
		resetDots();
		document.getElementById("dot" + (destination.index + 1)).classList.add("dot-selected");
		if(destination.index == 0){
			document.getElementById("dot1").classList.remove("dot-black");
			document.getElementById("dot2").classList.remove("dot-black");
			document.getElementById("dot3").classList.remove("dot-black");
			document.getElementById("dot4").classList.remove("dot-black");
			document.getElementById("nav-bar").style.backgroundColor = null;
		}else{
			document.getElementById("dot1").classList.add("dot-black");
			document.getElementById("dot2").classList.add("dot-black");
			document.getElementById("dot3").classList.add("dot-black");
			document.getElementById("dot4").classList.add("dot-black");
			document.getElementById("nav-bar").style.backgroundColor = "#000";
		}
	}
});


function dotClick(){
	var destination = parseInt(this.id.substring(3,4));
	fullpage_api.moveTo(destination);
}

document.getElementById("dot1c").onclick = dotClick;
document.getElementById("dot2c").onclick = dotClick;
document.getElementById("dot3c").onclick = dotClick;
document.getElementById("dot4c").onclick = dotClick;

console.log("everything should have ran")
