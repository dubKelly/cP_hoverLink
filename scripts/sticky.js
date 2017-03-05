var link = document.getElementsByTagName("a");
for (var i = 0; i < link.length; i++) {
	link[i].ontouchend = function() {
		var child = this;
		var parent = this.parentNode
		parent.removeChild(this);
		setTimeout(function() {
			parent.appendChild(child);
		}, 0.1);
	}
}