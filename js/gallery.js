function changeImage(current) {
	var imagesNumber = 10;

	for (i=1; i<=imagesNumber; i++) {
		if (i == current) {
			document.getElementById("n" + current).style.display = "block";
		} else {
			document.getElementById("n" + i).style.display = "none";
		}
	}
}