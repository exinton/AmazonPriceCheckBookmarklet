(function () {
	'use strict';
	
	// Only run this on Amazon.com
	if(window.location.host.toLowerCase() !== 'www.amazon.com') {
		alert('Amazon Price Check can only be run on Amazon.com');
		return;
	} else {
        // The name of the Amazon product
		var title = document.getElementById('productTitle');
		
		// Replace all spaces with +'s
		var productName = title.textContent.split(' ').join('+');
		var searchUrl = 'https://www.google.com/search?tbm=shop&q=' + productName;
		
        // Navigate to the Google Product search page. Since this is an external script,
        // popup blockers will prevent it from being opened in a new window, so a full
        // page navigation must occur.
		window.location.href = searchUrl;
	}
})();