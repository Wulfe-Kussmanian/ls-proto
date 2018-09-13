var screenWidth = "1920";
var innerWidth = window.innerWidth;
if(innerWidth <= 1280){
	screenWidth = "1280"; // 720p
}else if(innerWidth <= 1920){
	screenWidth = "1920"; // 1080p
}else if(innerWidth <= 2560){
	screenWidth = "2560"; // 1440p
}else{
	screenWidth = "3840"; // 4K
}
// 1280x720, 1920x1080, 2560x1440, 3840x2160
document.getElementById("bg-img").style.backgroundImage = "url('img/beach-" + screenWidth + ".jpg')";

document.getElementById("submit").onclick = function(){
    console.log("submit form");
}
