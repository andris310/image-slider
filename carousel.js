var image = document.getElementById('image');
var imgFirst = document.getElementsByTagName('img');
var imgArray = [];
for (i = 0; i < imgFirst.length; i+=1) {
	imgArray.push(imgFirst[i].src);
}

var tracker;
  
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
