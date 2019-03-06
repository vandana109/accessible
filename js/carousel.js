$(function(){	
				$("#play").show();
				$("#pause").hide();
				$('#myCarousel').carousel({
					interval: 5000
				});			
				$("#myCarousel").carousel("pause");
				$("#play").click(function(e){
					e.preventDefault();
					$(this).hide();
					$(this).siblings().show();
					$("#myCarousel").carousel("cycle");
				});
				$("#pause").click(function(e){
					e.preventDefault();
					$(this).hide();
					$(this).siblings().show();
					$("#myCarousel").carousel("pause");
				});			
			
				$(".carousel-indicators li a").on("click",function(){
					console.log("1");
					$('#myCarousel').on('slid.bs.carousel', function (e) {				
						$(".item .carousel-caption").removeAttr("tabindex");
						$(".item.active .carousel-caption").attr("tabindex",-1).focus();
						console.log("2");
						$('#myCarousel').unbind('slid.bs.carousel');
						
					});					
				});	 
			
			});