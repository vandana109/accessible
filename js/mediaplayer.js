 $(document).ready(function(){
		    var $media_links = $("a[href$='flv'], a[href$='mp4'], a[href$='ogv']");
		    var $audio_links = $("a[href$='mp3']");
		    
		    // Create players for our audio links
		    $.each($audio_links, function(i) {
		        var $holder = $('<span />');
		        $(this).parent().replaceWith($holder);
				console.log($(this).parent().replaceWith($holder));
		        // Get the path/url tpo the audio file
		        var link = $(this).attr('href');
				console.log(link);
		        // Create an instance of the player 
		        $holder.player({
		            id:'audio'+i,
		            media:link,
		        	flashHeight: 50,
		        	url: '../custom/javascript/config/jwplayer-5/core/player.swf',
		            playerWidth: '270px',
		            swfCallback : jwPlayerReady
		        }, jwconfig);
		    });
		
		    // Create players for our media links
		    $.each($media_links, function(i) {
		        var $holder = $('<span />');
				$(this).parent().replaceWith($holder);
		        // Extract the url/path from the links href attribute
		        var link = $(this).attr('href');
		        // Grab the captions if they exist
				var $captions = $(this).siblings('.captions');
				// Work out if the video has captions
				var captionsFile = $($captions).length > 0 ? $($captions).attr('href') : '';
				// Instantiate the jwplayer
		        $holder.player({
		            id:'jw'+i,
		            media:link,
					captions:captionsFile,
		        	flashHeight: 300,
		        	url: '../custom/javascript/config/jwplayer-5/core/player.swf',
		        	swfCallback : jwPlayerReady
		        }, jwconfig);
		    });

	    });