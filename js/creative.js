(function () {
	window.addEventListener('scroll', addStickyClass, false);

	var navbar = document.getElementById("mainNav");

	function addStickyClass() {
		if (window.pageYOffset >= "70") {
			navbar.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky");
		}
	}

	//For heigt alignment on stake and case page
	jQuery(window).on('resize', function(){
		 if( (window.innerWidth >= 768) ){
			let fullHeight = window.innerHeight;
			let diff = jQuery('div#banner-text').height();
			diff += 63;
			jQuery('header.masthead .setHeightcustom').height((fullHeight - diff));
		 }
		else{
			jQuery('header.masthead .setHeightcustom').height('auto');
		}
	}).resize();

})();
