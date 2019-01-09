//JavaScript
//customiser currently only 100% functions in chrome
var canvas;
var context;
$(function(){
	  console.log('init fired');
	  canvas = $('#canvas')[0];
	  context = canvas.getContext('2d');
	  canvas.width = window.innerWidth*0.7;
	  canvas.height = window.innerHeight*0.95;

	  window.onresize = function(){
			canvas.width = window.innerWidth*1;
			canvas.height = window.innerHeight*1;
		context.clearRect(0, 0, canvas.width, canvas.height);
		};
	});

	function allowDrop(ev){
	  ev.preventDefault();
	}

	function drag(ev){
	  console.log("function drag");
	  console.log(ev);
	  ev.dataTransfer.setData("path", ev.path[0].src);
	  ev.dataTransfer.setData("height", ev.srcElement.height);
	  ev.dataTransfer.setData("width", ev.srcElement.width);

	}

	function dropPicture(ev){
	  console.log("function dropPicture");
	  console.log(ev);
	  ev.preventDefault();
	  var image = new Image();
	  var width = ev.dataTransfer.getData("width");
	  var height = ev.dataTransfer.getData("height");
	  image.src = ev.dataTransfer.getData("path");
	  context.drawImage(image, ev.offsetX-(width/2), ev.offsetY-(height/2), width, height);
	}
	
	$(".AlbumCover").on('click', function() {
		$(this).children(".AlbumPictureBoxOverlay2").css('height', '85%');
	});