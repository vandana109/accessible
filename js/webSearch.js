var submitted="";
$(document).ready(function () {
		var data = {
			"searchKey": [{			   
			    "name": "Store,Puzzle",
			    "url": "./Store.html",
				"word":"Store",
			    "about": "You can buy Calendars with my pictures printed on it and Puzzles from Geno's store."
				},{
			    "name": "Sitemap, site map",
			    "url": "./Sitemap.html",
				"word":"Sitemap",
			    "about": "All pages present in the website are listed here."
			    },
			    {
			    "name": "Wheel, wheel chair, chair, strength, weight, size, shape, accessories, modification, advantage, bag, company, brake, color",
			    "url": "./IdealWheelchair.html",
				"word":"Ideal Wheel chair",
			    "about": "After traveling in 40 countries on 6 continents, and engaging in extreme sports ranging from skydiving to scuba diving, from paragliding to trekking in the mountains, from cliff climbing to sailing, I have designed the ideal manual wheelchair system. I say system because it includes the chair and 'must have' modifications and accessories."
			    },
			     {
			    "name": "Groups, affliated, PACT, Austing, film, society, Actual, lives, eels, wheels",
			    "url": "./GroupsAffiliatedWith.html",
				"word":"Groups Affiliated With",
			    "about": "I am a member of many groups like PACT, Austin Film Society, Actual Lives, Eels on Wheels, ADAPT, RMAX tech."
			    },
			     {
			    "name": "about, about me, more, more about me, Cheyenne, Whipps Ledges, Ohio, c-5, Santa, ADAPT, dave, show, gene",
			    "url": "./MoreAboutMe.html",
				"word":"More About Me",
			    "about": "I am Gene Rodgers. I broke my neck at age 17 when I fell from a cliff and broke my neck at the C-5 level causing instant paralysis from the shoulders down. It was at Whipps Ledges in Ohio. I created a new show called 'The Gene And Dave' Show. Now, along with my co-host, Dave Dauber, create shows that are broadcast on Channel Austin"
			    },
				{
			    "name": "Blog, Travel, Stories, story, recreation, cuba, peru, nepal, cliff, climbing, wind, riders, bridge, swinging, swing, bungy, bungee, jump, jumping, Safari, south africa, africa",
			    "url": "./Blog.html",
				"word":"Blog",
			    "about": "Download my travel stories in pdf format. Each story is complete with pictures and diagrams. These stories were originally written for kids of various ages but I am told adults enjoy these stories as well. These stories were written to teach children about geography, science, other cultures, and me - someone with a severe disability that loves adventure."
			    },
				{
			    "name": "Quotes, Socrates, Groucho Marx, Jimmy Durante, Alex Levine, Spike Milligan, Henny Youngman, Bob Hope, Fields, favourite",
			    "url": "./Quotes.html",
				"word":"Quotes",
			    "about": "Quotes by the Famous and almost Famous"
			    },{
			    "name": "wisdom, words of wisdom, Mark Twain, Joseph Campbell, Helen Keller, Martin Luther King, Tolkien, Patrick Overton, favourite",
			    "url": "./WordsOfWisdom.html",
				"word":"Words Of Wisdom",
			    "about": "Some words of Wisdom"
			    },{
			    "name": "ContactUs,Contact, Contact Us",
			    "url": "./ContactUs.html",
				"word":"Contact Us",
			    "about": "Geno's place is open 24 hours all the year. Please contact me for any queries"
			    },{
			    "name": "Adventure sports, Sport, Sports,snow skiing, skiing, snow, sit-ski, bi-ski, sit ski, bi ski, sitski, biski,",
			    "url": "./SnowSkiing.html",
				"word":"Snow Skiing",
			    "about": "I was a skier before becoming paralyzed, so it was natural for me to continue skiing. When I first joined the adapting skiing program in NM, we used a 'sit-ski'. It was a little slow and I always wore a helmet because the ski was very difficult to balance and I fell over many times. When the 'bi-ski' was developed, it became a huge improvement in adaptive ski equipment. It was much faster than the sit-ski and much more maneuverable. "
			    },{
			    "name": "Adventure sports, Sport, Sports,sail, planing, sail planing, sailplaning, Briggs, Texas,",
			    "url": "./SailPlaning.html",
				"word":"SailPlaning",
			    "about": "My friend John and I went sailplaning with the Fault Line Flyers in Briggs, Texas. I'm sitting in the cockpit, Vince is behind me and Tom is holding up the end of the wing as we are being towed."
			    },{
				"name": "London, Eye, The Eye, Travel",
			    "url": "./London.html",
				"word":"London",
			    "about": "While in London, we caught a cab to 'The Eye'. It cost $280 for round trip taxi from Heathrow/London Airport to the 'Eye'. The cabs are ALL wheelchair accessible. I love it. We ate a Wild Boar burger then got in line for 'The Eye. The 'Eye' was fully wheelchair accessible."
				},{
				"name": "South Africa, Africa, Bungy, Bungee, Jump, bungy jump, bungee jump",
			    "url": "./SouthAfrica.html",
				"word":"South Africa",
			    "about": "Bungy jumping began in South Africa on Gourits River Bridge which is 65m high, and is the longest running bungy site in Africa."	
				},{
				"name": "Nepal, Annapurna, Annapurna Circuit, Sherpa, doko, trekking",
			    "url": "./Nepal.html",
				"word":"Nepal",
			    "about": "I went trekking in Nepal with the same Sherpa Tribe that worked for Edmund Hillary. Little did I know that our guide, Tsering Sherpa, would lead me on an expedition to Mt. Everest many years later."	
				}] 
		};
	
	
    var form = $("#webSearch");
    var searchField = $("#searchField");
	searchField.val(getParameterByName('searchField'));
        var searchText=searchField.val();
		/* console.log(searchText.length);
		$("#searchSubmit").click(function(e){
			if(searchText.length>0){
				
			}else{
				e.preventDefault();
				
			}
			
		}); */
		if(searchText.length>2){
			console.log("enter if");
			for(var i=0; i<data.searchKey.length;i++) {
				var data1=data.searchKey[i];
				var data1Arr=data1.name.split(",");
				var data1_len=data1.name.split(",").length;
				
				for(var j=0; j<data1_len; j++){
					if(searchText.toLowerCase() == data1Arr[j].trim().toLowerCase()) {
						$('.searchResult span').html(searchText);
						$("<li></li>").appendTo("#searchSec")
						.append("<a href='"+data1.url+"' class='searchAnchor'>"+data1.word+"</a>")
						.append("<p class='resultText'>"+data1.about+"</p>")
						
					}
				}
			}
			if($("#searchSec").children().length<1){
				$('.searchResult').html('No Results Found');				
			}			
		}else{
			$('.searchResult').html('Please enter the search keyword');		
		}
		
		/*else{
			
		}
		
    });*/



    function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		
        results = regex.exec(location.search);
		
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}




    
   

});

