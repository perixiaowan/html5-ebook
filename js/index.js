$(document).ready(function(){
	console.log("hi my ready function");
	$("li").bind('click',function(){
		console.log("hi my bind function");
		$(this).addClass('active').siblings().removeClass('active');
	});

	// 使用全局元素监测属性，检测离线web应用程序的代码
	// if (window.applicationCache) {
	// 	document.write("yes,your browser can use offline web applications.");
	// }else{
	// 	document.write("no,your browser cannot use offline web applications.");
	// }
	// !!video.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"')

});

function drawSquare(){
	var canvas=document.getElementById('simple-square');
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		context.fillStyle="rgb(13,118,208)";
		context.fillRect(2,2,798,798);
	}else{
		alert("this page requires an HTML5 compliant browser to render correctly. Other browsers may not see anything.")
	}
}
