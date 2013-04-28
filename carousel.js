var image = document.getElementById('image');
var imgList = document.getElementsByTagName('img');
var imgArray = [];
var tracker;

for (i = 0; i < imgList.length; i+=1) {
	imgArray.push(imgList[i].src);
}

// image.style.opacity = 1;

// function fadeOut () {
// 	if (image.style.opacity >= 0) {
// 		return;
// 	}
// 	image.style.opacity -= 0.1;
// }

// var timer = setInterval(fadeOut, 10);
  
function next() {
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

nextButton.onclick = next;
previousButton.onclick = previous;