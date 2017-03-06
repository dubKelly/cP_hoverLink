var link = document.getElementsByTagName("a");
for (var i = 0; i < link.length; i++) {
	link[i].ontouchend = function() {
		this.classList.toggle("clicked");
		console.log(this);
	}
	link[i].ontouchstart = function() {
		this.classList.toggle("clicked");
		console.log(this);
	}
}