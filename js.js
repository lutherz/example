<!--
var links = new Array();
links[0] = "ukAjgKLIn7s";
links[1] = "MljOKSk50so";
links[2] = "FFooDtut9Rg";
links[3] = "BYgzUI5v2dc";
links[4] = "FPKyl8hWSfc";

function title() {
  var i = Math.floor(Math.random() * links.length);
  var timer = setTimeout(function() {window.location='https://www.youtube.com/embed/' + links[i] + '?rel=0&amp;autoplay=1&mute=1'}, 3000);
  return false;
}

function randomVideo() {
    var v1 = Math.floor(Math.random() * links.length);
	var v2 = Math.floor(Math.random() * links.length);
	var v3 = Math.floor(Math.random() * links.length);
	var v4 = Math.floor(Math.random() * links.length);
	var v5 = Math.floor(Math.random() * links.length);
    document.getElementById("video1").src = 'https://www.youtube.com/embed/' + links[1] + '?rel=0&amp;autoplay=0&mute=1';
	document.getElementById("video2").src = 'https://www.youtube.com/embed/' + links[2] + '?rel=0&amp;autoplay=0&mute=1';
	document.getElementById("video3").src = 'https://www.youtube.com/embed/' + links[3] + '?rel=0&amp;autoplay=0&mute=1';
	document.getElementById("video4").src = 'https://www.youtube.com/embed/' + links[4] + '?rel=0&amp;autoplay=0&mute=1';
	document.getElementById("video5").src = 'https://www.youtube.com/embed/' + links[1] + '?rel=0&amp;autoplay=0&mute=1';
	document.getElementById("video6").src = 'https://www.youtube.com/embed/' + links[3] + '?rel=0&amp;autoplay=0&mute=1';
	
	document.getElementById("videot1").src = 'https://www.youtube.com/embed/' + links[3] + '?rel=0&amp;autoplay=0&mute=1';
	document.getElementById("videot2").src = 'https://www.youtube.com/embed/' + links[3] + '?rel=0&amp;autoplay=0&mute=1';
}