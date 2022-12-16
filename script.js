//Creates a 16x16 Grid
function createPixels(size) { //Selects the div with the class container
	let container = document.querySelector(".container");
	//A loop that multiplies the parametre SIZE with itself
	for (currentPixel = 0; currentPixel < size * size; currentPixel++) {
	//Creates a new div with the class pixel
	let blocks = document.createElement("div");
	blocks.setAttribute("class", "block");
	blocks.addEventListener("pointerover", addRgb);
	//Appends pixel to container
	container.appendChild(blocks);
	}
}

// Colors the pixels
function addRgb(colors) {
	colors.target.style.background = rgb_picker();
	colors.target.removeEventListener("pointerover", addRgb);
}

function rgb_picker() {
	return document.getElementById("color").value;
}


createPixels(25);
