new fullpage("#fullpage", {
	licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
	fixedElements: "#nav-bar",
	onLeave: function(origin, destination, direction){
		if(destination.index == 0){
			console.log("make nav-bar transparent");
			document.getElementById("nav-bar").style.backgroundColor = null;
		}else{
			console.log("make it a black");
			document.getElementById("nav-bar").style.backgroundColor = "#000";
		}
	}
});

// fullpage_api.setAllowScrolling(false);

console.log("everything should have ran")
