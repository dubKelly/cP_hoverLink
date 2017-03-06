// Un-sticks :hover::after when linking to the same page
(function() {
  var link = document.getElementsByTagName("a");
  for (var i = 0; i < link.length; i++) {
    link[i].ontouchend = function() {
      var a = this;
      setTimeout(function() {
      	a.classList.add("clicked");
      }, 300);
    }
    link[i].ontouchstart = function() {
      this.classList.remove("clicked");
    }
  }
}());