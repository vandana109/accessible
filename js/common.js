$(document).ready(function() {	
	var checkbox_prop=JSON.parse(localStorage.getItem("checkbox_value"));
	$('#highContrastEnable').prop('checked', checkbox_prop);
	$("#skiptocontent a").on("click",function(){		
		$("#mainContent").attr("tabindex","-1").focus();
	}); 	
	$(".nextSection").on("click",function(){
		$(this).parents("section").next().attr("tabindex","-1").focus();		
	});
	$(".small-font").on("click",function(){
		$("body").css("font-size","12px");		
	});
	$(".normal-font").on("click",function(){
		$("body").css("font-size","16px");		
	});
	$(".big-font").on("click",function(){
		$("body").css("font-size","20px");		
	});
	$(".ytp-fullscreen-button").attr("aria-label","Full screen mode");
	 $("#highContrastEnable").on("change",function(){
		 if($("#highContrastEnable").is(':checked')){	
			$("*").addClass("high-contrast");
			$(".logo .img-responsive.high-contrast").attr("src","./images/logo-HC.png");
			localStorage.setItem("checkbox_value", true);				
		 }else{
			 $("*").removeClass("high-contrast");
			 $(".logo .img-responsive").attr("src","./images/logo.png");
			 localStorage.setItem("checkbox_value", false);
		 }	 
	 });
	 if($("#highContrastEnable").is(':checked')){			
		$("*").addClass("high-contrast");
		$(".logo .img-responsive.high-contrast").attr("src","./images/logo-HC.png");
	}else{			
		$("*").removeClass("high-contrast");
		 $(".logo .img-responsive").attr("src","./images/logo.png");
	}
	$("a:not(.nav a)").on("focus",function(){		
		$(".nav li").removeClass("open");
		$(".nav li a.menuitemLink").attr("aria-expanded",false);
	}); 
	 $(".nav li a").on("focus",function(){	
		$(this).parent().next().removeClass("open");
		$(this).parent().prev().removeClass("open");
		$(this).parent().next().find('.menuitemLink').attr("aria-expanded","false");
		$(this).parent().prev().find('.menuitemLink').attr("aria-expanded","false");
	}); 
	
	$("#accessible-panel-toggle-btn").click(function(){
		$("#forAccessible").toggleClass("collapse","collapsed");		
	});
	$(".navbar-default  li.active").css("background","url('./images/line1.jpg') bottom repeat-x");

	$("#navMenu,#accessible-panel-toggle-btn,#audioTranscriptBtn,#videoTranscriptBtn").addClass("collapsed");	
	$("#navMenu,#accessible-panel-toggle-btn,#audioTranscriptBtn,#videoTranscriptBtn").click(function(){
		if($(this).hasClass("collapsed")){
			$(this).attr("aria-expanded",true);				
		}else{
			$(this).attr("aria-expanded",false);						
		}		
	});
	
	$(".audioSection .volume-controls .mute").click(function(){
		alert("df");
		console.log("sdjk");
		if($(this).hasClass("muted")){
			alert("muted");
		}else{
			alert("unmuted");
		}
	});
	
	
});


	
	// On dropdown open
$(document).on('shown.bs.dropdown', function(event) {
    var dropdown = $(event.target);
    
    // Set aria-expanded to true`	
	dropdown.siblings().find('.menuitemLink').attr("aria-expanded","false");
    dropdown.find('.menuitemLink').attr('aria-expanded', true);
    console.log(dropdown.siblings());
	
    // Set focus on the first link in the dropdown
   /*  setTimeout(function() {
        dropdown.find('.dropdown-menu li:first-child a').focus();
    }, 10); */
});

// On dropdown close
$(document).on('hidden.bs.dropdown', function(event) {
    var dropdown = $(event.target);
    
    // Set aria-expanded to false        
    dropdown.find('.menuitemLink').attr('aria-expanded', false);
    
    // Set focus back to dropdown toggle/* 
    /* dropdown.find('.dropdown-toggle').focus();  */
});
	
	

