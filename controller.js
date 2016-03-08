var el = document.getElementById('bodyarea');

//source: kirupa
//https://www.kirupa.com/html5/getting_mouse_click_position.htm
el.addEventListener('click', getClickPosition, false);

function getClickPosition(e) {
	var parentPosition = getPosition(e.currentTarget);
	var xPosition = e.clientX - parentPosition.x;
	var yPosition = e.clientY - parentPosition.y;
	console.log(xPosition, yPosition);
	var div = document.createElement("div");
	div.setAttribute('class', 'firefly');
	div.style.top = yPosition;
	div.style.left = xPosition;
	document.body.appendChild(div);	
}

function getPosition(elem) {
	var xPos = 0;
	var yPos = 0;

	while(elem) {
		xPos += (elem.offsetLeft - elem.scrollLeft + elem.clientLeft);
		yPos += (elem.offsetTop - elem.scrollTop + elem.clientTop);
		elem = elem.offsetParent;
	}
	
	return {x: xPos, y: yPos};
}
