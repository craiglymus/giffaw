$(document).on("ready", function(){
	console.log(8);

	var key = 'BpdcWaM8WLlwEBDusirArafVsCLI5uF1';


	$('.gif-form').on('submit', function(e) {
		e.preventDefault();
		console.log("dog");

		var gifSearch = $('.gif-input').val();
	  	console.log(gifSearch);

	 //  	var myUrl = 'https://api.giphy.com/v1/gifs/search?q=' + gifSearch + '&api_key='+ key;
		// console.log(myUrl);
		$.ajax({
		method: 'GET',
      	url: 'http://api.giphy.com/v1/gifs/search?q=' + gifSearch + '&api_key='+ key,
        // function: onSuccess
        // 	for(let i=0; i < json.data.length; i++) {
        // 		$('.gif-gallery').append('<img src='+json.data[i].url'+'/>'')

       	success: function onSuccess(response) {
        console.log(response)
        
        console.log(response.data[0].url)
        for (let i = 0; i < response.data.length; i++) {
        	var element = response.data[i]
        	
            $('.gif-gallery').append(`<img src="${element.images.original.url}">`)
        }
    },

    	error: function onError(xhr, status, errorThrown) {
        alert("Sorry, there was a problem!");
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.dir(xhr);
    },

})

});

})

	
