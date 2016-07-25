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
	
	function doExec(fx,extra){
		document.execCommand(fx,false,extra);
	}
	$("#bold").click(function(){
		doExec("bold","");
	});
	$("#italic").click(function(){
		doExec("italic","");
	});
	$("#underline").click(function(){
		doExec("underline","");
	});
	$("#createlink").click(function(){
		var xtra = prompt("Enter a URL:","http://");
		doExec("createlink",xtra);
	});
});


function drawSimpleSquare(){
	var canvas=document.getElementById('simple-square');
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		context.fillStyle="rgb(13,118,208)";
		context.fillRect(30,30,150,150);

	}else{
		alert("this page requires an HTML5 compliant browser to render correctly. Other browsers may not see anything.")
	}
}


function eraseSimpleSquare(){
	var canvas=document.getElementById('simple-square');
	canvas.width=canvas.width; 
}


function drawComplexSquare(){

	var canvas=document.getElementById('complex-square');
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		context.fillStyle = "#ff0000";
		context.fillRect(10,10,300,300);
		context.fillStyle="rgba(111,0,255,0.5)";
		context.fillRect(190,190,300,300);

	}else{
		alert("this page requires an HTML5 compliant browser to render correctly. Other browsers may not see anything.")
	}
}

function drawlinearGradient(){
	var canvas=document.getElementById('linear-gradient');
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		var linGrad = context.createLinearGradient(0,0,200,200);
		linGrad.addColorStop(0,"red");
		linGrad.addColorStop(1,"blue");

		context.fillStyle=linGrad;
		context.fillRect(10,10,490,490);
	}else{
		alert("this page requires an HTML5 compliant browser to render correctly. Other browsers may not see anything.")
	}
}

function drawRadialGradient(){
	var canvas=document.getElementById('radial-gradient');
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		var radGrad = context.createRadialGradient(100,150,0,100,150,70);
		radGrad.addColorStop(0.9,"rgb(105,138,72)");
		radGrad.addColorStop(0,"rgba(171,235,108,1)");
		radGrad.addColorStop(1,"rgba(105,138,72,0)");

		context.fillStyle=radGrad;
		context.fillRect(10,10,490,490);
	}else{
		alert("this page requires an HTML5 compliant browser to render correctly. Other browsers may not see anything.")
	}	
}

function drawPoly(){
	var canvas=document.getElementById('poly-drawing');
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		//在canvas中创建路径
		context.beginPath(); 
		context.moveTo(0,0);
		context.lineTo(60,60);
		context.lineTo(20,80);
		context.closePath();
		// context.stroke();
		context.fillStyle='#ff0000';
		context.fill();

	}else{
		alert("this page requires an HTML5 compliant browser to render correctly. Other browsers may not see anything.")
	}	
}

function drawingCanvas1(){
	var canvas=document.getElementById('canvas-drawing1');
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		context.lineWidth = 15;
		context.beginPath;
		context.moveTo(10,20);
		context.lineTo(150,200);
		context.lineTo(290,20);
		context.lineTo(430,200);
		context.lineTo(570,20);
		// context.linrJoin = "round(10)";
		context.stroke();

	}else{
		alert("this page requires an HTML5 compliant browser to render correctly. Other browsers may not see anything.")
	}	
}

function drawingCircle(){
	var canvas=document.getElementById('circle-drawing');
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		var startPoint = (Math.PI/180)*0;
		var endPoint = (Math.PI/180)*360;
		context.beginPath();
		context.arc(200,200,100,startPoint,endPoint,true);
		context.fill();


	}else{
		alert("this page requires an HTML5 compliant browser to render correctly. Other browsers may not see anything.")
	}	
}

function drawingCanvas2(){
	var canvas=document.getElementById('canvas-drawing2');
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		var radius = 125/2;
		var y = radius+10;
		var x1 = radius;
		var x2 = radius*3;
		var x3 = radius*5;
		var x4 = radius*7;
		context.beginPath();
		context.arc(x1,y,radius,0,Math.PI,true);
		context.stroke();
		context.beginPath();
		context.arc(x2,y,radius,0,Math.PI,false);
		context.stroke();
		context.beginPath();
		context.arc(x3,y,radius,0,Math.PI,true);
		context.stroke();
		context.beginPath();
		context.arc(x4,y,radius,0,Math.PI,false);
		context.stroke();
		context.textBaseline = "middle";
		context.fillStyle = "#f93";

		context.shadowOffsetX = -2;
		context.shadowOffsetY = 2;
		context.shadowBlur = 2;
		context.shadowColor = "rgba(0,0,0,0.5)";

		context.fillText("Hello world",250,100);
		// context.fill();
	}else{
		alert("this page requires an HTML5 compliant browser to render correctly. Other browsers may not see anything.")
	}	
}

function drawingImg(){
	var canvas = document.getElementById('img-drawing');
	if(canvas.getContext){
		var context = canvas.getContext('2d');
		var img = new Image();
		img.src = "img/01.jpg";
		img.onload = function(){
			context.drawImage(img,10,10);
		}
	}else{
		alert("this page requires an HTML5 compliant browser to render correctly. Other browsers may not see anything.")
	}
}

function drawingImg1(){
	var canvas = document.getElementById('img-drawing1');
	if(canvas.getContext){
		var context = canvas.getContext('2d');
		var img = new Image();
		img.src = "img/01.jpg";
		img.onload = function(){
			var ptn = context.createPattern(img,"repeat-x");
			context.fillStyle = ptn;
			context.fillRect(0,0,500,500);
		}
	}else{
		alert("this page requires an HTML5 compliant browser to render correctly. Other browsers may not see anything.")
	}
}

// 表单输出元素使用
function characterCount(inputFieldId,infoBlockId) {
	var characters = document.getElementById(inputFieldId).value.length;
	document.getElementById(infoBlockId).innerHTML = characters;
}