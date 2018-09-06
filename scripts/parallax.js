
// Retrieves Current Window Information
function getClientWidth() {
	return window.innerWidth || (document.documentElement || document.body).clientWidth;
};

function getClientHeight() {
	return window.innerHeight || (document.documentElement || document.body).clientHeight;
};

function getYOffset() {
	return window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
};


// Calculates Image Layers' Heights
function castResize() {
	var vh = getClientHeight();
	var vw = getClientWidth();

	var newHeight = vh + Math.max(0, vw - (vh*1.6));
	document.querySelector(".parallax-content").style.height = newHeight + "px";
	document.querySelector(".nonparallax-content").style.height = newHeight + "px";
};


// Calls 'castResize' when resizing
window.addEventListener("resize", castResize);
castResize();


// Calculates Parallax Transformations
function castParallax() {
	var topDistance = getYOffset();
	var layers = document.querySelectorAll(".layer");

	for (var i = 0; i < layers.length; i++) {
		var depth = layers[i].getAttribute("data-depth");
		var yPos = -(topDistance * depth);
		var translate3d = "translate3d(0, " + yPos + "px, 0)";

		layers[i].style.webkitTransform = translate3d;	//Chrome and Safari
		layers[i].style.MozTransform = translate3d;		//Firefox
		layers[i].style.msTransform = translate3d;		//IE
		layers[i].style.OTransform = translate3d;		//Opera
		layers[i].style.transform = translate3d;
	};
};


// Calls 'castParallax' when scrolling
window.addEventListener("scroll", castParallax);
castParallax();
