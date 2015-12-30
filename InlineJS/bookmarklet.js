(function () {
	'use strict';
	
	// Only run this on Amazon.com
	if(window.location.host.toLowerCase() !== 'www.amazon.com') {
		alert('Amazon Price Check can only be run on Amazon.com');
		return;
	} else {
		var title = document.getElementById('productTitle');
		
		// Replace all spaces with +'s
		var productName = title.textContent.split(' ').join('+');
		var searchUrl = 'https://www.google.com/search?tbm=shop&q=' + productName;
		
        // Navigate to the Google Product search page
		window.open(searchUrl, '_blank');
	}
})();