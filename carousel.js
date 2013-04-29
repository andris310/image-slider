var image = document.getElementById('image');
var imgList = document.getElementsByTagName('img');
var imgArray = [];
var tracker;
var timer;

for (i = 0; i < imgList.length; i+=1) {
	imgArray.push(imgList[i].src);
}

function fadeIn () {
	if (image.style.opacity >= 1) {
		return;
	}
	image.style.opacity = parseFloat(image.style.opacity, 10) + 0.01;
}

// var timer = setInterval(fadeIn, 10);
  
function next() {
	image.style.opacity = 0;
	for( i = 0; i < imgArray.length; i += 1) {
		if(image.src === imgArray[i]) {
			if (image.src === imgArray[imgArray.length - 1]) {
				tracker = imgArray[0];
			} else {
			tracker = imgArray[i + 1];
			}
		}
	}
	return (image.src = tracker);
}

function previous() {
	for( i = 0; i < imgArray.length; i += 1) {
		if(image.src === imgArray[i]) {
			if (image.src === imgArray[0]) {
				tracker = imgArray[imgArray.length - 1];
			} else {
			tracker = imgArray[i - 1];
			}
		}
	}
	return (image.src = tracker);
}


var nextButton = document.getElementById('next');
var previousButton = document.getElementById('previous');

// nextButton.onclick = next;
nextButton.onclick = function() {
	clearInterval(timer);
	timer = setInterval(fadeIn, 10);
	next(); 
}

previousButton.onclick = previous;